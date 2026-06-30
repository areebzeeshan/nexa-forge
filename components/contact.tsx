'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'

const offices = [
  { country: 'United States', city: 'New York, NY' },
  { country: 'United Kingdom', city: 'London, UK' },
  { country: 'Canada', city: 'Toronto, ON' },
]

const services = [
  'Custom Website Design',
  'eCommerce Development',
  'Logo & Brand Identity',
  'Mobile App Development',
  'SEO & Digital Marketing',
  'Video & Animation',
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent'>('idle')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('sent'), 1600)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Let&apos;s Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:+13235975232"
              className="flex items-center gap-3 text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              +1 (323) 597 5232
            </a>
            <a
              href="mailto:info@nexaforgeagency.com"
              className="flex items-center gap-3 text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              info@nexaforgeagency.com
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            <div className="rounded-xl border border-border bg-card/50 p-4">
              <MapPin className="h-4 w-4 text-accent" />
              <div className="mt-2 text-sm font-semibold">
                United States
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Los Angeles, California <br />
                <span className="text-accent">+1 (323) 597-5232</span>
              </div>
              <div className="mt-4 h-px bg-muted-foreground" />
              <p className="mt-4 text-xs text-muted-foreground">
                Opening hours: Mon - Fri: 9am - 5pm
              </p>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <input
                id="name"
                name="name"
                required
                placeholder="Jane Doe"
                className="input"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="input"
              />
            </Field>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Phone" htmlFor="phone">
              <input
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="input"
              />
            </Field>
            <Field label="Service" htmlFor="service">
              <select id="service" name="service" required className="input">
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="input resize-none"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary disabled:opacity-70"
          >
            {status === 'loading' && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            {status === 'idle' && <Send className="h-4 w-4" />}
            {status === 'idle'
              ? 'Send Message'
              : status === 'loading'
                ? 'Sending...'
                : 'Message Sent!'}
          </button>
        </motion.form>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.625rem;
          border: 1px solid var(--border);
          background: var(--secondary);
          padding: 0.65rem 0.85rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input::placeholder { color: var(--muted-foreground); }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.62 0.2 258 / 25%);
        }
      `}</style>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
