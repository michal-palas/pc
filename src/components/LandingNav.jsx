import { Link } from 'react-router-dom'
import { Button } from './ui.jsx'
import { IconLogo } from './icons.jsx'

const LINKS = [
  { label: 'Funktionen', href: '#funktionen' },
  { label: "So funktioniert's", href: '#so-gehts' },
  { label: 'Interesse melden', href: '#interesse' },
]

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <IconLogo />
          <span className="font-serif text-xl font-semibold text-ink">
            ParentConnect
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-brand-dark"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-semibold text-ink/80 transition-colors hover:text-brand-dark sm:block"
          >
            Anmelden
          </a>
          <Button as={Link} to="/app/karte">
            Jetzt loslegen
          </Button>
        </div>
      </nav>
    </header>
  )
}
