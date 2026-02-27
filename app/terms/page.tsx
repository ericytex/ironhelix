export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600">Last updated: February 27, 2026</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Acceptance</h2>
              <p className="text-slate-700">
                By accessing or using Data Architect or any IRONHELIX service, you agree to these Terms of Service. If you do not agree, you may not use our services. &quot;You&quot; means the entity or individual entering into this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Service Description</h2>
              <p className="text-slate-700 mb-4">
                IRONHELIX provides Data Architect, an enterprise database lifecycle automation platform. The service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Workflow assistance for schema design and migration planning (human-guided)</li>
                <li>Structured artifact generation (SQL, API contracts) within customer-controlled environments</li>
                <li>Schema drift detection and observability</li>
                <li>No public-facing text, media, or user content generation</li>
              </ul>
              <p className="text-slate-700 mt-4">
                Data Architect operates entirely within customer-controlled engineering environments. All schema changes require human approval before deployment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Acceptable Use</h2>
              <p className="text-slate-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Use the service for illegal purposes or in violation of applicable laws</li>
                <li>Attempt unauthorized access to our systems or other customers&apos; data</li>
                <li>Interfere with or disrupt the service</li>
                <li>Upload malicious code, viruses, or harmful content</li>
                <li>Reverse engineer, decompile, or disassemble the software (except as permitted by law)</li>
                <li>Resell or redistribute the service without written permission</li>
                <li>Use the service to generate public-facing content, media, or user-facing text for third parties</li>
              </ul>
              <p className="text-slate-700 mt-4">
                Violation may result in immediate suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Payment, Billing & Refunds</h2>
              <p className="text-slate-700 mb-4">
                Subscription fees are billed in advance (monthly or annually). By providing payment information, you authorize charges for the applicable plan. Key terms:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>Fees are non-refundable except as stated in our <a href="/refund" className="text-teal-600 hover:underline">Refund Policy</a></li>
                <li>14-day money-back guarantee applies to initial subscription purchases</li>
                <li>Price changes require 30 days notice</li>
                <li>Failed payments may result in service suspension</li>
                <li>You are responsible for applicable taxes</li>
              </ul>
              <p className="text-slate-700 mt-4">
                Full refund terms: <a href="/refund" className="text-teal-600 hover:underline font-medium">Refund Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">5. Warranties & Disclaimers</h2>
              <p className="text-slate-700 mb-4">
                <strong>Disclaimer of warranties:</strong> The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We do not warrant that the service will be uninterrupted, error-free, or secure.
              </p>
              <p className="text-slate-700">
                <strong>No guarantee of results:</strong> We do not guarantee any specific outcomes from use of the service. You are responsible for reviewing and approving all schema changes before deployment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-700 mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                <li>IRONHELIX shall not be liable for indirect, incidental, special, consequential, or punitive damages</li>
                <li>Total liability for any claim shall not exceed the amount paid by you in the 12 months preceding the claim</li>
                <li>Some jurisdictions do not allow limitation of liability; in such cases, our liability is limited to the maximum permitted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">7. Indemnification</h2>
              <p className="text-slate-700">
                You agree to indemnify, defend, and hold harmless IRONHELIX, its affiliates, and their respective officers, directors, and employees from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of the service, violation of these terms, or infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
              <p className="text-slate-700 mb-4">
                We grant you a limited, non-exclusive, non-transferable license to use the service during your subscription. You retain ownership of your data. We retain all rights to the platform, software, and documentation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">9. Termination</h2>
              <p className="text-slate-700">
                We may suspend or terminate your account for violation of these terms, non-payment, or at our discretion with notice. You may cancel at any time via your account or by contacting support. Upon termination, your access ends; we will delete your data within 30 days unless retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
              <p className="text-slate-700">
                These terms are governed by applicable law. Disputes shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">11. Modifications</h2>
              <p className="text-slate-700">
                We may modify these terms. Material changes will be posted with an updated date. Continued use after changes constitutes acceptance.
              </p>
            </section>

            <section className="border-t border-slate-200 pt-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
              <div className="bg-slate-50 rounded-xl p-6 space-y-2">
                <p className="text-slate-700"><strong>Legal:</strong> <a href="mailto:legal@ironhelix.ai" className="text-teal-600 hover:underline">legal@ironhelix.ai</a></p>
                <p className="text-slate-700"><strong>Support:</strong> <a href="mailto:support@ironhelix.ai" className="text-teal-600 hover:underline">support@ironhelix.ai</a></p>
                <p className="text-slate-700"><strong>Company:</strong> IRONHELIX AI TECHNOLOGIES CO. - SMC LIMITED</p>
                <p className="text-slate-700"><strong>Website:</strong> <a href="https://ironhelix.vercel.app" className="text-teal-600 hover:underline">ironhelix.vercel.app</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
