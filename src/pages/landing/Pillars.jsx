import { Card } from '../../components/ui.jsx'
import { IconUsers, IconPin, IconShield } from '../../components/icons.jsx'

const PILLARS = [
  {
    Icon: IconUsers,
    title: 'Von Eltern',
    sub: 'für Eltern entwickelt',
  },
  {
    Icon: IconPin,
    title: 'Hyper-lokal',
    sub: 'Tipps aus deiner direkten Umgebung',
  },
  {
    Icon: IconShield,
    title: 'Verifiziert',
    sub: 'Geprüfte Events und Orte',
  },
]

export default function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <Card className="grid gap-8 px-6 py-10 sm:grid-cols-3 sm:px-10">
        {PILLARS.map(({ Icon, title, sub }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-dark">
              <Icon width={26} height={26} />
            </span>
            <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
              {title}
            </h3>
            <p className="mt-1 text-sm text-muted">{sub}</p>
          </div>
        ))}
      </Card>
    </section>
  )
}
