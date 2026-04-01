export interface Capability {
  slug: string
  num: string
  name: string
  tagline: string
  description: string
  bullets: string[]
  details: {
    overview: string
    approach: string[]
    deliverables: string[]
  }
}

export const capabilities: Capability[] = [
  {
    slug: "platform-engineering",
    num: "01",
    name: "Platform Engineering",
    tagline: "Because most production failures are architecture failures — and most architecture failures are decisions made too early.",
    description: "Scalable production systems built for real-world performance conditions.",
    bullets: [
      "Full-stack platform development",
      "Scalable system architecture",
      "Performance optimisation",
      "Cloud infrastructure",
      "Platform modernisation"
    ],
    details: {
      overview: "We design and build production-grade platforms that scale under real-world conditions. Our approach prioritizes reliability, maintainability, and operational clarity over theoretical elegance. Every architecture decision is made with long-term consequences in mind.",
      approach: [
        "Architecture assessment and technical due diligence",
        "Scalability planning and load testing",
        "Infrastructure as code implementation",
        "CI/CD pipeline design and automation",
        "Monitoring, alerting, and observability setup"
      ],
      deliverables: [
        "Production-ready platform architecture",
        "Automated deployment pipelines",
        "Comprehensive documentation",
        "Performance benchmarks and SLAs",
        "Ongoing support and optimisation"
      ]
    }
  },
  {
    slug: "integrations-apis",
    num: "02",
    name: "Integrations & APIs",
    tagline: "European organisations run on fragmented systems. The value is in connecting them cleanly.",
    description: "System connectivity and cross-platform data exchange that actually works.",
    bullets: [
      "API design and development",
      "System integrations",
      "Data synchronisation",
      "Secure data exchange",
      "Legacy system modernisation"
    ],
    details: {
      overview: "Modern businesses run on interconnected systems. We build robust integrations and APIs that enable seamless data flow between platforms, eliminating manual processes and reducing operational friction across your technology stack.",
      approach: [
        "Integration architecture and mapping",
        "RESTful and GraphQL API development",
        "Real-time and batch data synchronisation",
        "Authentication and security implementation",
        "Error handling and retry logic"
      ],
      deliverables: [
        "Custom API development and documentation",
        "Third-party system integrations",
        "Data transformation pipelines",
        "Monitoring dashboards",
        "Integration maintenance and support"
      ]
    }
  },
  {
    slug: "managed-engineering",
    num: "03",
    name: "Managed Engineering",
    tagline: "Good engineers exist everywhere. The infrastructure to deploy them across borders, compliantly and reliably, is rare.",
    description: "Senior engineering teams deployed across borders with full compliance support.",
    bullets: [
      "Senior engineering teams",
      "Cross-border team management",
      "Payroll and compliance",
      "Team onboarding",
      "Delivery oversight"
    ],
    details: {
      overview: "Access senior engineering talent without the complexity of cross-border employment. We handle everything from recruitment and compliance to payroll and team management, so you can focus on building great products.",
      approach: [
        "Requirements analysis and team design",
        "Talent sourcing and vetting",
        "Employment and compliance setup",
        "Onboarding and team integration",
        "Ongoing performance management"
      ],
      deliverables: [
        "Dedicated engineering teams",
        "Full compliance and payroll management",
        "Regular performance reviews",
        "Transparent reporting",
        "Scalable team structure"
      ]
    }
  },
  {
    slug: "market-intelligence",
    num: "04",
    name: "Market Intelligence",
    tagline: "When we entered the European market, the data we needed didn't exist in one place. We built the tools we wished we had.",
    description: "Registry-deep data across the Baltics and Nordics for market entry and growth.",
    bullets: [
      "Market and sector mapping",
      "Target companies and partners",
      "Verified decision-maker data",
      "Market entry analysis",
      "Ongoing intelligence support"
    ],
    details: {
      overview: "Make informed decisions with registry-level data across the Nordic-Baltic region. Our intelligence products provide the depth of insight typically reserved for local players, enabling confident market entry and expansion strategies.",
      approach: [
        "Market landscape analysis",
        "Competitor and partner identification",
        "Decision-maker mapping",
        "Regulatory environment assessment",
        "Custom research and reporting"
      ],
      deliverables: [
        "Comprehensive market reports",
        "Target company databases",
        "Contact intelligence",
        "Market entry roadmaps",
        "Ongoing intelligence updates"
      ]
    }
  },
  {
    slug: "data-ai-systems",
    num: "05",
    name: "Data & AI Systems",
    tagline: "AI is only as reliable as the data infrastructure underneath it. We build both.",
    description: "End-to-end data infrastructure and AI-driven workflow automation.",
    bullets: [
      "Data infrastructure and pipelines",
      "AI and ML integration",
      "Real-time and batch processing",
      "Workflow automation",
      "Data quality frameworks"
    ],
    details: {
      overview: "Transform your data into operational intelligence. We build the complete data infrastructure stack — from ingestion to analysis — and integrate AI capabilities that deliver measurable business outcomes.",
      approach: [
        "Data architecture design",
        "ETL pipeline development",
        "Machine learning model development",
        "AI integration into workflows",
        "Data governance implementation"
      ],
      deliverables: [
        "Production data pipelines",
        "AI/ML models and APIs",
        "Automated workflows",
        "Data quality dashboards",
        "Documentation and training"
      ]
    }
  },
  {
    slug: "business-intelligence",
    num: "06",
    name: "Business Intelligence",
    tagline: "Decisions made without visibility are guesses. We make the data legible.",
    description: "Operational dashboards and reporting systems that support real decisions.",
    bullets: [
      "Dashboards and reporting",
      "KPI tracking systems",
      "Data visualisation",
      "Reporting automation",
      "Unified data visibility"
    ],
    details: {
      overview: "Turn scattered data into actionable insights. We build business intelligence systems that give your team the visibility they need to make confident decisions — from executive dashboards to operational reporting.",
      approach: [
        "Requirements gathering and KPI definition",
        "Data source integration",
        "Dashboard design and development",
        "Automated report generation",
        "User training and adoption"
      ],
      deliverables: [
        "Custom dashboards and visualisations",
        "Automated reporting systems",
        "Self-service analytics tools",
        "Data documentation",
        "Ongoing support and enhancement"
      ]
    }
  }
]

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilities.find(c => c.slug === slug)
}
