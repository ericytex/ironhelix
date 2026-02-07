import React from 'react'

export default function Features() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 10V16L20 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="16" r="2" fill="white"/>
        </svg>
      ),
      iconBg: 'bg-iron-blue',
      title: 'Proprietary AI Research',
      description: 'Advancing the field of machine learning through rigorous R&D, focusing on explainable AI and secure, high-integrity neural architectures.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 20C24 20.5304 23.7893 21.0391 23.4142 21.4142C23.0391 21.7893 22.5304 22 22 22H10C9.46957 22 8.96086 21.7893 8.58579 21.4142C8.21071 21.0391 8 20.5304 8 20V12C8 11.4696 8.21071 10.9609 8.58579 10.5858C8.96086 10.2107 9.46957 10 10 10H22C22.5304 10 23.0391 10.2107 23.4142 10.5858C23.7893 10.9609 24 11.4696 24 12V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L14 18L20 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      iconBg: 'bg-green-300',
      title: 'Cloud-Based SaaS',
      description: 'Scalable enterprise platforms providing mission-critical stability for institutional partners via non-custodial software delivery.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="8" width="20" height="4" rx="1" fill="white"/>
          <rect x="6" y="14" width="20" height="4" rx="1" fill="white"/>
          <rect x="6" y="20" width="20" height="4" rx="1" fill="white"/>
        </svg>
      ),
      iconBg: 'bg-iron-teal',
      title: 'Digital Solutions',
      description: 'High-precision, data-driven tools for complex regulatory oversight and automated verification protocols across B2B sectors.',
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-iron-light-gray rounded-lg p-8">
              <div className={`${feature.iconBg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-iron-dark-gray mb-4">{feature.title}</h3>
              <p className="text-iron-dark-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

