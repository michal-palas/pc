import { Link } from 'react-router-dom'
import { Card, SectionLabel } from '../../components/ui.jsx'
import { IconPin, IconCalendar, IconChat, IconArrow } from '../../components/icons.jsx'
import { MapMock, EventsMock, CommunityMock } from './featureMocks.jsx'

const FEATURES = [
  {
    to: '/app/karte',
    Icon: IconPin,
    title: 'Live-Tipps & Notfall-Finder',
    text: 'Finde schnell den nächsten schattigen Spielplatz, ein Freibad mit Babybereich oder saubere Stillräume – gefiltert nach deinem aktuellen Bedarf.',
    Mock: MapMock,
    accent: 'from-[#E9F1E6] to-cream',
  },
  {
    to: '/app/events',
    Icon: IconCalendar,
    title: 'Event-Kalender',
    text: 'Krabbelgruppen, Babyschwimmen, Flohmärkte oder spontane Treffen im Park: entdecke von der Community gepflegte und verifizierte Events.',
    Mock: EventsMock,
    accent: 'from-[#DEEBF4] to-cream',
  },
  {
    to: '/app/community',
    Icon: IconChat,
    title: 'Community & Q&A',
    text: 'Stelle Fragen, teile Empfehlungen und leihe Dinge aus – ob Kinderarzt-Tipps oder eine Tragehilfe zum Ausleihen, deine Nachbarschaft hilft dir.',
    Mock: CommunityMock,
    accent: 'from-[#FBF3E7] to-cream',
  },
]

export default function Features() {
  return (
    <section id="funktionen" className="mx-auto max-w-6xl px-5 py-16">
      <SectionLabel>Funktionen</SectionLabel>
      <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-4xl font-semibold text-ink">
        Drei Säulen für deinen Alltag als Elternteil
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted">
        Alles, was du für den Alltag mit Babys und Kleinkindern brauchst –
        direkt aus deiner Nachbarschaft.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <Card
            key={f.to}
            className="group flex flex-col overflow-hidden transition-shadow hover:shadow-soft"
          >
            <div
              className={`aspect-[4/3] w-full bg-gradient-to-br ${f.accent} p-4`}
            >
              <f.Mock />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
                <f.Icon width={22} height={22} />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {f.text}
              </p>
              <Link
                to={f.to}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark transition-colors group-hover:gap-2.5"
              >
                Ausprobieren
                <IconArrow width={16} height={16} />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
