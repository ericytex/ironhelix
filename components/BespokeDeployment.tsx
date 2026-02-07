import React from 'react'

export default function BespokeDeployment() {
  return (
    <section className="bg-iron-blue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bespoke Technical Deployment
          </h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Request a technical consultation for your specific integration requirements and evaluate our platform licensing options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white border-2 border-iron-blue text-iron-blue px-8 py-3 rounded hover:bg-gray-50 transition-colors font-medium">
              Request Technical Specs
            </button>
            <button className="bg-iron-blue border-2 border-white text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors font-medium">
              Contact Our Advisors
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

