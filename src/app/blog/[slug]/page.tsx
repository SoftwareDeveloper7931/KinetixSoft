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
    <div className="min-h-screen bg-[#0B0F19]">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <article className="pt-36 pb-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors text-[#8A93A3] hover:text-[#E9EBEF]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Post Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`text-xs px-3 py-1 rounded-full border font-semibold ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8A93A3]">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#8A93A3]">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Post Title */}
        <h1
          className="text-3xl md:text-5xl mb-8 leading-tight text-[#E9EBEF]"
          style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontWeight: 500 }}
        >
          {post.title}
        </h1>

        {/* Featured Hero Image */}
        {post.heroImage && (
          <div className="my-8 rounded-xl overflow-hidden border border-[#232A36] shadow-2xl bg-[#12161F]">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-auto max-h-[460px] object-cover"
              loading="eager"
            />
          </div>
        )}

        {/* Post Content */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#E9EBEF] prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:text-[#8A93A3] prose-p:leading-relaxed prose-p:mb-5 prose-strong:text-[#D1D5DB] prose-a:text-[#4A5FBD] prose-a:underline hover:prose-a:text-[#6379E0] prose-ul:text-[#8A93A3] prose-li:my-1.5 prose-code:text-[#D1D5DB] prose-code:bg-[#1E2533] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* In-Article Conversion Card */}
        <div className="my-14 p-6 md:p-8 rounded-xl bg-[#12161F] border border-[#4A5FBD]/30 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#4A5FBD]/20 border border-[#4A5FBD]/30 flex items-center justify-center shrink-0 text-[#4A5FBD]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#E9EBEF] mb-2">
                Planning to build an app like this?
              </h3>
              <p className="text-sm text-[#8A93A3] leading-relaxed mb-4">
                KinetixSoft designs, builds, and launches production-grade mobile and web applications on FlutterFlow, Bubble, Retool, Lovable, and Podio. We deliver 40–60% faster and more affordably than traditional agencies.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#4A5FBD] hover:bg-[#5A6FCC] transition-colors"
              >
                Book a Free Scoping Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-14 pt-8 border-t border-[#232A36]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center font-bold text-base rounded-lg bg-[#4A5FBD] text-[#E9EBEF]">
              K
            </div>
            <div>
              <div className="text-base font-semibold text-[#E9EBEF]">{post.author}</div>
              <div className="text-xs text-[#8A93A3]">
                App Development Studio •{" "}
                <Link href="/" className="text-[#4A5FBD] hover:underline">
                  kinetixsoft.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#232A36]">
            <h3 className="text-xl font-semibold text-[#E9EBEF] mb-6">Related Guides & Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="p-3.5 rounded-lg bg-[#12161F] border border-[#232A36] hover:border-[#4A5FBD]/40 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    {related.heroImage && (
                      <div className="w-full h-28 overflow-hidden rounded-md mb-3 bg-[#0B0F19]">
                        <img
                          src={related.heroImage}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${related.categoryColor}`}>
                      {related.category}
                    </span>
                    <h4 className="text-sm font-medium text-[#E9EBEF] mt-2 line-clamp-2 group-hover:text-[#4A5FBD] transition-colors">
                      {related.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#8A93A3] mt-4 pt-2 border-t border-[#232A36]/60">
                    <span>{related.readTime}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A5FBD] group-hover:translate-x-1 transition-transform" />
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
