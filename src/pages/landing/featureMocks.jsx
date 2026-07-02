// Illustrated mini-scenes for the three feature cards, echoing sketch 1.

/* ---------- shared tiny figures ---------- */

function WalkingParentChild({ className = '' }) {
  return (
    <svg viewBox="0 0 90 80" className={className} aria-hidden="true">
      {/* parent in yellow, with bag */}
      <g>
        <path d="M28 78c0-16 6-26 14-26s14 10 14 26z" fill="#E6B54E" />
        <path d="M30 52c0-10 5-16 12-16s12 6 12 16z" fill="#E6B54E" />
        <path d="M54 40l10 10" stroke="#C98B3A" strokeWidth="6" strokeLinecap="round" />
        <rect x="60" y="46" width="12" height="16" rx="3" fill="#C98B3A" />
        <circle cx="42" cy="26" r="10" fill="#F1CBA6" />
        <path d="M32 24c0-9 4-14 10-14s10 5 10 14c-3-5-6-7-10-7s-7 2-10 7z" fill="#3B2A24" />
        <path d="M32 24q-3 12 0 20" stroke="#3B2A24" strokeWidth="4" fill="none" strokeLinecap="round" />
      </g>
      {/* child */}
      <g>
        <path d="M6 78c0-11 4-17 9-17s9 6 9 17z" fill="#7FB0B8" />
        <circle cx="15" cy="52" r="8" fill="#F5D3B3" />
        <path d="M8 50c0-7 3-11 7-11s7 4 7 11c-2-4-4-5-7-5s-5 1-7 5z" fill="#7A5638" />
      </g>
      {/* holding hands */}
      <path d="M26 58c-4 2-8 3-11 3" stroke="#E6B54E" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function SittingParentBaby({ className = '' }) {
  return (
    <svg viewBox="0 0 96 80" className={className} aria-hidden="true">
      {/* crossed legs */}
      <path d="M8 78c2-12 14-18 30-18s28 6 30 18z" fill="#9DB4CE" />
      {/* torso yellow */}
      <path d="M20 60c0-15 8-24 18-24s18 9 18 24z" fill="#E6B54E" />
      {/* head */}
      <circle cx="38" cy="26" r="11" fill="#F1CBA6" />
      <path d="M27 24c0-10 5-15 11-15s11 5 11 15c-3-5-7-7-11-7s-8 2-11 7z" fill="#3B2A24" />
      <path d="M27 24q-3 14 0 22" stroke="#3B2A24" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* baby on lap */}
      <g transform="translate(50 44)">
        <ellipse cx="0" cy="12" rx="11" ry="9" fill="#EFEADD" />
        <circle cx="0" cy="0" r="9" fill="#F5D3B3" />
        <path d="M-5 -6c2-4 8-4 10 0-3-2-7-2-10 0z" fill="#7A5638" />
      </g>
    </svg>
  )
}

function AvatarDot({ initials, color }) {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  )
}

/* ---------- Card 1: map / live tips ---------- */

export function MapMock() {
  const pins = [
    ['22%', '46%', '#5A8FB5'],
    ['54%', '34%', '#C08552'],
    ['40%', '66%', '#8CAE98'],
    ['70%', '52%', '#4FA5B8'],
  ]
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#E9F1E6] shadow-inner">
      {/* map roads / blocks */}
      <div className="absolute left-0 top-[52%] h-2.5 w-full bg-white/80" />
      <div className="absolute left-[46%] top-0 h-full w-2.5 bg-white/80" />
      <div className="absolute left-[10%] top-[10%] h-[28%] w-[28%] rounded-lg bg-sage/30" />
      <div className="absolute bottom-[8%] right-[8%] h-[30%] w-[34%] rounded-[40%] bg-brand/20" />

      {pins.map(([left, top, color], i) => (
        <span
          key={i}
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-full rounded-full border-2 border-white shadow"
          style={{ left, top, backgroundColor: color }}
        />
      ))}

      {/* greeting + search */}
      <div className="absolute inset-x-3 top-3 space-y-1.5">
        <p className="text-[11px] font-semibold text-ink">Guten Morgen, Mia 👋</p>
        <div className="rounded-full bg-white px-3 py-1.5 text-[10px] text-muted shadow">
          🔍 Orte suchen, z. B. Spielplatz…
        </div>
      </div>

      {/* walking figure */}
      <WalkingParentChild className="absolute bottom-1 right-3 h-16 w-auto" />
    </div>
  )
}

