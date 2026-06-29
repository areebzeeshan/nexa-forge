'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Code2,
  Megaphone,
  PenTool,
  Clapperboard,
  ShoppingCart,
  Smartphone,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: Code2,
    title: 'Custom Website Design',
    description:
      'Bespoke, conversion-focused websites engineered for speed, SEO, and unforgettable first impressions.',
  },
  {
    icon: ShoppingCart,
    title: 'eCommerce Development',
    description:
      'High-converting online stores with seamless checkout, payments, and inventory built to scale.',
  },
  {
    icon: PenTool,
    title: 'Logo & Brand Identity',
    description:
      'Distinctive visual identities, logos, and brand systems that make you instantly recognizable.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform apps with polished UX that users love to return to every day.',
  },
  {
    icon: Megaphone,
    title: 'SEO & Digital Marketing',
    description:
      'Data-driven campaigns and SEO that grow qualified traffic and compound your revenue.',
  },
  {
    icon: Clapperboard,
    title: 'Video & Animation',
    description:
      'Motion graphics and product videos that tell your story and stop the scroll.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Our Premium"
          highlight="Services"
          description="A full-stack creative team covering every touchpoint of your digital presence."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:glow-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
