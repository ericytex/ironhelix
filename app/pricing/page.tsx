import { pricingData } from '@/data/pricing';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-white mb-6">
            Data Architect
            <span className="text-teal-400"> Pricing</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Structured tiers for early-stage SaaS, scaling platforms, and regulated environments. Priced by projects, databases, and team seats—no usage-based credits.
          </p>
        </div>
      </section>

      {/* Billing Transparency & Refund */}
      <section className="bg-slate-50 py-8">
        <div className="container-custom px-6 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Billing Transparency</h3>
              <p className="text-slate-700 text-sm">
                Subscription-based pricing. Starter, Growth, and Enterprise tiers. Priced by projects, databases, and team seats. No AI credits or usage-based generation billing.
              </p>
            </div>
            <div className="border-t border-slate-200 pt-6">
              <h3 className="font-bold text-slate-900 mb-3">Refund Policy</h3>
              <p className="text-slate-700 text-sm mb-2">
                14-day money-back guarantee on initial subscription. Cancel anytime; access continues until end of billing period.
              </p>
              <Link href="/refund" className="inline-flex items-center text-teal-600 hover:underline font-medium text-sm">
                Full Refund Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <div className="container-custom section-padding space-y-24 bg-gradient-to-b from-slate-50 to-white">
        {pricingData.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-slate-900 mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {category.tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border ${
                    tier.highlighted
                      ? 'border-teal-500 shadow-lg scale-[1.02] bg-white'
                      : 'border-slate-200 bg-white hover:shadow-md hover:border-slate-300'
                  } p-8 transition-all duration-300 hover:-translate-y-1 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-teal-500 text-white px-4 py-1 rounded-lg text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {tier.description}
                    </p>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-slate-900">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-slate-600 ml-2">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:sales@ironhelix.ai?subject=Data Architect: ${tier.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center inline-block ${
                      tier.highlighted
                        ? 'bg-teal-500 text-white hover:bg-teal-600'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-slate-900 section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Enterprise deployments, on-premise options, and custom SLAs. Contact our team.
          </p>
          <a 
            href="mailto:sales@ironhelix.ai?subject=Data Architect - Enterprise Inquiry" 
            className="bg-white text-slate-900 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-100 transition-all duration-200 inline-block"
          >
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  );
}
