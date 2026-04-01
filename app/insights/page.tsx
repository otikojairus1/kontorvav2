import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { insights } from "@/lib/insights"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function InsightsPage() {
  const categories = [...new Set(insights.map(i => i.category))]
  const featuredInsight = insights[0]
  const remainingInsights = insights.slice(1)

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="about-hero-shell border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex px-6 py-20 lg:px-12 lg:py-28">
              <div className="my-auto max-w-5xl">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                  Insights
                </p>
                <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight text-balance max-w-4xl">
                  Thinking, writing, and lessons from building technology systems.
                </h1>
                <p className="text-lg font-light leading-relaxed text-muted-foreground mt-8 max-w-2xl">
                  Articles and perspectives from the Kontorva team on engineering, markets, and the realities of cross-border technology.
                </p>
              </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              {["/cta-stock-3.jpg", "/office-finland.jpg", "/team-4.jpg"].map((src, index) => (
                <div
                  key={src}
                  className="cta-image-slide absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.22)), url(${src})`,
                    animationDelay: `${index * 6 - 2}s`,
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.12))]" />
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-foreground text-background text-sm font-medium">
                All
              </span>
              {categories.map((category) => (
                <span 
                  key={category}
                  className="px-4 py-2 border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="border-b border-border">
          <Link href={`/insights/${featuredInsight.slug}`} className="block group">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-accent/20 to-accent/40 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(5, 8, 14, 0.06), rgba(5, 8, 14, 0.26)), url(/cta-stock-2.jpg)",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />
                <span className="absolute top-6 left-6 px-3 py-1.5 bg-background text-xs font-medium tracking-wider uppercase">
                  Featured
                </span>
                <span className="absolute bottom-8 right-8 text-8xl lg:text-9xl font-light text-background/10">
                  {featuredInsight.author.initials}
                </span>
              </div>
              <div className="px-6 lg:px-12 py-12 lg:py-20 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-accent">
                    {featuredInsight.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{featuredInsight.date}</span>
                  <span className="text-xs text-muted-foreground">{featuredInsight.readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-light tracking-tight leading-tight group-hover:text-accent transition-colors">
                  {featuredInsight.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mt-6">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center gap-3 mt-8 pt-8 border-t border-border">
                  <div className="w-10 h-10 bg-secondary flex items-center justify-center text-sm font-medium">
                    {featuredInsight.author.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{featuredInsight.author.name}</p>
                    <p className="text-xs text-muted-foreground">{featuredInsight.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Articles Grid */}
        <section className="services-section border-b border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {remainingInsights.map((insight) => (
              <Link 
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="capability-card bg-background p-8 lg:p-10 flex flex-col group relative isolate overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-accent">
                    {insight.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{insight.date}</span>
                </div>
                <h3 className="text-xl font-medium leading-tight group-hover:text-accent transition-colors flex-1">
                  {insight.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary flex items-center justify-center text-xs font-medium">
                      {insight.author.initials}
                    </div>
                    <span className="text-sm text-muted-foreground">{insight.author.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{insight.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-secondary border-t border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                Stay Updated
              </p>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight">
                Subscribe to our newsletter
              </h2>
              <p className="text-base text-muted-foreground mt-4">
                Occasional insights on engineering, markets, and cross-border technology. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border bg-background text-sm focus:outline-none focus:border-foreground transition-colors"
                />
                <button className="px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
