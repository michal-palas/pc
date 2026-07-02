import { Link } from 'react-router-dom'
import { IconLogo } from './icons.jsx'

const COLUMNS = [
  {
    title: 'Produkt',
    links: ['Funktionen', 'Live-Tipps', 'Event-Kalender', 'Community'],
  },
  {
    title: 'Community',
    links: ['Über uns', 'Von Eltern gemacht', 'Presse', 'Kontakt'],
  },
  {
    title: 'Rechtliches',
    links: ['Datenschutz', 'Impressum', 'AGB', 'Cookie-Einstellungen'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-sand" id="interesse">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <IconLogo />
              <span className="font-serif text-xl font-semibold text-ink">
                ParentConnect
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Die hyper-lokale Community für Schwangere und Eltern mit Kindern
              bis 6 Jahren. Von Eltern, für Eltern.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-serif text-base font-semibold text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-brand-dark"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 text-sm text-muted sm:flex-row">
          <p>© 2026 ParentConnect. Ein Prototyp.</p>
          <p>Mit 💙 in der Nachbarschaft gebaut.</p>
        </div>
      </div>
    </footer>
  )
}
