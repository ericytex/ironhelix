import { saasProducts, getActiveProducts } from '@/data/saas-products';
import Link from 'next/link';

export default function SaaSProductsPage() {
  const activeProducts = getActiveProducts();
  const comingSoonProducts = saasProducts.filter(p => p.status === 'coming-soon' && p.id !== 'new-product-template');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="container-custom text-center relative z-10 animate-fade-in">
          <h1 className="text-white mb-6">
            IRONHELIX <span className="text-iron-teal">SaaS Products</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Powerful, subscription-based software solutions built for modern enterprises. 
            Choose your plan and get started in minutes.
          </p>
        </div>
      </section>

      {/* Active Products */}
      <div className="container-custom section-padding bg-gradient-to-b from-gray-50 to-white">
        {activeProducts.map((product, productIndex) => (
          <section key={product.id} className="mb-24 animate-fade-in" style={{ animationDelay: `${productIndex * 0.2}s` }}>
            {/* Product Header */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4 animate-scale-in">{product.icon}</div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h2 className="text-gray-900">
                  {product.name}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  product.status === 'live' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {product.status === 'live' ? '🟢 Live' : '🟡 Beta'}
                </span>
              </div>
              <p className="text-2xl gradient-text font-semibold mb-4">
                {product.tagline}
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
                {product.description}
              </p>
              {product.demoUrl && (
                <a 
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-iron-accent hover:text-iron-accent-dark font-semibold transition-colors"
                >
                  Try Live Demo 
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              )}
            </div>

            {/* Pricing Tiers */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="card-hover animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.pricing.starter.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{product.pricing.starter.period}</span>
                </div>
                
                {/* Limits */}
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-100">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                  {product.pricing.starter.limits.users && (
                    <p className="text-sm text-gray-600">• {product.pricing.starter.limits.users} users</p>
                  )}
                  {product.pricing.starter.limits.projects && (
                    <p className="text-sm text-gray-600">• {product.pricing.starter.limits.projects} projects</p>
                  )}
                  {product.pricing.starter.limits.storage && (
                    <p className="text-sm text-gray-600">• {product.pricing.starter.limits.storage} storage</p>
                  )}
                  {product.pricing.starter.limits.requests && (
                    <p className="text-sm text-gray-600">• {product.pricing.starter.limits.requests.toLocaleString()} requests/month</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {product.pricing.starter.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-iron-teal mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              <Link href={`/saas/${product.id === 'ai-story-shorts' ? 'ai-storyshorts' : product.id === 'turboscribe-alt' ? 'turboscribe' : product.id === 'habitstack-pro' ? 'habitstack' : product.id}`} className="block w-full py-3 px-6 rounded-lg font-semibold bg-gray-100 text-gray-900 hover:bg-iron-blue hover:text-white transition-all duration-300 text-center">
                View Details
              </Link>
              </div>

              {/* Professional */}
              <div className="relative rounded-2xl border-2 border-iron-accent bg-white p-8 shadow-iron-xl scale-105 hover:-translate-y-1 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-iron-accent to-iron-teal text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.pricing.professional.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{product.pricing.professional.period}</span>
                </div>
                
                {/* Limits */}
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <p className="text-sm font-semibold text-iron-blue mb-2">Includes:</p>
                  {product.pricing.professional.limits.users && (
                    <p className="text-sm text-gray-700">• {product.pricing.professional.limits.users} users</p>
                  )}
                  {product.pricing.professional.limits.projects && (
                    <p className="text-sm text-gray-700">• {product.pricing.professional.limits.projects}</p>
                  )}
                  {product.pricing.professional.limits.storage && (
                    <p className="text-sm text-gray-700">• {product.pricing.professional.limits.storage} storage</p>
                  )}
                  {product.pricing.professional.limits.requests && (
                    <p className="text-sm text-gray-700">• {product.pricing.professional.limits.requests.toLocaleString()} requests/month</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {product.pricing.professional.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-iron-accent mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/saas/${product.id === 'ai-story-shorts' ? 'ai-storyshorts' : product.id === 'turboscribe-alt' ? 'turboscribe' : product.id === 'habitstack-pro' ? 'habitstack' : product.id}`} className="btn-accent w-full text-center">
                  Get Started
                </Link>
              </div>

              {/* Enterprise */}
              <div className="card-hover animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {product.pricing.enterprise.price === 'custom' ? 'Custom' : `$${product.pricing.enterprise.price}`}
                  </span>
                  {product.pricing.enterprise.period && (
                    <span className="text-gray-600 ml-2">/{product.pricing.enterprise.period}</span>
                  )}
                </div>
                
                {/* Limits */}
                {product.pricing.enterprise.limits && (
                  <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                    {product.pricing.enterprise.limits.users && (
                      <p className="text-sm text-gray-600">• {product.pricing.enterprise.limits.users}</p>
                    )}
                    {product.pricing.enterprise.limits.storage && (
                      <p className="text-sm text-gray-600">• {product.pricing.enterprise.limits.storage}</p>
                    )}
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  {product.pricing.enterprise.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-iron-teal mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/saas/${product.id === 'ai-story-shorts' ? 'ai-storyshorts' : product.id === 'turboscribe-alt' ? 'turboscribe' : product.id === 'habitstack-pro' ? 'habitstack' : product.id}`} className="block w-full py-3 px-6 rounded-lg font-semibold bg-gray-100 text-gray-900 hover:bg-iron-blue hover:text-white transition-all duration-300 text-center">
                  View Details
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Coming Soon Products */}
      {comingSoonProducts.length > 0 && (
        <section className="bg-gradient-to-b from-gray-100 to-gray-50 section-padding">
          <div className="container-custom">
            <h2 className="text-center text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              More powerful tools on the horizon
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {comingSoonProducts.map((product, idx) => (
                <div key={product.id} className="card-hover animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="gradient-text font-semibold mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-iron-blue to-iron-accent text-white rounded-lg text-sm font-semibold">
                    Expected: {product.launchDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-hero section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with any product today. Cancel anytime. No hidden fees.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:sales@ironhelix.ai?subject=Free Trial Request" 
              className="bg-white text-iron-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-iron-teal hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-block"
            >
              Start Free Trial
            </a>
            <Link href="/pricing" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-iron-blue transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
