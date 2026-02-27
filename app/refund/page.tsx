export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-gray-900 mb-4">Refund Policy</h1>
            <p className="text-gray-600">Last updated: February 17, 2026</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-iron p-8 md:p-12 space-y-8 animate-scale-in">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Our Commitment</h2>
              <p className="text-gray-700">
                At IRONHELIX AI, we stand behind the quality of our products and services. We want you to be completely satisfied with your purchase. This Refund Policy explains when and how you can request a refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 14-Day Money-Back Guarantee</h2>
              <p className="text-gray-700 mb-4">
                We offer a <strong>14-day money-back guarantee</strong> on all monthly and annual SaaS subscriptions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Request a full refund within 14 days of your initial purchase</li>
                <li>No questions asked for first-time subscribers</li>
                <li>Refunds processed within 5-10 business days</li>
                <li>Original payment method will be credited</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Note:</strong> This guarantee applies only to your first subscription purchase. Renewals are subject to our standard cancellation policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Products</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Monthly Subscriptions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Full refund within 14 days of initial purchase</li>
                <li>Cancel anytime; no refunds for partial months after 14-day period</li>
                <li>Access continues until the end of the billing period</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Annual Subscriptions</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Full refund within 14 days of initial purchase</li>
                <li>Pro-rated refund available within 60 days of purchase (minus usage fees)</li>
                <li>No refunds after 60 days; you may cancel and avoid auto-renewal</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. One-Time Services</h2>
              <p className="text-gray-700 mb-4">
                For custom development, consultancy, and one-time services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Before work begins:</strong> Full refund of deposit</li>
                <li><strong>During project (0-25% complete):</strong> 75% refund</li>
                <li><strong>During project (26-50% complete):</strong> 50% refund</li>
                <li><strong>During project (51-75% complete):</strong> 25% refund</li>
                <li><strong>After 75% completion:</strong> No refund available</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Completion percentage is determined by agreed-upon project milestones in your contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Items</h2>
              <p className="text-gray-700 mb-4">The following are not eligible for refunds:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Usage-based fees (API calls, processing credits, storage overages)</li>
                <li>Third-party services or licenses procured on your behalf</li>
                <li>Setup fees (unless service was never activated)</li>
                <li>Domains, SSL certificates, or other external services</li>
                <li>Services explicitly marked as "non-refundable" at purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Free Trials</h2>
              <p className="text-gray-700">
                Free trials are offered for select products. You will not be charged during the trial period. If you cancel before the trial ends, you will not be charged. If you do not cancel, your payment method will be charged at the end of the trial period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Issues and Credits</h2>
              <p className="text-gray-700 mb-4">
                If you experience service disruptions or issues:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Contact support immediately at <a href="mailto:support@ironhelix.ai" className="text-iron-accent hover:text-iron-accent-dark">support@ironhelix.ai</a></li>
                <li>We will investigate and resolve the issue promptly</li>
                <li>Service credits or pro-rated refunds may be issued for verified downtime</li>
                <li>Enterprise customers: refer to your SLA for specific terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. How to Request a Refund</h2>
              <p className="text-gray-700 mb-4">To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Email <a href="mailto:refunds@ironhelix.ai" className="text-iron-accent hover:text-iron-accent-dark">refunds@ironhelix.ai</a> with your request</li>
                <li>Include your account email, product name, and reason for refund</li>
                <li>Our team will review within 1-2 business days</li>
                <li>If approved, refunds are processed within 5-10 business days</li>
              </ol>
              <p className="text-gray-700 mt-4">
                <strong>Required Information:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                <li>Account email address</li>
                <li>Product or service name</li>
                <li>Date of purchase</li>
                <li>Brief reason for refund request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                You can cancel your subscription at any time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Cancel through your account dashboard or contact support</li>
                <li>Cancellation takes effect at the end of the current billing period</li>
                <li>You retain access to your subscription until period ends</li>
                <li>No automatic refunds for unused time (unless within 14-day guarantee)</li>
                <li>Reactivation is allowed; data retained for 30 days after cancellation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Chargebacks</h2>
              <p className="text-gray-700">
                If you file a chargeback or payment dispute with your bank/credit card company without contacting us first, your account will be immediately suspended and may be permanently terminated. We reserve the right to pursue the recovery of associated costs. Please contact us first to resolve any billing issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-700">
                We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified policy. The "Last updated" date will reflect any changes.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about our Refund Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700"><strong>Refund Requests:</strong> <a href="mailto:refunds@ironhelix.ai" className="text-iron-accent hover:text-iron-accent-dark">refunds@ironhelix.ai</a></p>
                <p className="text-gray-700"><strong>General Support:</strong> <a href="mailto:support@ironhelix.ai" className="text-iron-accent hover:text-iron-accent-dark">support@ironhelix.ai</a></p>
                <p className="text-gray-700"><strong>Website:</strong> <a href="https://ironhelix.vercel.app" className="text-iron-accent hover:text-iron-accent-dark">ironhelix.vercel.app</a></p>
              </div>
            </section>

            {/* Quick Summary Box */}
            <section className="bg-gradient-to-br from-iron-blue to-iron-accent text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quick Summary</h3>
              <div className="space-y-2">
                <p>✓ <strong>14-day money-back guarantee</strong> on all new subscriptions</p>
                <p>✓ <strong>Cancel anytime</strong> - access until period ends</p>
                <p>✓ <strong>Pro-rated refunds</strong> for annual plans (within 60 days)</p>
                <p>✓ <strong>Service credits</strong> for verified downtime</p>
                <p>✓ <strong>Fair milestone-based refunds</strong> for custom projects</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

