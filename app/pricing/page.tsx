'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Starter Package',
    tagline: 'Suitable for potential super-startups and brand revamps for companies',
    price: 299,
    deleted_price: 600,
    discount: 50,
    features: [
      '5 Stock Photos',
      '5 Page Website',
      '3 Banner Design',
      '1 jQuery Slider Banner',
      'FREE Google Friendly Sitemap',
      'Complete W3C Certified HTML',
      '48 to 72 hours TAT',
      '100% Satisfaction Guarantee',
    ],
    popular: false,
  },
  {
    name: 'Professional Package',
    tagline: 'Suitable for potential super-startups and brand revamps for companies',
    price: 599,
    deleted_price: 1200,
    discount: 50,
    features: [
      '10 Unique Pages Website',
      'CMS / Admin Panel Support',
      '8 Stock images',
      '5 Banner Designs',
      '1 jQuery Slider Banner',
      'FREE Google Friendly Sitemap',
      'Complete W3C Certified HTML',
      '48 to 72 hours TAT',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design Guarantee',
      '100% Money Back Guarantee *',
      'Mobile Responsive will be Additional $99*',
    ],
    popular: true,
  },
  {
    name: 'Elite Package',
    tagline: 'Suitable for potential super-startups and brand revamps for companies',
    price: 999,
    deleted_price: 2000,
    discount: 50,
    features: [
      'Upto 15 Unique Pages Website',
      'Conceptual and Dynamic Website',
      'Mobile Responsive',
      'Online Reservation/Appointment Tool (Optional)',
      'Online Payment Integration (Optional)',
      'Custom Forms',
      'Lead Capturing Forms (Optional)',
      'Striking Hover Effects',
      'Newsletter Subscription (Optional)',
      'Newsfeed Integration',
      'Social Media Integration',
      'Search Engine Submission',
      '5 Stock Photos',
      '3 Unique Banner Design',
      '1 jQuery Slider Banner',
      'Complete W3C Certified HTML',
      '48 to 72 hours TAT',
      'Facebook Page Design',
      'Twitter Page Design',
      'YouTube Page Design',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design Guarantee',
      '100% Money Back Guarantee *',
      'Buy Now',
      'Live Chat',
    ],
    popular: false,
  },
   {
    name: 'Custom Wordpress Website',
    tagline: 'Suitable for potential super-startups and brand revamps for companies',
    price: 1599,
    deleted_price: 3200,
    discount: 50,
    features: [
      '15 to 20 Pages Website',
      'Custom Made, Interactive, Dynamic & High End Design',
      'Custom WP',
      '1 jQuery Slider Banner',
      'Up to 10 Custom Made Banner Designs',
      '10 Stock Images',
      'Unlimited Revisions',
      'Special Hoover Effects',
      'Content Management System (CMS)',
      'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
      'Online Payment Integration (Optional)',
      'Multi Lingual (Optional)',
      'Custom Dynamic Forms (Optional)',
      'Signup Area (For Newsletters, Offers etc.)',
      'Search Bar',
      'Live Feeds of Social Networks integration (Optional)',
      'Mobile Responsive',
      'FREE 5 Years Domain Name',
      'Free Google Friendly Sitemap',
      'Search Engine Submission',
      'Complete W3C Certified HTML',
      'Industry Specified Team of Expert Designers and Developers',
      'Complete Deployment',
      'Dedicated Accounts Manager',
      'Facebook Page Design',
      'Twitter Page Design',
      'YouTube Page Design',
      '100% Ownership Rights',
      '100% Satisfaction Guarantee',
      '100% Unique Design Guarantee',
      '100% Money Back Guarantee *',
    ],
    popular: false,
  },
   {
    name: 'Custom PHP Website',
    tagline: 'Suitable for potential super-startups and brand revamps for companies',
    price: 2499,
    deleted_price: 5000,
    discount: 50,
    features: [
      '15 to 20 Pages Website',
      'Custom Made, Interactive, Dynamic & High End Design',
      'Custom WP/PHP',
      '1 jQuery Slider Banner',
      'Up to 10 Custom Made Banner Designs',
      '10 Stock Images',
      'Unlimited Revisions',
      'Special Hoover Effects',
      'Content Management System (CMS)',
      'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
      'Online Payment Integration (Optional)',
      'Multi Lingual (Optional)',
      'Custom Dynamic Forms (Optional)',
      'Signup Area (For Newsletters, Offers etc.)',
      'Search Bar',
      'Live Feeds of Social Networks integration (Optional)',
      'Mobile Responsive',
      '15 Seconds 2D Explainer Video',
      'Voice - Over & Sound Effects',
      'Professional Script Writing',
      'Storyboard',
      'SEO Meta Tags',
      'FREE 5 Years Domain Name',
      'Free Google Friendly Sitemap',
      'Search Engine Submission',
      'Complete W3C Certified HTML',
      'Industry Specified Team of Expert Designers and Developers',
      'Complete Deployment',
      'Dedicated Accounts Manager',
      '100% Ownership Rights',
      '100% Satisfaction Guarantee',
      '100% Unique Design Guarantee',
      '100% Money Back Guarantee *',
    ],
    popular: false,
  },
   {
    name: 'Automated Portal Website',
    tagline: 'Suitable for potential Mid Sized and Enterprise companies.',
    price: 4999,
    deleted_price: 10000,
    discount: 50,
    features: [
      'Unlimited Page Website',
      'Custom Content Management System (CMS)',
      'Unique Pages and UI Design',
      'Complete Custom Development',
      'Process Automation Tools',
      'Newsfeed Integration',
      'Social Media Plugins Integration',
      'Up to 40 Stock images',
      '10 Unique Banner Designs',
      'JQuery Slider',
      'Search Engine Submission',
      'Free Google Friendly Sitemap',
      'Custom Email Addresses',
      'Social Media Page Designs (Facebook, Twitter, Instagram)',
      'Complete W3C Certified HTML',
      'Complete Deployment',
      '100% Satisfaction Guarantee',
      '100% Unique Design Guarantee',
      'Money Back Guarantee',
      'Automated Course Creation',
      'Video Conferencing',
      'Skills/Certification Tracking',
      'Mobile Learning',
      'Asynchronous Learning',
      'CRM Features',
      'Gamification',
      'Social Learning/Message Boards',
      'Motivational Triggers',
      'Forums And Webinars',
      'E-commerce And Subscriptions',
      'Online Course Booking',
      'Excellent Reporting',
      'Invoicing Integration',
      'Financial Integrations',
      'Student Information management',
      'Automated communications',
      'Learning Management System',
      'Quick And Easy Course Scheduling',
      'Reporting And Data Analysis',
      'Assessment Management & Live Feedback',
      'Gradebooks',
      'Quick User Integration',
      'Easy Payment Methods',
      'Online Communities & Social Engagement',
      'Curation of Resources And Adding Own Resources',
    ],
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent"
            highlight="Pricing"
            badge="No Hidden Fees"
          />

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
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
