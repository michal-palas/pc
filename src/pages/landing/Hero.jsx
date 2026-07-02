import { Link } from 'react-router-dom'
import { Button } from '../../components/ui.jsx'
import { IconArrow, IconCheck } from '../../components/icons.jsx'
import FamilyPicnic from '../../components/illustrations/FamilyPicnic.jsx'

const TRUST = ['Kostenlos nutzbar', 'Datenschutzsicher', 'Von Eltern gemacht']

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-soft px-3.5 py-1.5 text-sm font-medium text-sage">
            <span className="h-2 w-2 rounded-full bg-sage" />
            Bald in deiner Stadt verfügbar
          </span>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-ink md:text-6xl">
            Eltern aus der Nachbarschaft verbinden
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            ParentConnect ist die hyper-lokale Community für Schwangere und
            Eltern mit Kindern bis 6 Jahren. Entdecke tagesaktuelle Tipps,
            verifizierte Events und echte Nachbarschaftshilfe – alles in einer
            App.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={Link} to="/app/karte">
              Kostenlos registrieren
              <IconArrow width={18} height={18} />
            </Button>
            <Button as="a" href="#funktionen" variant="secondary">
              Mehr erfahren
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-muted">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage-soft text-sage">
                  <IconCheck width={13} height={13} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Illustrated hero scene */}
        <div className="relative overflow-hidden rounded-3xl shadow-soft">
          <FamilyPicnic className="h-full w-full" />
          <div className="absolute left-4 top-4 rounded-2xl bg-white/85 px-3 py-2 text-xs font-medium text-brand-dark shadow-card backdrop-blur">
            🧺 Picknick im Rosengarten
          </div>
        </div>
      </div>
    </section>
  )
}
