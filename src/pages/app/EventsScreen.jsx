import { useMemo, useState } from 'react'
import { Card, Chip, Button, VerifiedBadge } from '../../components/ui.jsx'
import { IconCheck, IconCalendar } from '../../components/icons.jsx'
import { EVENTS, EVENT_CATEGORIES } from '../../data/events.js'

const catById = Object.fromEntries(EVENT_CATEGORIES.map((c) => [c.id, c]))

export default function EventsScreen() {
  const [active, setActive] = useState('alle')
  const [joined, setJoined] = useState({}) // id -> bool

  const filtered = useMemo(
    () => (active === 'alle' ? EVENTS : EVENTS.filter((e) => e.category === active)),
    [active],
  )

  const toggle = (id) => setJoined((j) => ({ ...j, [id]: !j[id] }))

  return (
    <div className="space-y-4">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        <Chip active={active === 'alle'} onClick={() => setActive('alle')}>
          Alle
        </Chip>
        {EVENT_CATEGORIES.map((c) => (
          <Chip
            key={c.id}
            color={c.color}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </Chip>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.map((e) => {
          const c = catById[e.category]
          const isJoined = !!joined[e.id]
          const full = e.attendees >= e.capacity && !isJoined
          return (
            <Card key={e.id} className="overflow-hidden">
              <div className="flex">
                {/* date rail */}
                <div
                  className="flex w-20 shrink-0 flex-col items-center justify-center gap-0.5 text-white"
                  style={{ backgroundColor: c.color }}
                >
                  <IconCalendar width={20} height={20} />
                  <span className="mt-1 px-1 text-center text-xs font-semibold leading-tight">
                    {e.date}
                  </span>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: `${c.color}22`, color: c.color }}
                    >
                      {c.label}
                    </span>
                    {e.verified && <VerifiedBadge />}
                  </div>

                  <h3 className="mt-2 font-serif text-lg font-semibold text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{e.description}</p>

                  <dl className="mt-3 grid grid-cols-2 gap-y-1 text-sm text-muted">
                    <dd>🕘 {e.time}</dd>
                    <dd>📍 {e.location}</dd>
                    <dd>👶 {e.ageRange}</dd>
                    <dd>🧑 {e.host}</dd>
                  </dl>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted">
                      <span className="font-semibold text-ink">
                        {e.attendees + (isJoined ? 1 : 0)}
                      </span>
                      /{e.capacity} dabei
                    </span>
                    <Button
                      variant={isJoined ? 'soft' : 'primary'}
                      onClick={() => toggle(e.id)}
                      disabled={full}
                    >
                      {isJoined ? (
                        <>
                          <IconCheck width={16} height={16} /> Zugesagt
                        </>
                      ) : full ? (
                        'Ausgebucht'
                      ) : (
                        'Teilnehmen'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
