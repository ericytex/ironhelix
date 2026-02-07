import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'IRONHELIX AI - Advanced AI and Machine Learning Systems',
    template: '%s | IRONHELIX AI'
  },
  description: 'Technology company focused on building and commercializing advanced AI and machine-learning systems for B2B and institutional environments.',
  keywords: ['AI', 'Machine Learning', 'B2B Technology', 'SaaS', 'Enterprise AI', 'Institutional Technology'],
  authors: [{ name: 'IRONHELIX AI' }],
  creator: 'IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'IRONHELIX AI',
    title: 'IRONHELIX AI - Advanced AI and Machine Learning Systems',
    description: 'Technology company focused on building and commercializing advanced AI and machine-learning systems for B2B and institutional environments.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRONHELIX AI - Advanced AI and Machine Learning Systems',
    description: 'Technology company focused on building and commercializing advanced AI and machine-learning systems for B2B and institutional environments.',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

