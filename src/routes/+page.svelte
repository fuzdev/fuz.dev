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
						Fuz is a zippy stack for autonomy. Today Fuz has a collection of libraries for making
						modern websites with TypeScript, CSS, Svelte, and SvelteKit, and soon they'll be joined
						by native tools written in Rust.
					</p>
					<p>
						Fuz aims to resist <a
							href="https://en.wikipedia.org/wiki/Enshittification"
							rel="noopener">enshittification</a
						>
						by having no investors or profit motive, so the intent is to form a nonprofit; but it's a
						road to get there, and a community would need to form first. This website will eventually
						have community spaces, for now see the
						<a href="https://github.com/fuzdev/fuz.dev/discussions" rel="noopener"
							>GitHub discussions</a
						> to follow along and maybe help out.
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
