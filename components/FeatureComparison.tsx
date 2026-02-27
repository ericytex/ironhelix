import React from 'react'

const comparisonRows = [
  { feature: 'Input', competitors: 'Natural Language', dataArchitect: 'Business Logic & Infrastructure Strategy' },
  { feature: 'Output', competitors: 'SQL Scripts', dataArchitect: 'SQL + API Types + Data Contracts' },
  { feature: 'Migrations', competitors: 'Basic ALTER', dataArchitect: 'Zero-Downtime Migration Workflows' },
  { feature: 'Lifecycle', competitors: 'One-Off Generation', dataArchitect: 'Continuous Monitoring & Drift Detection' },
  { feature: 'Ecosystem', competitors: 'Standalone Tool', dataArchitect: 'Integrated Infrastructure Governance Platform' },
]

export default function FeatureComparison() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            How Data Architect differs from generic database tools.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse rounded-xl overflow-hidden border border-slate-200">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="text-left px-6 py-4 font-medium text-sm">Feature</th>
                <th className="text-left px-6 py-4 font-medium text-sm">Competitors</th>
                <th className="text-left px-6 py-4 font-medium text-sm bg-teal-600">Data Architect</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-medium text-slate-900 text-sm">{row.feature}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{row.competitors}</td>
                  <td className="px-6 py-4 text-slate-900 font-medium text-sm bg-teal-50">{row.dataArchitect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
