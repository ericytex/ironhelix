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
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three steps. Human approval required. No autonomous execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <p className="text-slate-700 text-sm font-medium">
              <strong>Key point:</strong> All schema changes require explicit human approval before production deployment. The platform does not deploy changes on its own.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
