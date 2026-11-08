import{C as e,D as t,F as n,G as r,H as i,I as a,J as o,L as s,N as c,R as l,S as u,W as d,Y as f,_ as p,a as m,b as h,h as g,j as _,o as v,q as y,u as b,w as x,z as S}from"../chunks/Di9DarCF.js";import{t as C}from"../chunks/Bymyy9Il.js";import{t as w}from"../chunks/CPpoZQpG.js";import"../chunks/B5dOp42U.js";import{t as T}from"../chunks/BZfsnoB4.js";import"../chunks/CboR_Gcf.js";import{t as E}from"../chunks/DZFva12q.js";var D=x(`<header><h1 class="mt_xl5 mb_lg"> </h1> <p class="mb_xl5"><!></p></header>`);function O(e,t){r(t,!0);var n=D(),i=a(n),s=l(i,!0),f=S(i,2),p=a(f);E(p,{get item(){return t.item}}),o(f),o(n),c(()=>h(s,t.item.title)),u(e,n),d()}var k=x(`<link rel="canonical"/>`),A=x(`<article><!> <!> <!> <!> <!></article>`),j=x(`<div>cannot find post <code> </code></div>`),M=x(`<div class="blog_post width_atmost_md"><!></div>`);function N(y,x){r(x,!0);let C=T.get_maybe(),E=i(()=>x.item??C?.items.find(e=>e.pathname===w.route.id));var D=M();b(`n1wqo0`,r=>{var i=e(),a=s(i),o=e=>{var n=k();c(()=>v(n,`href`,t(E).url)),u(e,n)};g(a,e=>{t(E)&&t(E).pathname===w.route.id&&e(o)}),_(()=>{n.title=x.post.title??``}),u(r,i)});var N=a(D),P=e=>{var n=A();m(n,()=>({...x.attrs}));var r=a(n);O(r,{get item(){return t(E)}});var i=S(r,2);p(i,()=>x.meta??f,()=>t(E),()=>x.post);var s=S(i,2);p(s,()=>x.children);var c=S(s,2);p(c,()=>x.footer??f);var l=S(c,2);p(l,()=>x.comments??f,()=>t(E),()=>x.post),o(n),u(e,n)},F=e=>{var t=j(),n=S(a(t)),r=l(n,!0);o(t),c(()=>h(r,w.route.id)),u(e,t)};g(N,e=>{t(E)?e(P):e(F,-1)}),o(D),u(y,D),d()}var P={title:`Fuz is a free software stack for human agency`,date_published:`2026-11-06T21:15:06.000Z`,date_modified:`2026-11-06T21:15:06.000Z`,summary:`introducing fuz.dev`,tags:[`announcement`]},F=x(`<section><p>Fuz (<a href="https://www.fuz.dev/">fuz.dev</a>) is a free and open source software stack that
			I've been building full-time in public since 2019, to support simple, secure, and optimal
			software for the web and native systems. It has libraries, dev tools, and infra designed for
			self-hosters, devs, and people interested in making software who aren't devs. There's also
			some apps and websites on the way - these motivate everything else, but first I built the
			foundations to age well. The purpose is human agency: I want software one can own, control,
			extend, and swap out unburdened, with polished UX and technical excellence. Fuz has no
			investors and it will remain noncommercial, so it can focus on serving the people who use it.
			I lucked into an opportunity to pursue self-funded work for a substantial period of time, and
			after 7 years I'm announcing the results and continuation of that effort. By the end of 2027,
			Fuz will either become a hobby or my livelihood.</p> <p>For more about my background, see my personal blog's <a href="https://www.ryanatkn.com/blog/1-im-building-free-software-for-human-agency">intro post</a>. The short version is that I've been working in startups building on open source since
			2011, and I started Fuz because I love free software and its potential to improve our lives.
			Follow this blog's <a>feed</a> for more.</p> <h2>The Fuz stack</h2> <p>Fuz exists to accelerate the production of excellent software, for all kinds of purposes and
			platforms. Today it can ship to the web, and also native platforms with web-only GUI; mobile
			and native GUI are planned. The stack's third-party dependencies are opinionated to enable
			sharing code and patterns across projects:</p> <ul><li>TypeScript and Rust, with two compatible server frameworks building on Hono (TS) and Axum
				(Rust)</li> <li>Svelte with SvelteKit, for UI deployed statically or dynamically, local-first or cloud, SPA
				or SSR</li> <li>Postgres with embeddable support</li> <li>Linux is primary but most tools work with macOS and Windows</li></ul> <p>Using the stack as a developer is not an all-or-nothing proposition: although it's designed
			for cohesion, many of its parts can be used in isolation or swapped for similar libraries. For
			example, fuz_css distills my 15 years of professional frontend experience and taste into a CSS
			framework, and although some of my frontend libraries depend on it, others make it optional
			(where doing so doesn't degrade integrated usage), so you could choose Tailwind and still use
			some parts of Fuz's frontend along with the rest of Fuz. The repos are separated by concern so
			you can individually use or fork them without the gravity of a monorepo. The intent is to
			lower the risks of adoption, streamline onboarding to the parts you care about, and keep exit
			straightforward.</p> <p>The foundational first-party repos include:</p> <ul><li><strong><a href="https://app.fuz.dev/">fuz_app</a> and <a href="https://github.com/fuzdev/fuz">fuz</a></strong> - a fullstack app library for TypeScript with a Rust twin, for building servers in
				either language or both if you're so inclined; the fuz repo also has low-level library
				crates, the <code>fuz</code> CLI, and <code>fuzd</code> daemon</li> <li><strong><a href="https://template.fuz.dev/">fuz_template</a></strong> - starter repo for web
				apps with SvelteKit, native servers and tools with Rust, or both (web-only GUI for now,
				native in the future)</li> <li><strong><a href="https://css.fuz.dev/">fuz_css</a></strong> - semantic-first CSS framework
				and design system, with flexible custom theming</li> <li><strong><a href="https://ui.fuz.dev/">fuz_ui</a></strong> - Svelte component library and
				frontend helpers</li> <li><strong><a href="https://tsv.fuz.dev/">tsv</a></strong> - language toolchain for
				TypeScript/JS, CSS, and Svelte in Rust, currently ships parsers and formatters</li> <li><strong><a href="https://gro.fuz.dev/">gro</a></strong> - security-first JS runtime and
				toolchain on V8, the first Fuz repo, started in 2019 as a task runner that wraps Node and
				used every workday since. Since <a href="https://deno.com/blog/cloudflare">Deno's acquisition by Cloudflare</a> and its
				announced EOL in October 2027, I'm experimenting with making Gro its own <a href="https://github.com/fuzdev/gro/blob/main/src/docs/runtime.md">runtime</a> that
				builds on Deno's foundations.</li> <li><strong><a href="https://github.com/fuzdev/pglet">pglet</a></strong> - vibecoded embeddable
				postgres for going places the elephant can't fit, and faster tests; today it runs fuz_app's
				db tests several times faster than PostgreSQL and PGlite, but it's not an alternative to
				them</li> <li><strong><a href="https://zap.fuz.dev/">zap</a></strong> - convergent machine-state
				management: set up and ship to Linux machines from TypeScript</li> <li><strong><a href="https://github.com/fuzdev/docs.fuz.dev/tree/main/skills/fuz-stack">fuz-stack</a></strong> - an <a href="https://agentskills.io/">agent skill</a> with the stack's coding conventions
				and patterns for TypeScript, Svelte, and Rust</li></ul> <p>For the full picture including third-party software, see <a href="https://www.fuz.dev/stack">fuz.dev/stack</a>. The code is at <a href="https://github.com/fuzdev">github.com/fuzdev</a>, and licensed with the
			public-domain-equivalent 0BSD. As the stack has matured, I'm starting to work on apps and
			websites for end-users, some in collaboration with other people. More about those later.</p> <h2>The AI elephant in the room</h2> <p>AI is reshaping the software world, and this project is driven by a person who uses AI with
			concern for its widespread harms to culture, livelihoods, and the environment. I built Fuz for
			6 years by hand, and then in 2025 I started using agentic development tools, and I have been a
			heavy Claude Code user since. Looking at the list of projects above, the scope is well beyond
			what I imagined in 2019, but in 2026 I don't see it as absurdly over-reaching. Design is the
			hard and fun part to me, and AI is a big lever. I'm choosing to use AI in service of my
			values, which include self-determination, personal and societal and environmental health, and
			making high quality information and tools freely available.</p> <p>For people who want software to improve our lives, AI unlocks new opportunities. I agree with
			those who say we are experiencing the transition to software abundance. Closed models can
			produce open software, and using AI doesn't imply central corporate control: open models
			running on private hardware can produce software that humans could not feasibly build due to
			cost, and costs continue to shrink. Of course, many people will continue to use exploitative
			software as they did before LLMs, but free alternatives are increasingly available, and
			quality is up to the developer. Fuz is my attempt to put abundant software to good use.</p> <h2>Going forward</h2> <p>I set out to make software under a different set of incentives than the norm, aligning
			directly with the people who use it, without shareholders as the supreme customer, to produce
			the best software I could imagine. The libraries are available for early adopters, but only a
			few are ready for production, and I'll share apps made with Fuz when they're ready. Fuz will
			not operate services beyond its community websites, due to costs and complicated incentives,
			simplifying its path to sustainability.</p> <p>I'm seeking design collaborators to help shape the direction Fuz goes. I think the project
			succeeds if a community forms and deliberates through important design choices,
			collaboratively in public. I'm committed to working on Fuz full-time through 2027, and in 2028
			I will reassess based on <a href="https://www.ryanatkn.com/funding">funding</a> and user
			feedback. To contribute, no expertise is needed, only a perspective you want to share. When
			time permits, I hope to build a community site with the stack to supplement GitHub
			discussions. In the meantime you're invited to join me on GitHub to follow along or help out.</p> <ul><li><a href="https://www.fuz.dev/contributing">fuz.dev/contributing</a> - discussions/issues/PRs
				are all open</li> <li><a href="https://www.fuz.dev/stack">fuz.dev/stack</a> - technical overview</li> <li>GitHub as <a rel="me" href="https://github.com/fuzdev">@fuzdev</a></li> <li>Bluesky as <a rel="me" href="https://bsky.app/profile/fuz.dev">@fuz.dev</a></li> <li>my personal blog's <a href="https://www.ryanatkn.com/blog/1-im-building-free-software-for-human-agency">intro post</a></li></ul></section>`);function I(e,t){r(t,!0),N(e,{get post(){return P},children:(e,t)=>{var n=F(),r=S(a(n),2),i=S(a(r),3);y(),o(r),y(28),o(n),c(e=>v(i,`href`,e),[()=>C(`blog/feed.xml`)]),u(e,n)},$$slots:{default:!0}}),d()}export{I as component};