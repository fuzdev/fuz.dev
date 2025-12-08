<script lang="ts">
	import {resolve} from '$app/paths';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import ProjectLinks from '@fuzdev/fuz_ui/ProjectLinks.svelte';
	import {library_context} from '@fuzdev/fuz_ui/library.svelte.js';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import {logo_fuz} from '@fuzdev/fuz_ui/logos.js';
	import {MAIN_HEADER_MARGIN_TOP} from '@fuzdev/fuz_ui/constants.js';

	const library = library_context.get();
</script>

<main class="box width_100">
	<div class="box width_upto_md mb_xl9">
		<section class="box">
			<h1 class="mb_sm" style:margin-top={MAIN_HEADER_MARGIN_TOP}>fuz</h1>
			<div class="box mb_lg"><Svg data={logo_fuz} size="var(--icon_size_xl2)" /></div>
			<blockquote class="shadow_bottom_sm px_xl bg mb_xl3">friendly user zystem 🦋</blockquote>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_upto_sm panel p_lg shadow_inset_xs bg">
					<p>
						Fuz is a zippy stack and forge for the commons. Today Fuz has a collection of libraries
						for making modern websites with TypeScript, CSS, Svelte, and SvelteKit/Vite, and soon
						they'll be joined by native tools for sovereign software development, written in Rust.
					</p>
				</div>
			</div>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<ProjectLinks />
		</section>
		<section>
			<DocsFooter {library}>
				{#snippet logo_header()}
					<a href={resolve('/about')} class="mb_xs">about</a>
				{/snippet}
			</DocsFooter>
		</section>
	</div>
</main>
