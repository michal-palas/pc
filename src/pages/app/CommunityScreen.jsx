import { useMemo, useState } from 'react'
import { Card, Chip, Button, Avatar, VerifiedBadge } from '../../components/ui.jsx'
import { IconHeart, IconChat, IconPlus } from '../../components/icons.jsx'
import { POSTS, POST_CATEGORIES } from '../../data/posts.js'

const catById = Object.fromEntries(POST_CATEGORIES.map((c) => [c.id, c]))

export default function CommunityScreen() {
  const [active, setActive] = useState('alle')
  const [posts, setPosts] = useState(POSTS)
  const [liked, setLiked] = useState({})
  const [composing, setComposing] = useState(false)

  const filtered = useMemo(
    () => (active === 'alle' ? posts : posts.filter((p) => p.category === active)),
    [active, posts],
  )

  const toggleLike = (id) => setLiked((l) => ({ ...l, [id]: !l[id] }))

  const addPost = (body, category) => {
    setPosts((prev) => [
      {
        id: `new-${prev.length}`,
        author: 'Du',
        initials: 'DU',
        neighborhood: 'Nordstadt',
        category,
        timeAgo: 'gerade eben',
        body,
        likes: 0,
        replies: 0,
      },
      ...prev,
    ])
    setComposing(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="no-scrollbar flex flex-1 gap-2 overflow-x-auto">
          <Chip active={active === 'alle'} onClick={() => setActive('alle')}>
            Alle
          </Chip>
          {POST_CATEGORIES.map((c) => (
            <Chip
              key={c.id}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </Chip>
          ))}
        </div>
      </div>

      <Button className="w-full" onClick={() => setComposing((v) => !v)}>
        <IconPlus width={18} height={18} />
        Beitrag schreiben
      </Button>

      {composing && <Composer onSubmit={addPost} onCancel={() => setComposing(false)} />}

      <div className="space-y-3">
        {filtered.map((p) => {
          const c = catById[p.category]
          const isLiked = !!liked[p.id]
          return (
            <Card key={p.id} className="p-4">
              <div className="flex items-center gap-3">
                <Avatar initials={p.initials} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="truncate font-semibold text-ink">
                      {p.author}
                    </span>
                    {p.verified && <VerifiedBadge />}
                  </div>
                  <p className="text-xs text-muted">
                    {p.neighborhood} · {p.timeAgo}
                  </p>
                </div>
                {c && (
                  <span className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-muted">
                    {c.label}
                  </span>
                )}
              </div>

              <p className="mt-3 text-[15px] leading-relaxed text-ink">{p.body}</p>

              <div className="mt-4 flex items-center gap-5 text-sm text-muted">
                <button
                  onClick={() => toggleLike(p.id)}
                  className={`inline-flex items-center gap-1.5 transition-colors ${
                    isLiked ? 'text-red-500' : 'hover:text-ink'
                  }`}
                >
                  <IconHeart
                    width={18}
                    height={18}
                    fill={isLiked ? 'currentColor' : 'none'}
                  />
                  {p.likes + (isLiked ? 1 : 0)}
                </button>
                <span className="inline-flex items-center gap-1.5">
                  <IconChat width={18} height={18} />
                  {p.replies} Antworten
                </span>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

function Composer({ onSubmit, onCancel }) {
  const [body, setBody] = useState('')
  const [category, setCategory] = useState(POST_CATEGORIES[0].id)

  return (
    <Card className="space-y-3 p-4">
      <textarea
        autoFocus
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        placeholder="Was möchtest du mit deiner Nachbarschaft teilen?"
        className="w-full resize-none rounded-2xl border border-black/10 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-brand/50"
      />
      <div className="flex flex-wrap gap-2">
        {POST_CATEGORIES.map((c) => (
          <Chip
            key={c.id}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </Chip>
        ))}
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" onClick={onCancel}>
          Abbrechen
        </Button>
        <Button disabled={!body.trim()} onClick={() => onSubmit(body.trim(), category)}>
          Veröffentlichen
        </Button>
      </div>
    </Card>
  )
}
