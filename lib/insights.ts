export interface Insight {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
    initials: string
  }
  content: string[]
  tags: string[]
}

export const insights: Insight[] = [
  {
    slug: "building-cross-border-fintech-infrastructure",
    title: "Building Cross-Border Fintech Infrastructure in the Nordics",
    excerpt: "How we helped a Nordic financial services company build compliant payment infrastructure across four jurisdictions.",
    category: "Engineering",
    date: "March 2026",
    readTime: "8 min read",
    author: {
      name: "Michael Opondo",
      role: "Founder & CEO",
      initials: "MO"
    },
    content: [
      "Cross-border fintech infrastructure in the Nordic-Baltic region presents unique challenges that most engineering teams underestimate. The regulatory landscape alone spans multiple frameworks: PSD2 compliance in the EU, local banking regulations in each country, and the ever-evolving AML directives that require constant vigilance.",
      "When we began working with a major Nordic financial services provider last year, they had a clear problem: their existing payment infrastructure was built for a single market. Expanding to Estonia, Latvia, and Lithuania meant rebuilding significant portions of their core systems.",
      "The first decision we made was to build a unified compliance layer that could adapt to each jurisdiction's requirements without requiring separate codebases. This meant investing heavily in a rules engine that could interpret regulatory requirements as configuration rather than code.",
      "The technical architecture centered on event-driven microservices, with each service responsible for a specific domain: identity verification, transaction processing, compliance checking, and reporting. Each service was designed to be jurisdiction-aware, pulling its compliance rules from a central registry.",
      "One of the most challenging aspects was real-time transaction monitoring. Different jurisdictions have different thresholds and reporting requirements. A transaction that's routine in Finland might trigger reporting requirements in Estonia. Our solution was to build a streaming analytics pipeline that could evaluate transactions against multiple rule sets simultaneously.",
      "The results speak for themselves: the client launched in three new markets within 18 months, with a compliance infrastructure that can adapt to new requirements without engineering changes. More importantly, they've processed over €2 billion in cross-border transactions without a single compliance incident."
    ],
    tags: ["Fintech", "Compliance", "Nordic Markets", "Platform Engineering"]
  },
  {
    slug: "the-reality-of-managed-engineering-teams",
    title: "The Reality of Managed Engineering Teams",
    excerpt: "What actually works when building distributed engineering teams across Europe and Africa.",
    category: "Operations",
    date: "February 2026",
    readTime: "6 min read",
    author: {
      name: "Sarah Kimani",
      role: "Head of Engineering",
      initials: "SK"
    },
    content: [
      "The managed engineering model has been oversold by vendors and misunderstood by clients for years. At its worst, it becomes a way to arbitrage labor costs while pretending nothing is different. At its best, it creates genuine competitive advantage through access to talent pools that would otherwise be unreachable.",
      "Our approach at Kontorva is built on a simple premise: managed teams only work when they're treated as an extension of the client's organization, not as a separate entity with different incentives.",
      "This means several things in practice. First, managed team members participate in the same rituals as the client's internal team: standups, retrospectives, architecture discussions. They're not isolated in their own bubble.",
      "Second, we invest heavily in context transfer. New team members spend their first two weeks focused almost entirely on understanding the client's domain, their codebase, and their working culture. Technical skills got them hired; context makes them effective.",
      "Third, we maintain transparency about challenges. Time zone differences are real. Communication overhead is real. Cultural differences in working styles are real. Pretending otherwise doesn't help anyone.",
      "The teams that succeed are the ones where the client organization embraces the model fully. They assign internal team members as counterparts. They create documentation not because we asked for it, but because they understand it's necessary. They treat managed team members as colleagues, not contractors."
    ],
    tags: ["Managed Teams", "Engineering Culture", "Distributed Work", "Operations"]
  },
  {
    slug: "data-infrastructure-for-market-intelligence",
    title: "Data Infrastructure for Market Intelligence",
    excerpt: "Building the data systems that power real-time market intelligence in emerging markets.",
    category: "Data & AI",
    date: "January 2026",
    readTime: "10 min read",
    author: {
      name: "James Mwangi",
      role: "Data & AI Lead",
      initials: "JM"
    },
    content: [
      "Market intelligence in mature markets is relatively straightforward: data is structured, APIs are available, and the challenge is primarily analytical. In emerging markets, the challenge is more fundamental: how do you build intelligence when the underlying data doesn't exist in usable form?",
      "This was the core problem we set out to solve with DataSivio, our economic signal intelligence platform. The goal was to create real-time visibility into market conditions in regions where traditional data sources are incomplete or unreliable.",
      "Our approach was to build from the ground up, starting with primary data collection. This meant creating partnerships with local businesses who would share anonymized transaction data, building web scrapers for public price information, and developing mobile apps that would crowdsource economic indicators.",
      "The technical infrastructure had to handle extreme variability in data quality. Some sources provided clean, structured data. Others required significant preprocessing. Our data pipeline was designed with validation and enrichment stages that could handle this heterogeneity.",
      "Machine learning plays a crucial role, but not in the way most people expect. We use ML primarily for data quality: identifying anomalies, filling gaps in sparse datasets, and normalizing information from disparate sources. The analytical insights themselves often come from simpler statistical methods applied to clean data.",
      "The platform now processes millions of data points daily across East Africa, providing intelligence that was previously impossible to obtain. Clients use it for everything from supply chain optimization to investment decisions."
    ],
    tags: ["Data Engineering", "Market Intelligence", "Emerging Markets", "AI/ML"]
  },
  {
    slug: "api-design-for-b2b-integrations",
    title: "API Design for B2B Integrations",
    excerpt: "Lessons learned from building APIs that enterprise clients actually want to use.",
    category: "Engineering",
    date: "December 2025",
    readTime: "7 min read",
    author: {
      name: "Erik Lindqvist",
      role: "Nordic Operations",
      initials: "EL"
    },
    content: [
      "Consumer APIs and B2B APIs have fundamentally different requirements, but most API design guidance is written for consumer use cases. The result is that many B2B APIs are poorly suited to their actual usage patterns.",
      "B2B integrations are typically implemented once and expected to run for years with minimal maintenance. This has profound implications for API design. Breaking changes are far more costly. Documentation needs to be exhaustive. Error handling needs to be defensive.",
      "Our experience building NordicB2B's API taught us several lessons. First, versioning strategy matters more than you think. We use URL-based versioning with long deprecation cycles, and we maintain multiple versions simultaneously for years.",
      "Second, authentication needs to accommodate enterprise security requirements. This means supporting multiple auth methods, providing IP whitelisting, and enabling audit logging that enterprise security teams can review.",
      "Third, rate limiting needs to be predictable and well-documented. Enterprise clients will build their systems around your limits. Changing them without warning breaks their implementations.",
      "Fourth, bulk operations are essential. Most B2B use cases involve processing large amounts of data. APIs that only support single-record operations create unnecessary complexity for integrators.",
      "Finally, sandbox environments need to mirror production behavior exactly. Enterprise integrators need to test their implementations thoroughly before going live, and surprises in production erode trust quickly."
    ],
    tags: ["API Design", "B2B", "Enterprise", "Integration"]
  },
  {
    slug: "navigating-baltic-business-registries",
    title: "Navigating Baltic Business Registries",
    excerpt: "A technical guide to accessing and integrating with company data across Estonia, Latvia, and Lithuania.",
    category: "Data",
    date: "November 2025",
    readTime: "9 min read",
    author: {
      name: "Mari Tamm",
      role: "Baltic Markets Lead",
      initials: "MT"
    },
    content: [
      "The Baltic states have some of the most advanced digital government infrastructure in the world, but accessing this data programmatically remains challenging. Each country has different systems, different APIs, and different access requirements.",
      "Estonia's e-Business Register is the most accessible. They provide a well-documented API with reasonable rate limits. The data is comprehensive and generally accurate. The main challenge is handling the Estonian language in company names and addresses.",
      "Latvia's Lursoft has historically been the primary source for Latvian company data, though they've recently improved their public API offerings. The data model differs significantly from Estonia's, requiring careful mapping to achieve consistency.",
      "Lithuania's Register Centre provides official data but with more restrictive access policies. Building reliable data pipelines requires combining official sources with supplementary data from other providers.",
      "When we built Arikaart, our Baltic company intelligence platform, we learned that data consistency was the hardest problem. The same company might appear with different name variations, different address formats, and different identifier schemes across registries.",
      "Our solution was to build a sophisticated entity resolution system that could match records across registries despite these inconsistencies. This involved natural language processing for name matching, geocoding for address normalization, and graph-based approaches for identifying corporate relationships."
    ],
    tags: ["Baltic Markets", "Data Integration", "Government APIs", "Entity Resolution"]
  },
  {
    slug: "platform-engineering-vs-devops",
    title: "Platform Engineering vs DevOps: What Actually Changed",
    excerpt: "Moving beyond the buzzwords to understand what platform engineering means in practice.",
    category: "Engineering",
    date: "October 2025",
    readTime: "5 min read",
    author: {
      name: "Michael Opondo",
      role: "Founder & CEO",
      initials: "MO"
    },
    content: [
      "Platform engineering has emerged as the evolution of DevOps, but the distinction is often unclear. Having built platform teams for multiple organizations, I've developed a practical framework for understanding the difference.",
      "DevOps was fundamentally about culture: breaking down silos between development and operations teams. It succeeded in many organizations but often failed to scale. As companies grew, the cognitive load on individual teams became unmanageable.",
      "Platform engineering addresses this by creating dedicated teams that build internal platforms. These platforms abstract away infrastructure complexity, providing development teams with self-service capabilities that don't require deep infrastructure knowledge.",
      "The key insight is that platform engineering treats internal developers as customers. The platform team's job is to understand what developers need and build products that serve those needs. This customer-centric approach is what distinguishes effective platform teams.",
      "In practice, this means platform teams need product management skills, not just technical skills. They need to gather requirements, prioritize features, and communicate roadmaps. They need to measure adoption and satisfaction.",
      "The most successful platform engineering initiatives we've seen share common characteristics: executive sponsorship, clear ownership, and patience. Building a platform is a multi-year investment. Organizations that expect immediate returns are usually disappointed."
    ],
    tags: ["Platform Engineering", "DevOps", "Engineering Culture", "Infrastructure"]
  }
]

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find(insight => insight.slug === slug)
}

export function getInsightsByCategory(category: string): Insight[] {
  return insights.filter(insight => insight.category === category)
}
