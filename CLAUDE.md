# fuz.dev

> homepage for Fuz, free software for human agency

fuz.dev is the homepage for Fuz — a zippy stack for human agency. It's a
static SvelteKit site built on the fuz stack and deployed to www.fuz.dev. A
docs hub is planned to join the homepage.

For coding conventions, see Skill(fuz-stack).

## Gro commands

```bash
gro check     # typecheck, test, lint, format check (run before committing)
gro typecheck # typecheck only (faster iteration)
gro test      # run tests with vitest
gro build     # build for production (static adapter)
gro deploy    # build, commit, and push to deploy branch
gro sync      # regenerate files and run svelte-kit sync
```

## Key dependencies

- Svelte 5 — component framework with runes
- SvelteKit — application framework with the static adapter
- Vite — build tool
- `@fuzdev/fuz_css` — semantic-first CSS framework and design system
- `@fuzdev/fuz_ui` — UI components and theming
- `@fuzdev/fuz_util` — utility functions
- `@fuzdev/fuz_code` — syntax highlighting (its Svelte preprocessor and theme)
- `@fuzdev/mdz` — minimal markdown dialect (its Svelte preprocessor)
- `@fuzdev/gro` — build system and task runner

## Scope

fuz.dev is a **static site**:

- Prerendered with `@sveltejs/adapter-static`
- Dark/light theme with persistence
- A few hand-written pages — no docs system or `src/lib/` yet (the docs hub is
  planned)
- No authentication, database, or dynamic server-side content

## Architecture

### Directory structure

```
src/
├── app.html                  # HTML entry with theme detection
├── app.d.ts                  # virtual module types (fuz.css, pkg.json)
├── test/
│   └── example.test.ts       # example test
└── routes/
    ├── +layout.svelte        # root layout with fuz_css imports + site_context
    ├── +layout.ts            # prerender: true, ssr: true
    ├── +page.svelte          # home page
    ├── style.css             # custom global styles
    ├── about/+page.svelte
    └── contributing/+page.svelte
```

### SvelteKit configuration

- `+layout.ts` exports `prerender = true` and `ssr = true` for full static
  generation
- SvelteKit config lives in `vite.config.ts` as the `sveltekit({...})` plugin
  options (there is no `svelte.config.js`): runes mode, the mdz and fuz_code
  preprocessors, root-absolute paths, the git commit as the app version, and a
  commented-out example CSP config using `create_csp_directives()` from fuz_ui
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

### Site metadata

The `vite_plugin_pkg_json` Vite plugin (from fuz_ui) exposes `package.json` as
the `virtual:pkg.json` module; the root `+layout.svelte` builds the
`site_context` from it (`glyph` and `repo_url` derive from it).

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
