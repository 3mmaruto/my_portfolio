import { createElement } from 'react'

function TypedText({ text, className = '', as = 'p', cursor = false }) {
  const showCursor = cursor && text.length > 0

  return createElement(
    as,
    { className },
    text,
    showCursor ? createElement('span', { className: 'typing-cursor', 'aria-hidden': 'true' }) : null,
  )
}

export default TypedText
