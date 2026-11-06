<script lang="ts">
	import type { Snippet } from 'svelte';
	import { blog_feed_context } from '@fuzdev/fuz_blog/blog_feed_context.ts';

	import { feed } from './feed.ts';

	const { children }: { children: Snippet } = $props();

	// `BlogPost` in this subtree reads the blog's feed from context
	blog_feed_context.set(feed);
</script>

{@render children()}
