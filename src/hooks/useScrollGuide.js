import { useEffect, useState } from 'react'

const defaultState = {
  activeIndex: 0,
  direction: 'down',
  localProgress: 0,
}

function useScrollGuide() {
  const [scrollGuide, setScrollGuide] = useState(defaultState)

  useEffect(() => {
    let lastY = window.scrollY
    let frameId = 0

    const measure = () => {
      const sections = [...document.querySelectorAll('[data-section]')]
      const viewportMarker = window.innerHeight * 0.45
      const currentY = window.scrollY
      let activeIndex = 0
      let localProgress = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top - viewportMarker)

        if (distance < closestDistance) {
          closestDistance = distance
          activeIndex = index
          localProgress = Math.min(
            1,
            Math.max(0, (viewportMarker - rect.top) / Math.max(rect.height, 1)),
          )
        }
      })

      setScrollGuide((previousState) => ({
        activeIndex,
        localProgress,
        direction:
          currentY > lastY
            ? 'down'
            : currentY < lastY
              ? 'up'
              : previousState.direction,
      }))

      lastY = currentY
      frameId = 0
    }

    const onScroll = () => {
      if (frameId !== 0) {
        return
      }

      frameId = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return scrollGuide
}

export default useScrollGuide
