'use client'

import React, { useState } from 'react'

export default function ServicePillars() {
  const [activeTab, setActiveTab] = useState('licensed')

  const tabs = [
    { id: 'licensed', label: 'Licensed Tech' },
    { id: 'saas', label: 'SaaS Platform' },
    { id: 'consultancy', label: 'Consultancy' },
  ]

  const services = [
    {
      module: '01',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI & ML Research',
      description: 'Development of proprietary large language models and secure neural architectures for data-sensitive environments.',
      features: [
        'Private Model Licensing',
        'Proprietary R&D IP',
        'Data Sovereignty Audits',
      ],
      billingModel: 'Tech License Fee',
    },
    {
      module: '02',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'SaaS & Digital Platforms',
      description: 'Subscription-based cloud infrastructure providing real-time analytics and white-label regulatory interfaces.',
      features: [
        'Subscription Dashboards',
        'Cloud Infrastructure',
        'RESTful API Access',
      ],
      billingModel: 'Tiered Subscription',
    },
    {
      module: '03',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L9 11L12 8L15 11L12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V8M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Education & Consultancy',
      description: 'Professional advisory services, strategic technology audits, and EdTech training modules for modern teams.',
      features: [
        'Strategic System Audits',
        'Technical EdTech Modules',
        'Deployment Advisory',
      ],
      billingModel: 'Milestone-based',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-iron-dark-gray mb-4">
          Our Service Pillars
        </h2>
        <p className="text-lg text-iron-dark-gray mb-8">
          Defined commercial models and technical scopes for institutional-grade organizational needs.
        </p>
        
        <div className="flex space-x-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-iron-blue border-b-2 border-iron-blue bg-gray-50'
                  : 'text-iron-dark-gray hover:text-iron-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-gray-400">MODULE {service.module}</div>
                <div className="w-12 h-12 bg-iron-light-blue rounded-full flex items-center justify-center text-iron-blue">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-iron-dark-gray mb-4">{service.title}</h3>
              <p className="text-iron-dark-gray mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-iron-blue flex-shrink-0">
                      <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-iron-dark-gray text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs text-gray-400 mb-2">BILLING MODEL</div>
                <span className="inline-block bg-gray-100 text-iron-dark-gray px-3 py-1 rounded-full text-sm font-medium">
                  {service.billingModel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

