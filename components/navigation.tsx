"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between h-16 px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative flex h-8 items-center">
          <div
            className={cn(
              "flex items-center transition-all duration-300",
              scrolled ? "pointer-events-none w-0 scale-95 opacity-0" : "w-[170px] scale-100 opacity-100 lg:w-[210px]"
            )}
          >
            <Image
              src="/logo-full.png"
              alt="Kontorva"
              width={636}
              height={200}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          <div
            className={cn(
              "absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-0.5 transition-all duration-300",
              scrolled ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
            )}
          >
            <div className="h-6 w-2.5 -skew-x-6 bg-foreground" />
            <div className="h-6 w-2.5 -skew-x-6 bg-accent" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || 
              (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Let&apos;s Talk
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-base font-medium py-2 transition-colors",
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium bg-foreground text-background"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
