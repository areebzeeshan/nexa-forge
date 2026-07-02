'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Packages', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const servicesDropdown = [
  { label: 'Custom Website Design', href: '/services' },
  { label: 'eCommerce Development', href: '/services' },
  { label: 'Social Media Marketing', href: '/services' },
  { label: 'Logo & Brand Identity', href: '/services' },
  { label: 'SEO', href: '/services' },
  { label: 'Video & Animation', href: '/services' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
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

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li
              key={l.href}
              className={l.hasDropdown ? 'relative' : ''}
              onMouseEnter={() => l.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => l.hasDropdown && setDropdownOpen(false)}
            >
              <a
                href={l.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-colors hover:text-foreground"
              >
                {l.label}
                {l.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
              {l.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-border bg-background/95 backdrop-blur-xl shadow-lg"
                    >
                      <ul className="py-2">
                        {servicesDropdown.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-secondary hover:text-foreground"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+1 (323) 597 5232"
            className="flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            +1 (323) 597 5232
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:glow-primary"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l, i) => (
                <div key={l.href}>
                  {l.hasDropdown ? (
                    <>
                      <motion.button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                      >
                        {l.label}
                        <ChevronDown className={cn('h-4 w-4 transition-transform', dropdownOpen ? 'rotate-180' : '')} />
                      </motion.button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {servicesDropdown.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                              >
                                {item.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      {l.label}
                    </motion.a>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
