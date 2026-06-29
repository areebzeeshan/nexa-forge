'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:py-20"
      >
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-accent/20 blur-[120px]"
        />

        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground text-pretty">
            Let&apos;s build something extraordinary together.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <CalendarClock className="h-4 w-4" />
              Schedule a Free Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
