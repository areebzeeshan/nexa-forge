'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const filters = ['All', 'Web Design', 'eCommerce', 'Branding', 'Mobile'] as const
type Filter = (typeof filters)[number]

const projects: {
  name: string
  category: Exclude<Filter, 'All'>
  gradient: string
}[] = [
  { name: 'Lumen Finance', category: 'Web Design', gradient: 'from-primary/40 to-violet-500/30' },
  { name: 'Forma Store', category: 'eCommerce', gradient: 'from-accent/40 to-primary/30' },
  { name: 'Atlas Studio', category: 'Branding', gradient: 'from-violet-500/40 to-accent/30' },
  { name: 'Pulse Fitness', category: 'Mobile', gradient: 'from-primary/40 to-accent/30' },
  { name: 'Verde Market', category: 'eCommerce', gradient: 'from-accent/40 to-violet-500/30' },
  { name: 'Nova Health', category: 'Web Design', gradient: 'from-violet-500/40 to-primary/30' },
  { name: 'Quill & Co', category: 'Branding', gradient: 'from-primary/30 to-accent/40' },
  { name: 'Drift Travel', category: 'Mobile', gradient: 'from-accent/30 to-primary/40' },
  { name: 'Kindred Law', category: 'Web Design', gradient: 'from-violet-500/30 to-accent/40' },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('All')
  const visible =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work Speaks"
          highlight="For Itself"
          description="A selection of recent launches across industries and platforms."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                active === f
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-secondary/40 text-muted-foreground hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
              >
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br',
                    p.gradient,
                  )}
                />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold">
                    {p.name}
                  </h3>
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="absolute bottom-4 left-6 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-heading text-lg font-bold text-foreground/90">
                    {p.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {p.category}
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
