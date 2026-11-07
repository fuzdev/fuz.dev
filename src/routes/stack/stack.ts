/**
 * Declarative data for the `/stack` page: the layered view of the Fuz stack,
 * from what you make down to the open foundations it rests on. Layout and band
 * accent colors live in the route; this module is just the data, so the
 * structure stays easy to read and edit in one place. The per-piece `color`
 * tint travels with the data since it encodes each piece's language.
 *
 * @module
 */

export interface StackPiece {
	/** Display label, usually a package or technology name. */
	label: string;
	/** Parenthetical qualifier rendered after the label, e.g. `garage` or `pre-alpha`. */
	note?: string;
	/** External site for pieces Fuz controls; omitted for unlinked or unpublished pieces. */
	href?: string;
	/**
	 * fuz_css `palette_*` class tinting the chip by implementation language:
	 * `palette_i` (cyan) for TypeScript, `palette_f` (brown) for Rust/WASM,
	 * `palette_h` (orange) for Svelte/SvelteKit, `palette_d` (purple) for CSS.
	 * Omitted leaves the chip neutral (web platform, data, mixed, or placeholder).
	 */
	color?: string;
}

export interface StackLayer {
	name: string;
	blurb: string;
	pieces: ReadonlyArray<StackPiece>;
}

/** What you build on top of the stack. */
export const make_layers: ReadonlyArray<StackLayer> = [
	{
		name: 'apps and sites',
		blurb: "Apps and sites built on the stack, Fuz's and yours.",
		pieces: [
			{ label: 'fuz_template', note: 'starter', href: 'https://template.fuz.dev/' },
			{ label: 'zzz', note: 'garage, experimental', href: 'https://github.com/fuzdev/zzz' },
			{
				label: 'fuz_forge',
				note: 'forge, pre-alpha',
				href: 'https://github.com/fuzdev/fuz_forge',
				color: 'palette_f'
			},
			{ label: '', note: 'next' }
		]
	}
];

/** The @fuzdev stack: what Fuz makes. */
export const fuz_layers: ReadonlyArray<StackLayer> = [
	{
		name: 'fullstack spine',
		blurb:
			'Choose TypeScript or Rust as your backend, or both: fuz_app on Hono and its Rust twin fuz on Axum share one server pattern for auth, sessions, database, APIs, and tests. Deploy local-first or to the cloud, natively or on Node or Bun. SvelteKit handles the frontend, static or server-rendered, and native and mobile frontends are planned.',
		pieces: [
			{ label: 'fuz_app', note: 'pre-alpha', href: 'https://app.fuz.dev/', color: 'palette_i' },
			{
				label: 'fuz',
				note: 'pre-alpha',
				href: 'https://github.com/fuzdev/fuz',
				color: 'palette_f'
			}
		]
	},
	{
		name: 'CSS and design system',
		blurb:
			'Semantic HTML that looks good by default, with themability, utility classes, and full control when needed.',
		pieces: [{ label: 'fuz_css', href: 'https://css.fuz.dev/', color: 'palette_d' }]
	},
	{
		name: 'UI',
		blurb: 'Svelte components, theming, syntax styling, and a markdown dialect for docs.',
		pieces: [
			{ label: 'fuz_ui', href: 'https://ui.fuz.dev/', color: 'palette_h' },
			{ label: 'fuz_code', href: 'https://code.fuz.dev/', color: 'palette_i' },
			{ label: 'mdz', href: 'https://mdz.fuz.dev/', color: 'palette_i' }
		]
	},
	{
		name: 'tooling',
		blurb:
			'Run tasks, parse, format in the terminal or editor, analyze, and manage many repos, with an agent skill that teaches the conventions.',
		pieces: [
			{ label: 'gro', href: 'https://gro.fuz.dev/', color: 'palette_i' },
			{ label: 'tsv', href: 'https://tsv.fuz.dev/', color: 'palette_f' },
			{ label: 'svelte-docinfo', href: 'https://svelte-docinfo.fuz.dev/', color: 'palette_i' },
			{ label: 'fuz_repos', href: 'https://repos.fuz.dev/' },
			{
				label: 'tsv-format',
				note: 'VS Code',
				href: 'https://github.com/fuzdev/vscode-extension-tsv-format'
			},
			{ label: 'fuz-stack', note: 'agent skill', href: 'https://docs.fuz.dev/skills/fuz-stack' }
		]
	},
	{
		name: 'utilities',
		blurb:
			'Small building blocks: helpers JS lacks, types, async, schemas, and content-addressed hashing.',
		pieces: [
			{ label: 'fuz_util', href: 'https://util.fuz.dev/', color: 'palette_i' },
			{
				label: 'fuz_schema',
				note: 'experimental',
				href: 'https://schema.fuz.dev/',
				color: 'palette_i'
			},
			{
				label: 'blake3',
				note: 'WASM hashing',
				href: 'https://github.com/fuzdev/blake3',
				color: 'palette_f'
			}
		]
	},
	{
		name: 'domain libraries',
		blurb: 'Components and helpers for a particular kind of app, starting with blogs.',
		pieces: [{ label: 'fuz_blog', href: 'https://blog.fuz.dev/', color: 'palette_i' }]
	},
	{
		name: 'native',
		blurb:
			'System tools in Rust: install signed binaries, run a daemon, and set up and deploy to Linux machines.',
		pieces: [
			{
				label: 'fuz',
				note: 'CLI + daemon, pre-alpha',
				href: 'https://github.com/fuzdev/fuz',
				color: 'palette_f'
			},
			{
				label: 'zap',
				note: 'deploy + operate, pre-alpha',
				href: 'https://zap.fuz.dev/',
				color: 'palette_f'
			}
		]
	}
];

