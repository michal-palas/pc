// Synthetic expert categories for the "Ask the Experts" screen.

export const EXPERTS = [
  {
    id: 'hebammen',
    label: 'Hebammen',
    emoji: '🩺',
    blurb: 'Schwangerschaft, Geburt, Stillen & Wochenbett.',
    available: 4,
    responseTime: 'antwortet meist < 24 Std.',
  },
  {
    id: 'paedagogik',
    label: 'Pädagog:innen',
    emoji: '📖',
    blurb: 'Entwicklung, Grenzen, Trotzphasen & Spiel.',
    available: 3,
    responseTime: 'antwortet meist < 48 Std.',
  },
  {
    id: 'lehrkraefte',
    label: 'Lehrer:innen',
    emoji: '🎓',
    blurb: 'Schulstart, Lernen & Übergang Kita–Schule.',
    available: 2,
    responseTime: 'antwortet meist < 48 Std.',
  },
  {
    id: 'familienberatung',
    label: 'Familienberatung',
    emoji: '💗',
    blurb: 'Schlaf, Ernährung & Alltag mit Kindern.',
    available: 5,
    responseTime: 'antwortet meist < 24 Std.',
  },
]

// Example answered questions to make the screen feel alive.
export const EXPERT_QA = [
  {
    id: 'q1',
    topic: 'hebammen',
    question: 'Mein Baby (5 Wochen) will nachts alle 1,5 Std. an die Brust. Ist das normal?',
    asker: 'Nadine',
    answer:
      'Ja, das ist in dieser Phase völlig normal – Cluster-Feeding und häufige Nachtmahlzeiten sichern die Milchbildung. Achte auf eine bequeme Stillposition, damit du selbst zur Ruhe kommst.',
    expert: 'Hebamme Sabine',
    answered: true,
  },
  {
    id: 'q2',
    topic: 'paedagogik',
    question: 'Unser Sohn (2,5) wirft sich bei jedem „Nein" auf den Boden. Wie reagiere ich am besten?',
    asker: 'Tim',
    answer:
      'Trotzreaktionen sind ein gesundes Zeichen der Autonomieentwicklung. Bleib ruhig, benenne das Gefühl („Du bist wütend") und biete eine klare, freundliche Grenze. Weniger diskutieren, mehr begleiten.',
    expert: 'Pädagogin Merve',
    answered: true,
  },
]
