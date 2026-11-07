/**
 * Declarative data for the `/stack` page: the Fuz stack grouped by role, from
 * the apps you make down to the open foundations it rests on. Layout lives in
 * the route; this module is just the data, so the structure stays easy to read
 * and edit in one place. Each piece carries its tagline, implementation
 * languages, and status, which the route renders as a row with tinted badges.
 *
 * @module
 */

/** Implementation language of a piece, rendered as a tinted badge. */
export type StackLanguage = 'ts' | 'svelte' | 'css' | 'rust' | 'wasm';

/**
 * Where a piece stands, one tier per piece. Everything is pre-1.0 and changes
 * without deprecation, so `ready` is relative to that: usable in production
 * if you follow the changesets.
 */
export type StackStatus = 'ready' | 'early' | 'experimental' | 'planned';

export interface StackBadge {
	/** Short text shown in the badge. */
	label: string;
	/** fuz_css `palette_*` class tinting the badge; omitted leaves it neutral. */
	color?: string;
	/** One-line gloss for the legend. */
	description: string;
}

/**
 * Language badges. Tints follow the convention used across the fuz sites:
 * cyan for TypeScript, orange for Svelte, purple for CSS, brown for Rust,
 * teal for WASM.
 */
export const STACK_LANGUAGES: Readonly<Record<StackLanguage, StackBadge>> = {
	ts: { label: 'TS', color: 'palette_i', description: 'TypeScript' },
	svelte: { label: 'Svelte', color: 'palette_h', description: 'Svelte and SvelteKit' },
	css: { label: 'CSS', color: 'palette_d', description: 'CSS' },
	rust: { label: 'Rust', color: 'palette_f', description: 'Rust' },
	wasm: { label: 'WASM', color: 'palette_j', description: 'WASM, compiled from Rust' }
};

/**
 * Status badges. Tints avoid the language hues so the two badge kinds read
 * apart: green for ready, yellow for early, pink for experimental, and neutral
 * for planned.
 */
export const STACK_STATUSES: Readonly<Record<StackStatus, StackBadge>> = {
	ready: {
		label: 'ready',
		color: 'palette_b',
		description: 'usable in production; pre-1.0, so follow the changesets'
	},
	early: {
		label: 'early',
		color: 'palette_e',
		description: 'pre-alpha and under active construction; expect gaps'
	},
	experimental: {
		label: 'experimental',
		color: 'palette_g',
		description: 'exploring a direction; may change shape or not survive'
	},
	planned: { label: 'planned', description: 'designed but not yet started' }
};

export interface StackPiece {
	/** Display name, usually the package or repo name. */
	name: string;
	/** One line saying what it is. */
	tagline: string;
	/** Implementation languages, in order of prominence; empty for data and docs. */
	languages: ReadonlyArray<StackLanguage>;
	status: StackStatus;
	/** Source repository. */
	repo: string;
	/** Docs or project site, when one exists; the name links here, else to `repo`. */
	site?: string;
}

export interface StackLayer {
	name: string;
	blurb: string;
	pieces: ReadonlyArray<StackPiece>;
}

const github = (repo: string): string => `https://github.com/fuzdev/${repo}`;

