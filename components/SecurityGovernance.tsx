import React from 'react'
import Link from 'next/link'

export default function SecurityGovernance() {
  const safeguards = [
    'Human approval required before deployment',
    'No autonomous execution—platform does not deploy changes on its own',
    'Role-based access controls (RBAC)',
    'Audit logs track every schema change',
    'No open public content generation',
    'Not a consumer-facing product',
    'No voice synthesis or media generation',
    'No political, adult, or user-generated content systems',
    'Designed strictly for software infrastructure workflows',
    'GDPR-aware design principles',
    'Customer data not used for model training without explicit consent',
  ]

  return (
    <section id="security-governance" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200/80 text-slate-700">
              PAYMENT PROCESSOR COMPLIANCE
            </span>
            <h2 className="text-slate-900 mb-4">
              Security, Governance & Responsible Automation
            </h2>
            <p className="text-xl text-slate-600">
              Clear safeguards for enterprise deployment and payment processor review.
            </p>
          </div>

          <div className="card-hover border-l-4 border-teal-500">
            <ul className="space-y-4">
              {safeguards.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/compliance" className="btn-primary inline-flex items-center justify-center">
              Full Compliance Documentation
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="mailto:legal@ironhelix.ai?subject=Compliance Inquiry" className="btn-secondary inline-flex items-center justify-center">
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
