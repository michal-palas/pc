import { useMemo, useState } from 'react'
import { Card, Chip, VerifiedBadge } from '../../components/ui.jsx'
import { IconPin } from '../../components/icons.jsx'
import { PLACES, PLACE_CATEGORIES } from '../../data/places.js'

const catById = Object.fromEntries(PLACE_CATEGORIES.map((c) => [c.id, c]))

export default function KarteScreen() {
  const [active, setActive] = useState('alle')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (active === 'alle' ? PLACES : PLACES.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div className="space-y-4">
      {/* Filter chips */}
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
        <Chip active={active === 'alle'} onClick={() => setActive('alle')}>
          Alle
        </Chip>
        {PLACE_CATEGORIES.map((c) => (
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

      {/* Stylized map */}
      <Card className="relative aspect-[16/11] overflow-hidden">
        <MapBackground />
        {filtered.map((p) => {
          const c = catById[p.category]
          const isSel = selected === p.id
          return (
            <button
              key={p.id}
              onClick={() => setSelected(isSel ? null : p.id)}
              className="absolute -translate-x-1/2 -translate-y-full transition-transform hover:scale-110"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-label={p.name}
            >
              <span
                className={`flex items-center justify-center rounded-full border-2 border-white text-white shadow-soft ${
                  isSel ? 'h-10 w-10' : 'h-8 w-8'
                }`}
                style={{ backgroundColor: c.color }}
              >
                <IconPin width={isSel ? 22 : 18} height={isSel ? 22 : 18} />
              </span>
            </button>
          )
        })}
        {/* "you are here" */}
        <span
          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand ring-4 ring-brand/25"
          style={{ left: '48%', top: '45%' }}
        />
      </Card>

      {/* Selected detail */}
      {selected && <PlaceDetail place={PLACES.find((p) => p.id === selected)} />}

      {/* List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg font-semibold text-ink">
            {filtered.length} Orte in der Nähe
          </h2>
          <span className="text-sm text-muted">sortiert nach Entfernung</span>
        </div>
        {filtered.map((p) => (
          <PlaceRow
            key={p.id}
            place={p}
            selected={selected === p.id}
            onSelect={() => setSelected(p.id)}
          />
        ))}
      </div>
    </div>
  )
}

function PlaceRow({ place, selected, onSelect }) {
  const c = catById[place.category]
  return (
    <button
      onClick={onSelect}
      className={`flex w-full items-start gap-3 rounded-2xl bg-white p-4 text-left shadow-card transition-shadow hover:shadow-soft ${
        selected ? 'ring-2 ring-brand/40' : ''
      }`}
    >
      <span
        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg"
        style={{ backgroundColor: `${c.color}22` }}
      >
        {c.emoji}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold text-ink">{place.name}</h3>
          {place.verified && <VerifiedBadge />}
        </div>
        <p className="mt-1 text-sm text-muted">{place.note}</p>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-medium text-brand-dark">📍 {place.distance}</span>
          <span>·</span>
          <span>★ {place.rating}</span>
        </div>
      </div>
    </button>
  )
}

function PlaceDetail({ place }) {
  const c = catById[place.category]
  return (
    <Card className="border-l-4 p-4" style={{ borderColor: c.color }}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: c.color }}>
          {c.emoji} {c.label}
        </span>
        <span className="text-sm font-medium text-brand-dark">
          📍 {place.distance} entfernt
        </span>
      </div>
      <h3 className="mt-1 font-serif text-lg font-semibold text-ink">
        {place.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{place.note}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {place.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand-dark"
          >
            #{t}
          </span>
        ))}
      </div>
    </Card>
  )
}

function MapBackground() {
  return (
    <div className="absolute inset-0 bg-[#EAF1E8]">
      {/* park block */}
      <div className="absolute left-[8%] top-[10%] h-[35%] w-[30%] rounded-2xl bg-sage/30" />
      {/* water */}
      <div className="absolute bottom-[6%] right-[6%] h-[34%] w-[38%] rounded-[40%] bg-brand/20" />
      {/* roads */}
      <div className="absolute left-0 top-[45%] h-3 w-full bg-white/70" />
      <div className="absolute left-[48%] top-0 h-full w-3 bg-white/70" />
      <div className="absolute left-0 top-[72%] h-2 w-full bg-white/50" />
      {/* building blocks */}
      <div className="absolute right-[10%] top-[8%] h-12 w-16 rounded bg-white/50" />
      <div className="absolute left-[55%] top-[55%] h-14 w-14 rounded bg-white/50" />
    </div>
  )
}
