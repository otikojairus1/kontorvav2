"use client"

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
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center gap-0.5">
            <div className="w-2.5 h-6 bg-foreground -skew-x-6" />
            <div className="w-2.5 h-6 bg-accent -skew-x-6" />
          </div>
          <span 
            className={cn(
              "text-lg font-semibold tracking-tight transition-all duration-300 overflow-hidden",
              scrolled ? "w-0 opacity-0" : "w-auto opacity-100"
            )}
          >
            .kontorva
          </span>
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
