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

            <div className="about-hero-visual relative min-h-[520px] overflow-hidden border-t border-border lg:min-h-0 lg:border-t-0 lg:border-l">
              {["/office-finland.jpg", "/office-estonia.jpg", "/cta-stock-1.jpg"].map((src, index) => (
                <div
                  key={src}
                  className="cta-image-slide absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5, 8, 14, 0.02), rgba(5, 8, 14, 0.22)), url(${src})`,
                    animationDelay: `${index * 6 - 2}s`,
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,169,255,0.18),transparent_22%),linear-gradient(180deg,rgba(5,8,14,0),rgba(5,8,14,0.12))]" />

              <div className="relative z-10 flex h-full flex-col justify-end gap-6 p-6 lg:p-8">
                <div className="grid gap-4 lg:grid-cols-2">
                  <div className="about-floating-card border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                    <span className="inline-flex items-center gap-2 text-sm font-medium border border-white/12 bg-black/26 px-3 py-1.5 mb-4 text-white/88">
                      Finland
                    </span>
                    <h3 className="text-2xl font-light tracking-tight mb-4 text-white">Helsinki</h3>
                    <div className="space-y-2 text-sm text-white/76">
                      <p>Kontorva Oy</p>
                      <p>Business ID: 3570767-1</p>
                      <p>Sturenkatu 26 lt. 36</p>
                      <p>00510 Helsinki</p>
                    </div>
                  </div>
                  <div className="about-floating-card border border-white/10 bg-black/38 p-5 backdrop-blur-md">
                    <span className="inline-flex items-center gap-2 text-sm font-medium border border-white/12 bg-black/26 px-3 py-1.5 mb-4 text-white/88">
                      Estonia
                    </span>
                    <h3 className="text-2xl font-light tracking-tight mb-4 text-white">Tallinn</h3>
                    <div className="space-y-2 text-sm text-white/76">
                      <p>Kontorva Group OU</p>
                      <p>Reg. Code: 16916787</p>
                      <p>Tehnopol Campus</p>
                      <p>Maealuse tn 4/1, Tallinn</p>
                    </div>
                  </div>
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