/** Open technologies Fuz rests on. */
export const foundation_layers: ReadonlyArray<StackLayer> = [
	{
		name: 'TypeScript',
		blurb:
			'Typed JS across the web side of the stack, running on Node today while gro experiments with becoming its own V8 runtime.',
		pieces: [
			{ label: 'TypeScript', color: 'palette_i' },
			{ label: 'Node', color: 'palette_i' },
			{ label: 'V8', color: 'palette_i' }
		]
	},
	{
		name: 'Rust',
		blurb:
			'The systems language for the native tier, also compiled to WebAssembly for the browser.',
		pieces: [
			{ label: 'Rust', color: 'palette_f' },
			{ label: 'Cargo', color: 'palette_f' },
			{ label: 'WebAssembly', color: 'palette_f' }
		]
	},
	{
		name: 'Svelte and SvelteKit',
		blurb: 'Reactive frontend components and the app framework.',
		pieces: [
			{ label: 'Svelte', color: 'palette_h' },
			{ label: 'SvelteKit', color: 'palette_h' }
		]
	},
	{
		name: 'the web platform',
		blurb: 'The browser and open web standards.',
		pieces: [{ label: 'HTML' }, { label: 'CSS' }, { label: 'JS' }, { label: 'Web APIs' }]
	},
	{
		name: 'data and storage',
		blurb:
			"The filesystem and PostgreSQL, with PGlite for embedded use. pglet is Fuz's own embeddable Postgres-compatible engine: today it makes tests fast, and the goal is to go places the elephant can't fit.",
		pieces: [
			{ label: 'filesystem' },
			{ label: 'PostgreSQL' },
			{ label: 'PGlite' },
			{
				label: 'pglet',
				note: 'tests today',
				href: 'https://github.com/fuzdev/pglet',
				color: 'palette_f'
			}
		]
	},
	{
		name: 'Linux',
		blurb:
			'The primary OS for development and deployment; macOS and Windows support varies by tool.',
		pieces: [{ label: 'Linux' }]
	}
];
