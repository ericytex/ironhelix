import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-custom text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
              B2B INFRASTRUCTURE TOOLS
            </span>
          </div>
          
          <h1 className="text-white mb-6">
            About <span className="text-iron-teal">IRONHELIX AI</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            We build enterprise-grade database lifecycle automation tools for SaaS founders and development teams. Developer-first. Governance-focused.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              To deliver predictable, structured infrastructure engineering tools that transform business logic into production-ready, governed database systems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe infrastructure tools should be deterministic, auditable, and compliant. Our non-custodial approach ensures your data always remains yours. Data Architect operates within bounded architectural rules and requires human review before deployment.
            </p>
          </div>

          {/* Company Values */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-hover text-center animate-scale-in">
              <div className="w-20 h-20 bg-gradient-to-br from-iron-accent to-iron-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security First</h3>
              <p className="text-gray-600">
                SOC 2, ISO 27001, and GDPR compliant. Enterprise-grade security for regulated environments.
              </p>
            </div>

            <div className="card-hover text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Developer-First</h3>
              <p className="text-gray-600">
                Built for engineering teams. Structured workflows. Deterministic outputs. No surprises.
              </p>
            </div>

            <div className="card-hover text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governance</h3>
              <p className="text-gray-600">
                Audit logging, RBAC, human approval gates. Compliance-ready for payment processors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-16 text-center animate-fade-in">
            <h2 className="text-gray-900 mb-4">
              What We Build
            </h2>
            <p className="text-xl text-gray-600">
              Data Architect &mdash; database lifecycle automation
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="card-hover">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Architect</h3>
              <p className="text-gray-700 mb-6">
                An enterprise-grade database architecture automation and governance platform. Converts structured business logic into production-ready SQL schemas, API contracts, zero-downtime migration workflows, and observability dashboards.
              </p>
              <p className="text-gray-600 text-sm">
                Not a general-purpose generative AI tool. Not a content creation system. A structured infrastructure engineering tool for SaaS founders and development teams. Logic-to-Infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-8 text-center">
              Company Information
            </h2>

            <div className="card-hover mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Legal Entity</h3>
                  <p className="text-gray-700">IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Trading Name</h3>
                  <p className="text-gray-700">IRONHELIX AI</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Product</h3>
                  <p className="text-gray-700">Data Architect</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industry</h3>
                  <p className="text-gray-700">B2B Infrastructure / DevTools</p>
                </div>
              </div>
            </div>

            <div className="card-hover">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What We&apos;re Not</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Important Disclosure:</strong> IRONHELIX AI is a technology company. We do not provide financial services, payment intermediation, or investment products. We are a <strong>non-financial, non-custodial software provider</strong> focused on database infrastructure automation. Data Architect is not a consumer-facing product, content generation tool, or autonomous agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">
            Ready to Automate Your Database Architecture?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with Data Architect. Enterprise-grade. Governance-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing" 
              className="bg-white text-iron-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-iron-teal hover:text-white transition-all duration-300 shadow-xl inline-block"
            >
              View Pricing
            </Link>
            <a 
              href="mailto:sales@ironhelix.ai" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-iron-blue transition-all duration-300 inline-block"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
