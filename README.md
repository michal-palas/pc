# ParentConnect — Prototype

A clickable, front-end-only prototype of **ParentConnect**, a hyper-local
community web app for parents. German UI, synthetic content, no backend.

Built with React + Vite + Tailwind CSS.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`).

1. Push this project to a GitHub repository's `main` branch.
2. In the repo, go to **Settings → Pages → Build and deployment** and set
   **Source** to **GitHub Actions**.
3. Every push to `main` builds the app and publishes it. The site appears at:

   ```
   https://<your-user>.github.io/<repo-name>/
   ```

The workflow sets Vite's `base` to `/<repo-name>/` automatically, so the app
works under the repo subpath no matter what you name the repo.

Routing uses `HashRouter`, so deep links and refreshes work on static hosting
(URLs look like `.../<repo-name>/#/app/karte`).

### User site (`<user>.github.io` repo)

If you deploy to the special `<user>.github.io` repo (served from the root),
edit the build step in the workflow to use `VITE_BASE: /` instead of the
repo-name subpath.
