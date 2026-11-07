<script lang="ts">
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import { site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import { FUZ_DEV_URL } from '@fuzdev/fuz_ui/constants.ts';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import { logo_fuz } from '@fuzdev/fuz_ui/logos.ts';
	import { resolve } from '$app/paths';

	import PageLinks from '../PageLinks.svelte';
	import {
		stack_layers,
		foundation_groups,
		STACK_LANGUAGES,
		STACK_STATUSES,
		type StackBadge,
		type StackPiece,
		type StackStatus
	} from './stack.ts';

	const site = site_context.get();

	// legend shows only the tiers the page uses, in declaration order
	const used_statuses: Array<StackStatus> = (
		Object.keys(STACK_STATUSES) as Array<StackStatus>
	).filter((status) => stack_layers.some((layer) => layer.pieces.some((p) => p.status === status)));
</script>

<svelte:head>
	<title>the Fuz stack</title>
</svelte:head>

{#snippet badge(b: StackBadge)}
	<span class={['chip', 'sized_sm', b.color]} title={b.description}>{b.label}</span>
{/snippet}

{#snippet piece_row(piece: StackPiece)}
	<li class="piece">
		<div class="piece-head">
			<!-- external sites; the resolve() rule targets internal nav -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a class="piece-name" href={piece.site ?? piece.repo} rel="noopener">{piece.name}</a>
			{@render badge(STACK_STATUSES[piece.status])}
			{#each piece.languages as language (language)}
				{@render badge(STACK_LANGUAGES[language])}
			{/each}
		</div>
		<p class="piece-tagline text_80">
			{piece.tagline}
			{#if piece.site}
				<small class="text_50">
					·
					<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a href={piece.repo} rel="noopener">repo</a>
				</small>
			{/if}
		</p>
	</li>
{/snippet}

<main class="box width:100%">
	<div class="box width_atmost_md mb_xl9">
		<section class="box">
			<header class="box pt_xl">
				<Svg data={logo_fuz} size="var(--icon_size_xl)" />
				<h1 class="mt_xl2">the Fuz stack</h1>
			</header>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_atmost_md panel p_lg shadow_inset_xs shade_00">
					<p>
						Fuz is a free software stack designed for human agency: tools and libraries in
						TypeScript, CSS, Svelte, and Rust, building on open web and native foundations. It bakes
						in some opinions but is designed for modularity, so you can use a single piece or
						whichever parts fit your project. All of the
						<a href="https://github.com/fuzdev">code on GitHub</a> is licensed with the
						public-domain-equivalent 0BSD. For the story behind it, read the
						<a href={resolve('/blog/1-fuz-is-a-free-software-stack-for-human-agency')}>
							intro post
						</a>.
					</p>
					<p>
						Everything is pre-1.0 and changes without deprecation. Each piece below is marked by
						where it stands:
					</p>
					<ul class="legend unstyled">
						{#each used_statuses as status (status)}
							<li>
								{@render badge(STACK_STATUSES[status])}
								<span class="text_80">{STACK_STATUSES[status].description}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="width:100%">
			{#each stack_layers as layer (layer.name)}
				<div class="panel p_md mb_xl">
					<h2 class="mb_lg">{layer.name}</h2>
					<p class="text_80">{layer.blurb}</p>
					<ul class="pieces unstyled">
						{#each layer.pieces as piece (piece.name)}
							{@render piece_row(piece)}
						{/each}
					</ul>
				</div>
			{/each}

			<div class="panel p_md">
				<h2 class="mb_lg">what it rests on</h2>
				<p class="text_80">Open technologies Fuz builds on, none of them Fuz's own.</p>
				<ul class="unstyled">
					{#each foundation_groups as group (group.name)}
						<li class="foundation">
							<h3 class="mt_0 mb_xs">{group.name}</h3>
							<div class="row gap_xs2 flex-wrap:wrap mb_xs2">
								{#each group.items as item (item)}
									<span class="chip sized_sm">{item}</span>
								{/each}
							</div>
							<p class="text_70 mb_0">{group.blurb}</p>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section class="box row flex-wrap:wrap gap_xl2">
			<PageLinks />
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
	.legend li {
		display: flex;
		align-items: baseline;
		gap: var(--space_xs);
		margin-bottom: var(--space_xs2);
	}
	.pieces {
		display: flex;
		flex-direction: column;
	}
	.piece {
		padding: var(--space_sm) 0;
		border-top: var(--border_width_1) var(--border_style) var(--border_color_20);
	}
	.piece:last-child {
		padding-bottom: 0;
	}
	.piece-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space_xs);
	}
	.piece-name {
		font-size: var(--font_size_lg);
		font-weight: 600;
		margin-right: var(--space_xs2);
	}
	.piece-tagline {
		margin: var(--space_xs3) 0 0;
	}
	.foundation {
		padding: var(--space_sm) 0;
		border-top: var(--border_width_1) var(--border_style) var(--border_color_20);
	}
	.foundation:last-child {
		padding-bottom: 0;
	}
</style>
