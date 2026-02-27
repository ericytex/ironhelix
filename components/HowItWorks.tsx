import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Input Business Logic',
      description: 'Define your data model and infrastructure strategy using structured rules. No open-ended prompts—bounded inputs produce predictable outputs.',
    },
    {
      number: '2',
      title: 'Produce Structured Schema + Contracts',
      description: 'The platform produces SQL schemas, API contracts (OpenAPI, GraphQL, Zod), and migration scripts. Structured artifacts—deterministic within defined architectural constraints.',
    },
    {
      number: '3',
      title: 'Human Review → Safe Deployment',
      description: 'An approved team member reviews all changes before production deployment. No autonomous execution. No automatic deployment.',
    },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-3 py-1.5 rounded-lg text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
            Workflow & Governance
          </span>
          <h2 className="text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three steps. Human approval required. No autonomous execution.
          </p>
        </div>

        {/* Visual Workflow Diagram */}
        <div className="max-w-5xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden md:block z-0"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-lg shadow-slate-900/20">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Input Logic</h3>
              <p className="text-xs text-slate-500">Define model & rules</p>
              
              {/* Connector Arrow (Mobile) */}
              <div className="md:hidden mt-4 flex justify-center text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-white border-2 border-slate-900 text-slate-900 rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Generate Artifacts</h3>
              <p className="text-xs text-slate-500">SQL + API Contracts</p>

              {/* Connector Arrow (Mobile) */}
              <div className="md:hidden mt-4 flex justify-center text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>

            {/* Step 3 (Critical) */}
            <div className="bg-teal-50 p-6 rounded-2xl border-2 border-teal-500 shadow-md text-center relative scale-105 transform">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                Human Approval Required
              </div>
              <div className="w-12 h-12 bg-teal-500 text-white rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-lg shadow-teal-500/20">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Review & Approve</h3>
              <p className="text-xs text-slate-600">Manual verification gate</p>

              {/* Connector Arrow (Mobile) */}
              <div className="md:hidden mt-4 flex justify-center text-slate-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Safe Deployment</h3>
              <p className="text-xs text-slate-500">Zero-downtime migration</p>
            </div>
          </div>
        </div>

        {/* Detailed Steps List */}
        <div className="max-w-4xl mx-auto space-y-8 bg-slate-50 rounded-2xl p-8 border border-slate-200">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-slate-500 text-xs">
              <strong>Compliance Note:</strong> Data Architect is a technical tool for engineering teams. It does not operate autonomously. All infrastructure changes are gated by human review.
            </p>
        </div>
      </div>
    </section>
  )
}
