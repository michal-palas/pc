// Synthetic community Q&A / recommendation posts.

export const POST_CATEGORIES = [
  { id: 'empfehlung', label: 'Empfehlung' },
  { id: 'frage', label: 'Frage' },
  { id: 'ausleihen', label: 'Ausleihen & Teilen' },
  { id: 'kita', label: 'Kita & Betreuung' },
]

export const POSTS = [
  {
    id: 'c1',
    author: 'Mira K.',
    initials: 'MK',
    neighborhood: 'Nordstadt',
    category: 'empfehlung',
    timeAgo: 'vor 2 Std.',
    body:
      'Wir sind gerade neu hergezogen und suchen eine liebevolle Kinderärztin für unsere Kleine. Wer kann jemanden empfehlen – am liebsten mit entspannter Terminvergabe und Parkmöglichkeit?',
    likes: 14,
    replies: 6,
  },
  {
    id: 'c2',
    author: 'Dr. Patel — Little Sprouts',
    initials: 'DP',
    neighborhood: 'Verifizierte Praxis',
    category: 'empfehlung',
    timeAgo: 'vor 1 Std.',
    body:
      'Wir freuen uns über neue kleine Patient:innen! Sehr geduldiges Team, Bonuspunkte für nettes Personal und easy Terminbuchung online. 💙',
    likes: 22,
    replies: 3,
    verified: true,
  },
  {
    id: 'c3',
    author: 'Jonas & Fine',
    initials: 'JF',
    neighborhood: 'Am Waldsee',
    category: 'ausleihen',
    timeAgo: 'vor 4 Std.',
    body:
      'Hat jemand eine Babytrage (Ergobaby o.ä.) für ein paar Wochen zu verleihen? Wollen erst testen, ob unser Zwerg das mag, bevor wir kaufen. Wohnen am Maple Park.',
    likes: 9,
    replies: 5,
  },
  {
    id: 'c4',
    author: 'Sandra B.',
    initials: 'SB',
    neighborhood: 'Innenstadt',
    category: 'kita',
    timeAgo: 'vor 6 Std.',
    body:
      'Wie sind eure Erfahrungen mit dem Übergang Kita → Vorschule? Unsere Große wird im Herbst 3 und wir überlegen, ob ein Wechsel jetzt schon Sinn macht.',
    likes: 11,
    replies: 8,
  },
  {
    id: 'c5',
    author: 'Team ParentConnect',
    initials: 'PC',
    neighborhood: 'Willkommen',
    category: 'frage',
    timeAgo: 'vor 8 Std.',
    body:
      'Neu hier? Sag kurz Hallo 👋 und verrate uns, in welchem Viertel du wohnst – so finden dich Nachbar:innen mit Kindern im gleichen Alter leichter.',
    likes: 31,
    replies: 19,
    verified: true,
  },
  {
    id: 'c6',
    author: 'Lena H.',
    initials: 'LH',
    neighborhood: 'Kirchweg',
    category: 'frage',
    timeAgo: 'gestern',
    body:
      'Kurze Frage in die Runde: Ab wann habt ihr euren Kindern das erste Mal Wasser statt nur Milch angeboten? Unsere Hebamme meint ab Beikoststart, aber ich bin unsicher.',
    likes: 7,
    replies: 12,
  },
]
