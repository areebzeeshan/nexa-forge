'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { PricingCard } from '@/components/pricing-card'
import { cn } from '@/lib/utils'
import { pricingData } from '@/components/constants/pricing'
import { Category, categories } from '@/components/constants/categories'


export default function PricingPage() {
  const [active, setActive] = useState<Category>(categories[0])
  const visiblePlans = pricingData[active]

  return (
    <main className="relative overflow-x-hidden">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent"
            highlight="Pricing"
            badge="No Hidden Fees"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-colors',
                  active === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-secondary/40 text-muted-foreground hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-14 grid items-center gap-6 lg:grid-cols-3">
            {visiblePlans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
