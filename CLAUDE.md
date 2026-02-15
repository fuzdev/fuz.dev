# fuz.dev

> Website and documentation for the Fuz ecosystem

fuz.dev is the public website for the Fuz stack and fuzdev nonprofit.
It serves as the main landing page at [fuz.dev](https://www.fuz.dev/).

For coding conventions, see Skill(fuz-stack).

## Scope

fuz.dev is the **public website and documentation hub** for the Fuz ecosystem:

- Landing page for the Fuz stack
- Landing page for the fuzdev nonprofit
- Eventually: forge UI for the Fuz platform

### What fuz.dev does NOT include

- Detailed API documentation (see docs.fuz.dev / fuz_docs)
- Claude Code skills (see fuz_docs)
- Library code (see fuz_util, fuz_css, fuz_ui)

## Gro commands

```bash
gro check     # typecheck, test, lint, format check (run before committing)
gro typecheck # typecheck only (faster iteration)
gro test      # run tests with vitest
gro gen       # regenerate .gen files
gro build     # build for production (static adapter)
gro deploy    # build and deploy
```

IMPORTANT for AI agents: Do NOT run `gro dev` - the developer will manage the
dev server.

## Key dependencies

- Svelte 5 - component framework with runes
- SvelteKit - application framework with static adapter
- fuz_css (@fuzdev/fuz_css) - CSS framework and design system
- fuz_ui (@fuzdev/fuz_ui) - UI components, theming, docs system
- fuz_util (@fuzdev/fuz_util) - utility functions
- fuz_code (@fuzdev/fuz_code) - syntax highlighting
- Gro (@fuzdev/gro) - build system and task runner

## SvelteKit app

Static site at fuz.dev. Uses `@sveltejs/adapter-static` with prerendering.

### Routes

- `/` - Main landing page with vision, description, ProjectLinks
- `/about` - About the Fuz ecosystem and fuzdev

Deploy with `gro deploy` (builds and pushes to deploy branch).

## Project standards

- TypeScript strict mode
- Svelte 5 with runes API
- Prettier with tabs, 100 char width
- Node >= 22.15
- Not published to npm

## Related projects

- [`fuz_docs`](../fuz_docs/CLAUDE.md) - Documentation site and Claude Code skills
- [`fuz_css`](../fuz_css/CLAUDE.md) - CSS framework
- [`fuz_ui`](../fuz_ui/CLAUDE.md) - UI components and docs system
- [`fuz_util`](../fuz_util/CLAUDE.md) - utility functions
- [`gro`](../gro/CLAUDE.md) - build system and task runner
