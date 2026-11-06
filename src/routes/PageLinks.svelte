<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Card from '@fuzdev/fuz_ui/Card.svelte';

	const pathname = $derived(page.url.pathname);

	const about_path = resolve('/about');
	const blog_path = resolve('/blog');
	const contributing_path = resolve('/contributing');
</script>

<!-- each card hides on its own page (and the blog card on its posts too) -->
{#if pathname !== about_path}
	<Card href={about_path} icon="🪶" align="end">about</Card>
{/if}
{#if pathname !== blog_path && !pathname.startsWith(blog_path + '/')}
	<Card href={blog_path} icon="🪧" align="end">blog</Card>
{/if}
{#if pathname !== contributing_path}
	<Card href={contributing_path} icon="🌱" align="end">contributing</Card>
{/if}
