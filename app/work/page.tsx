import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { caseStudies } from "@/lib/case-studies"
import { getCaseStudyVisual } from "@/lib/page-visuals"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Work | Kontorva",
  description: "Explore our case studies and see how we've helped organizations across the Nordic region transform their digital capabilities.",
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="about-hero-shell border-b border-border">
        <div className="grid lg:grid-cols-2 lg:items-stretch">
          <div className="flex px-6 py-20 lg:px-12 lg:py-28">
            <div className="my-auto max-w-5xl">
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-accent mb-6">
                Our Work
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-balance max-w-4xl">
                Building digital solutions that drive real impact
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl text-pretty">
                From financial institutions to government agencies, we partner with organizations
                to solve complex challenges and create lasting value.
              </p>
            </div>
          </div>

          <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
            {["/cta-stock-1.jpg", "/office-finland.jpg", "/cta-stock-3.jpg"].map((src, index) => (
              <div
                key={src}
                className="cta-image-slide absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.22)), url(${src})`,
                  animationDelay: `${index * 6 - 2}s`,
                }}
              />
            ))}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.16),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.12))]" />
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="services-section pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
              >
                <article className="h-full border border-border bg-card hover:border-foreground/20 transition-all duration-300 overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.05), rgba(5, 8, 14, 0.24)), url(${getCaseStudyVisual(study.slug)})`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/18 text-8xl font-light tracking-tight">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white backdrop-blur-sm">
                        {study.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                    <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground text-pretty mb-4">
                      {study.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-medium text-foreground">
                      <span>View Case Study</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can help transform your digital capabilities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
