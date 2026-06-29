'use client'

const brands = [
  'Vercel',
  'Stripe',
  'Notion',
  'Linear',
  'Framer',
  'Figma',
  'Shopify',
  'Airbnb',
  'Spotify',
  'Loom',
]

export function LogoMarquee() {
  const row = [...brands, ...brands]
  return (
    <section className="border-y border-border bg-card/40 py-14">
      <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted by Brands Worldwide
      </p>
      <div className="marquee-pause relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-4">
          {row.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex h-12 items-center whitespace-nowrap rounded-full border border-border bg-secondary/50 px-7 font-heading text-lg font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
