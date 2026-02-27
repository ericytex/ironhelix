import React from 'react'

export default function UseCases() {
  const useCases = [
    {
      title: 'Safe Schema Evolution Without Downtime',
      description: 'Add new event types and reporting dimensions with zero-downtime migration workflows. Automatic migration plan generation. Human approval required before deployment. Outcome: operational stability maintained; no production incidents from schema changes.',
    },
    {
      title: 'Schema Drift Detection with Alerts',
      description: 'Manual database changes are detected when architecture diverges from the approved model. Alerts notify the team; drift reports support remediation. Outcome: predictable schema state; reduced risk of undocumented changes affecting production.',
    },
    {
      title: 'Automatic Migration Plan Generation',
      description: 'Expand/contract patterns for live-safe evolution. Multi-tenant databases: add tenant-specific tables while preserving isolation. Migration scripts and updated API contracts produced; lead architect reviews before rollout. Outcome: faster, safer schema changes; developer productivity gains.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            Business Use Cases
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Infrastructure-focused examples. Operational stability. No content generation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((uc, idx) => (
            <div key={idx} className="card-hover">
              <h3 className="text-base font-semibold text-slate-900 mb-3">{uc.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
