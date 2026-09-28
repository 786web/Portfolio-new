export type PageId = 'home' | 'services' | 'portfolio' | 'about' | 'free-demo' | 'contact';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'shopify' | 'wordpress' | 'ecommerce' | 'leads';
  categoryLabel: string;
  badge: string;
  metric: string;
  metricDescription: string;
  description: string;
  fullCaseStudy: {
    challenge: string;
    solution: string;
    results: string[];
    timeline: string;
    deliverables: string[];
  };
  technologies: string[];
  imageUrl: string;
  fallbackIcon: string;
  livePreviewUrl?: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  category: 'web-dev' | 'paid-ads';
  tagline: string;
  description: string;
  features: {
    title: string;
    desc: string;
  }[];
  outcomes: string[];
  technologies: string[];
  startingPrice: string;
  turnaround: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  location: string;
  avatarInitials: string;
  rating: number;
  projectType: string;
  quote: string;
  verifiedUpwork: boolean;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  budgetRange: string;
  timeline: string;
  projectScope: string;
  requestFreeDemo: boolean;
}
