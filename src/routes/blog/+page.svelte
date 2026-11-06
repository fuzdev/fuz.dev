<script lang="ts">
	import BlogPostList from '@fuzdev/fuz_blog/BlogPostList.svelte';

	import PageLinks from '../PageLinks.svelte';
	import { feed } from './feed.ts';
</script>

<svelte:head>
	<title>{feed.title}</title>
</svelte:head>

<BlogPostList {feed} />
<section class="box row flex-wrap:wrap gap_xl2 mb_xl7">
	<PageLinks />
</section>
