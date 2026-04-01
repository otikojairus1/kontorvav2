import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { industries, getIndustryBySlug } from "@/lib/industries"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  
  if (!industry) {
    return { title: "Industry Not Found" }
  }
  
  return {
    title: `${industry.name} | Kontorva`,
    description: industry.description,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)
  
  if (!industry) {
    notFound()
  }

  const currentIndex = industries.findIndex(i => i.slug === slug)
  const prevIndustry = currentIndex > 0 ? industries[currentIndex - 1] : null
  const nextIndustry = currentIndex < industries.length - 1 ? industries[currentIndex + 1] : null

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28">
            <Link 
              href="/industries"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              All Industries
            </Link>
            
            <div className="flex items-start gap-4 mb-6">
              <span className="text-sm font-medium tracking-widest text-accent">
                {industry.num}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight">
              {industry.name}
            </h1>
            
            <p className="text-xl font-light text-muted-foreground mt-8 max-w-3xl leading-relaxed">
              {industry.description}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="border-b border-border">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-24 px-6 lg:px-12 py-20 lg:py-28">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                Overview
              </p>
              <h2 className="text-2xl lg:text-3xl font-light tracking-tight">
                Industry context
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                {industry.details.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="border-b border-border">
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
            <div className="px-6 lg:px-12 py-16 lg:py-20">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                Challenges
              </p>
              <h3 className="text-xl font-light tracking-tight mb-8">
                What we see
              </h3>
              <ul className="space-y-4">
                {industry.details.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 flex items-center justify-center text-xs font-medium text-accent border border-accent/30 mt-0.5 flex-shrink-0">
                      {i + 1}
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="px-6 lg:px-12 py-16 lg:py-20">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
                Solutions
              </p>
              <h3 className="text-xl font-light tracking-tight mb-8">
                What we build
              </h3>
              <ul className="space-y-4">
                {industry.details.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">—</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Related Capabilities */}
        <section className="bg-secondary border-b border-border">
          <div className="px-6 lg:px-12 py-16 lg:py-20">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
              Related Capabilities
            </p>
            <h3 className="text-xl font-light tracking-tight mb-8">
              How we help
            </h3>
            <div className="flex flex-wrap gap-3">
              {industry.details.capabilities.map((capability) => (
                <Link
                  key={capability}
                  href={`/capabilities/${capability.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium border border-border bg-background hover:border-foreground transition-colors"
                >
                  {capability}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28 text-center">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6">
              Building in {industry.name.toLowerCase()}?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              Tell us about your project and we&apos;ll help you determine the right approach.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-b border-border">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {prevIndustry ? (
              <Link
                href={`/industries/${prevIndustry.slug}`}
                className="group px-6 lg:px-12 py-10 hover:bg-secondary transition-colors"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Previous
                </span>
                <p className="text-xl font-light mt-2 group-hover:text-accent transition-colors">
                  {prevIndustry.name}
                </p>
              </Link>
            ) : (
              <div className="px-6 lg:px-12 py-10" />
            )}
            
            {nextIndustry ? (
              <Link
                href={`/industries/${nextIndustry.slug}`}
                className="group px-6 lg:px-12 py-10 text-right hover:bg-secondary transition-colors"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Next
                </span>
                <p className="text-xl font-light mt-2 group-hover:text-accent transition-colors">
                  {nextIndustry.name}
                </p>
              </Link>
            ) : (
              <div className="px-6 lg:px-12 py-10" />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
