export interface Industry {
  slug: string
  num: string
  name: string
  description: string
  details: {
    overview: string
    challenges: string[]
    solutions: string[]
    capabilities: string[]
  }
}

export const industries: Industry[] = [
  {
    slug: "fintech",
    num: "01",
    name: "Fintech",
    description: "Secure, high-reliability systems for financial data, transactions, and regulatory-compliant infrastructure.",
    details: {
      overview: "Financial technology demands the highest standards of security, reliability, and regulatory compliance. We build systems that process transactions, handle sensitive data, and meet the stringent requirements of European financial regulators.",
      challenges: [
        "Regulatory compliance across multiple jurisdictions",
        "Real-time transaction processing at scale",
        "Security and fraud prevention",
        "Legacy system integration",
        "Data privacy and GDPR compliance"
      ],
      solutions: [
        "PCI-DSS compliant infrastructure design",
        "Real-time payment processing systems",
        "KYC/AML automation workflows",
        "Secure API development for banking integrations",
        "Regulatory reporting automation"
      ],
      capabilities: ["Platform Engineering", "Integrations & APIs", "Data & AI Systems"]
    }
  },
  {
    slug: "mobility-logistics",
    num: "02",
    name: "Mobility & Logistics",
    description: "Real-time platforms powering movement, coordination, and operational efficiency across transport and supply systems.",
    details: {
      overview: "Moving people and goods efficiently requires systems that operate in real-time, handle complex coordination, and scale with demand. We build the digital infrastructure that powers modern mobility and logistics operations.",
      challenges: [
        "Real-time tracking and coordination",
        "Route optimisation at scale",
        "Multi-modal transport integration",
        "Last-mile delivery efficiency",
        "Environmental compliance reporting"
      ],
      solutions: [
        "Fleet management platforms",
        "Real-time tracking and visibility systems",
        "Route optimisation algorithms",
        "Supply chain integration APIs",
        "Carbon footprint tracking and reporting"
      ],
      capabilities: ["Platform Engineering", "Data & AI Systems", "Business Intelligence"]
    }
  },
  {
    slug: "retail",
    num: "03",
    name: "Retail",
    description: "Scalable commerce systems enabling seamless transactions, inventory control, and data-driven customer experiences.",
    details: {
      overview: "Modern retail operates across channels, borders, and touchpoints. We build the technology infrastructure that enables seamless customer experiences, efficient operations, and data-driven decision making.",
      challenges: [
        "Omnichannel commerce integration",
        "Inventory management across locations",
        "Customer data unification",
        "Seasonal demand scaling",
        "Cross-border payment processing"
      ],
      solutions: [
        "Unified commerce platforms",
        "Real-time inventory management",
        "Customer data platforms",
        "Dynamic pricing systems",
        "Multi-currency payment integration"
      ],
      capabilities: ["Platform Engineering", "Integrations & APIs", "Business Intelligence"]
    }
  },
  {
    slug: "green-tech",
    num: "04",
    name: "Green Tech",
    description: "Engineering systems that support sustainable infrastructure, energy data, and environmentally critical operations.",
    details: {
      overview: "The transition to sustainable infrastructure requires sophisticated technology systems for monitoring, optimisation, and reporting. We build the platforms that enable organisations to track, reduce, and report their environmental impact.",
      challenges: [
        "Energy consumption monitoring at scale",
        "Carbon tracking and reporting",
        "Renewable energy integration",
        "ESG compliance and reporting",
        "Grid balancing and demand management"
      ],
      solutions: [
        "Energy management platforms",
        "Carbon footprint tracking systems",
        "ESG reporting automation",
        "Smart grid integration",
        "Sustainability analytics dashboards"
      ],
      capabilities: ["Data & AI Systems", "Business Intelligence", "Platform Engineering"]
    }
  },
  {
    slug: "artificial-intelligence",
    num: "05",
    name: "Artificial Intelligence",
    description: "Production-grade AI systems integrated into decision workflows, automation pipelines, and data-driven products.",
    details: {
      overview: "AI delivers value when it's reliably integrated into business operations. We build the complete infrastructure — from data pipelines to model deployment — that enables organisations to operationalise AI at scale.",
      challenges: [
        "Data quality and preparation",
        "Model training and deployment",
        "Real-time inference at scale",
        "Model monitoring and maintenance",
        "Explainability and compliance"
      ],
      solutions: [
        "ML pipeline development",
        "Model serving infrastructure",
        "Real-time prediction APIs",
        "MLOps and model monitoring",
        "AI integration into workflows"
      ],
      capabilities: ["Data & AI Systems", "Platform Engineering", "Integrations & APIs"]
    }
  },
  {
    slug: "public-sector",
    num: "06",
    name: "Public Sector",
    description: "Secure, compliant systems supporting public services, data governance, and critical institutional operations.",
    details: {
      overview: "Public sector technology must balance accessibility, security, and compliance. We build systems that serve citizens effectively while meeting the rigorous standards of government data handling and procurement.",
      challenges: [
        "Security and compliance requirements",
        "Accessibility standards",
        "Legacy system modernisation",
        "Data sovereignty and localisation",
        "Procurement and budget constraints"
      ],
      solutions: [
        "Secure cloud infrastructure",
        "Citizen service portals",
        "Data governance frameworks",
        "Legacy system migration",
        "Compliance automation"
      ],
      capabilities: ["Platform Engineering", "Integrations & APIs", "Data & AI Systems"]
    }
  },
  {
    slug: "hospitality",
    num: "07",
    name: "Hospitality",
    description: "Robust platforms for booking, operations, and guest experience across high-demand service environments.",
    details: {
      overview: "Hospitality technology must handle variable demand, coordinate complex operations, and deliver seamless guest experiences. We build the systems that power modern hotels, restaurants, and service businesses.",
      challenges: [
        "Demand forecasting and capacity management",
        "Multi-property operations",
        "Guest experience personalisation",
        "Third-party platform integration",
        "Real-time availability management"
      ],
      solutions: [
        "Property management systems",
        "Booking and reservation platforms",
        "Guest experience applications",
        "Revenue management tools",
        "Operations dashboards"
      ],
      capabilities: ["Platform Engineering", "Business Intelligence", "Integrations & APIs"]
    }
  },
  {
    slug: "business-productivity",
    num: "08",
    name: "Business Productivity",
    description: "Internal systems that streamline workflows, automate processes, and improve operational efficiency across teams.",
    details: {
      overview: "Every organisation has unique operational challenges. We build custom internal tools and automation systems that eliminate manual work, improve collaboration, and give teams the visibility they need to work effectively.",
      challenges: [
        "Manual process inefficiencies",
        "Data silos across departments",
        "Tool sprawl and fragmentation",
        "Reporting and visibility gaps",
        "Cross-team collaboration"
      ],
      solutions: [
        "Custom workflow automation",
        "Internal tool development",
        "Data integration and unification",
        "Operational dashboards",
        "Process digitalisation"
      ],
      capabilities: ["Business Intelligence", "Integrations & APIs", "Data & AI Systems"]
    }
  }
]

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug)
}
