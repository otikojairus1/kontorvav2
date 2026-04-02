export const insightVisuals = {
  "building-cross-border-fintech-infrastructure": "/cta-stock-2.jpg",
  "the-reality-of-managed-engineering-teams": "/cta-stock-1.jpg",
  "data-infrastructure-for-market-intelligence": "/cta-stock-3.jpg",
  "api-design-for-b2b-integrations": "/office-finland.jpg",
  "navigating-baltic-business-registries": "/office-estonia.jpg",
  "platform-engineering-vs-devops": "/cta-stock-1.jpg",
} as const

export const industryVisuals = {
  fintech: "/cta-stock-2.jpg",
  "mobility-logistics": "/office-estonia.jpg",
  retail: "/cta-stock-1.jpg",
  "green-tech": "/cta-stock-3.jpg",
  "artificial-intelligence": "/office-finland.jpg",
  "public-sector": "/office-finland.jpg",
  hospitality: "/office-estonia.jpg",
  "business-productivity": "/cta-stock-2.jpg",
} as const

export const caseStudyVisuals = {
  "nordic-bank-digital-transformation": "/cta-stock-2.jpg",
  "maritime-logistics-intelligence": "/office-estonia.jpg",
  "healthcare-integration-hub": "/office-finland.jpg",
  "energy-grid-optimization": "/cta-stock-3.jpg",
  "government-services-platform": "/cta-stock-1.jpg",
  "retail-omnichannel-platform": "/office-finland.jpg",
} as const

export function getInsightVisual(slug: string) {
  return insightVisuals[slug as keyof typeof insightVisuals] ?? "/cta-stock-2.jpg"
}

export function getIndustryVisual(slug: string) {
  return industryVisuals[slug as keyof typeof industryVisuals] ?? "/office-finland.jpg"
}

export function getCaseStudyVisual(slug: string) {
  return caseStudyVisuals[slug as keyof typeof caseStudyVisuals] ?? "/cta-stock-1.jpg"
}
