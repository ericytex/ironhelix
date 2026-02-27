import React from 'react'
import Link from 'next/link'

export default function InstitutionalScale() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium">
                Enterprise Ready
              </span>
            </div>

            <h2 className="text-slate-900 mb-6">
              Built for Institutional Scale
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Data Architect enables SaaS founders and development teams to build governed database infrastructure without compromising security, privacy, or data sovereignty.
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <span className="font-semibold text-slate-900">Enterprise Security:</span>
                  <span className="text-slate-600"> SOC 2 Type II, ISO 27001, and GDPR compliant</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <span className="font-semibold text-slate-900">High Performance:</span>
                  <span className="text-slate-600"> 99.9% uptime SLA with global infrastructure</span>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <span className="font-semibold text-slate-900">Data Sovereignty:</span>
                  <span className="text-slate-600"> Your data stays yours, always non-custodial</span>
                </div>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="btn-primary inline-flex items-center justify-center">
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a href="mailto:sales@ironhelix.ai" className="btn-secondary inline-flex items-center justify-center">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-lg">
              <div className="relative aspect-square">
                <div className="absolute inset-0 border-4 border-dashed border-slate-200 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
                <div className="absolute inset-8 border-4 border-dotted border-slate-200 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-16 bg-slate-900 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-center text-white p-8">
                    <div className="text-5xl font-bold mb-2">99.9%</div>
                    <div className="text-lg font-semibold">Uptime SLA</div>
                    <div className="text-sm opacity-90 mt-2">Enterprise Grade</div>
                  </div>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
                  <span className="text-sm font-semibold text-slate-700">SOC 2</span>
                </div>
                <div className="absolute top-1/4 -right-4 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
                  <span className="text-sm font-semibold text-slate-700">ISO 27001</span>
                </div>
                <div className="absolute bottom-1/4 -left-4 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
                  <span className="text-sm font-semibold text-slate-700">GDPR</span>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white rounded-full px-5 py-2.5 shadow-md border border-slate-100">
                  <span className="text-sm font-semibold text-slate-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-slate-900 rounded-3xl p-12 text-center shadow-iron-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Database Architecture?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join development teams building governed, production-ready infrastructure with Data Architect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-100 transition-all duration-200">
              View Pricing
            </Link>
            <a href="mailto:sales@ironhelix.ai" className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/20 transition-all duration-200">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
