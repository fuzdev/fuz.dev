# fuz.dev

> homepage for Fuz, free software for human agency

fuz.dev is the homepage for Fuz — a zippy stack for human agency. It's a
static SvelteKit site built on the fuz stack and deployed to www.fuz.dev. A
docs hub is planned to join the homepage.

For coding conventions, see Skill(fuz-stack).

## Committing

`git add` and `git commit` are denied by `.claude/settings.local.json` in
this repo — make the edits and stop, the user commits.

## Gro commands

```bash
gro check     # typecheck, test, lint, format check (run before committing)
gro typecheck # typecheck only (faster iteration)
gro test      # run tests with vitest
gro build     # build for production (static adapter)
gro deploy    # build, commit, and push to deploy branch
gro sync      # regenerate files and run svelte-kit sync
```

IMPORTANT for AI agents: Do NOT run `gro dev` — the developer manages the
dev server.

## Key dependencies

- Svelte 5 — component framework with runes
- SvelteKit — application framework with the static adapter
- Vite — build tool
- `@fuzdev/fuz_css` — semantic-first CSS framework and design system
- `@fuzdev/fuz_ui` — UI components, theming, docs system
- `@fuzdev/fuz_util` — utility functions
- `@fuzdev/fuz_code` — syntax highlighting
- `@fuzdev/mdz` — minimal markdown dialect
- `@fuzdev/gro` — build system and task runner

## Scope

fuz.dev is a **static site**:

- Prerendered with `@sveltejs/adapter-static`
- Dark/light theme with persistence
- Documentation system with auto-generated API docs
- No authentication, database, or dynamic server-side content

## Architecture

### Directory structure

```
src/
├── app.html               # HTML entry with theme detection
├── lib/                   # library code
├── test/
│   └── example.test.ts    # example test
└── routes/
    ├── +layout.svelte     # root layout with fuz_css imports + site_context
    ├── +layout.ts         # prerender: true, ssr: true
    ├── +page.svelte       # home page
    ├── style.css          # custom global styles
    ├── library.ts         # library metadata for the docs
    ├── about/+page.svelte
    └── docs/              # documentation pages
        ├── +layout.svelte # wraps docs in the Docs component + library_context
        ├── +page.svelte   # docs index
        ├── tomes.ts       # documentation structure
        ├── library/       # library details page
        └── api/           # auto-generated API docs (+ [...module_path] route)
```

### SvelteKit configuration

- `+layout.ts` exports `prerender = true` and `ssr = true` for full static
  generation
- `svelte.config.js` enables runes mode and includes a commented-out example
  CSP config using `create_csp_directives()` from fuz_ui
- Uses `@sveltejs/adapter-static` for static output

### Theme detection

`app.html` runs theme detection before render, preventing a flash of the
wrong theme on page load:

1. Reads `localStorage.getItem('fuz:color-scheme')`
2. Falls back to `matchMedia('(prefers-color-scheme:dark)')`
3. Sets the class on `<html>` ('dark' or 'light')

### CSS utility classes

The `vite_plugin_fuz_css` Vite plugin (wired in `vite.config.ts`) generates
fuz_css utility classes on demand and exposes them via the `virtual:fuz.css`
module, imported in the root `+layout.svelte`. No generated `fuz.css` file is
committed.

### Documentation system

Uses fuz_ui's tome system and the `svelte-docinfo` Vite plugin:

- `docs/tomes.ts` — defines documentation pages
- `docs/library/` — shows the `LibraryDetail` component
- `docs/api/` — auto-generated API docs from `virtual:svelte-docinfo`
- `docs/api/[...module_path]/` — dynamic module documentation

`src/routes/library.ts` combines the `virtual:svelte-docinfo` metadata with
`package.json` via `library_json_from_modules`; `docs/+layout.svelte` sets the
`library_context`, while the root layout sets only the lighter `site_context`.

## Static deployment

Pre-configured for static hosting:

- Uses `@sveltejs/adapter-static`
- `static/CNAME` sets the custom domain (www.fuz.dev)
- `static/.nojekyll` for GitHub Pages

Deploy with `gro deploy` (builds and pushes to the deploy branch).

## Project standards

- TypeScript strict mode
- Svelte 5 with runes API
- tsv with tabs, 100 char width
- Node >= 24.14
- Private package (not published to npm)
