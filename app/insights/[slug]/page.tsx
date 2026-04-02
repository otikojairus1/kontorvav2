import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { insights, getInsightBySlug } from "@/lib/insights"
import { getInsightVisual } from "@/lib/page-visuals"
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
  const heroImage = getInsightVisual(insight.slug)

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="about-hero-shell border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex px-6 py-16 lg:px-12 lg:py-24">
              <div className="my-auto max-w-4xl">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Insights
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase">
                    {insight.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{insight.date}</span>
                  <span className="text-sm text-muted-foreground">{insight.readTime}</span>
                </div>

                <h1 className="text-3xl lg:text-6xl font-light tracking-tight leading-tight text-balance">
                  {insight.title}
                </h1>

                <p className="text-lg lg:text-xl font-light text-muted-foreground mt-6 leading-relaxed max-w-3xl">
                  {insight.excerpt}
                </p>

                <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-[auto_1fr]">
                  <div className="bg-background px-5 py-5">
                    <div className="flex h-14 w-14 items-center justify-center bg-gradient-to-br from-accent/30 to-accent/50 text-lg font-medium">
                      {insight.author.initials}
                    </div>
                  </div>
                  <div className="bg-background px-5 py-5">
                    <p className="text-base font-medium">{insight.author.name}</p>
                    <p className="text-sm text-muted-foreground">{insight.author.role}</p>
                    <p className="mt-2 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Kontorva Insights
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.06), rgba(5, 8, 14, 0.26)), url(${heroImage})`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.14))]" />
              <div className="absolute left-6 top-6 border border-white/10 bg-black/30 px-4 py-3 text-[11px] font-medium tracking-[0.22em] uppercase text-white/60 backdrop-blur-md lg:left-8 lg:top-8">
                {insight.category}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="about-floating-card max-w-sm border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                    Article Focus
                  </p>
                  <p className="mt-3 text-base font-light leading-relaxed text-white/86">
                    Lessons from real operating environments, engineering systems, and cross-border execution.
                  </p>
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
                    Summary
                  </p>
                  <div className="border border-border bg-secondary/25 p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      A practical view on {insight.category.toLowerCase()} shaped by delivery experience, operational constraints, and systems that need to work across markets.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Main Content */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              <div className="max-w-3xl">
                <div className="mb-10 overflow-hidden border border-border">
                  <div
                    className="aspect-[21/9] bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.06), rgba(5, 8, 14, 0.26)), url(${heroImage})`,
                    }}
                  />
                </div>
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
                    className="bg-background flex flex-col group overflow-hidden"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                        style={{
                          backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.04), rgba(5, 8, 14, 0.24)), url(${getInsightVisual(related.slug)})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-1 flex-col">
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
