// Shared UI primitives used across landing + app.

const VARIANTS = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-soft',
  secondary:
    'bg-white text-ink border border-black/10 hover:border-brand/40 hover:text-brand-dark',
  ghost: 'text-ink/80 hover:text-brand-dark',
  soft: 'bg-brand-soft text-brand-dark hover:bg-brand/20',
}

export function Button({
  as: As = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <As
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}

export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-3xl bg-white shadow-card ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function Chip({ active = false, color, className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? 'border-transparent bg-brand text-white'
          : 'border-black/10 bg-white text-muted hover:text-ink'
      } ${className}`}
      {...props}
    >
      {color && !active && (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
      {children}
    </button>
  )
}

export function Badge({ className = '', children }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  )
}

export function VerifiedBadge() {
  return (
    <Badge className="bg-sage-soft text-sage">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
      Verifiziert
    </Badge>
  )
}

export function SectionLabel({ children }) {
  return (
    <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">
      {children}
    </p>
  )
}

export function Avatar({ initials, className = '' }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-semibold text-brand-dark ${className}`}
    >
      {initials}
    </div>
  )
}
