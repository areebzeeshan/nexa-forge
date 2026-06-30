'use client'

import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import type { SVGProps } from 'react'

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-8H5.67v8h2.67ZM7 9.18a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.16v-4.39c0-2.35-1.25-3.44-2.92-3.44a2.52 2.52 0 0 0-2.28 1.25v-1.08h-2.67v8h2.67v-4.2c0-1.11.21-2.18 1.58-2.18 1.35 0 1.37 1.26 1.37 2.25v4.13h2.92Z" />
    </svg>
  )
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.96 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'Quick Links',
    links: ['Home', 'Services', 'Portfolio', 'Packages', 'About', 'Contact'],
  },
  {
    title: 'Services',
    links: [
      'Website Design',
      'eCommerce',
      'Brand Identity',
      'Mobile Apps',
      'SEO & Marketing',
      'Video & Animation',
    ],
  },
]

const socials = [
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: TwitterIcon, label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg text-primary-foreground overflow-hidden sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-28 lg:w-28">
                <Image
                  src="/nexa-forge.png"
                  alt="Nexa Forge"
                  width={112}
                  height={112}
                  className="h-full w-full object-contain"
                />
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium digital studio crafting websites, brands, and apps that
              convert for ambitious companies worldwide.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>+1 (323) 597 5232</li>
              <li>info@nexaforgeagency.com</li>
              <li>Los Angeles, California</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexa Forge Agency. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
