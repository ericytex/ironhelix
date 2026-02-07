import React from 'react'
import Link from 'next/link'
import Logo from './Logo'

interface HeaderProps {
  currentPage?: 'home' | 'services'
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const isServicesPage = currentPage === 'services'
  
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Logo size={40} showText={true} />
        </Link>
        {isServicesPage ? (
          <>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Solutions</Link>
              <Link href="/services" className="text-iron-blue font-medium transition-colors">Services</Link>
              <a href="#pricing" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Pricing</a>
              <a href="#compliance" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Compliance</a>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search technology catalog..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-iron-blue"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="bg-iron-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Request Demo
              </button>
            </div>
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Services</Link>
              <a href="#compliance" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Compliance</a>
              <a href="#research" className="text-iron-dark-gray hover:text-iron-blue transition-colors">Research</a>
              <a href="#about" className="text-iron-dark-gray hover:text-iron-blue transition-colors">About</a>
            </nav>
            <button className="bg-iron-blue text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              Contact
            </button>
          </>
        )}
      </div>
    </header>
  )
}

