'use client'

import { motion } from 'framer-motion'
import {
  Briefcase,
  Car,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Plane,
  Rocket,
  Scale,
  ShoppingBag,
  Sparkles,
  Ticket,
  Utensils,
  Cpu,
  HandHeart,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const industries = [
  { icon: Utensils, label: 'Food & Beverage' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Home, label: 'Real Estate' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Dumbbell, label: 'Fitness' },
  { icon: Scale, label: 'Law' },
  { icon: Car, label: 'Automotive' },
  { icon: ShoppingBag, label: 'E-commerce' },
  { icon: Cpu, label: 'Technology' },
  { icon: Landmark, label: 'Finance' },
  { icon: Sparkles, label: 'Beauty' },
  { icon: Briefcase, label: 'Web3 / NFT' },
  { icon: Plane, label: 'Travel' },
  { icon: Ticket, label: 'Events' },
  { icon: HandHeart, label: 'Non-Profit' },
  { icon: Rocket, label: 'Startups' },
]

export function Industries() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Industries"
          highlight="We Serve"
          description="Deep experience across the sectors that move the world forward."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-card"
            >
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
