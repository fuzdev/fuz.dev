<script lang="ts">
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import ProjectLinks from '@fuzdev/fuz_ui/ProjectLinks.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';
	import { MAIN_HEADER_MARGIN_TOP } from '@fuzdev/fuz_ui/constants.ts';
</script>

<main class="box width:100%">
	<div class="box width_atmost_md mb_xl9">
		<section class="box">
			<h1 class="mb_sm" style:margin-top={MAIN_HEADER_MARGIN_TOP}>fuz</h1>
			<div class="box mb_lg"><Svg data={logo_fuz} size="var(--icon_size_xl2)" /></div>
			<blockquote class="unstyled panel p_sm shadow_bottom_sm px_xl 16shade_05 mb_xl3">
				friendly user zystem 🦋
			</blockquote>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_atmost_sm panel p_lg shadow_inset_xs shade_00">
					<p>
						Fuz is a zippy stack for human agency. What that means is for you to decide! Today Fuz
						has a collection of libraries for making modern websites with TypeScript, CSS, Svelte,
						and SvelteKit, and soon they'll be joined by native tools written in Rust. It's free
						software all the way down.
					</p>
					<p>
						Fuz has been quietly built in public full-time since 2019. The project has no
						shareholders or profit motive, and the plan is to have nonprofit stewardship; but it's a
						road to get there, and a community would have to form first. This website will
						eventually have community spaces; for more see
						<a href="https://github.com/fuzdev/fuz.dev/blob/main/CONTRIBUTING.md" rel="noopener">
							CONTRIBUTING.md
						</a>
						and the fuzdev org
						<a href="https://github.com/orgs/fuzdev/discussions">discussions on GitHub</a>.
					</p>
				</div>
			</div>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<ProjectLinks />
		</section>
		<section>
			<DocsFooter repo_url="https://github.com/fuzdev" />
		</section>
	</div>
</main>
