import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const tutorials = await getCollection('tutorials');
  return rss({
    title: 'KinetixSoft FlutterFlow Tutorials',
    description: 'Master FlutterFlow app development with in-depth engineering tutorials on Firebase, Supabase, Stripe, AI chatbots, and custom Dart code.',
    site: context.site || 'https://kinetixsoft.com',
    items: tutorials.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.datePublished),
      description: post.data.description,
      link: `/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
