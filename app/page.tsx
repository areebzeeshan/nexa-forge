import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { LogoMarquee } from '@/components/logo-marquee'
import { Services } from '@/components/services'
import { WhyUs } from '@/components/why-us'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { Industries } from '@/components/industries'
import { CTABanner } from '@/components/cta-banner'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <WhyUs />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Industries />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  )
}
