import React from 'react'

export default function ServicesHero() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <nav className="text-sm text-gray-400">
            <a href="/" className="hover:text-iron-blue">Home</a>
            <span className="mx-2">›</span>
            <span className="text-iron-dark-gray">Services & Commercial Model</span>
          </nav>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 bg-iron-light-blue px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-iron-blue rounded-full"></div>
              <span className="text-iron-blue text-sm font-medium">IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-iron-dark-gray mb-6 leading-tight">
              Services & <span className="text-iron-blue">Commercial Framework</span>
            </h1>
            
            <p className="text-lg text-iron-dark-gray mb-8 leading-relaxed">
              Empowering B2B ecosystems with transparent AI research, SaaS platforms, and specialized consultancy. IRONHELIX AI delivers institutional-grade technology optimized for transparency and governance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-iron-blue text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors font-medium flex items-center justify-center space-x-2">
                <span>View Service Pillars</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="bg-white border border-gray-300 text-iron-dark-gray px-8 py-3 rounded hover:bg-gray-50 transition-colors font-medium">
                Governance Model
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * Math.PI * 2) / 8
                    const x1 = 200 + Math.cos(angle) * 150
                    const y1 = 200 + Math.sin(angle) * 150
                    const x2 = 200 + Math.cos(angle) * 50
                    const y2 = 200 + Math.sin(angle) * 50
                    return (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                    )
                  })}
                </svg>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-xs font-medium mb-1">MODEL RELIABILITY</div>
                  <div className="text-white text-2xl font-bold">99.9%</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-xs font-medium mb-1">COMPLIANCE GRADE</div>
                  <div className="text-white text-2xl font-bold">B2B Prime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

