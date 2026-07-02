// Flat illustration matching sketch 2: a parent holding a baby in front of a
// video-call monitor showing a midwife (blue scrubs) and an educator (reading).

export default function ExpertCall({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Video-Beratung: Elternteil mit Baby vor einem Bildschirm mit Hebamme und Pädagogin"
    >
      {/* --- Monitor stand / handle --- */}
      <rect x="182" y="70" width="40" height="22" rx="7" fill="#3E5476" />
      <rect x="176" y="86" width="52" height="10" rx="4" fill="#33455F" />

      {/* --- Monitor frame --- */}
      <rect x="64" y="92" width="248" height="184" rx="16" fill="#3E5476" />

      {/* --- Screen --- */}
      <clipPath id="screen">
        <rect x="78" y="106" width="220" height="132" rx="6" />
      </clipPath>
      <g clipPath="url(#screen)">
        {/* left half backdrop */}
        <rect x="78" y="106" width="110" height="132" fill="#E7EEF3" />
        {/* right half backdrop */}
        <rect x="188" y="106" width="110" height="132" fill="#D9E8D6" />

        {/* ---- Midwife (left) ---- */}
        <g>
          {/* body / scrubs */}
          <path d="M96 238v-26c0-20 16-34 37-34s37 14 37 34v26z" fill="#5E86B5" />
          {/* neck */}
          <rect x="126" y="168" width="14" height="16" fill="#EFC6A2" />
          {/* hair back */}
          <path d="M104 168c0-24 12-40 29-40s29 16 29 40c0 8-4 14-4 14l-6-18-38 0-6 18s-4-6-4-14z" fill="#4A342A" />
          {/* face */}
          <ellipse cx="133" cy="156" rx="20" ry="22" fill="#F1CBA6" />
          {/* hair front */}
          <path d="M110 150c0-20 10-32 23-32s23 12 23 32c-6-10-14-13-23-13s-17 3-23 13z" fill="#4A342A" />
          {/* eyes + smile + blush */}
          <circle cx="126" cy="156" r="1.8" fill="#3A2A22" />
          <circle cx="140" cy="156" r="1.8" fill="#3A2A22" />
          <path d="M128 164c3 3 7 3 10 0" stroke="#8A5A48" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="121" cy="162" r="3" fill="#EBA79E" opacity="0.7" />
          <circle cx="145" cy="162" r="3" fill="#EBA79E" opacity="0.7" />
          {/* stethoscope */}
          <path d="M120 186c-4 12-4 24 0 34M146 186c4 10 4 20 2 28" stroke="#8B97A0" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <circle cx="147" cy="220" r="5" fill="#B8C2C9" stroke="#8B97A0" strokeWidth="1.5" />
        </g>

        {/* ---- Educator (right) ---- */}
        <g>
          {/* body / mustard top */}
          <path d="M206 238v-24c0-19 15-32 35-32s35 13 35 32v24z" fill="#E0A24E" />
          {/* neck */}
          <rect x="234" y="166" width="13" height="16" fill="#EFC6A2" />
          {/* hair back (bun-ish) */}
          <path d="M214 166c0-23 12-38 27-38s27 15 27 38c0 7-3 12-3 12l-6-16-36 0-6 16s-3-5-3-12z" fill="#6B4A32" />
          {/* face */}
          <ellipse cx="241" cy="154" rx="19" ry="21" fill="#F1CBA6" />
          {/* hair front */}
          <path d="M220 148c0-19 9-30 21-30s21 11 21 30c-6-9-13-12-21-12s-15 3-21 12z" fill="#6B4A32" />
          {/* eyes + smile + blush */}
          <circle cx="234" cy="154" r="1.7" fill="#3A2A22" />
          <circle cx="248" cy="154" r="1.7" fill="#3A2A22" />
          <path d="M236 162c3 3 6 3 9 0" stroke="#8A5A48" strokeWidth="1.7" fill="none" strokeLinecap="round" />
          <circle cx="229" cy="160" r="2.8" fill="#EBA79E" opacity="0.7" />
          <circle cx="252" cy="160" r="2.8" fill="#EBA79E" opacity="0.7" />
          {/* open book */}
          <path d="M220 226v-24l20 6 20-6v24l-20 5z" fill="#9EC6A2" />
          <path d="M240 208v29" stroke="#EAF3EA" strokeWidth="2" />
          <path d="M226 210l10 3M244 213l10-3M226 218l10 3M244 221l10-3" stroke="#EAF3EA" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      </g>

      {/* --- Call control bar --- */}
      <g>
        <circle cx="168" cy="256" r="10" fill="#E08A8A" />
        <path d="M164 256c2-2 6-2 8 0" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="196" cy="256" r="10" fill="#2C3A45" />
        <circle cx="192" cy="256" r="1.4" fill="#fff" />
        <circle cx="196" cy="256" r="1.4" fill="#fff" />
        <circle cx="200" cy="256" r="1.4" fill="#fff" />
        <circle cx="224" cy="256" r="10" fill="#E0A0A0" />
        <path d="M221 252l6 4-6 4z" fill="#fff" />
      </g>

      {/* --- Baby (foreground left) --- */}
      <g>
        {/* body / white onesie */}
        <path d="M120 388c-14 0-24-12-24-28 0-22 14-38 34-38s34 16 34 38c0 16-10 28-24 28z" fill="#EEF1EE" />
        <path d="M116 340l16 6 16-6" stroke="#D6DCD6" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* raised arm */}
        <path d="M150 330c10-6 18-4 22 2" stroke="#EEF1EE" strokeWidth="12" fill="none" strokeLinecap="round" />
        <circle cx="176" cy="330" r="6" fill="#F7D8B8" />
        {/* head */}
        <circle cx="132" cy="312" r="30" fill="#F7D8B8" />
        {/* hair tuft */}
        <path d="M124 288c2-6 12-6 14 0-4-2-10-2-14 0z" fill="#7A5638" />
        <path d="M118 300c6-14 22-14 28 0" stroke="#7A5638" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.5" />
        {/* eyes + open smile + blush */}
        <circle cx="124" cy="312" r="2.4" fill="#3A2A22" />
        <circle cx="140" cy="312" r="2.4" fill="#3A2A22" />
        <path d="M126 322c4 6 12 6 16 0z" fill="#C56B63" />
        <circle cx="116" cy="320" r="4.5" fill="#F0A79C" opacity="0.75" />
        <circle cx="148" cy="320" r="4.5" fill="#F0A79C" opacity="0.75" />
      </g>

      {/* --- Mother (foreground right) --- */}
      <g>
        {/* hair back (long, flowing) */}
        <path d="M232 300c0-46 26-74 60-74s60 28 60 74c0 60-8 96-8 96h-34c8-40 6-78-18-90-24 12-26 50-18 90h-34s-8-36-8-96z" fill="#3B2A24" />
        {/* sweater / shoulders */}
        <path d="M236 396c2-40 24-58 56-58s54 18 56 58z" fill="#D3E0D2" />
        {/* arm holding baby */}
        <path d="M244 356c-16 6-30 18-34 34" stroke="#D3E0D2" strokeWidth="22" fill="none" strokeLinecap="round" />
        {/* neck */}
        <rect x="284" y="300" width="16" height="20" fill="#EFC6A2" />
        {/* face */}
        <ellipse cx="292" cy="286" rx="26" ry="29" fill="#F1CBA6" />
        {/* hair front sweep */}
        <path d="M266 280c0-28 12-46 26-46s26 18 26 46c-2-16-6-24-6-24-8 8-30 10-40 4 0 0-4 8-6 20z" fill="#3B2A24" />
        {/* eyes + smile + blush */}
        <circle cx="283" cy="286" r="2.4" fill="#3A2A22" />
        <circle cx="301" cy="286" r="2.4" fill="#3A2A22" />
        <path d="M283 296c5 5 12 5 17 0" stroke="#8A5A48" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <circle cx="276" cy="294" r="4.5" fill="#EBA79E" opacity="0.75" />
        <circle cx="308" cy="294" r="4.5" fill="#EBA79E" opacity="0.75" />
      </g>
    </svg>
  )
}
