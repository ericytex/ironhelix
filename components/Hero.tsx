import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-iron-light-blue px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 bg-iron-blue rounded-full"></div>
            <span className="text-iron-blue text-sm font-medium">NON-CUSTODIAL B2B TECHNOLOGY PROVIDER</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-iron-dark-gray mb-6 max-w-4xl leading-tight">
            We are a technology company focused on building and commercializing{' '}
            <span className="text-iron-teal">advanced AI and machine-learning systems</span>.
          </h1>
          
          <p className="text-lg text-iron-dark-gray mb-12 max-w-3xl">
            Our ecosystem spans proprietary AI research, cloud-based SaaS platforms, and data-driven digital solutions, delivering high-performance infrastructure for global B2B technology environments.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/services" className="bg-iron-blue text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors font-medium text-center">
              Our Services
            </Link>
            <button className="bg-white border-2 border-iron-blue text-iron-blue px-8 py-3 rounded hover:bg-iron-light-blue transition-colors font-medium flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M5 18C5 14 7 12 10 12C13 12 15 14 15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 12V8M10 8L12 10M10 8L8 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Technology & Research</span>
            </button>
            <button className="bg-white border-2 border-iron-blue text-iron-blue px-8 py-3 rounded hover:bg-iron-light-blue transition-colors font-medium">
              Compliance & Governance
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

