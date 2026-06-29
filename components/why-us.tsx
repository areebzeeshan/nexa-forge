'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useCountUp } from './use-count-up'

const points = [
  'Senior-only team with a decade of shipping at scale',
  'Pixel-perfect design paired with rock-solid engineering',
  'Transparent process with weekly demos and zero surprises',
  'Performance-obsessed: fast sites that rank and convert',
]

const stats = [
  { target: 500, suffix: '+', label: 'Websites Launched' },
  { target: 200, suffix: '+', label: 'Logos Designed' },
  { target: 98, suffix: '%', label: 'Client Retention' },
  { target: 24, suffix: '/7', label: 'Support' },
]

function StatCard({
  target,
  suffix,
  label,
}: {
  target: number
  suffix: string
  label: string
}) {
  const { ref, value } = useCountUp(target)
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur">
      <span
        ref={ref}
        className="font-heading text-4xl font-extrabold text-gradient"
      >
        {value}
        {suffix}
      </span>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

export function WhyUs() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why us
          </span>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Why Brands <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We&apos;re not a template factory. Every project is crafted to move
            your most important business metrics.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="h-4 w-4" />
                </span>
                <span className="leading-relaxed text-foreground">{p}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
