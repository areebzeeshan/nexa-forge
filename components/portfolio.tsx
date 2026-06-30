'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const filters = ['All', 'Web Design', 'eCommerce', 'Branding', 'Mobile'] as const
type Filter = (typeof filters)[number]

const galleryItems: {
  id: string
  name: string
  category: Exclude<Filter, 'All'>
  image: string
  colSpan: number
  rowSpan: number
}[] = [
  { id: '1', name: 'Lumen Finance', category: 'Web Design', image: '/placeholder.jpg', colSpan: 1, rowSpan: 1 },
  { id: '2', name: 'Forma Store', category: 'eCommerce', image: '/placeholder.jpg', colSpan: 2, rowSpan: 2 },
  { id: '3', name: 'Atlas Studio', category: 'Branding', image: '/placeholder.jpg', colSpan: 1, rowSpan: 2 },
  { id: '4', name: 'Pulse Fitness', category: 'Mobile', image: '/placeholder.jpg', colSpan: 1, rowSpan: 1 },
  { id: '5', name: 'Verde Market', category: 'eCommerce', image: '/placeholder.jpg', colSpan: 2, rowSpan: 1 },
  { id: '6', name: 'Nova Health', category: 'Web Design', image: '/placeholder.jpg', colSpan: 1, rowSpan: 1 },
  { id: '7', name: 'Quill & Co', category: 'Branding', image: '/placeholder.jpg', colSpan: 1, rowSpan: 2 },
  { id: '8', name: 'Drift Travel', category: 'Mobile', image: '/placeholder.jpg', colSpan: 2, rowSpan: 1 },
  { id: '9', name: 'Kindred Law', category: 'Web Design', image: '/placeholder.jpg', colSpan: 1, rowSpan: 1 },
]

export function Portfolio() {
  const [active, setActive] = useState<Filter>('All')
  const visible =
    active === 'All' ? galleryItems : galleryItems.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="bg-card/30 py-24">
      <div>
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
          className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-border"
                style={{
                  gridColumn: `span ${p.colSpan}`,
                  gridRow: `span ${p.rowSpan}`,
                }}
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/95 via-background/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-bold">
                    {p.name}
                  </h3>
                  <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                    View Project
                    <ArrowUpRight className="h-3 w-3" />
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
