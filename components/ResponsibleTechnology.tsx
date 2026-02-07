import React from 'react'

export default function ResponsibleTechnology() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-iron-dark-gray mb-8">
          Responsible Technology
        </h2>
        <blockquote className="text-lg md:text-xl text-iron-dark-gray italic mb-8 leading-relaxed">
          "Our commitment to ethics, transparency, and governance ensures our AI solutions meet the highest institutional standards. We operate as a neutral technology provider, strictly maintaining a non-custodial and non-financial stance to eliminate conflict of interest."
        </blockquote>
        <div className="flex justify-center mb-4">
          <div className="w-24 h-px bg-gray-300"></div>
        </div>
        <p className="text-iron-blue font-medium">FOUNDATIONAL PRINCIPLE</p>
      </div>
    </section>
  )
}

