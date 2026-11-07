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
		make_layers,
		fuz_layers,
		foundation_layers,
		type StackLayer,
		type StackPiece
	} from './stack.ts';

	const site = site_context.get();
</script>

<svelte:head>
	<title>the Fuz stack</title>
</svelte:head>

{#snippet chip(piece: StackPiece)}
	{#if piece.href}
		<!-- external sites; the resolve() rule targets internal nav -->
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class={['chip', 'sized_lg', piece.color]} href={piece.href} rel="noopener">
			{piece.label}{#if piece.note}<small class="text_50">&nbsp;({piece.note})</small>{/if}
		</a>
	{:else}
		<span class={['chip', 'sized_lg', piece.color]}>
			{piece.label}{#if piece.note}<small class="text_50">&nbsp;({piece.note})</small>{/if}
		</span>
	{/if}
{/snippet}

{#snippet band(title: string, layers: ReadonlyArray<StackLayer>)}
	<h2 class="band-title">{title}</h2>
	{#each layers as layer (layer.name)}
		<div class="stack-layer panel p_md">
			<div class="head column gap_xs2">
				<h3 class="mt_0 mb_0">{layer.name}</h3>
				<p class="text_70">{layer.blurb}</p>
			</div>
			<div class="pieces row gap_xs flex-wrap:wrap">
				{#each layer.pieces as piece (piece.label)}
					{@render chip(piece)}
				{/each}
			</div>
		</div>
	{/each}
{/snippet}

<main class="box width:100%">
	<div class="box width_atmost_md mb_xl9">
		<section class="box">
			<header class="box pt_xl">
				<Svg data={logo_fuz} size="var(--icon_size_xl)" />
				<h1 class="mt_xl2">the Fuz stack</h1>
			</header>
			<div class="mb_lg p_xs2 shadow_md border_radius_sm">
				<div class="width_atmost_sm panel p_lg shadow_inset_xs shade_00">
					<p>
						Fuz is a free software stack designed for human agency. It includes tools and libraries
						written in TypeScript, CSS, Svelte, and Rust, building on open web and native
						foundations.
					</p>
					<p>
						Fuz provides a lot of software and bakes in some opinions, but it's designed for
						modularity, so you can use a single piece or whichever parts fit your project. Most of
						it is pre-1.0 and changes without deprecation; a few libraries are ready for production,
						and the notes mark what's earliest. All of
						<a href="https://github.com/fuzdev">the code on GitHub</a> is licensed with the
						public-domain-equivalent 0BSD. For the story behind it, read the
						<a href={resolve('/blog/1-fuz-is-a-free-software-stack-for-human-agency')}>
							intro post
						</a>.
					</p>
				</div>
			</div>
		</section>

		<section class="stack band-make mb_lg">
			{@render band('what you make', make_layers)}
		</section>

		<section class="stack band-fuz mb_lg">
			{@render band('what Fuz makes', fuz_layers)}
		</section>

		<section class="stack band-foundations mb_xl2">
			{@render band('what it rests on', foundation_layers)}
		</section>

		<section class="width_atmost_sm">
			<aside>
				<p>
					Fuz code runs in the browser, on JS servers, and natively in Rust, locally or in the
					cloud. The design bridges them with one data model: mutable <strong>cells</strong> that
					reference immutable <strong>facts</strong> (content-addressed bytes), changed by
					<strong>actions</strong> (schema-validated, serializable calls). The same model shows up
					in each environment, shaped to fit it.
				</p>
			</aside>
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
	.band-title {
		margin-bottom: var(--space_sm);
	}
	.stack {
		display: flex;
		flex-direction: column;
		gap: var(--space_xs2);
		width: 100%;
	}
	.stack-layer {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--space_md);
		/* accent the left edge per band so the tower reads as stacked tiers */
		border-left: var(--border_width_3) var(--border_style) var(--border_color);
	}
	.stack-layer .head {
		flex: 1 1 18rem;
	}
	.stack-layer .pieces {
		flex: 1 1 14rem;
		justify-content: flex-end;
	}
	.band-make .stack-layer {
		border-left-color: var(--palette_b_50);
	}
	.band-fuz .stack-layer {
		border-left-color: var(--palette_a_50);
	}
	.band-foundations .stack-layer {
		border-left-color: var(--palette_f_50);
	}
</style>
