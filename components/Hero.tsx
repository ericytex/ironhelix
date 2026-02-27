import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-hero py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2.5 rounded-full mb-10">
            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
            <span className="text-slate-300 text-sm font-medium tracking-wide">Enterprise Database Lifecycle Workflows</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl leading-[1.1] tracking-tight">
            Database Schema Design and Migration Workflows
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl leading-relaxed">
            For SaaS teams, engineering teams, and startups: reduce the time and risk of designing, evolving, and governing production databases.
          </p>
          
          <p className="text-base text-slate-400 mb-12 max-w-2xl">
            You define your business rules. The platform produces structured schemas and migration scripts. A human approves before anything goes live.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link href="/pricing" className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20">
              View Pricing
            </Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200">
              How It Works
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
            <div className="text-center py-4 px-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xl font-semibold text-white mb-1">Human Approval</div>
              <div className="text-slate-400 text-sm">Required Before Deploy</div>
            </div>
            <div className="text-center py-4 px-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xl font-semibold text-white mb-1">Zero-Downtime</div>
              <div className="text-slate-400 text-sm">Migration Workflows</div>
            </div>
            <div className="text-center py-4 px-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xl font-semibold text-white mb-1">Deterministic</div>
              <div className="text-slate-400 text-sm">Structured Outputs</div>
            </div>
            <div className="text-center py-4 px-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-xl font-semibold text-white mb-1">SOC 2</div>
              <div className="text-slate-400 text-sm">Governance Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}
