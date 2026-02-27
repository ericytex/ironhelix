import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-slate-700 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white text-lg font-semibold">Data Architect</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Enterprise-grade database architecture automation and governance platform for SaaS founders and development teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-300 mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/#product-overview" className="text-sm hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/docs" className="text-sm hover:text-white transition-colors">Docs</Link></li>
              <li><Link href="/#security-governance" className="text-sm hover:text-white transition-colors">Security & Governance</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-300 mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-sm hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-300 mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/compliance" className="text-sm hover:text-white transition-colors">Compliance</Link></li>
              <li><a href="mailto:support@ironhelix.ai" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-slate-500">
              © 2026 IRONHELIX · Data Architect
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/refund" className="hover:text-white transition-colors">Refund</Link>
            </div>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-500">
            <p className="font-semibold text-slate-400">IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED</p>
            <p>Registered office: Contact <a href="mailto:support@ironhelix.ai" className="hover:text-white transition-colors">support@ironhelix.ai</a> for address</p>
            <p><a href="mailto:support@ironhelix.ai" className="hover:text-white transition-colors">support@ironhelix.ai</a></p>
          </div>
          <p className="text-xs text-slate-600 mt-4 max-w-2xl">
            IRONHELIX is the trading name of IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED. Data Architect is a structured infrastructure automation tool for software teams.
          </p>
          <div className="flex gap-3 mt-4">
            <span className="text-xs font-medium text-slate-600 bg-slate-800 px-2.5 py-1 rounded">ISO 27001</span>
            <span className="text-xs font-medium text-slate-600 bg-slate-800 px-2.5 py-1 rounded">SOC 2 TYPE II</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
