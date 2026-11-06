<script lang="ts">
	import BlogPostList from '@fuzdev/fuz_blog/BlogPostList.svelte';

	import { feed } from './feed.ts';
</script>

<svelte:head>
	<title>{feed.title}</title>
</svelte:head>

<BlogPostList {feed} />
