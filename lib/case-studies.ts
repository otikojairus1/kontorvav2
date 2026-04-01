export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  year: string
  excerpt: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  imageColor: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "nordic-bank-digital-transformation",
    title: "Digital Banking Platform Modernization",
    client: "Nordic Financial Group",
    industry: "Financial Services",
    year: "2024",
    excerpt: "Transforming legacy banking infrastructure into a modern, cloud-native platform serving 2M+ customers.",
    challenge: "Nordic Financial Group faced significant challenges with their aging core banking system. The legacy infrastructure was limiting their ability to launch new digital products, causing customer friction, and creating operational inefficiencies that threatened their competitive position in the rapidly evolving Nordic fintech landscape.",
    solution: "We designed and implemented a comprehensive platform modernization strategy using a strangler fig pattern to gradually replace legacy components. The new architecture leverages Kubernetes for orchestration, event-driven microservices for real-time processing, and a modern API gateway for seamless third-party integrations.",
    results: [
      "70% reduction in time-to-market for new features",
      "99.99% system availability achieved",
      "45% decrease in operational costs",
      "Customer satisfaction scores increased by 35%"
    ],
    technologies: ["Kubernetes", "Apache Kafka", "PostgreSQL", "React", "Go", "Terraform"],
    testimonial: {
      quote: "Kontorva's methodical approach to our digital transformation was exactly what we needed. They understood both the technical challenges and the business imperatives.",
      author: "Erik Lindqvist",
      role: "CTO, Nordic Financial Group"
    },
    imageColor: "bg-blue-900"
  },
  {
    slug: "maritime-logistics-intelligence",
    title: "Maritime Logistics Intelligence Platform",
    client: "Baltic Shipping Co.",
    industry: "Maritime & Logistics",
    year: "2024",
    excerpt: "Building an AI-powered logistics platform that optimizes shipping routes and predicts maintenance needs.",
    challenge: "Baltic Shipping Co. was operating with fragmented data systems across their fleet of 45 vessels. This led to inefficient route planning, unexpected maintenance downtime, and difficulty meeting increasingly strict environmental regulations in the Baltic Sea region.",
    solution: "We developed an integrated IoT and analytics platform that collects real-time data from all vessels, applies machine learning models for predictive maintenance, and optimizes routes based on weather, fuel efficiency, and cargo schedules. The system integrates with port authorities across 12 countries.",
    results: [
      "22% reduction in fuel consumption",
      "Maintenance downtime reduced by 40%",
      "Full compliance with EU maritime emissions regulations",
      "ROI achieved within 8 months"
    ],
    technologies: ["Python", "TensorFlow", "TimescaleDB", "Grafana", "Azure IoT Hub", "React Native"],
    testimonial: {
      quote: "The visibility we now have into our operations is transformative. We're making better decisions faster, and our environmental footprint has significantly improved.",
      author: "Marta Kask",
      role: "Operations Director, Baltic Shipping Co."
    },
    imageColor: "bg-slate-800"
  },
  {
    slug: "healthcare-integration-hub",
    title: "National Healthcare Integration Hub",
    client: "Estonian Health Authority",
    industry: "Healthcare",
    year: "2023",
    excerpt: "Creating a secure, interoperable data exchange platform connecting 200+ healthcare providers.",
    challenge: "Estonia's healthcare system needed a unified platform to securely exchange patient data between hospitals, clinics, pharmacies, and research institutions while maintaining strict GDPR compliance and ensuring seamless citizen access to their health records.",
    solution: "We architected and built a FHIR-compliant healthcare integration hub using X-Road infrastructure. The platform provides secure API access for all healthcare providers, blockchain-based audit logging, and a citizen-facing mobile application for health record access and appointment management.",
    results: [
      "200+ healthcare providers connected",
      "Average data exchange time reduced from hours to seconds",
      "Zero security incidents since launch",
      "92% citizen adoption rate within first year"
    ],
    technologies: ["X-Road", "FHIR", "Hyperledger Fabric", "Node.js", "Flutter", "PostgreSQL"],
    testimonial: {
      quote: "Kontorva delivered a system that not only meets our current needs but is designed to scale with our national health initiatives for years to come.",
      author: "Dr. Kairi Tamm",
      role: "Digital Health Director, Estonian Health Authority"
    },
    imageColor: "bg-emerald-800"
  },
  {
    slug: "energy-grid-optimization",
    title: "Smart Grid Optimization System",
    client: "Scandinavia Power",
    industry: "Energy",
    year: "2023",
    excerpt: "Developing intelligent grid management software for renewable energy integration across the Nordic region.",
    challenge: "As Scandinavia Power expanded their renewable energy portfolio, they faced significant challenges in balancing supply and demand across their grid. The intermittent nature of wind and solar power required sophisticated forecasting and real-time load balancing capabilities.",
    solution: "We built a comprehensive grid management platform with ML-powered demand forecasting, real-time renewable production monitoring, and automated load balancing. The system integrates with smart meters, battery storage facilities, and electric vehicle charging networks.",
    results: [
      "Grid stability improved by 60%",
      "15% increase in renewable energy utilization",
      "Peak demand management reduced infrastructure costs by €12M",
      "Carbon emissions reduced by 28%"
    ],
    technologies: ["Apache Spark", "Kafka Streams", "InfluxDB", "Python", "Kubernetes", "MQTT"],
    imageColor: "bg-amber-700"
  },
  {
    slug: "government-services-platform",
    title: "E-Government Services Platform",
    client: "Finnish Digital Agency",
    industry: "Government",
    year: "2023",
    excerpt: "Redesigning citizen-facing government services with accessibility and efficiency as core principles.",
    challenge: "Finnish citizens were frustrated with fragmented government services that required multiple logins, redundant data entry, and in-person visits for many procedures. The Finnish Digital Agency sought to create a unified, accessible platform that would serve all citizens effectively.",
    solution: "We designed and implemented a citizen-centric services platform built on principles of universal design. The system features a single sign-on authentication, proactive service recommendations based on life events, and full accessibility compliance. All services are available in Finnish, Swedish, and English.",
    results: [
      "85% of government services now available online",
      "Average transaction time reduced by 75%",
      "WCAG 2.1 AAA compliance achieved",
      "Citizen satisfaction rating of 4.7/5"
    ],
    technologies: ["React", "Node.js", "GraphQL", "Suomi.fi Authentication", "PostgreSQL", "Elasticsearch"],
    testimonial: {
      quote: "Kontorva understood that government services must work for everyone. Their commitment to accessibility and user experience has set a new standard.",
      author: "Antti Virtanen",
      role: "Director, Finnish Digital Agency"
    },
    imageColor: "bg-indigo-900"
  },
  {
    slug: "retail-omnichannel-platform",
    title: "Omnichannel Retail Platform",
    client: "Nordic Retail Group",
    industry: "Retail",
    year: "2024",
    excerpt: "Unifying online and offline retail experiences across 150+ stores in 5 Nordic countries.",
    challenge: "Nordic Retail Group operated separate systems for their e-commerce platform, in-store POS, inventory management, and customer loyalty programs. This fragmentation led to inconsistent customer experiences and inability to offer modern retail features like buy-online-pickup-in-store.",
    solution: "We developed a unified commerce platform that provides real-time inventory visibility, consistent customer profiles across channels, and flexible fulfillment options. The platform includes mobile apps for both customers and store associates, enabling personalized service everywhere.",
    results: [
      "Online revenue increased by 65%",
      "BOPIS adoption reached 40% of online orders",
      "Customer lifetime value increased by 28%",
      "Inventory accuracy improved to 99.5%"
    ],
    technologies: ["Commercetools", "React Native", "Node.js", "Elasticsearch", "Redis", "AWS"],
    imageColor: "bg-rose-800"
  }
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map(study => study.slug)
}
