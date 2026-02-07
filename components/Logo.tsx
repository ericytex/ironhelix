import React from 'react'

interface LogoProps {
  size?: number
  showText?: boolean
  className?: string
}

export default function Logo({ size = 40, showText = true, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div 
        className="bg-iron-blue flex items-center justify-center flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <svg 
          width={size * 0.6} 
          height={size * 0.6} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          {/* Hexagonal outer shape */}
          <path 
            d="M12 2L20 6.5V17.5L12 22L4 17.5V6.5L12 2Z" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          {/* Helix/DNA double helix pattern */}
          <path 
            d="M8 8C8 8 10 10 12 10C14 10 16 8 16 8" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
          />
          <path 
            d="M8 16C8 16 10 14 12 14C14 14 16 16 16 16" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
          />
          {/* Connecting lines representing helix structure */}
          <line x1="8" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          {/* Center connection */}
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      {showText && (
        <span className="text-iron-blue text-xl font-semibold">IRONHELIX AI</span>
      )}
    </div>
  )
}

