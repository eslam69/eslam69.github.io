import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { myName } from './index.astro';
import { WebsiteTitle } from "../pages/index.astro";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: `${WebsiteTitle}`,
    description: 'Thoughts, tutorials, and insights about technology and software development.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `
      <language>en-us</language>
      <image>
        <url>${context.site}/favicon_io/android-chrome-512x512.png</url>
        <title>${myName}'s Blog</title>
        <link>${context.site}</link>
      </image>
    `,
  });
}
