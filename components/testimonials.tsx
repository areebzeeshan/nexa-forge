'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote:
      'Nexa Forge rebuilt our site and conversions jumped 180% in the first quarter. The team is sharp, fast, and genuinely cares about results.',
    name: 'Sarah Chen',
    role: 'CMO, Lumen Finance',
    initials: 'SC',
    color: 'bg-primary/25 text-primary',
  },
  {
    quote:
      'The most professional agency we&apos;ve worked with. Every milestone was on time and the final product exceeded our wildest expectations.',
    name: 'Marcus Reid',
    role: 'Founder, Forma Store',
    initials: 'MR',
    color: 'bg-accent/25 text-accent',
  },
  {
    quote:
      'From branding to launch, they handled everything flawlessly. Our new identity finally matches the quality of our product.',
    name: 'Priya Nair',
    role: 'CEO, Atlas Studio',
    initials: 'PN',
    color: 'bg-violet-500/25 text-violet-300',
  },
  {
    quote:
      'Incredible attention to detail and a genuinely collaborative process. We felt like partners, not just another client.',
    name: 'David Okafor',
    role: 'Director, Nova Health',
    initials: 'DO',
    color: 'bg-primary/25 text-primary',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="bg-card/30 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our"
          highlight="Clients Say"
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-border bg-card/70 p-8 text-center backdrop-blur sm:p-12"
            >
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-6 font-heading text-xl font-medium leading-relaxed text-balance sm:text-2xl">
                &ldquo;{t.quote.replace(/&apos;/g, "'")}&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <span
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full font-heading font-bold',
                    t.color,
                  )}
                >
                  {t.initials}
                </span>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2.5 rounded-full transition-all',
                    i === index ? 'w-7 bg-primary' : 'w-2.5 bg-border',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
