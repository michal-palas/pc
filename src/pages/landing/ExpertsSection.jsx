import { Link } from 'react-router-dom'
import { Button, Card } from '../../components/ui.jsx'
import { EXPERTS } from '../../data/experts.js'
import {
  IconArrow,
  IconStethoscope,
  IconBook,
  IconGradCap,
  IconHeartHands,
} from '../../components/icons.jsx'
import ExpertCall from '../../components/illustrations/ExpertCall.jsx'

const ICONS = {
  hebammen: IconStethoscope,
  paedagogik: IconBook,
  lehrkraefte: IconGradCap,
  familienberatung: IconHeartHands,
}

export default function ExpertsSection() {
  return (
    <section id="so-gehts" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Illustration */}
        <Card className="overflow-hidden bg-gradient-to-br from-brand-soft/50 to-cream p-6">
          <ExpertCall className="h-full w-full" />
        </Card>

        {/* Copy + cards */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
            Ask the Experts
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink">
            Antworten von echten Fachleuten – wenn du sie brauchst
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            Stell deine Fragen direkt an verifizierte Hebammen, Pädagog:innen,
            Lehrer:innen und Kinderärzt:innen. Ob nachts beim Stillen, vor dem
            Kita-Start oder bei Schulfragen – fundierte Antworten statt
            Foren-Bauchgefühl.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EXPERTS.map((e) => {
              const Icon = ICONS[e.id]
              return (
                <Card key={e.id} className="flex gap-3 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                    <Icon width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-ink">
                      {e.label}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted">{e.blurb}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/app/experten">
              Frage stellen
              <IconArrow width={18} height={18} />
            </Button>
            <p className="text-sm text-muted">
              Alle Expert:innen sind verifiziert und qualifiziert.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
