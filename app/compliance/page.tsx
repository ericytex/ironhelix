import React from 'react';
import Link from 'next/link';

export default function CompliancePage() {
  const safeguards = [
    'Human approval required before schema deployment',
    'No autonomous execution—platform does not deploy changes on its own',
    'Role-based access controls',
    'Audit logging',
    'No public-facing content generation',
    'Not a consumer-facing product',
    'No voice synthesis or media generation',
    'No political, adult, or user-generated content systems',
    'Designed strictly for software infrastructure workflows',
    'GDPR-aware design principles',
    'Customer data not used for model training without explicit consent',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-custom text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide">
              MANDATORY COMPLIANCE DISCLOSURE
            </span>
          </div>
          
          <h1 className="text-white mb-6">
            Security, Governance & Responsible Automation
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Data Architect is an enterprise-grade database lifecycle automation platform. These safeguards are critical for payment processor approval and regulated deployments.
          </p>
        </div>
      </section>

      {/* Safeguards Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-8 text-center">
              Safeguards & Responsible Automation
            </h2>
            
            <div className="card-hover border-l-4 border-iron-accent mb-12">
              <ul className="space-y-4">
                {safeguards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-iron-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-12">
              <h3 className="font-bold text-gray-900 mb-3">Important Notice</h3>
              <p className="text-gray-800 leading-relaxed">
                <strong>IRONHELIX AI does not provide financial services, payment intermediation, or investment products.</strong> IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED is a technology provider. Data Architect is a structured infrastructure automation tool—not a general-purpose content generation product. All outputs should be reviewed by your internal compliance, legal, and risk departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security and compliance for regulated environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="card-hover text-center animate-scale-in">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SOC 2 Type II</h3>
              <p className="text-gray-600 text-sm">
                Audited security controls for confidentiality, availability, and processing integrity
              </p>
            </div>

            <div className="card-hover text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ISO 27001</h3>
              <p className="text-gray-600 text-sm">
                International standard for information security management systems
              </p>
            </div>

            <div className="card-hover text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">GDPR Compliant</h3>
              <p className="text-gray-600 text-sm">
                Full compliance with EU General Data Protection Regulation
              </p>
            </div>

            <div className="card-hover text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Non-Custodial</h3>
              <p className="text-gray-600 text-sm">
                Your data stays yours. We never hold or access your sensitive information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-8 text-center">
              Related Documentation
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/privacy" className="card-hover group text-center animate-fade-in">
                <svg className="w-12 h-12 text-iron-accent mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">How we handle your data</p>
              </Link>

              <Link href="/terms" className="card-hover group text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <svg className="w-12 h-12 text-iron-teal mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Governance framework</p>
              </Link>

              <Link href="/refund" className="card-hover group text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <svg className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Refund Policy</h3>
                <p className="text-sm text-gray-600">Fair refund terms</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">
            Questions About Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our legal and security teams are here to answer your questions and provide detailed compliance documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:legal@ironhelix.ai?subject=Compliance Inquiry" 
              className="bg-white text-iron-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-iron-teal hover:text-white transition-all duration-300 shadow-xl inline-block"
            >
              Contact Legal Team
            </a>
            <a 
              href="mailto:security@ironhelix.ai?subject=Security Inquiry" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-iron-blue transition-all duration-300 inline-block"
            >
              Contact Security Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
