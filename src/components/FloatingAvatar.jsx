import { useEffect, useState } from 'react'

function FloatingAvatar({ activeIndex, localProgress, direction }) {
  const [isBoosting, setIsBoosting] = useState(false)

  useEffect(() => {
    if (!isBoosting) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setIsBoosting(false)
    }, 900)

    return () => window.clearTimeout(timeoutId)
  }, [isBoosting])

  const xOffsets = [0, -42, 54, -34, 46]
  const yOffset = activeIndex * 112 + localProgress * 54
  const tilt = direction === 'down' ? 6 : direction === 'up' ? -6 : 0

  return (
    <button
      type="button"
      className={`avatar-shell${isBoosting ? ' is-boosting' : ''}`}
      style={{
        transform: `translate3d(${xOffsets[activeIndex] ?? 0}px, ${yOffset}px, 0) rotate(${tilt}deg)`,
      }}
      onClick={() => setIsBoosting(true)}
      aria-label="Animated portfolio guide"
    >
      <span className="avatar-aura" />
      <svg className="avatar-svg" viewBox="0 0 220 320" aria-hidden="true">
        <defs>
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f6f7f9" />
            <stop offset="50%" stopColor="#b7bec7" />
            <stop offset="100%" stopColor="#7f8791" />
          </linearGradient>
          <linearGradient id="flameGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff7d6" />
            <stop offset="55%" stopColor="#d8ecff" />
            <stop offset="100%" stopColor="#9ab6d9" />
          </linearGradient>
        </defs>

        <ellipse cx="110" cy="292" rx="48" ry="12" fill="rgba(15, 23, 42, 0.12)" />
        <g className="avatar-jetpack">
          <rect x="48" y="110" width="28" height="62" rx="14" fill="url(#metalGradient)" />
          <rect x="144" y="110" width="28" height="62" rx="14" fill="url(#metalGradient)" />
          <path className="jet-flame left" d="M62 171 C52 194, 58 220, 68 236 C79 219, 79 193, 62 171Z" fill="url(#flameGradient)" />
          <path className="jet-flame right" d="M158 171 C148 194, 154 220, 164 236 C175 219, 175 193, 158 171Z" fill="url(#flameGradient)" />
        </g>

        <g className="avatar-body">
          <circle cx="110" cy="68" r="30" fill="#f2d2c2" />
          <path d="M82 65 C86 35, 134 32, 138 67 C131 58, 121 52, 109 52 C98 52, 89 57, 82 65Z" fill="#151515" />
          <circle cx="99" cy="70" r="3.6" fill="#1a1a1a" />
          <circle cx="121" cy="70" r="3.6" fill="#1a1a1a" />
          <path d="M101 84 C106 88, 114 88, 119 84" fill="none" stroke="#8f5f54" strokeWidth="3" strokeLinecap="round" />
          <path d="M78 110 L142 110 L156 198 Q110 218 64 198 Z" fill="#111111" />
          <path d="M88 111 Q110 132 132 111" fill="none" stroke="#363636" strokeWidth="4" strokeLinecap="round" />
          <circle cx="110" cy="150" r="18" fill="#ffffff" opacity="0.92" />
          <path d="M101 139 L118 139 L126 150 L118 161 L101 161 L93 150 Z" fill="none" stroke="#10a37f" strokeWidth="6" strokeLinejoin="round" />
          <path d="M97 145 L110 138 L123 145" fill="none" stroke="#10a37f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M97 155 L110 162 L123 155" fill="none" stroke="#10a37f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M64 124 C40 142, 41 179, 58 201" fill="none" stroke="#111111" strokeWidth="20" strokeLinecap="round" />
          <path d="M156 124 C180 142, 179 179, 162 201" fill="none" stroke="#111111" strokeWidth="20" strokeLinecap="round" />
          <path d="M84 198 L78 255" fill="none" stroke="#4c5562" strokeWidth="20" strokeLinecap="round" />
          <path d="M136 198 L142 255" fill="none" stroke="#4c5562" strokeWidth="20" strokeLinecap="round" />
          <path d="M66 254 L98 254" fill="none" stroke="url(#metalGradient)" strokeWidth="15" strokeLinecap="round" />
          <path d="M122 254 L154 254" fill="none" stroke="url(#metalGradient)" strokeWidth="15" strokeLinecap="round" />
        </g>
      </svg>
    </button>
  )
}

export default FloatingAvatar
