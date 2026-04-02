import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { capabilities, getCapabilityBySlug } from "@/lib/capabilities"
import { ArrowLeft, ArrowRight } from "lucide-react"

const capabilityDetailVisuals = {
  "platform-engineering": "/cta-stock-1.jpg",
  "integrations-apis": "/cta-stock-2.jpg",
  "managed-engineering": "/cta-stock-1.jpg",
  "market-intelligence": "/office-estonia.jpg",
  "data-ai-systems": "/cta-stock-3.jpg",
  "business-intelligence": "/office-finland.jpg",
} as const

export function generateStaticParams() {
  return capabilities.map((capability) => ({
    slug: capability.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const capability = getCapabilityBySlug(slug)
  
  if (!capability) {
    return { title: "Capability Not Found" }
  }
  
  return {
    title: `${capability.name} | Kontorva`,
    description: capability.description,
  }
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const capability = getCapabilityBySlug(slug)
  
  if (!capability) {
    notFound()
  }

  const currentIndex = capabilities.findIndex(c => c.slug === slug)
  const prevCapability = currentIndex > 0 ? capabilities[currentIndex - 1] : null
  const nextCapability = currentIndex < capabilities.length - 1 ? capabilities[currentIndex + 1] : null

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="about-hero-shell border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="flex px-6 py-20 lg:px-12 lg:py-28">
              <div className="my-auto max-w-4xl">
                <Link 
                  href="/capabilities"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Capabilities
                </Link>
                
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-sm font-medium tracking-widest text-accent">
                    {capability.num}
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight">
                  {capability.name}
                </h1>
                
                <p className="text-xl lg:text-2xl font-light italic text-accent mt-8 max-w-3xl leading-relaxed">
                  {capability.tagline}
                </p>

                <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                  <div className="bg-background px-5 py-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Focus
                    </span>
                    <p className="mt-2 text-base font-medium">{capability.description}</p>
                  </div>
                  <div className="bg-background px-5 py-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Coverage
                    </span>
                    <p className="mt-2 text-base font-medium">{capability.bullets[0]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.22)), url(${capabilityDetailVisuals[capability.slug as keyof typeof capabilityDetailVisuals]})`,
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.12))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="about-floating-card max-w-sm border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                    Capability {capability.num}
                  </p>
                  <p className="mt-3 text-base font-light leading-relaxed text-white/86">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
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
                What we deliver
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg font-light leading-relaxed text-muted-foreground">
                {capability.details.overview}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-base font-medium mb-4">Our Approach</h3>
                  <ul className="space-y-3">
                    {capability.details.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base font-medium mb-4">Deliverables</h3>
                  <ul className="space-y-3">
                    {capability.details.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28 text-center">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6">
              Ready to get started?
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
            {prevCapability ? (
              <Link
                href={`/capabilities/${prevCapability.slug}`}
                className="group px-6 lg:px-12 py-10 hover:bg-secondary transition-colors"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Previous
                </span>
                <p className="text-xl font-light mt-2 group-hover:text-accent transition-colors">
                  {prevCapability.name}
                </p>
              </Link>
            ) : (
              <div className="px-6 lg:px-12 py-10" />
            )}
            
            {nextCapability ? (
              <Link
                href={`/capabilities/${nextCapability.slug}`}
                className="group px-6 lg:px-12 py-10 text-right hover:bg-secondary transition-colors"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                  Next
                </span>
                <p className="text-xl font-light mt-2 group-hover:text-accent transition-colors">
                  {nextCapability.name}
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
