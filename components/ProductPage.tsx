import React from 'react'
import Link from 'next/link'
import { SaaSProduct } from '@/data/saas-products'

interface ProductPageProps {
  product: SaaSProduct;
}

export default function ProductPage({ product }: ProductPageProps) {
  // Generate conversion-focused content based on product
  const getHook = (id: string) => {
    const hooks: { [key: string]: string } = {
      'project-alpha': 'Stop Guessing. Start Growing.',
      'ai-data-architect': 'From Idea to Production in Minutes, Not Months',
      'ai-story-shorts': 'Create Viral Video Content While You Sleep',
      'project-beta': 'Every Child Deserves a Personal AI Tutor',
      'adsflow': 'Generate 100 Ad Variations in the Time It Takes to Write One',
      'whatsapp-ecomm': 'Turn WhatsApp Conversations Into Revenue',
      'turboscribe-alt': 'Transcribe Hours of Audio in Seconds',
      'content-repurposer': 'One Video. Ten Platforms. Zero Extra Work.',
      'scepter': 'Transcription Built for Developers, By Developers',
      'habitstack-pro': 'Build Habits That Actually Stick'
    }
    return hooks[id] || 'Transform Your Business'
  }

  const getProblem = (id: string) => {
    const problems: { [key: string]: { title: string; points: string[] } } = {
      'project-alpha': {
        title: 'TikTok Growth Is Harder Than Ever',
        points: [
          'Algorithm changes make it impossible to predict what works',
          'Competitors are gaining followers while you\'re stuck',
          'You\'re creating content blindly with no data insights',
          'Trends move too fast to keep up manually'
        ]
      },
      'ai-data-architect': {
        title: 'Database Development Is Painfully Slow',
        points: [
          'Writing schemas manually wastes hours of developer time',
          'Database migrations break production constantly',
          'Documentation is always outdated or missing',
          'Onboarding new developers takes weeks'
        ]
      },
      'ai-story-shorts': {
        title: 'Video Production Costs Are Out of Control',
        points: [
          'Hiring video creators costs $500-$5000 per video',
          'Editing takes days and requires expensive software',
          'Voice-over talent is expensive and inconsistent',
          'Scaling video content is practically impossible'
        ]
      },
      'project-beta': {
        title: 'Traditional Education Leaves Kids Behind',
        points: [
          'One-size-fits-all curriculum doesn\'t work for every child',
          'Private tutors cost $50-150 per hour',
          'Parents don\'t have time to teach everything',
          'Kids lose interest when lessons aren\'t personalized'
        ]
      },
      'adsflow': {
        title: 'Creating Ads Is Time-Consuming and Expensive',
        points: [
          'Copywriters charge $200-1000 per ad set',
          'A/B testing requires creating dozens of variations manually',
          'Design work adds another $500-2000 in costs',
          'Campaign optimization takes constant monitoring'
        ]
      },
      'whatsapp-ecomm': {
        title: 'You\'re Missing Sales Happening on WhatsApp',
        points: [
          'Customers want to buy through WhatsApp but you\'re not set up',
          'Managing orders through chat is chaotic and error-prone',
          'You lose track of inventory and customer requests',
          'International markets use WhatsApp but you can\'t reach them'
        ]
      },
      'turboscribe-alt': {
        title: 'Transcription Services Are Too Slow and Expensive',
        points: [
          'Traditional services take 24-48 hours for results',
          'Costs add up at $1-3 per minute of audio',
          'Quality is inconsistent with offshore workers',
          'No API means manual upload/download every time'
        ]
      },
      'content-repurposer': {
        title: 'Social Media Management Is Overwhelming',
        points: [
          'Creating unique content for each platform takes hours',
          'You spend more time repurposing than creating',
          'Inconsistent posting schedule kills engagement',
          'Managing multiple accounts is a full-time job'
        ]
      },
      'scepter': {
        title: 'Developer Tools Are Built for Everyone Except Developers',
        points: [
          'Transcription tools have terrible CLI support',
          'No proper API documentation or examples',
          'Integration into workflows requires workarounds',
          'Linux support is an afterthought or missing'
        ]
      },
      'habitstack-pro': {
        title: 'Habit Trackers Don\'t Actually Help You Build Habits',
        points: [
          '92% of New Year\'s resolutions fail by February',
          'Generic reminders don\'t account for your actual schedule',
          'No accountability means it\'s easy to skip days',
          'You need AI to optimize timing, not just track checkboxes'
        ]
      }
    }
    return problems[id] || { title: 'Common Problems', points: ['Problem 1', 'Problem 2'] }
  }

  const getSolution = (id: string) => {
    const solutions: { [key: string]: { title: string; description: string } } = {
      'project-alpha': {
        title: 'AI That Decodes The TikTok Algorithm',
        description: 'Project Alpha uses deep learning to analyze what actually makes content go viral on TikTok. We track resonance patterns, engagement triggers, and emerging trends in real-time—so you can create content that the algorithm loves.'
      },
      'ai-data-architect': {
        title: 'Your AI Database Engineer',
        description: 'AI Data Architect generates optimized database schemas, migration scripts, and full documentation from simple descriptions. It understands best practices, security patterns, and scalability requirements—delivering production-ready code in minutes.'
      },
      'ai-story-shorts': {
        title: 'Hollywood-Quality Videos, Zero Effort',
        description: 'AI StoryShorts creates professional video content using advanced AI for scriptwriting, voice cloning, and video generation. Just describe what you want—our AI handles everything from concept to final 4K export.'
      },
      'project-beta': {
        title: 'Adaptive Learning That Grows With Your Child',
        description: 'Project Beta uses AI to understand how your child learns best, then creates personalized lessons that adapt in real-time. If they\'re struggling, it slows down. If they\'re excelling, it challenges them. Every child gets their own custom curriculum.'
      },
      'adsflow': {
        title: 'Your AI Creative Director',
        description: 'AdsFlow 4.0 generates unlimited ad variations with different hooks, angles, and copy styles. Our AI understands psychology, conversion optimization, and platform-specific best practices—delivering ads that actually convert.'
      },
      'whatsapp-ecomm': {
        title: 'Turn Chat Into Commerce',
        description: 'WhatsApp E-comm transforms WhatsApp into a full e-commerce platform. Handle orders, payments, inventory, and customer support—all within WhatsApp. Your customers stay in their favorite app, and you get a proper business backend.'
      },
      'turboscribe-alt': {
        title: 'Transcription at the Speed of Thought',
        description: 'TurboScribe Alt uses GPU-accelerated AI to transcribe audio 5x faster than traditional services. Upload unlimited files, get results in seconds, and integrate into any workflow with our developer-first API.'
      },
      'content-repurposer': {
        title: 'One Piece of Content, Infinite Reach',
        description: 'Content Repurposer takes your long-form content and automatically adapts it for every platform—Twitter threads, LinkedIn posts, Instagram captions, TikTok scripts, and more. Different tone, length, and format for each platform, all generated instantly.'
      },
      'scepter': {
        title: 'Transcription That Respects Your Workflow',
        description: 'Scepter is built by Linux developers for Linux developers. Full CLI support, proper documentation, batch processing, and integration with your favorite tools. Finally, a transcription service that doesn\'t assume everyone uses a web GUI.'
      },
      'habitstack-pro': {
        title: 'AI That Learns When You\'re Most Likely to Succeed',
        description: 'HabitStack Pro analyzes your patterns to find your optimal habit timing. Stressed Mondays? We won\'t remind you then. Energetic mornings? That\'s when we\'ll push you. Plus team accountability loops that make skipping harder than showing up.'
      }
    }
    return solutions[id] || { title: 'Our Solution', description: 'We solve this problem.' }
  }

  const problem = getProblem(product.id)
  const solution = getSolution(product.id)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Status Badge & Icon */}
            <div className="inline-flex items-center gap-4 mb-6 animate-fade-in">
              <span className="text-6xl">{product.icon}</span>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                product.status === 'live' 
                  ? 'bg-green-500 text-white' 
                  : product.status === 'beta'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-500 text-white'
              }`}>
                {product.status === 'live' ? '🟢 Live Now' : product.status === 'beta' ? '🟡 Beta Access' : '🔜 Coming Soon'}
              </span>
            </div>

            {/* Hook - Big Promise */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              {getHook(product.id)}
            </h1>

            {/* Product Name & Tagline */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-2xl md:text-3xl text-iron-teal font-bold mb-2">
                {product.name}
              </p>
              <p className="text-xl text-blue-200">
                {product.tagline}
              </p>
            </div>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {product.description}
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button className="btn-accent text-lg px-12 py-5 shadow-2xl text-white">
                Start Free 14-Day Trial
              </button>
              {product.demoUrl && (
                <Link href={product.demoUrl} className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 rounded-lg hover:bg-white hover:text-iron-blue transition-all duration-300 font-semibold text-lg">
                  Watch Demo →
                </Link>
              )}
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">{problem.title}</h2>
            <p className="text-xl text-gray-600">Sound familiar? You're not alone.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problem.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              THE SOLUTION
            </span>
            <h2 className="text-gray-900 mb-6">{solution.title}</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {product.pricing.professional.features.slice(0, 6).map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl shadow-iron hover:shadow-iron-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-iron-accent to-iron-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Start free. Scale when you're ready. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Tier */}
            <div className="card-hover animate-scale-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.pricing.starter.name || 'Starter'}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${product.pricing.starter.price}
                </span>
                <span className="text-gray-600 ml-2">/{product.pricing.starter.period}</span>
              </div>

              {product.pricing.starter.limits.custom && (
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">{product.pricing.starter.limits.custom}</p>
                </div>
              )}

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

              <button className="w-full btn-secondary">
                Start Free Trial
              </button>
            </div>

            {/* Professional Tier */}
            <div className="relative card-hover border-2 border-iron-accent scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-iron-accent to-iron-teal text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.pricing.professional.name || 'Professional'}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  ${product.pricing.professional.price}
                </span>
                <span className="text-gray-600 ml-2">/{product.pricing.professional.period}</span>
              </div>

              {product.pricing.professional.limits.custom && (
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                  <p className="text-sm font-semibold text-iron-blue">{product.pricing.professional.limits.custom}</p>
                </div>
              )}

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

              <button className="w-full btn-accent">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="card-hover animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {product.pricing.enterprise.name || 'Enterprise'}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {product.pricing.enterprise.price === 'custom' ? 'Custom' : `$${product.pricing.enterprise.price}`}
                </span>
                {product.pricing.enterprise.period && (
                  <span className="text-gray-600 ml-2">/{product.pricing.enterprise.period}</span>
                )}
              </div>

              {product.pricing.enterprise.limits?.custom && (
                <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg">
                  <p className="text-sm font-semibold text-gray-700">{product.pricing.enterprise.limits.custom}</p>
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

              <a href="mailto:sales@ironhelix.ai" className="block w-full text-center btn-secondary">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Money-Back Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-green-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-center gap-3 text-green-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="text-left">
                  <p className="font-bold text-lg">14-Day Money-Back Guarantee</p>
                  <p className="text-sm">Not satisfied? Get a full refund, no questions asked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white rounded-xl p-6 shadow-iron group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                How does the free trial work?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Start using {product.name} immediately with full access to all features. No credit card required. After 14 days, choose a plan or let the trial expire—no automatic charges.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-iron group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                Can I cancel anytime?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! Cancel your subscription anytime from your account dashboard. You'll retain access until the end of your billing period. No cancellation fees or questions.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-iron group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                What payment methods do you accept?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans. All payments are processed securely.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-iron group">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer flex items-center justify-between">
                Do you offer discounts for annual plans?
                <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700">
                Yes! Save 20% by choosing annual billing. Contact us at sales@ironhelix.ai for custom annual enterprise pricing with additional discounts.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-hero section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-6xl mb-6 inline-block">{product.icon}</span>
          <h2 className="text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-2xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of users who've already transformed their workflow with {product.name}. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-iron-blue px-12 py-5 rounded-lg font-bold text-xl hover:bg-iron-teal hover:text-white transition-all duration-300 shadow-2xl hover:shadow-iron-teal/50 hover:scale-105">
              Start Free 14-Day Trial →
            </button>
            <Link href="/pricing" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-12 py-5 rounded-lg font-semibold text-xl hover:bg-white hover:text-iron-blue transition-all duration-300">
              View All Products
            </Link>
          </div>

          <p className="text-blue-200 mt-8 text-sm">
            ✓ No credit card required  •  ✓ Cancel anytime  •  ✓ 14-day money-back guarantee
          </p>
        </div>
      </section>
    </div>
  )
}
