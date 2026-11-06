<script lang="ts">
	import 'virtual:fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import './style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import { SiteState, site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import type { Snippet } from 'svelte';
	import pkg_json from 'virtual:pkg.json';
	import { to_blog_feed_url } from '@fuzdev/fuz_blog/blog.ts';

	import { blogs } from './blogs.ts';

	const {
		children
	}: {
		children: Snippet;
	} = $props();

	// `glyph` and `repo_url` derive from `pkg_json`.
	site_context.set(new SiteState({ pkg_json }));
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
	{#each blogs as blog (blog.dirname)}
		<link
			rel="alternate"
			type="application/atom+xml"
			title={blog.feed.title}
			href={to_blog_feed_url(blog.feed.home_page_url)}
		/>
	{/each}
</svelte:head>

<ThemeRoot>
	{@render children()}
</ThemeRoot>
