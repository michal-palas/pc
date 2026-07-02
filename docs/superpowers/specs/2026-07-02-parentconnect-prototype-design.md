# ParentConnect — Prototype Design

**Date:** 2026-07-02
**Status:** Approved

## Purpose

A clickable, front-end-only prototype of **ParentConnect**, a hyper-local
community web app for pregnant people and parents of children up to age 6.
The prototype demonstrates the product vision from two sketches with synthetic
content. No backend, no persistence.

## Decisions

- **Scope:** Landing page + a clickable app with four working feature screens.
- **Stack:** React + Vite + Tailwind CSS, client-side routing (react-router).
- **Language:** German UI (matches sketches).
- **Data:** Synthetic fixtures in TS files. Interactions update in-memory
  React state only; a refresh resets state. Acceptable for a prototype.
- **Map:** Stylized illustrative map (positioned pins over a styled background),
  not a real map API. Zero API keys, works offline.

## Visual language

- Background cream `#FAF8F0`; primary blue `#5A8FB5` with light `#8FB8D8`;
  sage-green accents; white rounded cards with soft shadows.
- Serif display font for headings, sans-serif for body.
- Rounded corners, generous whitespace, friendly and calm.

## Structure

Single React SPA.

### Landing page (`/`)
Faithful rebuild of the sketches:
1. Sticky nav — logo, Funktionen, So funktioniert's, Interesse melden,
   Anmelden, "Jetzt loslegen" (CTA → `/app/karte`).
2. Hero — headline, sub-copy, two CTAs, three trust badges, hero image.
3. Three-pillar strip — Von Eltern · Hyper-lokal · Verifiziert.
4. Three feature cards — Live-Tipps & Notfall-Finder, Event-Kalender,
   Community & Q&A. Each links into the corresponding app screen.
5. Ask the Experts section — four categories (Hebammen, Pädagog:innen,
   Lehrer:innen, Familienberatung) + CTA → `/app/experten`.
6. Footer.

### App shell (`/app/*`)
A shell with a bottom tab bar (Karte, Events, Community, Experten) plus a
lightweight top bar. Tabs from the sketch mockups.

- **Karte / Live-Tipps (`/app/karte`)** — styled neighborhood map with
  category pins (Spielplätze, Cafés, Wickelräume, Stillräume), filter chips,
  and a scrollable place list. Selecting a place highlights its pin.
- **Event-Kalender (`/app/events`)** — list of local events with date/time/
  location and category tags. "Teilnehmen" toggles a joined state + count.
- **Community & Q&A (`/app/community`)** — feed of parent posts with author,
  category, body, reply count, and a heart/like count that toggles.
- **Ask the Experts (`/app/experten`)** — four expert categories and a
  "Frage stellen" form; submitting prepends the question to a local list.

## Component boundaries

Shared primitives reused across landing + app so screen files stay small:
- `Button`, `Card`, `Tag`/`Chip`, `Icon` wrapper.
- `LandingNav`, `Footer` for the marketing page.
- `AppShell` + `TabBar` for the app.
Each screen is its own component consuming a fixture module and local state.

Fixtures: `data/places.ts`, `data/events.ts`, `data/posts.ts`,
`data/experts.ts`.

## Out of scope (YAGNI)

- Real authentication, real backend, database, persistence.
- Real map tiles / geolocation.
- Real-time updates, notifications, image uploads.
- Mobile-native packaging (responsive web only).

## Success criteria

- `npm run dev` serves the app; `npm run build` succeeds.
- Landing page visually matches the sketches.
- All four app screens render synthetic content and respond to the core
  interaction (join / like / filter / submit) without errors.
- Navigation between landing and all app screens works.
