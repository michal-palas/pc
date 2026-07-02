import { useState } from 'react'
import { Card, Button, Chip, VerifiedBadge } from '../../components/ui.jsx'
import { IconArrow, IconCheck } from '../../components/icons.jsx'
import { EXPERTS, EXPERT_QA } from '../../data/experts.js'

const expertById = Object.fromEntries(EXPERTS.map((e) => [e.id, e]))

export default function ExpertsScreen() {
  const [topic, setTopic] = useState(EXPERTS[0].id)
  const [question, setQuestion] = useState('')
  const [asked, setAsked] = useState([]) // {topic, question}

  const submit = () => {
    if (!question.trim()) return
    setAsked((prev) => [{ topic, question: question.trim() }, ...prev])
    setQuestion('')
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted">
        Stell deine Frage an verifizierte Fachleute. Wähle einen Bereich und
        beschreibe kurz dein Anliegen – du bekommst eine fundierte Antwort.
      </p>

      {/* Expert categories */}
      <div className="grid grid-cols-2 gap-3">
        {EXPERTS.map((e) => (
          <button
            key={e.id}
            onClick={() => setTopic(e.id)}
            className={`rounded-2xl bg-white p-4 text-left shadow-card transition-shadow hover:shadow-soft ${
              topic === e.id ? 'ring-2 ring-brand/50' : ''
            }`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-lg">
              {e.emoji}
            </span>
            <h3 className="mt-2 font-serif text-base font-semibold text-ink">
              {e.label}
            </h3>
            <p className="mt-0.5 text-xs text-muted">{e.blurb}</p>
            <p className="mt-2 text-[11px] font-medium text-sage">
              {e.available} online · {e.responseTime}
            </p>
          </button>
        ))}
      </div>

      {/* Ask form */}
      <Card className="space-y-3 p-4">
        <label className="text-sm font-semibold text-ink">
          Deine Frage an {expertById[topic].label}
        </label>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={3}
          placeholder="z. B. Mein Baby schläft tagsüber nur 20 Minuten – ist das normal?"
          className="w-full resize-none rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-brand/50"
        />
        <div className="flex justify-end">
          <Button onClick={submit} disabled={!question.trim()}>
            Frage stellen
            <IconArrow width={18} height={18} />
          </Button>
        </div>
      </Card>

      {/* User's newly asked questions */}
      {asked.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-serif text-lg font-semibold text-ink">
            Deine Fragen
          </h2>
          {asked.map((a, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-center gap-2 text-sm text-brand-dark">
                <span className="text-lg">{expertById[a.topic].emoji}</span>
                <span className="font-medium">{expertById[a.topic].label}</span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-600">
                  ⏳ Warte auf Antwort
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink">{a.question}</p>
            </Card>
          ))}
        </div>
      )}

      {/* Example answered Q&A */}
      <div className="space-y-3">
        <h2 className="font-serif text-lg font-semibold text-ink">
          Kürzlich beantwortet
        </h2>
        {EXPERT_QA.map((qa) => (
          <Card key={qa.id} className="p-4">
            <div className="flex items-center gap-2 text-sm text-brand-dark">
              <span className="text-lg">{expertById[qa.topic].emoji}</span>
              <span className="font-medium">{expertById[qa.topic].label}</span>
            </div>
            <p className="mt-2 text-[15px] font-medium text-ink">
              „{qa.question}"
            </p>
            <p className="mt-1 text-xs text-muted">gefragt von {qa.asker}</p>

            <div className="mt-3 rounded-2xl bg-brand-soft/60 p-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-brand-dark">
                  <IconCheck width={13} height={13} /> {qa.expert}
                </span>
                <VerifiedBadge />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{qa.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
