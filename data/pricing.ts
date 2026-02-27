export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  tiers: PricingTier[];
}

export const pricingData: ServiceCategory[] = [
  {
    id: "data-architect",
    title: "Data Architect",
    description: "Database lifecycle automation for SaaS founders and development teams. Priced by projects, databases, and team seats.",
    tiers: [
      {
        name: "Starter",
        price: "$59",
        period: "/month",
        description: "For early-stage SaaS",
        features: [
          "1 project",
          "2 database connections",
          "2 team seats",
          "Production SQL schemas",
          "Basic migration workflows",
          "Email support"
        ]
      },
      {
        name: "Growth",
        price: "$149",
        period: "/month",
        description: "For scaling platforms",
        features: [
          "5 projects",
          "10 database connections",
          "8 team seats",
          "Zero-downtime migrations",
          "Multi-dialect export (PostgreSQL, Prisma, Supabase)",
          "Auto-generated data contracts",
          "Schema drift observability",
          "Priority support"
        ],
        highlighted: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For regulated environments",
        features: [
          "Unlimited projects",
          "Unlimited databases",
          "Unlimited team seats",
          "Cost-aware modeling",
          "Privacy-by-design (PII detection)",
          "RBAC & audit logging",
          "On-premise deployment option",
          "Dedicated support"
        ]
      }
    ]
  }
];
