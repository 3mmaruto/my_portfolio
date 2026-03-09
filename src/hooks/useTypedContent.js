import { useEffect, useMemo, useState } from 'react'
import { typingSequence } from '../content'

const SECTION_ORDER = ['hero', 'about', 'skills', 'projects', 'contact']
const CHAR_DELAY = 28
const ENTRY_PAUSE = 260

function buildInitialTypedContent() {
  return {
    hero: { summary: '', note: '' },
    about: { description: '', paragraphs: ['', ''] },
    skills: { description: '' },
    projects: { description: '' },
    contact: { description: '' },
  }
}

function setNestedValue(target, path, value) {
  const keys = path.split('.')
  const clone = structuredClone(target)
  let current = clone

  for (let index = 0; index < keys.length - 1; index += 1) {
    const key = Number.isNaN(Number(keys[index])) ? keys[index] : Number(keys[index])
    current = current[key]
  }

  const lastKey = keys[keys.length - 1]
  current[Number.isNaN(Number(lastKey)) ? lastKey : Number(lastKey)] = value
  return clone
}

function useTypedContent() {
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [isUserScrolling, setIsUserScrolling] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setIsUserScrolling(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (sequenceIndex >= typingSequence.length) {
      return undefined
    }

    const entry = typingSequence[sequenceIndex]
    const isComplete = characterCount >= entry.text.length
    const timeoutId = window.setTimeout(
      () => {
        if (isComplete) {
          setSequenceIndex((current) => current + 1)
          setCharacterCount(0)
          return
        }

        setCharacterCount((current) => current + 1)
      },
      isComplete ? ENTRY_PAUSE : CHAR_DELAY,
    )

    return () => window.clearTimeout(timeoutId)
  }, [characterCount, sequenceIndex])

  const typedContent = useMemo(() => {
    return typingSequence.reduce((accumulator, entry, entryIndex) => {
      if (entryIndex > sequenceIndex) {
        return accumulator
      }

      const nextValue =
        entryIndex < sequenceIndex ? entry.text : entry.text.slice(0, characterCount)

      return setNestedValue(accumulator, entry.key, nextValue)
    }, buildInitialTypedContent())
  }, [characterCount, sequenceIndex])

  const autoGuide = useMemo(() => {
    const safeIndex = Math.min(sequenceIndex, typingSequence.length - 1)
    const activeEntry = typingSequence[safeIndex] ?? typingSequence[typingSequence.length - 1]
    const activeSectionIndex = SECTION_ORDER.indexOf(activeEntry.sectionId)

    const sectionEntries = typingSequence.filter((entry) => entry.sectionId === activeEntry.sectionId)
    const currentSectionChars = sectionEntries.reduce((sum, entry) => {
      const entryGlobalIndex = typingSequence.findIndex((item) => item.key === entry.key)

      if (entryGlobalIndex < safeIndex) {
        return sum + entry.text.length
      }

      if (entryGlobalIndex === safeIndex) {
        return sum + characterCount
      }

      return sum
    }, 0)

    const totalSectionChars = Math.max(
      1,
      sectionEntries.reduce((sum, entry) => sum + entry.text.length, 0),
    )

    return {
      activeIndex: Math.max(activeSectionIndex, 0),
      localProgress: Math.min(currentSectionChars / totalSectionChars, 1),
      direction: 'down',
      isComplete: sequenceIndex >= typingSequence.length,
    }
  }, [characterCount, sequenceIndex])

  return {
    typedContent,
    autoGuide,
    isUserScrolling,
  }
}

export default useTypedContent
