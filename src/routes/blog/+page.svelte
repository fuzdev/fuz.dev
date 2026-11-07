<script lang="ts">
	import BlogPostList from '@fuzdev/fuz_blog/BlogPostList.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';

	import { feed } from './feed.ts';
</script>

<svelte:head>
	<title>{feed.title}</title>
</svelte:head>

<header class="box pt_xl">
	<Svg data={logo_fuz} size="var(--icon_size_xl)" />
</header>
<BlogPostList {feed} />
