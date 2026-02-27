import React from 'react'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 text-white">
              PROFESSIONAL SERVICES
            </span>
            <h1 className="text-white mb-6">
              Data Architect Implementation Support
            </h1>
            <p className="text-xl text-blue-100">
              Human-driven deployment, migration support, and custom integration for Data Architect. Strategic guidance from infrastructure specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-gray-900 mb-12 text-center">What We Offer</h2>
          <div className="space-y-8">
            <div className="card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation & Deployment</h3>
              <p className="text-gray-600">Deploy Data Architect into your infrastructure. CI/CD integration, environment setup, and configuration.</p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Migration Support</h3>
              <p className="text-gray-600">Zero-downtime migration planning and execution. Schema evolution from legacy systems to governed models.</p>
            </div>
            <div className="card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Integration</h3>
              <p className="text-gray-600">Connect Data Architect to your existing stack. Custom data contracts, API integrations, and observability setup.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="mailto:sales@ironhelix.ai?subject=Data Architect - Professional Services" className="btn-accent inline-block">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="text-center">
          <Link href="/pricing" className="btn-primary">
            View Data Architect Pricing
          </Link>
        </div>
      </section>
    </div>
  )
}
