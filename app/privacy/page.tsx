export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600">Last updated: February 27, 2026</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
              <p className="text-slate-700 mb-4">
                IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED (trading as IRONHELIX) collects information necessary to provide Data Architect and related services. We collect:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li><strong>Account data:</strong> Name, email, company name, job title</li>
                <li><strong>Usage data:</strong> Feature usage, session duration, schema operations (for service improvement and support)</li>
                <li><strong>Payment data:</strong> Processed exclusively by third-party payment processors (e.g., Paddle); we do not store full card numbers</li>
                <li><strong>Technical data:</strong> IP address, browser type, device information, logs</li>
                <li><strong>Support communications:</strong> Emails and tickets sent to support@ironhelix.ai</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Data Storage and Retention</h2>
              <p className="text-slate-700 mb-4">
                Data is stored in secure, geographically distributed data centers. Retention periods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li><strong>Account data:</strong> Retained while account is active; deleted within 30 days of account closure</li>
                <li><strong>Audit logs:</strong> Retained for 12 months (enterprise: configurable)</li>
                <li><strong>Payment records:</strong> Retained as required by tax and financial regulations (typically 7 years)</li>
                <li><strong>Support tickets:</strong> Retained for 24 months after resolution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Third-Party Services</h2>
              <p className="text-slate-700 mb-4">
                We use the following categories of third-party services. Each is bound by data processing agreements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li><strong>Payment processing:</strong> Paddle or similar; processes payments; we receive transaction identifiers only</li>
                <li><strong>Hosting & infrastructure:</strong> Vercel, AWS, or equivalent; stores application and database data</li>
                <li><strong>Email:</strong> Domain-based email (support@ironhelix.ai, legal@ironhelix.ai); transactional and support communications</li>
                <li><strong>Analytics (optional):</strong> Aggregated, anonymized usage metrics for product improvement</li>
              </ul>
              <p className="text-slate-700 mt-4">
                We do not sell personal data. We do not use customer data for model training without explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Security Controls</h2>
              <p className="text-slate-700 mb-4">
                We implement industry-standard security measures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>Role-based access controls (RBAC) for all platform access</li>
                <li>Audit logging of schema changes and administrative actions</li>
                <li>Regular security assessments and penetration testing</li>
                <li>SOC 2 Type II and ISO 27001 aligned practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Your Rights</h2>
              <p className="text-slate-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention)</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing where legally applicable</li>
                <li><strong>Withdraw consent:</strong> Where processing is consent-based</li>
              </ul>
              <p className="text-slate-700 mt-4">
                To exercise these rights, contact <a href="mailto:privacy@ironhelix.ai" className="text-teal-600 hover:underline font-medium">privacy@ironhelix.ai</a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. International Transfers</h2>
              <p className="text-slate-700">
                Data may be transferred to and processed in countries outside your residence. We use Standard Contractual Clauses (SCCs) and other approved mechanisms to ensure adequate protection under GDPR and similar regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-slate-700">
                Data Architect is a B2B enterprise tool. We do not knowingly collect data from individuals under 18. Our services are not directed to minors.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Changes</h2>
              <p className="text-slate-700">
                We may update this policy. Material changes will be posted here with an updated date. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
              <div className="bg-slate-50 rounded-xl p-6 space-y-2">
                <p className="text-slate-700"><strong>Privacy inquiries:</strong> <a href="mailto:privacy@ironhelix.ai" className="text-teal-600 hover:underline">privacy@ironhelix.ai</a></p>
                <p className="text-slate-700"><strong>Legal entity:</strong> IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED</p>
                <p className="text-slate-700"><strong>Website:</strong> <a href="https://ironhelix.vercel.app" className="text-teal-600 hover:underline">ironhelix.vercel.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
