import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { insights, getInsightBySlug } from "@/lib/insights"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsightBySlug(slug)
  
  if (!insight) {
    return { title: "Insight Not Found" }
  }

  return {
    title: `${insight.title} | Kontorva Insights`,
    description: insight.excerpt,
  }
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsightBySlug(slug)

  if (!insight) {
    notFound()
  }

  const relatedInsights = insights
    .filter(i => i.slug !== insight.slug && i.category === insight.category)
    .slice(0, 2)

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-12">
            <Link 
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase">
                  {insight.category}
                </span>
                <span className="text-sm text-muted-foreground">{insight.date}</span>
                <span className="text-sm text-muted-foreground">{insight.readTime}</span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-light tracking-tight leading-tight text-balance">
                {insight.title}
              </h1>
              
              <p className="text-xl font-light text-muted-foreground mt-6 leading-relaxed">
                {insight.excerpt}
              </p>
              
              <div className="flex items-center gap-4 mt-10 pt-10 border-t border-border">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/30 to-accent/50 flex items-center justify-center text-lg font-medium">
                  {insight.author.initials}
                </div>
                <div>
                  <p className="text-base font-medium">{insight.author.name}</p>
                  <p className="text-sm text-muted-foreground">{insight.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="border-b border-border">
          <div className="grid lg:grid-cols-4 gap-12 px-6 lg:px-12 py-16 lg:py-24">
            {/* Sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 border border-border text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-10 pt-10 border-t border-border">
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
                    Share
                  </p>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                    <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              <div className="max-w-2xl">
                <div className="space-y-6">
                  {insight.content.map((paragraph, index) => (
                    <p 
                      key={index}
                      className="text-base leading-relaxed text-foreground/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Related Articles */}
        {relatedInsights.length > 0 && (
          <section className="border-b border-border">
            <div className="px-6 lg:px-12 py-16 lg:py-24">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                Related Articles
              </p>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-12">
                Continue reading
              </h2>
              
              <div className="grid md:grid-cols-2 gap-px bg-border">
                {relatedInsights.map((related) => (
                  <Link 
                    key={related.slug}
                    href={`/insights/${related.slug}`}
                    className="bg-background p-8 lg:p-10 flex flex-col group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium tracking-widest uppercase text-accent">
                        {related.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{related.date}</span>
                    </div>
                    <h3 className="text-xl font-medium leading-tight group-hover:text-accent transition-colors flex-1">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      {related.excerpt}
                    </p>
                    <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                      <div className="w-8 h-8 bg-secondary flex items-center justify-center text-xs font-medium">
                        {related.author.initials}
                      </div>
                      <span className="text-sm text-muted-foreground">{related.author.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-secondary">
          <div className="px-6 lg:px-12 py-16 lg:py-20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-light tracking-tight">
                  Have a project in mind?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Let&apos;s discuss how we can help build your next system.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors group"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
