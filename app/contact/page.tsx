"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const capabilities = [
  "Platform Engineering",
  "Integrations & APIs",
  "Managed Engineering",
  "Market Intelligence",
  "Data & AI Systems",
  "Business Intelligence",
  "Not sure yet"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    capability: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="about-hero-shell border-b border-border">
          <div className="grid lg:grid-cols-2 lg:items-stretch">
            <div className="px-6 py-20 lg:px-12 lg:py-28">
              <p className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
                Get In Touch
              </p>
              <h1 className="text-4xl lg:text-6xl font-light tracking-tight leading-tight">
                Let&apos;s Talk.
              </h1>
              <p className="text-lg font-light leading-relaxed text-muted-foreground mt-8 mb-12 max-w-lg">
                If you&apos;re building or operating systems in Europe and need senior engineering execution, market intelligence, or cross-border infrastructure support — we&apos;d like to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
                <div>
                  <label className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-border py-3 text-base font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="Company or institution"
                    className="w-full bg-transparent border-b border-border py-3 text-base font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-border py-3 text-base font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <label className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                    What are you looking for?
                  </label>
                  <select
                    value={formData.capability}
                    onChange={(e) => setFormData({ ...formData, capability: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-base font-light text-muted-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a capability</option>
                    {capabilities.map((cap) => (
                      <option key={cap} value={cap}>{cap}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-xs font-medium tracking-widest uppercase text-muted-foreground block mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="A few sentences is enough to get started."
                    rows={4}
                    className="w-full bg-transparent border border-border p-4 text-base font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Send Message →
                </button>
              </form>
            </div>

            <div className="min-h-[320px] border-t border-border bg-white lg:min-h-0 lg:border-l lg:border-t-0" />
          </div>
        </section>

        {/* Locations Section */}
        <section className="border-b border-border">
          <div className="grid gap-px bg-border lg:grid-cols-2">
            <div className="bg-white">
              <div
                className="relative min-h-[360px] border-b border-border bg-cover bg-center lg:min-h-[520px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(5, 8, 14, 0.08), rgba(5, 8, 14, 0.12)), url(/office-finland.jpg)",
                }}
              >
                <span className="absolute left-6 top-6 inline-flex bg-black/28 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-sm">
                  Finland
                </span>
                <h3 className="absolute bottom-8 left-8 text-4xl font-light tracking-tight text-white lg:text-5xl">
                  Helsinki
                </h3>
              </div>
              <div className="px-8 py-10 lg:px-12 lg:py-12">
                <p className="text-2xl font-medium tracking-tight">Kontorva Oy</p>
                <div className="mt-4 space-y-3 text-lg text-muted-foreground">
                  <p>Business ID: 3570767-1</p>
                  <p>Sturenkatu 26 lt. 36</p>
                  <p>00510 Helsinki, Finland</p>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div
                className="relative min-h-[360px] border-b border-border bg-cover bg-center lg:min-h-[520px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(5, 8, 14, 0.08), rgba(5, 8, 14, 0.12)), url(/tallin.jpg)",
                }}
              >
                <span className="absolute left-6 top-6 inline-flex bg-black/28 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-sm">
                  Estonia
                </span>
                <h3 className="absolute bottom-8 left-8 text-4xl font-light tracking-tight text-white lg:text-5xl">
                  Tallinn
                </h3>
              </div>
              <div className="px-8 py-10 lg:px-12 lg:py-12">
                <p className="text-2xl font-medium tracking-tight">Kontorva Group OU</p>
                <div className="mt-4 space-y-3 text-lg text-muted-foreground">
                  <p>Registration Code: 16916787</p>
                  <p>Tehnopol Science & Business Campus</p>
                  <p>Maealuse tn 4/1, 12618 Tallinn</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
