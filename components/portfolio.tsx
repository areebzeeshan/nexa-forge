'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from './section-heading'

const galleryItems: {
  id: string
  name: string
  image: string
  colSpan: number
  rowSpan: number
}[] = [
  { id: '1', name: 'True Classic Tees', image: '/true-classic-tees.png', colSpan: 1, rowSpan: 1 },
  { id: '2', name: 'PwrBld Coaching', image: '/pwrbld-coaching-fitness.png', colSpan: 2, rowSpan: 2 },
  { id: '3', name: 'Get Plenty', image: '/get-plenty.png', colSpan: 1, rowSpan: 2 },
  { id: '4', name: 'Orange Shoe Fitness', image: '/orange-shoe-fitness.png', colSpan: 1, rowSpan: 1 },
  { id: '5', name: 'Bornate', image: '/web-2.jpg', colSpan: 2, rowSpan: 1 },
  { id: '6', name: 'DIY Body Fitness', image: '/dibody-fitness.png', colSpan: 1, rowSpan: 1 },
  { id: '7', name: 'DesignsHub', image: '/web-1.jpg', colSpan: 1, rowSpan: 2 },
  { id: '8', name: 'Premium Barber Shop', image: '/premium-barber.jpeg', colSpan: 2, rowSpan: 1 },
  { id: '9', name: 'Interio', image: '/web-6.jpg', colSpan: 1, rowSpan: 1 },
]

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null

  const goToPrevious = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? galleryItems.length - 1 : prev - 1
    })
  }

  const goToNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => {
      if (prev === null) return null
      return prev === galleryItems.length - 1 ? 0 : prev + 1
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedIndex(null)
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

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
            {galleryItems.map((p, index) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-border cursor-pointer"
                style={{
                  gridColumn: `span ${p.colSpan}`,
                  gridRow: `span ${p.rowSpan}`,
                }}
                onClick={() => setSelectedIndex(index)}
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
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-3 text-foreground hover:bg-background transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(null)
              }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 z-10 rounded-full bg-background/80 p-3 text-foreground hover:bg-background transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 z-10 rounded-full bg-background/80 p-3 text-foreground hover:bg-background transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                width={1920}
                height={1080}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {selectedItem.name}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