/* ---------- Card 2: events ---------- */

export function EventsMock() {
  const rows = [
    ['🍼', 'Baby-Schwimmen', 'Fr. 09:15'],
    ['🧺', 'Kinder-Flohmarkt', 'Sa. 09:00'],
    ['🌳', 'Treffen im Park', 'So. 15:00'],
  ]
  const flags = ['#E6B54E', '#8CAE98', '#5A8FB5', '#C08552', '#B07BAC']
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#DEEBF4] p-3 shadow-inner">
      {/* bunting */}
      <svg viewBox="0 0 200 20" className="absolute inset-x-0 top-0 h-4 w-full" preserveAspectRatio="none">
        <path d="M4 4 Q100 16 196 4" stroke="#B9CAD6" strokeWidth="1.5" fill="none" />
        {flags.map((c, i) => (
          <path
            key={i}
            d={`M${18 + i * 40} 5 l12 0 l-6 11 z`}
            fill={c}
          />
        ))}
      </svg>

      <p className="mt-4 text-[11px] font-bold text-ink">Lokale Events für Eltern</p>

      <div className="mt-2 space-y-1.5">
        {rows.map(([emoji, title, time]) => (
          <div
            key={title}
            className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5 shadow-sm"
          >
            <span className="text-sm">{emoji}</span>
            <span className="flex-1 truncate text-[10px] font-semibold text-ink">
              {title}
            </span>
            <span className="text-[9px] font-medium text-brand-dark">{time}</span>
          </div>
        ))}
      </div>

      <SittingParentBaby className="absolute bottom-0 left-2 h-14 w-auto" />
      {/* plant */}
      <div className="absolute bottom-2 right-2">
        <div className="mx-auto h-6 w-5 rounded-t-full bg-sage/70" />
        <div className="mx-auto h-3 w-4 rounded-b bg-[#C08552]" />
      </div>
    </div>
  )
}

/* ---------- Card 3: community / village ---------- */

export function CommunityMock() {
  const bubbles = [
    { initials: 'MK', color: '#5A8FB5', text: 'Suche eine liebe Kinderärztin…', hearts: 4, align: 'self-start' },
    { initials: 'DP', color: '#8CAE98', text: 'Wir freuen uns über neue Patient:innen! 💙', hearts: 7, align: 'self-end' },
    { initials: 'JF', color: '#C08552', text: 'Babytrage zum Ausleihen?', hearts: 3, align: 'self-start' },
  ]
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#FBF3E7] p-3 shadow-inner">
      {/* village skyline */}
      <svg viewBox="0 0 120 30" className="absolute right-2 top-2 h-6 w-24" aria-hidden="true">
        {[0, 26, 52, 78].map((x, i) => (
          <g key={i} fill="#E4D6BE">
            <rect x={x + 6} y="14" width="18" height="14" rx="1" />
            <path d={`M${x + 4} 15 l11 -9 l11 9 z`} fill="#D8B48A" />
          </g>
        ))}
      </svg>

      <p className="font-serif text-[13px] font-semibold italic text-[#3F6E90]">
        Gemeinsam im Viertel
      </p>
      <p className="text-[8px] font-bold uppercase tracking-wider text-sage">
        💛 Eltern helfen Eltern
      </p>

      <div className="mt-2 flex flex-col gap-1.5">
        {bubbles.map((b) => (
          <div key={b.text} className={`flex max-w-[88%] items-end gap-1.5 ${b.align}`}>
            <AvatarDot initials={b.initials} color={b.color} />
            <span className="rounded-2xl bg-white px-2.5 py-1.5 text-[10px] leading-snug text-ink shadow-sm">
              {b.text}
              <span className="ml-1 text-[8px] text-red-400">♥ {b.hearts}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
