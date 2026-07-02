
export const categories = ['Web Design', 'Logo Design', 'eCommerce', 'Social Media Marketing', 'SEO', 'Video'] as const

export type Category = typeof categories[number]