<script lang="ts">
	import {resolve} from '$app/paths';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import {library_context} from '@fuzdev/fuz_ui/library.svelte.js';
	import Svg, {type SvgData} from '@fuzdev/fuz_ui/Svg.svelte';
	import {
		fuz_logo,
		fuz_code_logo,
		fuz_blog_logo,
		fuz_mastodon_logo,
		fuz_gitops_logo,
		fuz_template_logo,
		fuz_css_logo,
	} from '@fuzdev/fuz_ui/logos.js';
	import HiddenPersonalLinks from '@fuzdev/fuz_ui/HiddenPersonalLinks.svelte';
	import {MAIN_HEADER_MARGIN_TOP} from '@fuzdev/fuz_ui/constants.js';

	const library = library_context.get();

	// TODO refactor
	interface ProjectItem {
		name: string;
		url: string;
		logo: SvgData;
		description: string;
		glyph: string;
	}

	// TODO ideally this wouldn't duplicate metadata like descriptions, but adding fuz_gitops to this repo is heavy
	// prettier-ignore
	const project_items: Array<ProjectItem> = [
		{name: 'fuz_ui', url: 'https://css.fuz.dev/', logo: fuz_logo, description: 'Svelte UI library', glyph: '🧶'},
		{name: 'fuz_css', url: 'https://css.fuz.dev/', logo: fuz_css_logo, description: 'CSS framework and design system', glyph: '🌿'},
		{name: 'template.fuz.dev', url: 'https://template.fuz.dev/', logo: fuz_template_logo, description: 'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro', glyph: '❄'},
		{name: 'fuz_blog', url: 'https://blog.fuz.dev/', logo: fuz_blog_logo, description: 'blog software from scratch with SvelteKit', glyph: '🖊️'},
		{name: 'fuz_mastodon', url: 'https://mastodon.fuz.dev/', logo: fuz_mastodon_logo, description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz', glyph: '🦣'},
		{name: 'fuz_code', url: 'https://code.fuz.dev/', logo: fuz_code_logo, description: 'syntax styling utilities and components for TypeScript, Svelte, SvelteKit', glyph: '🎨'},
		{name: 'fuz_gitops', url: 'https://gitops.fuz.dev/', logo: fuz_gitops_logo, description: 'a tool for managing many repos', glyph: '🪄'},
	];
</script>

<main class="box width_100">
	<div class="box width_upto_md mb_xl9">
		<section class="box">
			<h1 class="mb_sm" style:margin-top={MAIN_HEADER_MARGIN_TOP}>fuz</h1>
			<div class="box mb_lg"><Svg data={fuz_logo} size="var(--icon_size_xl2)" /></div>
			<blockquote class="shadow_bottom_sm px_xl bg mb_xl3">friendly user zystem 🦋</blockquote>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_upto_sm panel p_lg shadow_inset_xs bg">
					<p>
						Fuz is a zippy stack and forge for the commons. Right now Fuz includes a collection of
						libraries for making modern websites with TypeScript, CSS, Svelte, and SvelteKit/Vite.
						Soon they'll be joined by native tools for sovereign software development, written in
						Rust.
					</p>
				</div>
			</div>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<h2 class="mt_0 mb_xl2 px_md">packages</h2>
			<menu class="unstyled font_size_lg">
				{#each project_items as project_item (project_item.name)}
					{@render package_thumbnail(project_item)}
				{/each}
			</menu>
		</section>
		<section>
			<DocsFooter {library}>
				{#snippet logo_header()}
					<a href={resolve('/about')} class="mb_xs">about</a>
				{/snippet}
				<HiddenPersonalLinks />
			</DocsFooter>
		</section>
	</div>
</main>

{#snippet package_thumbnail(project_item: ProjectItem)}
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a class="thumbnail row bg px_md py_xs border_radius_sm mb_lg" href={project_item.url}
		><Svg shrink={false} data={project_item.logo} size="var(--icon_size_lg)" />
		<div class="pl_lg width_upto_sm">
			<div class="thumbnail_name">{project_item.name}</div>
			<div class="thumbnail_description font_size_md text_color_3 font_weight_500">
				{project_item.description}
				{project_item.glyph}
			</div>
		</div></a
	>
{/snippet}

<style>
	.thumbnail {
		box-shadow: var(--shadow_bottom_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
	}
	.thumbnail:hover {
		box-shadow: var(--shadow_bottom_sm)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);

		/* show the underline only on the name, not the description */
		text-decoration: none;
		.thumbnail_name {
			text-decoration: underline;
		}
		.thumbnail_description {
			text-decoration: none;
		}
	}
	.thumbnail:active {
		box-shadow: var(--shadow_top_xs)
			color-mix(in hsl, var(--shadow_color) var(--shadow_alpha_1), transparent);
	}
</style>
