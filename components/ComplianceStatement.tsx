import React from 'react'

export default function ComplianceStatement() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-iron-light-gray rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-iron-light-blue rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-iron-blue">
                  <path d="M16 4L6 9L16 14L26 9L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 19L16 24L26 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 14L16 19L26 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-iron-dark-gray mb-4">
                Mandatory Compliance Statement
              </h3>
              <p className="text-iron-dark-gray leading-relaxed mb-6">
                IRONHELIX AI is a technology company focused on building and commercializing advanced AI and machine-learning systems. We provide proprietary AI research, cloud-based SaaS platforms, and specialized consultancy services for B2B and institutional environments. IRONHELIX AI does not provide financial services, payment intermediation, or investment products. IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED is a technology provider; all analytical outputs and tools should be reviewed by your internal compliance, legal, and risk departments.
              </p>
              <button className="bg-white border border-gray-300 text-iron-dark-gray px-6 py-2 rounded hover:bg-gray-50 transition-colors font-medium">
                GOVERNANCE FRAMEWORK
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

