export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-200/80 text-slate-700">
              Technical Documentation
            </span>
            <h1 className="text-slate-900 mb-4">Data Architect Docs</h1>
            <p className="text-xl text-slate-600">
              Enterprise database lifecycle workflows. API contracts, migration plans, and schema drift visualization.
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">API Contract Examples</h2>
              <p className="text-slate-700 mb-4">
                Data Architect derives OpenAPI, GraphQL, and Zod schemas from your approved database schema. Example OpenAPI snippet:
              </p>
              <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto text-sm font-mono">
{`openapi: 3.0.3
paths:
  /api/users:
    get:
      summary: List users
      responses:
        "200":
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/User"
components:
  schemas:
    User:
      type: object
      properties:
        id: { type: string, format: uuid }
        email: { type: string, format: email }
        created_at: { type: string, format: date-time }`}
              </pre>
              <p className="text-slate-600 text-sm mt-4">
                Schemas are synchronized with the database. No manual drift. Human approval required before schema changes propagate.
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Migration Plan Sample</h2>
              <p className="text-slate-700 mb-4">
                Expand/Contract pattern for zero-downtime schema evolution. Example migration plan:
              </p>
              <pre className="bg-slate-900 text-slate-100 rounded-xl p-6 overflow-x-auto text-sm font-mono">
{`-- Phase 1: Expand (add new column, nullable)
ALTER TABLE orders ADD COLUMN region VARCHAR(64) NULL;

-- Phase 2: Backfill (run application logic)
-- Application populates region from existing data

-- Phase 3: Contract (make NOT NULL after backfill)
ALTER TABLE orders ALTER COLUMN region SET NOT NULL;`}
              </pre>
              <p className="text-slate-600 text-sm mt-4">
                Migration plans are produced as structured artifacts. Review and approve before deployment.
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Schema Drift Visualization</h2>
              <p className="text-slate-700 mb-4">
                When the live database diverges from the approved schema, Data Architect surfaces drift reports:
              </p>
              <div className="bg-slate-100 rounded-xl p-6 font-mono text-sm">
                <div className="text-slate-700 space-y-2">
                  <p><span className="text-amber-600 font-semibold">DRIFT DETECTED</span> — Table: orders</p>
                  <p className="ml-4">• Column &quot;region&quot; missing in production</p>
                  <p className="ml-4">• Index &quot;idx_orders_region&quot; not applied</p>
                  <p className="text-slate-500 mt-4">Last sync: 2026-02-27 14:32 UTC</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                Alerts notify the team. Audit logs track every schema change. Role-based access controls govern who can approve deployments.
              </p>
            </section>

            <section className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Enterprise Technical Software</h2>
              <p className="text-slate-700 mb-4">
                Data Architect is enterprise infrastructure software for development teams. It does not generate public-facing text, media, or user content. All outputs are structured artifacts (SQL, API specs, migration scripts) for use within customer-controlled engineering environments.
              </p>
              <p className="text-slate-700">
                For full API documentation, migration guides, and integration support, contact <a href="mailto:support@ironhelix.ai" className="text-teal-600 hover:underline font-medium">support@ironhelix.ai</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
