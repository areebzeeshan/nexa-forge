'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  badge,
}: {
  eyebrow?: string
  title: string
  highlight?: string
  description?: ReactNode
  badge?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
      {badge && (
        <span className="mt-5 inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
          {badge}
        </span>
      )}
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  )
}
