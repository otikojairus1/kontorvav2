import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Blocks,
  Cable,
  DatabaseZap,
  LineChart,
  Network,
  Users2,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"

const services = [
  {
    num: "01",
    title: "Platform Engineering",
    description: "Scalable production systems built for real-world performance conditions.",
    href: "/capabilities/platform-engineering",
    icon: Blocks,
    accent: "from-sky-500/20 via-sky-500/8 to-transparent",
    tags: ["Infrastructure", "Reliability"],
  },
  {
    num: "02",
    title: "Integrations & APIs",
    description: "System connectivity and cross-platform data exchange that actually works.",
    href: "/capabilities/integrations-apis",
    icon: Cable,
    accent: "from-cyan-400/22 via-cyan-400/8 to-transparent",
    tags: ["Systems", "Connectivity"],
  },
  {
    num: "03",
    title: "Managed Engineering",
    description: "Senior engineering teams deployed across borders with full compliance support.",
    href: "/capabilities/managed-engineering",
    icon: Users2,
    accent: "from-indigo-500/20 via-indigo-500/8 to-transparent",
    tags: ["Delivery", "Compliance"],
  },
  {
    num: "04",
    title: "Market Intelligence",
    description: "Registry-deep data across the Baltics and Nordics for market entry and growth.",
    href: "/capabilities/market-intelligence",
    icon: Network,
    accent: "from-emerald-500/18 via-emerald-500/8 to-transparent",
    tags: ["Research", "Expansion"],
  },
  {
    num: "05",
    title: "Data & AI Systems",
    description: "End-to-end data infrastructure and AI-driven workflow automation.",
    href: "/capabilities/data-ai-systems",
    icon: DatabaseZap,
    accent: "from-violet-500/18 via-violet-500/8 to-transparent",
    tags: ["Automation", "Data Ops"],
  },
  {
    num: "06",
    title: "Business Intelligence",
    description: "Operational dashboards and reporting systems that support real decisions.",
    href: "/capabilities/business-intelligence",
    icon: LineChart,
    accent: "from-amber-500/18 via-amber-500/8 to-transparent",
    tags: ["Dashboards", "Insights"],
  },
]

const clientLogos = [
  { name: "Yieldguru", src: "/client-logos/yieldguru.png" },
  { name: "Stravika", src: "/client-logos/stravika.png" },
  { name: "Thaka Premium Meat", src: "/client-logos/thaka-premium-meat.png" },
  { name: "The Pharmshop", src: "/client-logos/the-pharmshop.png" },
  { name: "Travel World Safaris", src: "/client-logos/travel-world-safaris.png" },
  { name: "Cardinal Destination Management Company", src: "/client-logos/cardinal-dmc.png" },
  { name: "Akili Travel", src: "/client-logos/akili-travel.png" },
  { name: "O'Bang Law", src: "/client-logos/obang-law.png" },
  { name: "Equity", src: "/client-logos/equity.png" },
  { name: "Sacs", src: "/client-logos/sacs.png" },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        <HomeHero />

        {/* Why Section */}
        <section className="bg-foreground text-background">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 px-6 lg:px-12 py-20 lg:py-28">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight leading-tight">
                Why we
                <br />
                built this.
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg font-light leading-relaxed text-background/70">
                Doing business across borders in Europe is harder than it should be. The data is fragmented. The systems don&apos;t talk to each other. The talent is there — it just isn&apos;t connected.
              </p>
              <p className="text-lg font-medium leading-relaxed mt-6 text-background">
                Kontorva exists because we navigated that friction ourselves, from the outside in. We started as outsiders to this market. We know exactly where the walls are — and we build the infrastructure to remove them.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Strip */}
        <section className="bg-white border-y border-border">
          <div className="px-6 py-12 lg:px-12">
            <div className="logo-marquee">
              <div className="logo-marquee-track">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex h-24 w-[180px] shrink-0 items-center justify-center bg-white/80 px-4 py-3 sm:h-28 sm:w-[220px] lg:w-[240px]"
                    aria-hidden={index >= clientLogos.length}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={636}
                      height={200}
                      className="h-auto max-h-14 w-full object-contain sm:max-h-16"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section border-t border-border">
          <div className="border-b border-border px-6 py-12 lg:px-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
              <div>
                <span className="text-xs font-medium tracking-[0.24em] uppercase text-accent">
                  Capabilities
                </span>
                <h2 className="mt-4 max-w-xl text-3xl font-light tracking-tight text-balance lg:text-5xl">
                  The work should feel tangible before anyone clicks.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground lg:justify-self-end lg:text-base">
                Each area now reads like a capability tile instead of a plain text box, with
                stronger visual cues for the kind of systems, teams, and data work Kontorva
                actually delivers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.num}
                href={service.href}
                className="group capability-card home-capability-card relative isolate overflow-hidden border-b border-r border-border px-6 py-10 transition-all duration-500 hover:-translate-y-1 lg:px-10 lg:py-12"
              >
                <div className="pointer-events-none absolute right-6 top-5 text-7xl font-light tracking-tight text-foreground/[0.05] transition-colors duration-500 group-hover:text-white/10 lg:text-8xl">
                  {service.num}
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div>
                    <div>
                      <span className="mb-6 block text-xs font-medium tracking-[0.24em] text-accent transition-colors duration-500 group-hover:text-background/50">
                        {service.num}
                      </span>
                      <h3 className="max-w-xs text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-background">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-background/70 lg:text-[15px]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-foreground/10 bg-background/72 px-3 py-1 text-[11px] font-medium tracking-[0.16em] uppercase text-muted-foreground backdrop-blur-sm transition-colors duration-500 group-hover:border-accent/20 group-hover:text-background"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex items-center justify-between gap-4 text-muted-foreground transition-colors duration-300 group-hover:text-background">
                    <span className="text-sm font-medium">Learn more</span>
                    <div className="flex h-10 w-10 items-center justify-center border border-foreground/10 bg-background/75 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/8">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background" />
                    </div>
                  </div>
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
