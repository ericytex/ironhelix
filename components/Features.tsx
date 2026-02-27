import React from 'react'

export default function Features() {
  const reasoningCore = [
    {
      title: 'Intent-Aware Normalization',
      description: 'Translates business strategy into optimized relational models—e.g., high-write vs read-heavy systems.'
    },
    {
      title: 'Context Engineering',
      description: 'Produces a semantic metadata layer from schema definitions so future systems understand schema purpose.'
    },
    {
      title: 'Ephemeral Branching',
      description: 'Sandbox data branches using copy-on-write. Safe schema experimentation without production risk.'
    }
  ]

  const highEndAutomation = [
    {
      title: 'Zero-Downtime Migration Engine',
      description: 'Expand/Contract deployment patterns. Live-safe schema evolution.'
    },
    {
      title: 'Multi-Dialect Polyglot Export',
      description: 'PostgreSQL, Supabase, Prisma, Vector DB support for retrieval systems.'
    },
    {
      title: 'Schema-Synchronized Data Contracts',
      description: 'OpenAPI specs, GraphQL types, Zod schemas—derived from and always synchronized with schema state.'
    }
  ]

  const architectIntelligence = [
    {
      title: 'Cost-Aware Modeling',
      description: 'Displays projected infrastructure cost per 1M records.'
    },
    {
      title: 'Privacy-by-Design',
      description: 'PII detection suggestions and encryption/masking recommendations based on schema analysis.'
    },
    {
      title: 'Schema Drift Observability',
      description: 'Detects manual database changes. Alerts when architecture diverges from approved model.'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-slate-900 mb-4">
            Infrastructure Automation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Three pillars of database lifecycle automation. Predictable. Structured. Engineering-grade.
          </p>
        </div>

        {/* Pillar 1: Architecture Reasoning Engine */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.947V20a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1.053c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Architecture Reasoning Engine (Human-Guided)</h3>
              <p className="text-slate-600 text-sm">Structured workflows within bounded rules</p>
            </div>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl text-sm">
            Governed workflows. Bounded rules. Deterministic outputs. Human approval required before deployment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reasoningCore.map((item, idx) => (
              <div key={idx} className="card-hover">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 2: Workflow Assistance with Approval */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Workflow Assistance with Approval</h3>
              <p className="text-gray-600 text-sm">Consistency. Determinism. Infrastructure integrity.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highEndAutomation.map((item, idx) => (
              <div key={idx} className="card-hover">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar 3: Governed Workflows */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Governed Workflows</h3>
              <p className="text-gray-600 text-sm">Governance. Auditability. Compliance readiness.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {architectIntelligence.map((item, idx) => (
              <div key={idx} className="card-hover">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
