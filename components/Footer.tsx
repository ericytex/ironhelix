import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-iron-light-gray py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo size={40} showText={true} />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-2">
              © 2024 IRONHELIX AI TECHNOLOGIES CO.-SMC LIMITED
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Enterprise Grade AI Systems & Research.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-iron-dark-gray mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-iron-dark-gray mb-4">COMMERCIAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Licensing</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">SLA Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-iron-dark-gray mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-iron-dark-gray mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Tech Support</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-iron-blue transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  )
}

