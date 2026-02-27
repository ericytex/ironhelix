import React from 'react'

export default function ResponsibleTechnology() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 section-padding overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-iron-accent rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-iron-teal rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-iron-blue to-iron-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              FOUNDATIONAL PRINCIPLE
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-gray-900 mb-8">
            Responsible Technology
          </h2>

          {/* Quote Card */}
          <div className="bg-white rounded-3xl shadow-iron-xl p-12 mb-8 border border-gray-100 animate-scale-in">
            <div className="flex justify-center mb-6">
              <svg className="w-16 h-16 text-iron-accent opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
              "Our commitment to ethics, transparency, and governance ensures our AI solutions meet the highest institutional standards. We operate as a neutral technology provider, strictly maintaining a non-custodial and non-financial stance to eliminate conflict of interest."
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-iron-accent to-transparent"></div>
              <span className="text-iron-accent font-bold text-sm tracking-wider">IRONHELIX AI</span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-iron-accent to-transparent"></div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-iron hover:shadow-iron-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-iron-accent mb-2">100%</div>
              <div className="text-sm text-gray-600">Non-Custodial</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-iron hover:shadow-iron-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-iron-teal mb-2">SOC 2</div>
              <div className="text-sm text-gray-600">Type II Certified</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-iron hover:shadow-iron-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-iron-accent mb-2">ISO 27001</div>
              <div className="text-sm text-gray-600">Certified</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-iron hover:shadow-iron-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-iron-teal mb-2">GDPR</div>
              <div className="text-sm text-gray-600">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
