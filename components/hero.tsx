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
      <div>
        <video src="/hero-section-bg.mp4" autoPlay loop muted className="absolute inset-0 h-full w-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border backdrop-blur-xl px-4 py-1.5 text-xs font-medium text-gray-300"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Award-winning digital studio
          </motion.span>

          <h1 className="mt-6 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-400 sm:text-6xl lg:text-7xl">
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
            className="mt-6 max-w-md text-lg leading-relaxed text-gray-300 text-pretty"
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

          {/* <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <TrustStat target={500} suffix="+" label="Projects Delivered" />
            <TrustStat target={98} suffix="%" label="Client Satisfaction" />
            <TrustStat target={10} suffix="+" label="Years Experience" />
          </div> */}
        </div>
      </div>
    </section>
  )
}
