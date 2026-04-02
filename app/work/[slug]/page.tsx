import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getCaseStudyBySlug, getAllCaseStudySlugs, caseStudies } from "@/lib/case-studies"
import { getCaseStudyVisual } from "@/lib/page-visuals"
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react"

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    return {
      title: "Case Study Not Found | Kontorva",
    }
  }

  return {
    title: `${study.title} | Kontorva`,
    description: study.excerpt,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === slug)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]
  const heroImage = getCaseStudyVisual(study.slug)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="about-hero-shell border-b border-border pt-16">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-stretch">
          <div className="flex px-6 py-20 lg:px-12 lg:py-28">
            <div className="my-auto max-w-4xl">
              <Link
                href="/work"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Work
              </Link>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
                  {study.industry}
                </span>
                <span className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
                  {study.year}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-tight text-balance max-w-4xl">
                {study.title}
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
                {study.excerpt}
              </p>

              <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                <div className="bg-background px-5 py-5">
                  <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                    Client
                  </span>
                  <p className="mt-2 text-base font-medium">{study.client}</p>
                </div>
                <div className="bg-background px-5 py-5">
                  <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                    Delivery Focus
                  </span>
                  <p className="mt-2 text-base font-medium">{study.technologies.slice(0, 2).join(" + ")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.06), rgba(5, 8, 14, 0.28)), url(${heroImage})`,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.14))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="about-floating-card max-w-sm border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                  Case Study
                </p>
                <p className="mt-3 text-base font-light leading-relaxed text-white/86">
                  Applied engineering work shaped around constraints, delivery speed, and durable systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {study.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/50 border border-border"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {study.testimonial && (
                <div className="border border-border bg-secondary/30 p-8">
                  <Quote className="h-8 w-8 text-accent/40 mb-4" />
                  <blockquote className="text-xl text-foreground italic mb-4 text-pretty">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-medium text-foreground">{study.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="overflow-hidden border border-border">
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.04), rgba(5, 8, 14, 0.2)), url(${heroImage})`,
                    }}
                  />
                </div>

                <div className="p-6 bg-secondary/30 border border-border">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm bg-background border border-border text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-foreground text-background">
                  <h3 className="text-lg font-semibold mb-2">
                    Start Your Project
                  </h3>
                  <p className="text-background/70 text-sm mb-4">
                    Ready to transform your digital capabilities?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium hover:underline"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <Link
          href={`/work/${nextStudy.slug}`}
          className="group block"
        >
          <div className="grid lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="px-6 lg:px-12 py-16">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Next Case Study</p>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {nextStudy.title}
                  </h3>
                  <p className="text-muted-foreground mt-2">{nextStudy.client}</p>
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <span>View Project</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            <div className="relative min-h-[260px] overflow-hidden border-t border-border lg:border-t-0 lg:border-l">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.05), rgba(5, 8, 14, 0.24)), url(${getCaseStudyVisual(nextStudy.slug)})`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.16),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.12))]" />
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  )
}
