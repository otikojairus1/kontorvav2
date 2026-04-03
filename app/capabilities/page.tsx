import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { capabilities } from "@/lib/capabilities"
import { ArrowRight } from "lucide-react"

const capabilityHeroImages = [
  "/capabilities/pexels-thisisengineering-3861951.jpg",
  "/capabilities/pexels-thisisengineering-3861943.jpg",
  "/capabilities/pexels-nappy-936135.jpg",
  "/capabilities/pexels-n-voitkevich-7235903.jpg",
  "/capabilities/pexels-pavel-danilyuk-7869097.jpg",
  "/capabilities/pexels-leeloothefirst-7887815.jpg",
]

const capabilityVisuals = {
  "platform-engineering": {
    image: "/capabilities/pexels-thisisengineering-3861951.jpg",
    label: "Infrastructure",
  },
  "integrations-apis": {
    image: "/capabilities/pexels-thisisengineering-3861943.jpg",
    label: "Systems",
  },
  "managed-engineering": {
    image: "/capabilities/managed-engineering.jpg",
    label: "Teams",
  },
  "market-intelligence": {
    image: "/capabilities/pexels-n-voitkevich-7235903.jpg",
    label: "Market Data",
  },
  "data-ai-systems": {
    image: "/capabilities/pexels-pavel-danilyuk-7869097.jpg",
    label: "Automation",
  },
  "business-intelligence": {
    image: "/capabilities/pexels-leeloothefirst-7887815.jpg",
    label: "Decisioning",
  },
} as const

export default function CapabilitiesPage() {
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
                  What We Do
                </p>
                <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight text-balance max-w-3xl">
                  Capabilities
                </h1>
                <p className="text-lg font-light leading-relaxed text-muted-foreground mt-8 max-w-2xl">
                  Navigating Europe is complex. Operating across it — with reliable systems, the right data, and senior engineering execution — is harder still. Kontorva provides the capability to do both.
                </p>

                <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                  <div className="bg-background px-5 py-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Coverage
                    </span>
                    <p className="mt-2 text-base font-medium">Baltic-Nordic operating environments</p>
                  </div>
                  <div className="bg-background px-5 py-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      Focus
                    </span>
                    <p className="mt-2 text-base font-medium">Systems, data, teams, intelligence</p>
                  </div>
                </div>

                <div className="bg-accent/10 border-l-2 border-accent p-6 mt-10 max-w-2xl">
                  <p className="text-sm leading-relaxed">
                    We started as outsiders trying to operate in a fragmented market. Every capability we offer is a direct response to friction we personally encountered. We are not selling abstraction — we are selling the operational knowledge that comes from having done it.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              {capabilityHeroImages.map((src, index) => (
                <div
                  key={src}
                  className="cta-image-slide absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.22)), url(${src})`,
                    animationDelay: `${index * 3 - 2}s`,
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.14))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="about-floating-card max-w-sm border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                    Built for Real Conditions
                  </p>
                  <p className="mt-3 text-base font-light leading-relaxed text-white/86">
                    Each capability exists because we had to solve these problems in practice, across markets and systems that do not naturally fit together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="services-section border-b border-border">
          {capabilities.map((capability, index) => (
            (() => {
              const visual = capabilityVisuals[capability.slug as keyof typeof capabilityVisuals]
              return (
            <Link
              key={capability.slug}
              href={`/capabilities/${capability.slug}`}
              className="group grid border-b border-border last:border-b-0 lg:grid-cols-[minmax(0,0.92fr)_minmax(320px,0.58fr)]"
            >
              <div className="px-6 py-10 lg:px-12 lg:py-14">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-medium tracking-widest text-accent">
                    {capability.num}
                  </span>
                  <span className="border border-foreground/10 bg-background/75 px-3 py-1 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground">
                    {visual.label}
                  </span>
                </div>

                <div className="mt-8 max-w-3xl">
                  <h2 className="text-2xl lg:text-4xl font-light tracking-tight">
                    {capability.name}
                  </h2>
                  <p className="text-sm italic text-accent mt-4 leading-relaxed lg:text-base">
                    {capability.tagline}
                  </p>
                </div>

                <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                  <ul className="grid gap-3 md:grid-cols-2">
                    {capability.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-accent mt-0.5">—</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              <div className="relative min-h-[220px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.04), rgba(5, 8, 14, 0.22)), url(${visual.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.1))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="about-floating-card max-w-xs border border-white/10 bg-black/34 p-4 backdrop-blur-md">
                    <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                      {capability.num}
                    </p>
                    <p className="mt-3 text-lg font-light leading-snug text-white">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
              )
            })()
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
