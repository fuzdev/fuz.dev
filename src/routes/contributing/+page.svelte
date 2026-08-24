<script lang="ts">
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import { site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import { FUZ_DEV_URL } from '@fuzdev/fuz_ui/constants.ts';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';

	const site = site_context.get();
</script>

<svelte:head>
	<title>contributing to Fuz</title>
</svelte:head>

<main class="box width:100%">
	<div class="box width_atmost_md mb_xl9">
		<section class="box">
			<header class="box pt_xl">
				<Svg data={logo_fuz} size="var(--icon_size_xl)" />
				<h1 class="mt_xl2 mb_0">contributing to Fuz</h1>
			</header>
		</section>
		<section class="panel p_lg shadow_inset_xs">
			<p>
				Fuz is an intended nonprofit that stewards a collection of open source free software
				projects. Everyone is welcome to participate.
			</p>
			<p>Contributions to Fuz take many forms in public:</p>
			<ul>
				<li>
					discussions on GitHub - see each repo and the
					<a href="https://github.com/orgs/fuzdev/discussions">fuzdev org discussions</a>
				</li>
				<li>issues for bug reports and triage - when in doubt, prefer discussions over issues</li>
				<li>
					PRs are accepted but are de-emphasized as a form of contribution - Fuz maintainers
					generally value discussions more than code changes (because figuring out what to build is
					harder than implementing, and PRs cost significant time and attention)
				</li>
				<li>Bluesky as <a href="https://bsky.app/profile/fuz.dev">fuz.dev</a></li>
			</ul>
			<p>The Fuz community seeks quality and clarity:</p>
			<ul>
				<li>
					LLMs/AI tool usage is acceptable - please disclose when appropriate (this is always a
					judgment call; err towards transparency)
				</li>
				<li>be aware that submitting posts and PRs costs people's time and attention, and slop is frowned upon</li>
				<li>
					participants in Fuz community spaces are encouraged to stay on topic and bring their
					genuine human perspectives
				</li>
			</ul>
			<p>
				To report a security vulnerability, see
				<a href="https://github.com/fuzdev/.github/blob/main/SECURITY.md">SECURITY.md</a>.
			</p>
			<p>
				The Fuz
				<a href="https://github.com/fuzdev/.github/blob/main/CODE_OF_CONDUCT.md">Code of Conduct</a>
				is the <a href="https://contributor-covenant.org/">Contributor Covenant</a>.
			</p>
		</section>
		<section>
			<div style:--font_size="var(--font_size_lg)">
				<Breadcrumb />
			</div>
		</section>
		<section>
			<DocsFooter repo_url={site.repo_url} root_url={FUZ_DEV_URL} />
		</section>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
