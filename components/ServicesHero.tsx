import React from 'react'
import Link from 'next/link'

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-hero section-padding overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-blue-200 mb-8 animate-fade-in">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-white font-semibold">Services & Commercial Model</span>
        </nav>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
              <div className="w-2 h-2 bg-iron-teal rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold tracking-wide">IRONHELIX AI TECHNOLOGIES CO.</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Services & <span className="text-iron-teal">Commercial Framework</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Empowering B2B ecosystems with transparent AI research, SaaS platforms, and specialized consultancy. IRONHELIX AI delivers institutional-grade technology optimized for transparency and governance.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pillars" className="btn-accent inline-flex items-center justify-center">
                <span>View Service Pillars</span>
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <Link href="/pricing" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-iron-blue transition-all duration-300 font-semibold text-center">
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Stats Visualization */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-iron-blue-dark/80 to-iron-blue/80 backdrop-blur-sm border border-white/10 rounded-3xl p-12 shadow-iron-xl">
              {/* Decorative Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                  <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="1" className="text-iron-teal"/>
                </svg>
              </div>
              
              {/* Stats Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-blue-200 text-sm font-semibold mb-2">MODEL RELIABILITY</div>
                  <div className="text-white text-4xl font-bold mb-1">99.9%</div>
                  <div className="text-iron-teal text-xs">Uptime SLA</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-blue-200 text-sm font-semibold mb-2">COMPLIANCE</div>
                  <div className="text-white text-4xl font-bold mb-1">SOC 2</div>
                  <div className="text-iron-teal text-xs">Type II Certified</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-blue-200 text-sm font-semibold mb-2">ENTERPRISE</div>
                  <div className="text-white text-4xl font-bold mb-1">B2B</div>
                  <div className="text-iron-teal text-xs">Prime Grade</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
                  <div className="text-blue-200 text-sm font-semibold mb-2">SUPPORT</div>
                  <div className="text-white text-4xl font-bold mb-1">24/7</div>
                  <div className="text-iron-teal text-xs">Priority Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
