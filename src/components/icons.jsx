// Lightweight inline stroke icons (24x24, currentColor).

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconUsers(p) {
  return (
    <svg {...base} {...p}>
      <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function IconPin(p) {
  return (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function IconShield(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function IconCalendar(p) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function IconChat(p) {
  return (
    <svg {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  )
}

export function IconMap(p) {
  return (
    <svg {...base} {...p}>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  )
}

export function IconHeart(p) {
  return (
    <svg {...base} {...p}>
      <path d="M19 6.5c-1.7-1.9-4.6-1.9-6.3 0L12 7.3l-.7-.8c-1.7-1.9-4.6-1.9-6.3 0-1.8 1.9-1.8 5 0 6.9L12 21l7-6.6c1.8-1.9 1.8-5 0-6.9Z" />
    </svg>
  )
}

export function IconPlus(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconUser(p) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </svg>
  )
}

export function IconArrow(p) {
  return (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck(p) {
  return (
    <svg {...base} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconBook(p) {
  return (
    <svg {...base} {...p}>
      <path d="M4 4v15a2 2 0 0 1 2-2h14V2H6a2 2 0 0 0-2 2Z" />
      <path d="M20 17H6a2 2 0 0 0-2 2" />
    </svg>
  )
}

export function IconStethoscope(p) {
  return (
    <svg {...base} {...p}>
      <path d="M6 3v5a5 5 0 0 0 10 0V3" />
      <path d="M6 3H4M16 3h2" />
      <path d="M11 13a7 7 0 0 0 7 7 3 3 0 0 0 3-3v-2" />
      <circle cx="21" cy="12" r="2" />
    </svg>
  )
}

export function IconGradCap(p) {
  return (
    <svg {...base} {...p}>
      <path d="M22 9 12 5 2 9l10 4 10-4Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  )
}

export function IconHeartHands(p) {
  return (
    <svg {...base} {...p}>
      <path d="M12 9.5c1.2-1.6 3.6-1.6 4.8 0 1.1 1.5.6 3.3-.8 4.5L12 18l-4-4c-1.4-1.2-1.9-3-.8-4.5 1.2-1.6 3.6-1.6 4.8 0Z" />
      <path d="M3 13v6a1 1 0 0 0 1 1h2M21 13v6a1 1 0 0 1-1 1h-2" />
    </svg>
  )
}

export function IconLogo(p) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" {...p}>
      <circle cx="16" cy="16" r="15" fill="#E4EEF5" />
      <circle cx="12" cy="14" r="3.2" fill="#5A8FB5" />
      <circle cx="20" cy="14" r="3.2" fill="#8CAE98" />
      <path
        d="M8 24c0-3 1.8-5 4-5s4 2 4 5M16 24c0-3 1.8-5 4-5s4 2 4 5"
        stroke="#3F6E90"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}
