'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PricingPlan {
  name: string
  tagline: string
  price: number
  deleted_price?: number
  discount?: number
  features: string[]
  popular: boolean
}

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

export function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index === 0 ? -40 : index === 2 ? 40 : 0,
        y: index === 1 ? 40 : 0,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative flex flex-col rounded-2xl border bg-card/60 p-8 backdrop-blur',
        plan.popular
          ? 'border-primary glow-primary lg:scale-105'
          : 'border-border',
      )}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {plan.tagline}
      </p>
      <div className="mt-6 flex items-end gap-1">
        <span className="font-heading text-5xl font-extrabold">
          ${plan.price}
        </span>
        <span className="text-muted-foreground flex flex-col">
          {plan.deleted_price && (
            <span className="line-through">${plan.deleted_price}</span>
          )}
          {plan.discount && (
            <span className="ml-2 text-primary">{plan.discount}% off</span>
          )}
        </span>
      </div>
      <ul 
        className={cn(
          'mt-7 flex-1 space-y-3',
          plan.features.length > 8 ? 'max-h-64 overflow-y-auto pr-2' : ''
        )}
      >
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/20 text-accent">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="leading-relaxed text-muted-foreground">
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={cn(
          'mt-8 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-all',
          plan.popular
            ? 'bg-primary text-primary-foreground hover:glow-primary'
            : 'border border-border bg-secondary/40 text-foreground hover:bg-secondary',
        )}
      >
        Get Started
      </a>
    </motion.div>
  )
}
