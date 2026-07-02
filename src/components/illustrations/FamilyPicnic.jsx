// Flat park-picnic illustration echoing the hero photo in sketch 1:
// a diverse group of parents with babies on a blanket under dappled trees,
// with a stroller at the side.

export default function FamilyPicnic({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label="Eltern mit Babys auf einer Picknickdecke im Park"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DCEBCF" />
          <stop offset="1" stopColor="#EEF4E4" />
        </linearGradient>
        <clipPath id="frame">
          <rect width="400" height="300" rx="20" />
        </clipPath>
      </defs>

      <g clipPath="url(#frame)">
        {/* background */}
        <rect width="400" height="300" fill="url(#sky)" />

        {/* tree canopy */}
        <circle cx="70" cy="40" r="70" fill="#A9C99B" opacity="0.7" />
        <circle cx="150" cy="10" r="60" fill="#B7D3A6" opacity="0.6" />
        <circle cx="330" cy="30" r="80" fill="#A9C99B" opacity="0.7" />
        <circle cx="260" cy="5" r="55" fill="#B7D3A6" opacity="0.55" />
        {/* trunks */}
        <rect x="64" y="90" width="12" height="70" rx="4" fill="#B49A7C" opacity="0.55" />
        <rect x="328" y="95" width="12" height="70" rx="4" fill="#B49A7C" opacity="0.55" />
        {/* dappled light spots */}
        <circle cx="200" cy="60" r="26" fill="#F3F8EA" opacity="0.6" />
        <circle cx="120" cy="90" r="16" fill="#F3F8EA" opacity="0.5" />
        <circle cx="300" cy="80" r="18" fill="#F3F8EA" opacity="0.5" />

        {/* grass foreground */}
        <path d="M0 210c60-24 120-24 200-16s140 6 200-8v122H0z" fill="#BAD3A4" />

        {/* picnic blanket */}
        <path d="M70 300 130 214 300 214 360 300z" fill="#F3ECDA" />
        <path d="M130 214 300 214 360 300 70 300z" fill="none" stroke="#E2D3B0" strokeWidth="2" opacity="0.6" />
        <path d="M150 214l30 86M215 214v86M280 214l-30 86" stroke="#E7DABB" strokeWidth="6" opacity="0.55" />
        <path d="M96 258h240M84 280h268" stroke="#E7DABB" strokeWidth="6" opacity="0.55" />

        {/* stroller (right) */}
        <g>
          <circle cx="352" cy="222" r="14" fill="none" stroke="#7E8A94" strokeWidth="5" />
          <circle cx="322" cy="222" r="14" fill="none" stroke="#7E8A94" strokeWidth="5" />
          <path d="M312 210h44l6-30a26 26 0 0 0-50-4z" fill="#8FB0CB" />
          <path d="M356 180l16-16" stroke="#7E8A94" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* --- Parent A: dark skin, top bun, holding baby (left) --- */}
        <Parent
          x={118}
          skin="#8D5A3C"
          hair="#2C2420"
          top="#F0EEE6"
          jeans="#9DB4CE"
          bun
          baby={{ skin: '#C98D6B', hair: '#3A2A20', onesie: '#EAD9C6' }}
        />

        {/* --- Parent B: light skin, dark hair, baby on lap (center) --- */}
        <Parent
          x={196}
          skin="#F1CBA6"
          hair="#3B2A24"
          top="#EDE9DF"
          jeans="#8FA9C6"
          baby={{ skin: '#F5D3B3', hair: '#7A5638', onesie: '#DCEAF0' }}
        />

        {/* --- Parent C: light skin, short hair (right) --- */}
        <Parent
          x={276}
          skin="#EABF98"
          hair="#5A3B26"
          top="#E7EDE6"
          jeans="#7E9AC0"
          baby={{ skin: '#F5D3B3', hair: '#B5895A', onesie: '#E7DFD0' }}
        />

        {/* basket + thermos on blanket */}
        <g>
          <rect x="150" y="272" width="34" height="22" rx="4" fill="#C9A66B" />
          <path d="M150 272q17-14 34 0" fill="none" stroke="#B08C50" strokeWidth="3" />
          <rect x="200" y="262" width="16" height="34" rx="6" fill="#7FB0B8" />
          <rect x="202" y="256" width="12" height="10" rx="3" fill="#5E949D" />
        </g>
      </g>
    </svg>
  )
}

function Parent({ x, skin, hair, top, jeans, bun, baby }) {
  return (
    <g transform={`translate(${x} 0)`}>
      {/* crossed legs in jeans */}
      <path d="M-40 296c2-20 20-30 40-30s38 10 40 30z" fill={jeans} />
      {/* torso */}
      <path d="M-30 272c0-26 12-42 30-42s30 16 30 42z" fill={top} />
      {/* arm cradling */}
      <path d="M-22 258c-8 8-10 20-6 32" stroke={top} strokeWidth="13" fill="none" strokeLinecap="round" />
      {/* neck */}
      <rect x="-6" y="212" width="12" height="16" fill={skin} />
      {/* hair back */}
      <path d="M-22 214c0-22 10-36 22-36s22 14 22 36c0 6-3 11-3 11l-5-15-28 0-5 15s-3-5-3-11z" fill={hair} />
      {/* face */}
      <ellipse cx="0" cy="202" rx="18" ry="20" fill={skin} />
      {/* hair front */}
      {bun ? (
        <>
          <circle cx="0" cy="170" r="10" fill={hair} />
          <path d="M-18 198c0-18 8-30 18-30s18 12 18 30c-5-9-11-12-18-12s-13 3-18 12z" fill={hair} />
        </>
      ) : (
        <path d="M-18 198c0-18 8-30 18-30s18 12 18 30c-5-9-11-12-18-12s-13 3-18 12z" fill={hair} />
      )}
      {/* face features */}
      <circle cx="-6" cy="202" r="1.8" fill="#3A2A22" />
      <circle cx="6" cy="202" r="1.8" fill="#3A2A22" />
      <path d="M-5 210c3 3 7 3 10 0" stroke="#8A5A48" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="-11" cy="208" r="3" fill="#E79A90" opacity="0.6" />
      <circle cx="11" cy="208" r="3" fill="#E79A90" opacity="0.6" />

      {/* baby cradled in lap */}
      <g transform="translate(-18 250)">
        <ellipse cx="0" cy="18" rx="16" ry="14" fill={baby.onesie} />
        <circle cx="0" cy="0" r="13" fill={baby.skin} />
        <path d="M-7 -9c3-5 11-5 14 0-4-2-10-2-14 0z" fill={baby.hair} />
        <circle cx="-4" cy="1" r="1.5" fill="#3A2A22" />
        <circle cx="4" cy="1" r="1.5" fill="#3A2A22" />
        <path d="M-3 6c2 3 6 3 8 0" stroke="#B5675F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="-8" cy="4" r="2.4" fill="#F0A79C" opacity="0.7" />
        <circle cx="8" cy="4" r="2.4" fill="#F0A79C" opacity="0.7" />
      </g>
    </g>
  )
}
