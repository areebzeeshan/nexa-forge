'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const galleryItems: {
  id: string
  name: string
  image: string
  colSpan: number
  rowSpan: number
}[] = [
  { id: '1', name: 'Renxa Recruit', image: '/renxa-recruit.jpeg', colSpan: 1, rowSpan: 1 },
  { id: '2', name: 'PwrBld Coaching', image: '/pwrbld-coaching-fitness.jpeg', colSpan: 2, rowSpan: 2 },
  { id: '3', name: 'Get Plenty', image: '/get-plenty.jpeg', colSpan: 1, rowSpan: 2 },
  { id: '4', name: 'Orange Shoe Fitness', image: '/orange-shoe-fitness.jpeg', colSpan: 1, rowSpan: 1 },
  { id: '5', name: 'Oxblue', image: '/oxblue.jpeg', colSpan: 2, rowSpan: 1 },
  { id: '6', name: 'DIY Body Fitness', image: '/diybody-fitness.jpeg', colSpan: 1, rowSpan: 1 },
  { id: '7', name: 'Jakson Design', image: '/jakson-design.jpeg', colSpan: 1, rowSpan: 2 },
  { id: '8', name: 'Premium Barber Shop', image: '/premium-barber.jpeg', colSpan: 2, rowSpan: 1 },
  { id: '9', name: 'True Classic Tees', image: '/true-classic-tees.jpeg', colSpan: 1, rowSpan: 1 },
]

export function Portfolio() {

  return (
    <section id="portfolio" className="bg-card/30 py-24">
      <div>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work Speaks"
          highlight="For Itself"
          description="A selection of recent launches across industries and platforms."
        />

        <motion.div
          layout
          className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((p) => (
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
                  <h3 className="font-heading text-lg font-bold">
                    {p.name}
                  </h3>
                  {/* <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                    View Project
                    <ArrowUpRight className="h-3 w-3" />
                  </span> */}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