/** The Fuz stack by role, top down: what you make, then what it's made of. */
export const stack_layers: ReadonlyArray<StackLayer> = [
	{
		name: 'apps and sites',
		blurb: 'What gets built on the stack, starting with the template and the apps Fuz runs itself.',
		pieces: [
			{
				name: 'fuz_template',
				tagline: 'starter template for SvelteKit web apps, Rust native tools, or both',
				languages: ['ts', 'svelte', 'rust'],
				status: 'ready',
				site: 'https://template.fuz.dev/',
				repo: github('fuz_template')
			},
			{
				name: 'zzz',
				tagline: 'software garage for power users and devs',
				languages: ['ts', 'svelte', 'rust'],
				status: 'experimental',
				repo: github('zzz')
			},
			{
				name: 'zervo',
				tagline: 'native zzz window host built on Servo',
				languages: ['rust'],
				status: 'experimental',
				repo: github('zervo')
			},
			{
				name: 'fuz_forge',
				tagline: 'personal-scale forge for self-hosting git repos, signed releases, and files',
				languages: ['rust', 'svelte'],
				status: 'early',
				repo: github('fuz_forge')
			}
		]
	},
	{
		name: 'fullstack',
		blurb:
			'Choose TypeScript or Rust for the backend, or both: fuz_app on Hono and fuz on Axum share one server pattern for auth, sessions, database, APIs, and tests, and one data model: mutable cells that reference immutable facts (content-addressed bytes), changed by actions (schema-validated, serializable calls). SvelteKit handles the frontend, static or server-rendered. Deploy local-first or to the cloud, natively or on Node or Bun.',
		pieces: [
			{
				name: 'fuz_app',
				tagline: 'fullstack app library: sessions, auth, database, and server-sent events',
				languages: ['ts'],
				status: 'early',
				site: 'https://app.fuz.dev/',
				repo: github('fuz_app')
			},
			{
				name: 'fuz',
				tagline: "the fuz CLI, fuzd daemon, and the Rust crates beneath the stack's servers",
				languages: ['rust'],
				status: 'early',
				repo: github('fuz')
			}
		]
	},
	{
		name: 'frontend',
		blurb:
			'Semantic HTML that looks good by default, Svelte components and theming, syntax styling, and a markdown dialect for docs and untrusted content.',
		pieces: [
			{
				name: 'fuz_css',
				tagline: 'semantic-first CSS framework and design system',
				languages: ['css'],
				status: 'ready',
				site: 'https://css.fuz.dev/',
				repo: github('fuz_css')
			},
			{
				name: 'fuz_ui',
				tagline: 'Svelte component library and frontend helpers',
				languages: ['svelte'],
				status: 'ready',
				site: 'https://ui.fuz.dev/',
				repo: github('fuz_ui')
			},
			{
				name: 'fuz_code',
				tagline: 'syntax styler for TypeScript, Svelte, Markdown, and more',
				languages: ['ts'],
				status: 'ready',
				site: 'https://code.fuz.dev/',
				repo: github('fuz_code')
			},
			{
				name: 'mdz',
				tagline:
					'strict markdown dialect built for streaming, web authoring, docs, and untrusted content',
				languages: ['ts'],
				status: 'ready',
				site: 'https://mdz.fuz.dev/',
				repo: github('mdz')
			},
			{
				name: 'fuz_blog',
				tagline: 'blog software from scratch with SvelteKit',
				languages: ['ts', 'svelte'],
				status: 'ready',
				site: 'https://blog.fuz.dev/',
				repo: github('fuz_blog')
			}
		]
	},
	{
		name: 'tooling',
		blurb:
			'Run tasks, parse and format in the terminal or editor, analyze code, and manage many repos, with an agent skill that teaches the conventions.',
		pieces: [
			{
				name: 'gro',
				tagline: 'task runner, codegen, and checks for web projects, becoming its own V8 runtime',
				languages: ['ts', 'rust'],
				status: 'ready',
				site: 'https://gro.fuz.dev/',
				repo: github('gro')
			},
			{
				name: 'tsv',
				tagline: 'precise language tools for TypeScript, JS, CSS, and Svelte: parser and formatter',
				languages: ['rust'],
				status: 'ready',
				site: 'https://tsv.fuz.dev/',
				repo: github('tsv')
			},
			{
				name: 'tsv-format',
				tagline: 'VS Code extension: format on save, powered by tsv',
				languages: ['wasm', 'ts'],
				status: 'ready',
				repo: github('vscode-extension-tsv-format')
			},
			{
				name: 'svelte-docinfo',
				tagline: 'static analysis for TypeScript and Svelte 5, feeding docs and tools',
				languages: ['ts'],
				status: 'ready',
				site: 'https://svelte-docinfo.fuz.dev/',
				repo: github('svelte-docinfo')
			},
			{
				name: 'fuz_repos',
				tagline: 'multi-repo management: publish cascade, dashboard, and the repos tool',
				languages: ['ts', 'rust'],
				status: 'ready',
				site: 'https://repos.fuz.dev/',
				repo: github('fuz_repos')
			},
			{
				name: 'fuz-stack',
				tagline: 'the agent skill that teaches the conventions of the stack',
				languages: [],
				status: 'ready',
				site: 'https://docs.fuz.dev/skills/fuz-stack',
				repo: github('docs.fuz.dev')
			},
			{
				name: 'corpora',
				tagline: 'pinned snapshot of real-world code for language-tool gates and benchmarks',
				languages: [],
				status: 'ready',
				repo: github('corpora')
			}
		]
	},
	{
		name: 'utilities',
		blurb: 'Small building blocks: helpers JS lacks, types, async, schemas, and hashing.',
		pieces: [
			{
				name: 'fuz_util',
				tagline: 'utility belt for JS: helpers, types, async, and logging',
				languages: ['ts'],
				status: 'ready',
				site: 'https://util.fuz.dev/',
				repo: github('fuz_util')
			},
			{
				name: 'fuz_schema',
				tagline:
					'performance-focused Standard Schema library for JS, with a Rust side that validates JSON text',
				languages: ['ts', 'rust'],
				status: 'early',
				site: 'https://schema.fuz.dev/',
				repo: github('fuz_schema')
			},
			{
				name: 'blake3',
				tagline: 'BLAKE3 hashing compiled to WASM',
				languages: ['rust', 'wasm'],
				status: 'ready',
				repo: github('blake3')
			}
		]
	},
	{
		name: 'native and data',
		blurb:
			"System tools in Rust: set up and deploy to Linux machines, and an embeddable Postgres-compatible engine that makes tests fast today and aims to go places the elephant can't fit.",
		pieces: [
			{
				name: 'zap',
				tagline:
					'convergent machine-state management: set up and ship to Linux machines from TypeScript',
				languages: ['ts', 'rust'],
				status: 'early',
				site: 'https://zap.fuz.dev/',
				repo: github('zap')
			},
			{
				name: 'pglet',
				tagline: 'small embeddable Postgres-compatible engine, native and WASM',
				languages: ['rust'],
				status: 'early',
				repo: github('pglet')
			}
		]
	}
];

export interface FoundationGroup {
	name: string;
	blurb: string;
	/** Technologies in the group, each rendered as a neutral chip. */
	items: ReadonlyArray<string>;
}

/** Open technologies Fuz rests on, grouped compactly; none of these is Fuz's. */
export const foundation_groups: ReadonlyArray<FoundationGroup> = [
	{
		name: 'languages and runtimes',
		blurb:
			'TypeScript on Node for the web side, Rust for the native tier and for WASM in the browser.',
		items: ['TypeScript', 'Node', 'V8', 'Rust', 'Cargo', 'WASM']
	},
	{
		name: 'frontend',
		blurb: 'Svelte and SvelteKit over the open web platform.',
		items: ['Svelte', 'SvelteKit', 'HTML', 'CSS', 'JS', 'Web APIs']
	},
	{
		name: 'data',
		blurb: 'The filesystem and PostgreSQL, with PGlite for embedded use.',
		items: ['filesystem', 'PostgreSQL', 'PGlite']
	},
	{
		name: 'OS',
		blurb: 'Developed and deployed on Linux; macOS and Windows support varies by tool.',
		items: ['Linux']
	}
];
