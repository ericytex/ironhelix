import React from 'react'
import Link from 'next/link'

export default function DataArchitectProductPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/10 text-slate-300">
              Database Lifecycle Automation
            </span>
            <h1 className="text-white mb-6">
              Data Architect
            </h1>
            <p className="text-2xl text-slate-300 mb-8">
              Database architecture automation and governance platform. Logic-to-Infrastructure.
            </p>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Transform structured business logic into production-grade SQL schemas, API-ready data contracts, migration workflows, and observability dashboards. Requires human review before deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="inline-flex justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all">
                View Pricing
              </Link>
              <Link href="/#product-overview" className="inline-flex justify-center bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl transition-all">
                Product Overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-slate-900 mb-8">What Data Architect Delivers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Input</h3>
              <p className="text-slate-600">Business logic and infrastructure strategy—not natural language prompts. Structured, bounded architectural rules.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Output</h3>
              <p className="text-slate-600">Production SQL schemas, OpenAPI/GraphQL/Zod contracts, zero-downtime migration workflows, schema drift observability.</p>
            </div>
          </div>
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-700 text-sm font-medium">
              <strong>Critical:</strong> The system operates within bounded architectural rules. All schema changes require human approval before deployment. No autonomous deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Pillars Summary */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="text-slate-900 mb-12 text-center">Three Pillars</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-hover">
              <h3 className="font-semibold text-slate-900 mb-4">Schema Design Engine</h3>
              <p className="text-slate-600 text-sm mb-4">Intent-aware normalization, context engineering, ephemeral branching. Structured architectural reasoning—not content generation.</p>
            </div>
            <div className="card-hover">
              <h3 className="font-semibold text-slate-900 mb-4">High-End Automation</h3>
              <p className="text-slate-600 text-sm mb-4">Zero-downtime migrations, multi-dialect export, schema-synchronized data contracts. Consistency and determinism.</p>
            </div>
            <div className="card-hover">
              <h3 className="font-semibold text-slate-900 mb-4">Architect-Level Intelligence</h3>
              <p className="text-slate-600 text-sm mb-4">Cost-aware modeling, privacy-by-design, schema drift observability. Governance and compliance readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-hero">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/pricing" className="inline-flex justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all">
            Get Started
          </Link>
          <Link href="/compliance" className="inline-flex justify-center bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl transition-all">
            Security & Compliance
          </Link>
        </div>
      </section>
    </div>
  )
}
