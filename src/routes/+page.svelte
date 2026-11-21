<script lang="ts">
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import ProjectLinks from '@fuzdev/fuz_ui/ProjectLinks.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';
	import { MAIN_HEADER_MARGIN_TOP } from '@fuzdev/fuz_ui/constants.ts';
	import { resolve } from '$app/paths';

	import PageLinks from './PageLinks.svelte';
</script>

<svelte:head>
	<link rel="me" href="https://bsky.app/profile/fuz.dev" />
</svelte:head>

<main class="box width:100%">
	<div class="box width_atmost_md mb_xl9">
		<section class="box">
			<h1 class="mb_sm" style:margin-top={MAIN_HEADER_MARGIN_TOP}>fuz</h1>
			<div class="box mb_lg"><Svg data={logo_fuz} size="var(--icon_size_xl2)" /></div>
			<blockquote class="unstyled panel p_sm shadow_bottom_sm px_xl shade_05 mb_xl3">
				friendly user zystem 🕸
			</blockquote>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_atmost_sm panel p_lg shadow_inset_xs shade_00">
					<p>
						Fuz is a zippy stack for human agency. What that means is for you to decide! Today Fuz
						has a collection of libraries for making modern websites with TypeScript, CSS, Svelte,
						and SvelteKit, joined by native tools written in Rust - see
						<a href={resolve('/stack')}>the stack</a>. It's free software all the way down.
					</p>
					<p>
						Fuz has been built in public full-time since 2019. The project has
						<a href="https://www.ryanatkn.com/">one maintainer</a>, no shareholders or profit
						motive, and the plan is to fund it transparently with public
						<a href="https://www.ryanatkn.com/funding">donations</a>. This website will eventually
						have community spaces; for now see the
						<a href={resolve('/contributing')}>contributing</a> page and
						<a href={resolve('/blog/1-fuz-is-a-free-software-stack-for-human-agency')}>
							intro post
						</a>.
					</p>
				</div>
			</div>
		</section>
		<section class="box row_wrap gap_xl2">
			<PageLinks />
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<ProjectLinks />
		</section>
		<section>
			<DocsFooter repo_url="https://github.com/fuzdev" />
		</section>
	</div>
</main>
