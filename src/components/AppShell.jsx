import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { IconLogo, IconMap, IconCalendar, IconChat, IconUsers } from './icons.jsx'

const TABS = [
  { to: '/app/karte', label: 'Karte', Icon: IconMap },
  { to: '/app/events', label: 'Events', Icon: IconCalendar },
  { to: '/app/community', label: 'Community', Icon: IconChat },
  { to: '/app/experten', label: 'Experten', Icon: IconUsers },
]

const TITLES = {
  '/app/karte': 'Live-Tipps in deiner Nähe',
  '/app/events': 'Event-Kalender',
  '/app/community': 'Community & Q&A',
  '/app/experten': 'Ask the Experts',
}

export default function AppShell() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-cream">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/85 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <IconLogo />
            <span className="font-serif text-lg font-semibold text-ink">
              {TITLES[pathname] || 'ParentConnect'}
            </span>
          </Link>
          <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-brand-dark shadow-card">
            <span className="h-2 w-2 rounded-full bg-sage" />
            Nordstadt
          </div>
        </div>
      </header>

      {/* Screen content */}
      <main className="mx-auto max-w-2xl px-4 pb-28 pt-5">
        <Outlet />
      </main>

      {/* Bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-stretch justify-around px-2 py-2">
          {TABS.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-1 rounded-2xl py-2 text-xs font-medium transition-colors ${
                  isActive ? 'text-brand-dark' : 'text-muted hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                      isActive ? 'bg-brand-soft' : 'bg-transparent'
                    }`}
                  >
                    <Icon width={20} height={20} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
