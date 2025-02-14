import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { myName } from './index.astro';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: `${myName}'s Blog`,
    description: 'Thoughts, tutorials, and insights about technology and software development.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
