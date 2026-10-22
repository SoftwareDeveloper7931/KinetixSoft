import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { ALL_POSTS, getPostBySlug } from "@/data/blog-posts";

export async function generateStaticParams() {
  return ALL_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const canonicalUrl = `https://kinetixsoft.com/blog/${post.slug}`;
  const ogImage = post.heroImage
    ? `https://kinetixsoft.com${post.heroImage}`
    : "https://kinetixsoft.com/og-default.png";

  return {
    title: `${post.title} — KinetixSoft`,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.isoDate,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Find 3 related posts (prefer same category, excluding current)
  const relatedPosts = ALL_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.heroImage
      ? `https://kinetixsoft.com${post.heroImage}`
      : "https://kinetixsoft.com/og-default.png",
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://kinetixsoft.com",
    },
    publisher: {
      "@type": "Organization",
      name: "KinetixSoft",
      url: "https://kinetixsoft.com",
      logo: {
        "@type": "ImageObject",
        url: "https://kinetixsoft.com/logo.png",
      },
    },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kinetixsoft.com/blog/${post.slug}`,
    },
    url: `https://kinetixsoft.com/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://kinetixsoft.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://kinetixsoft.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kinetixsoft.com/blog/${post.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-jet text-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <article className="pt-36 pb-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors text-white/50 hover:text-cerulean"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-mono px-3 py-1 rounded-full border border-cerulean/30 bg-cerulean/10 text-cerulean font-semibold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
            <Calendar className="w-3.5 h-3.5 text-cerulean" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-white/50 font-mono">
            <Clock className="w-3.5 h-3.5 text-neon-rose" />
            {post.readTime}
          </span>
        </div>

        {/* Post Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white tracking-tight">
          {post.title}
        </h1>

        {/* Featured Hero Image */}
        {post.heroImage && (
          <div className="my-8 rounded-2xl overflow-hidden border border-jet-border shadow-2xl bg-jet-surface">
            <img
              src={`${post.heroImage}?v=2`}
              alt={post.title}
              className="w-full h-auto max-h-[460px] object-cover"
              loading="eager"
            />
          </div>
        )}

        {/* Post Content */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-white prose-a:text-cerulean prose-a:underline hover:prose-a:text-neon-rose prose-ul:text-white/70 prose-li:my-1.5 prose-code:text-cerulean prose-code:bg-jet-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:border prose-code:border-jet-border"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* In-Article Conversion Card */}
        <div className="my-14 p-8 rounded-2xl bg-jet-surface/90 border border-jet-border relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-48 bg-cerulean/15 blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-rose/15 blur-[60px] pointer-events-none" />

          <div className="flex items-start gap-4 relative z-10">
            <div className="w-11 h-11 rounded-xl bg-cerulean/10 border border-cerulean/30 flex items-center justify-center shrink-0 text-cerulean shadow-sm shadow-cerulean/20">
              <Sparkles className="w-5 h-5 text-neon-rose" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                Planning to build an application like this?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                KinetixSoft designs, builds, and launches production-grade mobile and web applications on FlutterFlow, Bubble, Retool, Lovable, and Podio. We deliver 40–60% faster and more reliably than traditional agencies.
              </p>
              <Link href="/contact">
                <button className="btn-duo">
                  Book a Free Scoping Call <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-14 pt-8 border-t border-jet-border">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center font-bold text-base rounded-xl bg-gradient-to-br from-cerulean to-neon-rose text-white shadow-md">
              K
            </div>
            <div>
              <div className="text-base font-semibold text-white/95">{post.author}</div>
              <div className="text-xs text-white/50">
                Engineering Studio •{" "}
                <Link href="/" className="text-cerulean hover:text-neon-rose hover:underline transition-colors">
                  kinetixsoft.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-jet-border">
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Related Guides & Blueprints</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-4 rounded-xl bg-jet-surface/80 border border-jet-border hover:border-cerulean/50 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {related.heroImage && (
                      <div className="w-full h-28 overflow-hidden rounded-lg mb-3 bg-jet">
                        <img
                          src={related.heroImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-cerulean/20 bg-cerulean/10 text-cerulean font-semibold">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-semibold text-white/90 mt-2 line-clamp-2 group-hover:text-cerulean transition-colors">
                      {related.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-white/50 font-mono mt-4 pt-2 border-t border-jet-border">
                    <span>{related.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cerulean group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
