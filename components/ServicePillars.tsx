import React from 'react'
import Link from 'next/link'

export default function ServicePillars() {
  const services = [
    {
      module: '01',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2.667L2.667 9.333L16 16L29.333 9.333L16 2.667Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.667 22.667L16 29.333L29.333 22.667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.667 16L16 22.667L29.333 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-blue-700',
      title: 'AI & ML Research',
      description: 'Development of proprietary large language models and secure neural architectures for data-sensitive environments.',
      features: [
        'Private Model Licensing',
        'Proprietary R&D IP',
        'Data Sovereignty Audits',
        'Custom AI Development'
      ],
      billingModel: 'Tech License Fee',
      link: '/pricing#consultancy'
    },
    {
      module: '02',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 26.667V13.333M16 26.667V5.333M8 26.667V18.667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      gradient: 'from-teal-500 to-teal-700',
      title: 'SaaS & Digital Platforms',
      description: 'Subscription-based cloud infrastructure providing real-time analytics and white-label regulatory interfaces.',
      features: [
        'Subscription Dashboards',
        'Cloud Infrastructure',
        'RESTful API Access',
        'White-label Solutions'
      ],
      billingModel: 'Tiered Subscription',
      link: '/saas'
    },
    {
      module: '03',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18.667L12 14.667L16 10.667L20 14.667L16 18.667Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 2.667V10.667M16 21.333V29.333" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="16" r="13.333" stroke="currentColor" strokeWidth="2.5"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-purple-700',
      title: 'Education & Consultancy',
      description: 'Professional advisory services, strategic technology audits, and EdTech training modules for modern teams.',
      features: [
        'Strategic System Audits',
        'Technical EdTech Modules',
        'Deployment Advisory',
        'Team Training'
      ],
      billingModel: 'Milestone-based',
      link: '/pricing#consultancy',
      humanDriven: true
    },
  ]

  return (
    <section id="pillars" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-gray-900 mb-4">
            Our Service Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Defined commercial models and technical scopes for institutional-grade organizational needs.
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Module Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-bold text-gray-400 tracking-wider">MODULE {service.module}</span>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 text-white`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-iron-accent transition-colors">
                {service.title}
                {service.humanDriven && (
                  <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                    👥 Human Experts
                  </span>
                )}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-iron-teal mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Billing Model */}
              <div className="pt-6 border-t border-gray-200 mb-6">
                <div className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">BILLING MODEL</div>
                <span className="inline-block bg-gradient-to-r from-gray-100 to-blue-50 text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200">
                  {service.billingModel}
                </span>
              </div>

              {/* Link */}
              <Link 
                href={service.link} 
                className="inline-flex items-center text-iron-accent font-semibold hover:text-iron-accent-dark transition-colors group"
              >
                Learn more
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link href="/pricing" className="btn-accent inline-block px-12 py-4 text-lg">
            View All Pricing Plans
          </Link>
        </div>
      </div>
    </section>
  )
}
