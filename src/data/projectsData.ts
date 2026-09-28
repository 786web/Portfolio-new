import { Project } from '../types';
import fashionImg from '../assets/images/project_ecommerce_fashion_1790595508077.jpg';
import realestateImg from '../assets/images/project_realestate_portal_1790595524314.jpg';
import restaurantImg from '../assets/images/project_restaurant_portal_1790595541600.jpg';
import workspaceImg from '../assets/images/hero_agency_workspace_1790595490612.jpg';

export const projectsData: Project[] = [
  {
    id: 'aura-luxe',
    title: 'Aura Luxe Fashion',
    client: 'Aura Luxe Apparel Ltd.',
    category: 'shopify',
    categoryLabel: 'Shopify Plus & Paid Ads',
    badge: 'Shopify Plus',
    metric: '+340% ROAS',
    metricDescription: 'Return on ad spend across Meta & TikTok campaigns',
    description: 'Bespoke fashion boutique storefront with instant AJAX checkout, localized multi-currency conversion, and zero-friction mobile UX.',
    imageUrl: fashionImg,
    fallbackIcon: 'ShoppingBag',
    technologies: ['Shopify Liquid', 'Custom JS Engine', 'Meta Pixel & CAPI', 'Stripe Gateway'],
    fullCaseStudy: {
      challenge: 'The client was suffering from an 82% cart abandonment rate on an off-the-shelf theme that took 5.2 seconds to load on mobile devices. Prior ad campaigns were burning budget on unqualified clicks.',
      solution: 'Re-engineered the storefront from scratch with custom modular Liquid sections, instant 1-click drawer checkout, automated inventory sync, and configured Meta Conversions API (CAPI) for precise server-side retargeting.',
      results: [
        'Page load time reduced from 5.2s down to 1.1s (98 PageSpeed score)',
        'Checkout abandonment dropped by 44% in the first 30 days',
        'Meta CBO campaign achieved a verified 3.4x average ROAS over 90 days',
        'Total sales surged past $240,000 in quarterly revenue'
      ],
      timeline: '3 Weeks Deployment',
      deliverables: ['Custom Shopify Theme', 'Multi-Currency Cart', 'Server-Side CAPI Tracking', 'Ad Creative Guidelines']
    }
  },
  {
    id: 'prime-estates',
    title: 'Prime Estates Luxury',
    client: 'Horizon Properties Group',
    category: 'leads',
    categoryLabel: 'High-Ticket Lead Generation',
    badge: 'WordPress + Google Ads',
    metric: '$420K Deals',
    metricDescription: 'Closed transaction volume within 60 days of launch',
    description: 'High-ticket real estate acquisition portal with interactive virtual tour triggers, automated WhatsApp routing, and targeted Google Search Ads.',
    imageUrl: realestateImg,
    fallbackIcon: 'Home',
    technologies: ['WordPress (Custom ACF)', 'Google Search & PMax', 'WhatsApp API Routing', 'HubSpot CRM Sync'],
    fullCaseStudy: {
      challenge: 'Luxury property brokers were wasting hours on manual qualification calls with tire-kickers. Their previous agency generated contact form spam with low buyer intent.',
      solution: 'Constructed an ultra-fast custom WordPress portal with dynamic filterable listings, immersive 3D walkthrough hooks, and intent-driven Google Search campaigns targeting high-net-worth foreign investors.',
      results: [
        'Generated 142 pre-qualified luxury buyer leads in the first 8 weeks',
        'Cost per qualified inquiry reduced by 58% compared to industry benchmarks',
        'Directly facilitated two penthouse property closings totaling over $420,000',
        'Instant WhatsApp notifications reduced lead response time from 4 hours to 3 minutes'
      ],
      timeline: '4 Weeks End-to-End',
      deliverables: ['Custom WordPress Theme', 'Automated Lead Qualification Quiz', 'Google Ads Funnel', 'CRM Webhook Automation']
    }
  },
  {
    id: 'gourmet-haven',
    title: 'Gourmet Haven Restaurant',
    client: 'Gourmet Haven Hospitality',
    category: 'wordpress',
    categoryLabel: 'WordPress & Local Acquisition',
    badge: 'WordPress Speed',
    metric: '99 Speed Score',
    metricDescription: 'Google Core Web Vitals mobile benchmark',
    description: 'Real-time table reservation engine, dynamic interactive culinary menu ordering, and zero-latency local SEO integration.',
    imageUrl: restaurantImg,
    fallbackIcon: 'Utensils',
    technologies: ['WordPress', 'OpenTable API', 'Tailwind CSS', 'Local Service Ads'],
    fullCaseStudy: {
      challenge: 'A premier dining venue was losing weekend walk-ins and phone orders due to a slow, non-responsive PDF menu and an clunky third-party reservation widget.',
      solution: 'Engineered a modern, responsive culinary experience with interactive dish previews, 1-click table bookings, dynamic dietary allergen filtering, and localized Google Maps ranking optimization.',
      results: [
        'Table reservations increased by 215% within the first month',
        'Average customer session duration tripled on mobile devices',
        'Achieved rank #1 on Google Local Map Pack for 4 competitive dining keywords',
        'Core Web Vitals achieved 99 on desktop and 96 on mobile'
      ],
      timeline: '2.5 Weeks Launch',
      deliverables: ['Custom WordPress Core', 'Live Table Reservation Engine', 'Interactive Digital Menu', 'Local SEO Blueprint']
    }
  },
  {
    id: 'chronos-wearables',
    title: 'Chronos Smartwatch D2C',
    client: 'Chronos Tech Wearables',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & TikTok Scaling',
    badge: 'Shopify D2C',
    metric: '14,000+ Units',
    metricDescription: 'Smart fitness watches sold across North America & UAE',
    description: 'High-converting single-product launch page with 1-click upsells, local & international payment gateways, and TikTok viral creative ad testing.',
    imageUrl: workspaceImg,
    fallbackIcon: 'Watch',
    technologies: ['Shopify Plus', 'TikTok Spark Ads', 'Stripe & PayPal', 'ReConvert Upsell'],
    fullCaseStudy: {
      challenge: 'Client developed an innovative fitness smartwatch but struggled with high acquisition costs and a confusing 4-step checkout process on their old platform.',
      solution: 'Built a sleek, high-energy single-product landing experience highlighting feature comparisons, video proof testimonials, and rapid checkout with localized payment methods including JazzCash & Easypaisa for South Asia buyers.',
      results: [
        'Crossed 14,000 unit sales within 4 months of launch',
        'Average order value (AOV) increased by $28 via post-purchase 1-click upsells',
        'TikTok Spark Ads achieved $1.85 cost per add-to-cart',
        'Zero downtime during Black Friday peak traffic surges'
      ],
      timeline: '3 Weeks Launch',
      deliverables: ['Custom Shopify Landing Architecture', 'TikTok Ad Creative Strategy', 'Post-Purchase Upsell Matrix', 'Localized Payment Routing']
    }
  },
  {
    id: 'apex-commercial',
    title: 'Apex Commercial Supplies',
    client: 'Apex Industrial Supply Corp.',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce B2B Wholesale',
    badge: 'WooCommerce B2B',
    metric: '100% Automated',
    metricDescription: 'B2B quotation and credit application workflow',
    description: 'Tiered wholesale pricing, dynamic tax and freight calculation, and seamless enterprise Stripe & wire transfer integrations.',
    imageUrl: restaurantImg,
    fallbackIcon: 'Layers',
    technologies: ['WooCommerce', 'B2B Wholesale Suite', 'Stripe API', 'QuickBooks Sync'],
    fullCaseStudy: {
      challenge: 'Wholesale client was handling hundreds of manual PDF invoice requests and phone orders weekly, leading to shipment bottlenecks and order errors.',
      solution: 'Developed an automated B2B customer portal with tier-based wholesale pricing, VAT exemptions, credit term applications, and automatic accounting synchronization.',
      results: [
        'Eliminated 35+ hours per week of manual invoicing and order entry',
        'B2B online order volume grew by 160% in the first quarter',
        'Customer reorder cycle accelerated by 11 days',
        'Enterprise security and PCI-DSS compliance certified'
      ],
      timeline: '4 Weeks Deployment',
      deliverables: ['B2B Wholesale Portal', 'Custom Invoicing Gateway', 'Tiered Pricing Engine', 'Automated Warehouse Webhook']
    }
  },
  {
    id: 'nova-dental',
    title: 'Nova Dental Health Network',
    client: 'Nova Healthcare Practice',
    category: 'leads',
    categoryLabel: 'Healthcare Lead Capture',
    badge: 'Local Service Ads',
    metric: '85+ Monthly',
    metricDescription: 'New high-value patient appointments booked',
    description: 'Targeted dental clinic patient portal with calendar booking, Google Maps optimization, and geotargeted Facebook retargeting ads.',
    imageUrl: realestateImg,
    fallbackIcon: 'Activity',
    technologies: ['WordPress', 'Calendly / Acuity API', 'Meta Pixel', 'Google Ads'],
    fullCaseStudy: {
      challenge: 'Multi-location dental practice was relying on expensive billboard advertising with zero attribution and empty treatment rooms during weekdays.',
      solution: 'Constructed an empathetic, trust-centered patient scheduling site featuring before/after smile galleries, insurance verification checks, and hyper-local Google Ads.',
      results: [
        'Consistently books 85+ new cosmetic & implant patients every month',
        'Customer Acquisition Cost (CAC) dropped from $190 to $54 per scheduled patient',
        'Achieved 4.9/5 patient review rating with automated SMS follow-ups',
        'Expanded from one initial clinic location to three branches'
      ],
      timeline: '2 Weeks Launch',
      deliverables: ['Custom WordPress Theme', 'Patient Booking System', 'Local Google Ads Campaign', 'Review Automation System']
    }
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'shopify', label: 'Shopify' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'leads', label: 'Leads & Paid Ads' }
];
