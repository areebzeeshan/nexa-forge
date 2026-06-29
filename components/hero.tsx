'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useCountUp } from './use-count-up'

const words = ['We', 'Build']

function TrustStat({
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
    <div className="flex flex-col">
      <span ref={ref} className="font-heading text-3xl font-extrabold sm:text-4xl">
        {value}
        {suffix}
      </span>
      <span className="mt-1 text-sm text-muted-foreground">{label}</span>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute -bottom-24 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Award-winning digital studio
          </motion.span>

          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="block">
              {words.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.5 }}
                  className="mr-3 inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.5 }}
              className="block text-gradient"
            >
              Digital Masterpieces
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.5 }}
              className="block"
            >
              That Convert.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            We design and engineer high-performance websites, brands, and apps
            that turn visitors into customers for ambitious companies worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.74, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/40 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Play className="h-4 w-4" />
              View Portfolio
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <TrustStat target={500} suffix="+" label="Projects Delivered" />
            <TrustStat target={98} suffix="%" label="Client Satisfaction" />
            <TrustStat target={10} suffix="+" label="Years Experience" />
          </div>
        </div>

        {/* floating mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card glow-primary"
          >
            {/* browser bar */}
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              <span className="ml-3 h-5 flex-1 rounded bg-background/60" />
            </div>
            <div className="space-y-4 p-6">
              <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-violet-500/20 to-accent/20">
                <motion.div
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                />
              </div>
              <div className="h-3 w-2/3 rounded-full bg-secondary" />
              <div className="h-3 w-1/2 rounded-full bg-secondary/70" />
              <div className="flex gap-3 pt-2">
                <div className="h-20 flex-1 rounded-lg bg-secondary/60" />
                <div className="h-20 flex-1 rounded-lg bg-secondary/60" />
                <div className="h-20 flex-1 rounded-lg bg-secondary/60" />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card/90 px-5 py-4 backdrop-blur sm:block"
          >
            <p className="font-heading text-2xl font-bold text-accent">+182%</p>
            <p className="text-xs text-muted-foreground">Avg. conversion lift</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
