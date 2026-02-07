import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Commercial Framework',
  description: 'Empowering B2B ecosystems with transparent AI research, SaaS platforms, and specialized consultancy. IRONHELIX AI delivers institutional-grade technology optimized for transparency and governance.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

