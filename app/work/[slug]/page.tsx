import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getCaseStudyBySlug, getAllCaseStudySlugs, caseStudies } from "@/lib/case-studies"
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

  // Find next case study
  const currentIndex = caseStudies.findIndex(s => s.slug === slug)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance max-w-4xl">
            {study.title}
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground">
            Client: <span className="text-foreground">{study.client}</span>
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className={`aspect-[21/9] ${study.imageColor} relative overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/10 text-[200px] font-bold">
                K
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Results
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.results.map((result, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/50"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {study.testimonial && (
                <div className="border-l-4 border-accent pl-6 py-4">
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Technologies */}
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

                {/* CTA */}
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

      {/* Next Case Study */}
      <section className="border-t border-border">
        <Link 
          href={`/work/${nextStudy.slug}`}
          className="group block"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
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
        </Link>
      </section>

      <Footer />
    </main>
  )
}
