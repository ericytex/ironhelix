import React from 'react'
import Link from 'next/link'

export default function ComplianceStatement() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="card-hover border-l-4 border-iron-accent">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-iron-accent to-iron-teal rounded-2xl flex items-center justify-center shadow-lg">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20 5L7.5 11.25L20 17.5L32.5 11.25L20 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 23.75L20 30L32.5 23.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 17.5L20 23.75L32.5 17.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="inline-block mb-4">
                <span className="bg-red-100 text-red-800 px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  MANDATORY DISCLOSURE
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Compliance Statement
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                <strong>IRONHELIX AI</strong> is a technology company focused on building and commercializing advanced AI and machine-learning systems. We provide proprietary AI research, cloud-based SaaS platforms, and specialized consultancy services for B2B and institutional environments.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Important:</strong> IRONHELIX AI does not provide financial services, payment intermediation, or investment products. IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED is a technology provider; all analytical outputs and tools should be reviewed by your internal compliance, legal, and risk departments.
                </p>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">SOC 2 Type II</span>
                </div>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">ISO 27001</span>
                </div>
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg">
                  <span className="text-sm font-semibold text-gray-700">GDPR Compliant</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/terms" 
                  className="inline-flex items-center justify-center bg-iron-blue text-white px-6 py-3 rounded-lg hover:bg-iron-blue-dark transition-colors font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Governance Framework
                </Link>

                <Link 
                  href="/privacy" 
                  className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-iron-blue hover:text-iron-blue transition-colors font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Privacy Policy
                </Link>

                <a 
                  href="mailto:legal@ironhelix.ai" 
                  className="inline-flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-iron-blue hover:text-iron-blue transition-colors font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
