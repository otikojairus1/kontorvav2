import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"

const aboutHeroImages = [
  "/cta-stock-1.jpg",
  "/cta-stock-2.jpg",
  "/cta-stock-3.jpg",
]

const principles = [
  {
    title: "Clarity over complexity",
    description: "Clear architecture, clear ownership, clear outcomes."
  },
  {
    title: "Execution over abstraction",
    description: "Working systems take precedence over theoretical completeness."
  },
  {
    title: "Context before code",
    description: "We understand the environment and consequences before building."
  },
  {
    title: "Reliability as a baseline",
    description: "Designed for real-world conditions, not ideal scenarios."
  },
  {
    title: "Accountability at every layer",
    description: "Ownership is defined and visible — architecture to outcomes."
  },
]

const products = [
  {
    tag: "Baltics",
    name: "Arikaart",
    description: "Registry-deep company and market intelligence across the Baltic region. Used for market mapping, partner identification, and decision-maker access.",
    url: "arikaart.ee"
  },
  {
    tag: "Signals",
    name: "DataSivio",
    description: "Economic and operational signal intelligence platform. Tracks real-world market movement, sector momentum, and risk indicators.",
    url: "datasivio.com"
  },
  {
    tag: "Nordics",
    name: "NordicB2B",
    description: "Account intelligence infrastructure for the Nordic region. Structured company and contact data integrated into sales and CRM workflows.",
    url: "nordicb2b.com"
  },
  {
    tag: "Identity",
    name: "RentPassport",
    description: "Cross-border rental identity and trust infrastructure. Enables verification and decision-making in international housing environments.",
    url: "rentpassport.eu"
  },
]

const team = [
  {
    name: "Michael Opondo",
    role: "CEO",
    initials: "MO",
    image: "/team/michael-opondo.png",
  },
  {
    name: "Wesley Collins",
    role: "Software Engineer",
    initials: "WC",
    image: "/team/wesley-collins.png",
  },
  {
    name: "Andrew Fwamba",
    role: "Head of Engineering",
    initials: "AF",
    image: "/team/andrew-fwamba.png",
  },
  {
    name: "Sascha Bross",
    role: "Board Member",
    initials: "SB",
    image: "/team/sascha-bross.png",
  },
  {
    name: "Elif Sude Batar",
    role: "Head of Sales",
    initials: "EB",
    image: "/team/elif-sude-batar.png",
  },
  {
    name: "Jeff Getenga",
    role: "Board Member",
    initials: "JG",
    image: "/team/jeff-getenga.png",
  },
  {
    name: "Jairus Otiko",
    role: "Software Engineer",
    initials: "JO",
    image: "/team/jairus-otiko.png",
  },
]

