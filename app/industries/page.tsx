import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { industries } from "@/lib/industries"
import { ArrowUpRight } from "lucide-react"

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="about-hero-shell border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex px-6 py-20 lg:px-12 lg:py-28">
              <div className="my-auto max-w-4xl">
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                  Where We Work
                </p>
                <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight text-balance max-w-3xl">
                  Industries
                </h1>
                <p className="text-lg font-light leading-relaxed text-muted-foreground mt-8 max-w-2xl">
                  We work across sectors where systems carry real consequence — where a missed signal, a slow pipeline, or an unreliable integration is an operational problem, not a UX one.
                </p>
              </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              {["/office-finland.jpg", "/office-estonia.jpg", "/cta-stock-2.jpg"].map((src, index) => (
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

        {/* Industries Grid */}
        <section className="services-section border-b border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group capability-card relative isolate overflow-hidden bg-background px-6 lg:px-10 py-12 lg:py-16 hover:bg-foreground transition-colors duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-accent/14 via-accent/8 to-transparent opacity-90 transition-transform duration-500 group-hover:scale-110" />
                <span className="text-xs font-medium tracking-widest text-muted-foreground group-hover:text-background/50 transition-colors mb-10 block">
                  {industry.num}
                </span>
                <h2 className="text-xl font-medium mb-3 group-hover:text-background transition-colors">
                  {industry.name}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-background/70 transition-colors">
                  {industry.description}
                </p>
                <div className="mt-8">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
