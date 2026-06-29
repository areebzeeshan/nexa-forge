'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'

type Billing = 'monthly' | 'oneTime'

const plans = [
  {
    name: 'Starter',
    tagline: 'For new businesses getting online',
    monthly: 99,
    oneTime: 299,
    features: [
      'Up to 5 pages',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      '2 rounds of revisions',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing brands that need more',
    monthly: 199,
    oneTime: 599,
    features: [
      'Up to 10 pages',
      'CMS & blog integration',
      'Advanced animations',
      'On-page SEO + analytics',
      'Unlimited revisions',
      'Priority email support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For ambitious, custom builds',
    monthly: 499,
    oneTime: 1499,
    features: [
      'Unlimited pages',
      'Fully custom development',
      'eCommerce & integrations',
      'Dedicated project manager',
      'Performance optimization',
      '24/7 priority support',
    ],
    popular: false,
  },
]

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent"
          highlight="Pricing"
          badge="No Hidden Fees"
        />

        <div className="mt-8 flex items-center justify-center gap-4">
          <span
            className={cn(
              'text-sm font-medium',
              billing === 'monthly' ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={billing === 'oneTime'}
            onClick={() =>
              setBilling((b) => (b === 'monthly' ? 'oneTime' : 'monthly'))
            }
            className="relative h-7 w-14 rounded-full border border-border bg-secondary"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={cn(
                'absolute top-0.5 h-5 w-5 rounded-full bg-primary',
                billing === 'oneTime' ? 'left-8' : 'left-1',
              )}
            />
          </button>
          <span
            className={cn(
              'text-sm font-medium',
              billing === 'oneTime' ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            One-Time
          </span>
        </div>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{
                opacity: 0,
                x: i === 0 ? -40 : i === 2 ? 40 : 0,
                y: i === 1 ? 40 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  ${billing === 'monthly' ? plan.monthly : plan.oneTime}
                </span>
                <span className="mb-1.5 text-sm text-muted-foreground">
                  {billing === 'monthly' ? '/mo' : 'one-time'}
                </span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
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
          ))}
        </div>
      </div>
    </section>
  )
}
