'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is your typical timeline for a website project?',
    answer: 'Our typical timeline ranges from 48 to 72 hours for standard packages. More complex projects like custom WordPress or PHP websites may take 1-2 weeks, while automated portal websites can take 2-4 weeks depending on the scope and requirements.',
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We offer unlimited revisions on most of our packages to ensure you are 100% satisfied with the final result. Our Elite and higher packages include unlimited revisions, while our Starter package includes 2 rounds of revisions.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit cards, bank transfers, and online payment platforms. Payment plans are available for larger projects. Contact us to discuss payment options that work best for you.',
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'Yes, we offer FREE 5-year domain names with our Custom WordPress and PHP Website packages. We also provide complete deployment services and can assist with hosting setup and configuration.',
  },
  {
    question: 'Are your websites mobile responsive?',
    answer: 'Absolutely! All our websites are designed to be fully responsive and work seamlessly across all devices - desktops, tablets, and mobile phones. Mobile responsiveness is included in our Elite Package and higher tiers.',
  },
  {
    question: 'Do you provide SEO services?',
    answer: 'Yes, we include basic SEO setup with all packages including Google-friendly sitemaps, meta tags, and search engine submission. We also offer advanced SEO and digital marketing services as add-ons to help improve your online visibility.',
  },
  {
    question: 'What is your money-back guarantee?',
    answer: 'We offer a 100% money-back guarantee on all our packages. If you are not completely satisfied with our work, we will work with you to make it right or provide a refund according to our terms and conditions.',
  },
  {
    question: 'Can you help with content writing?',
    answer: 'While we focus on design and development, we can provide guidance on content structure and placement. For professional copywriting services, we can recommend trusted partners or include it as an add-on service.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="relative overflow-x-hidden">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            description="Find answers to common questions about our services, process, and pricing."
          />

          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-card/60 backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-heading text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 transition-transform duration-300',
                      openIndex === index ? 'rotate-180' : ''
                    )}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
