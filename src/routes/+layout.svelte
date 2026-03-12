<script lang="ts">
	import '$routes/fuz.css';

	import type {Snippet} from 'svelte';
	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import ContextmenuRoot from '@fuzdev/fuz_ui/ContextmenuRoot.svelte';
	import {library_context, Library} from '@fuzdev/fuz_ui/library.svelte.js';
	import Spiders from '@fuzdev/fuz_ui/Spiders.svelte';

	import {library_json} from './library.js';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	library_context.set(new Library(library_json));
</script>

<svelte:head>
	<title>Fuz - friendly user zystem</title>
</svelte:head>

<ThemeRoot>
	<ContextmenuRoot>
		{@render children()}
		<Spiders />
	</ContextmenuRoot>
</ThemeRoot>
