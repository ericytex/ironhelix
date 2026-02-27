import React from 'react'

export default function ProductOverview() {
  return (
    <section id="product-overview" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block mb-6 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200/80 text-slate-700">
            Product Overview
          </span>
          <h2 className="text-slate-900 mb-6">
            Logic-to-Infrastructure
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Data Architect converts structured business logic into production-grade infrastructure. The system operates within bounded architectural rules and requires human review before deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="card-hover text-center">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Production SQL Schemas</h3>
            <p className="text-slate-600 text-sm">Optimized relational models from business strategy</p>
          </div>

          <div className="card-hover text-center">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">API-Ready Data Contracts</h3>
            <p className="text-slate-600 text-sm">OpenAPI, GraphQL, Zod—always in sync</p>
          </div>

          <div className="card-hover text-center">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Migration Workflows</h3>
            <p className="text-slate-600 text-sm">Expand/Contract patterns for live-safe evolution</p>
          </div>

          <div className="card-hover text-center">
            <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Observability Dashboards</h3>
            <p className="text-slate-600 text-sm">Schema drift detection and architecture monitoring</p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
            <p className="text-slate-800 text-sm font-semibold mb-2">No Public Content Generation</p>
            <p className="text-slate-700 text-sm">
              Data Architect does not generate public text, media, or user content. It operates entirely within customer-controlled engineering environments. Outputs are structured artifacts (SQL, API contracts) for internal use only.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-slate-700 text-sm font-medium">
              <strong>Critical:</strong> All schema changes require human approval before deployment. No autonomous deployment. Role-based access controls. Audit logs track every schema change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
