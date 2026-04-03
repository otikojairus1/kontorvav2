import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const capabilities = [
  { href: "/capabilities/platform-engineering", label: "Platform Engineering" },
  { href: "/capabilities/integrations-apis", label: "Integrations & APIs" },
  { href: "/capabilities/managed-engineering", label: "Managed Engineering" },
  { href: "/capabilities/market-intelligence", label: "Market Intelligence" },
  { href: "/capabilities/data-ai-systems", label: "Data & AI Systems" },
  { href: "/capabilities/business-intelligence", label: "Business Intelligence" },
]

const industries = [
  { href: "/industries/fintech", label: "Fintech" },
  { href: "/industries/mobility-logistics", label: "Mobility & Logistics" },
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/green-tech", label: "Green Tech" },
]

const products = [
  { href: "#", label: "Arikaart", external: true },
  { href: "#", label: "DataSivio", external: true },
  { href: "#", label: "NordicB2B", external: true },
  { href: "#", label: "RentPassport", external: true },
]

const company = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Top Section - Large CTA */}
      <div className="cta-shell relative overflow-hidden border-b border-background/10">
        <div className="pointer-events-none absolute inset-0 cta-noise opacity-40" />
        <div className="relative grid lg:grid-cols-2 lg:items-stretch">
          <div className="flex px-6 py-20 lg:px-12 lg:py-28">
            <div className="my-auto max-w-5xl">
            <p className="mb-6 text-xs font-medium tracking-[0.24em] uppercase text-background/50">
              Ready to build?
            </p>
            <h2 className="text-4xl font-light leading-[1.02] tracking-tight text-balance lg:text-7xl">
              Let&apos;s engineer something
              <br />
              <span className="cta-highlight relative -top-1 inline-block pb-1 text-accent lg:-top-2 lg:pb-2">
                meaningful together.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-background/56 lg:text-base">
              From infrastructure to cross-border delivery, we help ambitious teams turn
              complexity into durable systems that can actually move.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-background/12 bg-background px-8 py-4 text-sm font-medium text-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/90 group"
              >
                Start a conversation
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-background/35">
                Helsinki • Tallinn • Baltic-Nordic Corridor
              </span>
            </div>
          </div>
          </div>

          <div className="cta-visual relative min-h-[420px] overflow-hidden border-t border-background/10 lg:min-h-0 lg:border-t-0 lg:border-l">
            <div className="cta-grid absolute inset-0 opacity-20" />
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/footer-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.14),transparent_24%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.1))]" />
          </div>
        </div>
      </div>

      {/* Middle Section - Links Grid */}
      <div className="border-b border-background/10">
        <div className="px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Capabilities */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                Capabilities
              </h4>
              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                Industries
              </h4>
              <ul className="space-y-3">
                {industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                {products.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {item.label}
                      {item.external && <ArrowUpRight className="w-3 h-3" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Offices & Copyright */}
      <div className="px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="block w-[180px] sm:w-[220px]">
              <Image
                src="/kontorva-dark-no-bg.png"
                alt="Kontorva"
                width={636}
                height={200}
                className="h-auto w-full object-contain"
              />
            </Link>
            <p className="text-sm text-background/50 max-w-xs">
              Engineered for Europe.
              <br />
              Built for the real world.
            </p>
          </div>

          {/* Offices */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-background/40 mb-3">Helsinki</p>
              <p className="text-sm text-background/70">
                Kontorva Oy<br />
                Sturenkatu 26 lt. 36<br />
                00510 Helsinki, Finland
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-background/40 mb-3">Tallinn</p>
              <p className="text-sm text-background/70">
                Kontorva Group OU<br />
                Tehnopol Campus<br />
                Maealuse tn 4/1, Tallinn
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-12 pt-8 border-t border-background/10">
          <p className="text-xs text-background/40">
            © 2026 Kontorva. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