export default function AboutPage() {
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
                About Kontorva
              </p>
              <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight text-balance">
                Built from the
                <br />
                outside in.
              </h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground mt-8 max-w-2xl">
                Kontorva is a Finnish-Estonian engineering company that builds and operates technology systems for organisations working in complex, cross-border environments. We are engineering-led, accountability-driven, and headquartered in Helsinki and Tallinn.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {[
                  { label: "Founded", value: "Kisumu, Kenya" },
                  { label: "European HQ", value: "Helsinki, Finland" },
                  { label: "Co-HQ", value: "Tallinn, Estonia" },
                  { label: "Ecosystem Users", value: "2,000+ across 25+ locations" },
                ].map((item) => (
                  <div key={item.label} className="bg-background px-5 py-5">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    <p className="text-base font-medium mt-2">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            </div>

            <div className="about-hero-visual relative min-h-[420px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              {aboutHeroImages.map((src, index) => (
                <div
                  key={src}
                  className="cta-image-slide absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.2)), url(${src})`,
                    animationDelay: `${index * 6 - 2}s`,
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.14))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="about-floating-card max-w-sm border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                    Cross-Border by Design
                  </p>
                  <p className="mt-3 text-base font-light leading-relaxed text-white/86">
                    Built between East Africa, Finland, and Estonia under real operating
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-secondary border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="about-founder-visual relative min-h-[420px] overflow-hidden border-b border-border lg:min-h-0 lg:border-r lg:border-b-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(7, 11, 20, 0.1), rgba(7, 11, 20, 0.28)), url(/team-3.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(79,169,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />
              <div className="absolute left-6 top-6 flex h-24 w-24 items-center justify-center border border-white/14 bg-black/24 text-4xl font-light tracking-tight text-white/84 backdrop-blur-md lg:left-8 lg:top-8">
                MO
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="about-floating-card max-w-md border border-white/10 bg-black/40 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/48">
                    Founder
                  </p>
                  <p className="mt-3 text-xl font-light leading-snug text-white text-balance">
                    From Nairobi to Northern Europe, built through direct experience instead of inherited access.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 px-6 py-20 lg:px-12 lg:py-28">
              <p className="text-xs font-medium tracking-widest uppercase text-accent">
                Founder&apos;s Note
              </p>
              
              <blockquote className="text-2xl lg:text-3xl font-light leading-snug border-l-2 border-accent pl-6">
                &quot;In January 2023, I did not know where Estonia was.&quot;
              </blockquote>
              
              <div className="space-y-5 text-base font-light leading-relaxed text-muted-foreground">
                <p>
                  That is not a metaphor. I am a lawyer from Nairobi who ended up building a technology company in Northern Europe — and the honest version of that story is that it started with a Google search.
                </p>
                <p>
                  I had been working in tech for a few years at that point — first consulting NGOs on data analytics, then building Kontorva to connect skilled African engineers with European companies that needed them. The company was growing, but I knew we needed a proper European base.
                </p>
                <p>
                  I arrived in Tallinn in January 2023, in the middle of winter, knowing almost no one. By the end of that year I had incorporated a European company through e-Residency, been granted a Startup Visa, gone through the Tehnopol incubator programme, and was making plans to relocate permanently.
                </p>
                <p>
                  Most technology firms operating in the Nordic-Baltic corridor grew up inside it. We understand it because we had to learn it — from the outside, under real conditions, with no network to fall back on. That knowledge is not incidental to what Kontorva does. It is the foundation of it.
                </p>
              </div>
              
              <div className="pt-6">
                <p className="text-base font-medium">Michael Oduor Opondo</p>
                <p className="text-sm text-muted-foreground">Founder, Kontorva · Helsinki, Finland</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
              Our People
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-16">
              The team behind Kontorva
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {team.map((member) => (
                <div key={member.name} className="bg-background p-8 lg:p-10 group">
                  <div className="w-full aspect-[4/5] relative overflow-hidden mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{
                        backgroundImage: `linear-gradient(180deg, rgba(8, 12, 20, 0.02), rgba(8, 12, 20, 0.16)), url(${member.image})`,
                      }}
                    />
                    <span className="absolute top-4 right-4 text-5xl lg:text-6xl font-light text-white/30">
                      {member.initials}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                  </div>
                  <h3 className="text-lg font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
              How We Operate
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-16">
              Principles
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
              {principles.map((principle) => (
                <div key={principle.title} className="bg-background p-6 lg:p-8">
                  <h3 className="text-base font-medium mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="border-b border-border">
          <div className="px-6 lg:px-12 py-20 lg:py-28">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
              Proprietary Products
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
              The Kontorva Ecosystem
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-2xl">
              A portfolio of intelligence products built to solve the specific layers of cross-border business complexity we encountered ourselves — and that our clients face every day.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16">
              {products.map((product) => (
                <div key={product.name} className="bg-background p-8 flex flex-col">
                  <span className="inline-flex px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium tracking-wider uppercase w-fit">
                    {product.tag}
                  </span>
                  <h3 className="text-xl font-medium mt-4">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-3 flex-1">
                    {product.description}
                  </p>
                  <a 
                    href={`https://${product.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-6 pt-6 border-t border-border"
                  >
                    {product.url}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices Section */}
        <section className="bg-secondary">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                country: "Finland",
                city: "Helsinki",
                image: "/office-finland.jpg",
                company: "Kontorva Oy",
                meta: "Business ID: 3570767-1",
                lines: ["Sturenkatu 26 lt. 36", "00510 Helsinki, Finland"],
              },
              {
                country: "Estonia",
                city: "Tallinn",
                image: "/office-estonia.jpg",
                company: "Kontorva Group OU",
                meta: "Registration Code: 16916787",
                lines: ["Tehnopol Science & Business Campus", "Maealuse tn 4/1, 12618 Tallinn"],
              },
            ].map((office) => (
              <div key={office.city} className="bg-background">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.03]"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(8, 12, 20, 0.08), rgba(8, 12, 20, 0.3)), url(${office.image})`,
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.02))]" />
                  <div className="absolute left-6 top-6">
                    <span className="inline-flex items-center gap-2 border border-white/12 bg-black/30 px-3 py-1.5 text-sm font-medium text-white/88 backdrop-blur-md">
                      {office.country}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="text-3xl font-light tracking-tight text-white lg:text-4xl">
                      {office.city}
                    </h3>
                  </div>
                </div>

                <div className="px-6 py-8 lg:px-12 lg:py-10">
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p className="text-base font-medium text-foreground">{office.company}</p>
                    <p>{office.meta}</p>
                    {office.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
