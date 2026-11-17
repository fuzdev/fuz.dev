<script lang="ts">
	// import LibrarySummary from '@fuzdev/fuz_ui/LibrarySummary.svelte';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import { site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import { FUZ_DEV_URL } from '@fuzdev/fuz_ui/constants.ts';
	import EcosystemLinksPanel from '@fuzdev/fuz_ui/EcosystemLinksPanel.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';
	import { asset, resolve } from '$app/paths';

	import PageLinks from '../PageLinks.svelte';

	const site = site_context.get();

	// TODO standardize
</script>

<svelte:head>
	<title>about Fuz</title>
</svelte:head>

<main class="width_atmost_md pb_xl9">
	<nav class="box mt_xl3" style:--font_size="var(--font_size_lg)">
		<Breadcrumb />
	</nav>
	<section class="box">
		<header class="box pt_xl">
			<Svg data={logo_fuz} size="var(--icon_size_xl)" />
			<h1 class="mt_xl2">fuz.dev</h1>
		</header>
	</section>
	<section>
		<div class="panel pt_md pl_md pr_xl pb_xl shadow_bottom_sm">
			<div class="pt_xs pl_xs pr_md pb_md shadow_xs border_radius_md">
				<div class="panel p_xl shadow_inset_top_xs shade_00">
					<p>
						Fuz is a free software stack for human agency - see
						<a href={resolve('/stack')}>the stack</a> and
						<a href={resolve('/blog/1-fuz-is-a-free-software-stack-for-human-agency')}>
							intro post
						</a>.
					</p>
					<ul>
						<li>
							built full-time in public since 2019 by
							<a href="https://www.ryanatkn.com/">Ryan Atkinson</a>
						</li>
						<li>
							noncommercial:
							<ul>
								<li>no investors or shareholders</li>
								<li>self-funded so far</li>
								<li>
									the plan is to fund it transparently with public
									<a href="https://www.ryanatkn.com/funding">donations</a>
								</li>
							</ul>
						</li>
						<li>
							licensed with the public-domain-equivalent
							<a href="https://spdx.org/licenses/0BSD.html">0BSD</a>
						</li>
						<li>
							pre-stable:
							<ul>
								<li>breaking changes without deprecation periods</li>
								<li>see each package's changelog</li>
							</ul>
						</li>
						<li>
							this site:
							<ul>
								<li>static, built with Fuz</li>
								<li>no analytics or tracking</li>
								<li><a href={site.repo_url}>source</a></li>
							</ul>
						</li>
						<li>
							links:
							<ul>
								<li>
									GitHub as <a rel="me" href="https://github.com/fuzdev">@fuzdev</a>, with
									<a href="https://github.com/orgs/fuzdev/discussions">discussions</a>
								</li>
								<li>Bluesky as <a rel="me" href="https://bsky.app/profile/fuz.dev">@fuz.dev</a></li>
								<li>
									the <a href={resolve('/blog')}>blog</a> and its
									<a href={asset('blog/feed.xml')}>feed</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<section class="box row_wrap gap_xl2">
		<PageLinks />
	</section>
	<!-- <section class="box mb_lg">
		<div class="panel p_lg width_atmost_md">
			<LibrarySummary {library} />
		</div>
	</section> -->
	<EcosystemLinksPanel />
	<section class="box">
		<DocsFooter repo_url={site.repo_url} root_url={FUZ_DEV_URL} />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
</style>
