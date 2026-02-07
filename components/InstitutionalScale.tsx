import React from 'react'

export default function InstitutionalScale() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-iron-dark-gray mb-6">
              Built for Institutional Scale
            </h2>
            <p className="text-lg text-iron-dark-gray mb-8 leading-relaxed">
              Our platform enables financial regulators and B2B firms to leverage the power of advanced AI without compromising on security, privacy, or data sovereignty.
            </p>
            <button className="bg-iron-dark-gray text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors font-medium flex items-center space-x-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5L10 12L17 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Connect with Executive Team</span>
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-full"></div>
              <div className="absolute inset-8 grid grid-cols-5 gap-6">
                {Array.from({ length: 25 }).map((_, i) => {
                  const highlightedIndices = [2, 7, 12, 17, 22]
                  const isHighlighted = highlightedIndices.includes(i)
                  const colors = ['bg-iron-blue', 'bg-green-400', 'bg-iron-teal']
                  const colorIndex = highlightedIndices.indexOf(i) % 3
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        isHighlighted ? colors[colorIndex] : 'bg-gray-300'
                      }`}
                    ></div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

