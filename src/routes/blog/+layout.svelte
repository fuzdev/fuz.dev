<script lang="ts">
	import type { Snippet } from 'svelte';
	import { blog_feed_context } from '@fuzdev/fuz_blog/blog_feed_context.ts';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import { site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import { FUZ_DEV_URL } from '@fuzdev/fuz_ui/constants.ts';

	import PageLinks from '../PageLinks.svelte';
	import { feed } from './feed.ts';

	const { children }: { children: Snippet } = $props();

	// `BlogPost` in this subtree reads the blog's feed from context
	blog_feed_context.set(feed);

	const site = site_context.get();
</script>

<main class="box width:100% px_xl2">
	<nav class="mt_xl3" style:--font_size="var(--font_size_lg)">
		<Breadcrumb />
	</nav>
	<div class="box width:100%">
		{@render children()}
	</div>
	<section class="box row flex-wrap:wrap gap_xl2 mt_xl5">
		<PageLinks />
	</section>
	<nav class="mt_xl3" style:--font_size="var(--font_size_lg)">
		<Breadcrumb />
	</nav>
	<section class="mt_xl3 mb_xl9">
		<DocsFooter repo_url={site.repo_url} root_url={FUZ_DEV_URL} />
	</section>
</main>

<!-- TODO a 404 page for the blog, needs to work with prerendering -->
