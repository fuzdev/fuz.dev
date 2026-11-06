import type { BlogConfig } from '@fuzdev/fuz_blog/blog_config.ts';

export const blogs: Array<BlogConfig> = [
	{
		dirname: 'blog',
		feed: {
			title: 'fuz.dev blog',
			id: 'https://www.fuz.dev/blog',
			home_page_url: 'https://www.fuz.dev/blog',
			description: 'writing about Fuz, a free software stack for human agency',
			icon: 'https://www.fuz.dev/favicon.png',
			favicon: 'https://www.fuz.dev/favicon.png',
			author: {
				name: 'Ryan Atkinson',
				url: 'https://www.ryanatkn.com/',
				email: 'mail@ryanatkn.com'
			}
		}
	}
];
