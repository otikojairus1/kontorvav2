"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const totalDistance = window.innerHeight + rect.height
      const progressed = window.innerHeight - rect.top
      const nextProgress = clamp(progressed / totalDistance, 0, 1)

      setScrollProgress(nextProgress)
      frameRef.current = null
    }

    const onScroll = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const badgeStyle = {
    transform: `translate3d(0, ${scrollProgress * -24}px, 0)`,
    opacity: 1 - scrollProgress * 0.2,
  }

  const titleStyle = {
    transform: `translate3d(0, ${scrollProgress * -72}px, 0) scale(${1 - scrollProgress * 0.04})`,
    opacity: 1 - scrollProgress * 0.3,
  }

  const copyStyle = {
    transform: `translate3d(0, ${scrollProgress * -44}px, 0)`,
    opacity: 1 - scrollProgress * 0.25,
  }

  const statsStyle = {
    transform: `translate3d(0, ${scrollProgress * 36}px, 0)`,
  }

  return (
    <section
      ref={sectionRef}
      className="hero-shell relative min-h-[100svh] overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.svg"
        >
          <source src="/landing-page-overlay-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 grid min-h-[100svh] lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
        <div className="flex flex-col justify-center px-6 py-24 lg:px-12 lg:py-32">
          <div
            className="inline-flex w-fit items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md transition-transform duration-300 ease-out"
            style={badgeStyle}
          >
            <span className="text-xs font-medium tracking-[0.28em] uppercase text-white/80">
              Finnish-Estonian Technology Company
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <h1
              className="text-5xl font-light leading-[0.98] tracking-tight text-white text-balance transition-transform duration-300 ease-out md:text-6xl lg:text-8xl"
              style={titleStyle}
            >
              <span className="block hero-line">Engineered for Europe.</span>
              <span className="mt-3 block text-white/65 hero-line">Built for the real world.</span>
            </h1>

            <p
              className="mt-8 max-w-2xl text-base leading-relaxed text-white/72 transition-transform duration-300 ease-out md:text-lg"
              style={copyStyle}
            >
              We build production systems, cross-border data infrastructure, and engineering
              teams that help companies move through Europe with less friction and more
              momentum.
            </p>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-4 transition-transform duration-300 ease-out"
            style={copyStyle}
          >
            <Link
              href="/capabilities"
              className="inline-flex items-center px-6 py-3.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition-colors"
            >
              Our Capabilities
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:border-white/70 hover:bg-white/8 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="flex items-end px-6 pb-8 lg:px-12 lg:pb-12">
          <div
            className="grid w-full gap-px overflow-hidden border border-white/12 bg-black/20 backdrop-blur-md"
            style={statsStyle}
          >
            <div className="bg-white/8 px-6 py-10 lg:px-8">
              <span className="block text-6xl font-light tracking-tight text-white lg:text-8xl">
                2000+
              </span>
              <p className="mt-3 text-sm tracking-[0.14em] uppercase text-white/62">
                Ecosystem users across Europe
              </p>
            </div>
            <div className="bg-white/6 px-6 py-10 lg:px-8">
              <span className="block text-6xl font-light tracking-tight text-white lg:text-8xl">
                25+
              </span>
              <p className="mt-3 text-sm tracking-[0.14em] uppercase text-white/62">
                Locations served across the Baltic-Nordic corridor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
