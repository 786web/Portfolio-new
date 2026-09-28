import { ServiceDetail } from '../types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'custom-wordpress',
    number: '01',
    title: 'Custom WordPress & WooCommerce Architecture',
    category: 'web-dev',
    tagline: 'Blazingly fast, zero-bloat CMS engineered for organic dominance and conversions.',
    description: 'We do not build generic template sites stuffed with 50 slow plugins. We write clean, high-performance custom WordPress themes and WooCommerce stores tailored to your brand with custom fields, lightning caching, and Google Core Web Vitals optimization.',
    features: [
      { title: 'Custom Theme Development', desc: 'Lightweight PHP/Tailwind architecture tailored precisely to your brand aesthetics without heavy page builders.' },
      { title: 'WooCommerce High-Converting Checkout', desc: 'Streamlined 1-step checkout, cart slide-outs, order bumps, and custom account dashboards.' },
      { title: 'Speed & Core Web Vitals Mastery', desc: 'Sub-second initial server response, optimized asset bundling, webp media pipeline, and 95+ PageSpeed scores.' },
      { title: 'Enterprise Security Hardening', desc: 'Hardened database prefixing, SSL integration, anti-spam honeypots, and automated cloud backups.' }
    ],
    outcomes: ['Under 1.2s page load times', 'Drastic reduction in cart bounce rates', 'Effortless content management for your in-house team'],
    technologies: ['WordPress Core', 'WooCommerce', 'Advanced Custom Fields (ACF)', 'PHP 8.3', 'Tailwind CSS', 'WP Rocket'],
    startingPrice: '$450',
    turnaround: '7 - 14 Days'
  },
  {
    id: 'shopify-plus',
    number: '02',
    title: 'Shopify & Shopify Plus E-Commerce Engineering',
    category: 'web-dev',
    tagline: 'Turn casual visitors into repeat buyers with frictionless shopping architectures.',
    description: 'Specialized in custom Shopify Liquid coding, theme modernization, product bundle configurations, and high-converting app ecosystems. We turn standard Shopify stores into frictionless sales powerhouses.',
    features: [
      { title: 'Custom Liquid & Section Development', desc: 'Tailored Shopify sections and blocks that your marketing team can customize directly from the theme editor.' },
      { title: 'Instant AJAX Cart & Drawer Checkout', desc: 'Skip clunky page reloads with instant add-to-cart, free shipping threshold bars, and dynamic upsells.' },
      { title: 'International Multi-Currency & Localization', desc: 'Shopify Markets configuration for automated currency switching, localized tax rates, and regional domains.' },
      { title: 'Inventory & ERP System Integrations', desc: 'Seamless API syncing with warehouse logistics, CRM systems, and accounting platforms.' }
    ],
    outcomes: ['30-45% average lift in checkout conversions', 'Zero theme bloat or conflicting apps', 'Mobile-first responsiveness across all modern devices'],
    technologies: ['Shopify Liquid', 'Storefront API', 'Alpine.js / React', 'Tailwind CSS', 'Klaviyo Integration'],
    startingPrice: '$550',
    turnaround: '10 - 18 Days'
  },
  {
    id: 'payment-gateways',
    number: '03',
    title: 'Payment Gateway & Checkout Integrations',
    category: 'web-dev',
    tagline: 'Flawless payment acceptance for domestic & international customers.',
    description: 'Ensure your customers can pay smoothly wherever they are. We specialize in robust, PCI-compliant payment integrations supporting global credit cards alongside local Middle East and South Asian payment rails.',
    features: [
      { title: 'Global Credit Card Processors', desc: 'Stripe, PayPal, 2Checkout, Authorize.net with 3D Secure 2.0 authentication.' },
      { title: 'South Asian Local Payments', desc: 'Flawless integration of JazzCash, Easypaisa, and Bank Alfalah direct merchant portals.' },
      { title: 'Automated Invoicing & Webhooks', desc: 'Instant PDF receipts, subscription recurring billing, and automated order fulfillment webhooks.' },
      { title: 'Fraud Prevention & PCI Compliance', desc: 'Tokenized transaction flows ensuring customer sensitive financial data never touches your server.' }
    ],
    outcomes: ['Zero payment drop-offs', 'Instant funds settlement into your business accounts', 'Automated refund and transaction reconciliation'],
    technologies: ['Stripe API', 'PayPal SDK', 'JazzCash IPG', 'Easypaisa API', 'Webhooks'],
    startingPrice: '$250',
    turnaround: '3 - 5 Days'
  },
  {
    id: 'meta-ads-scaling',
    number: '04',
    title: 'Meta Ads (Facebook & Instagram) Growth Funnels',
    category: 'paid-ads',
    tagline: 'High-ROAS paid customer acquisition backed by server-side CAPI tracking.',
    description: 'Stop burning budget on generic "boosted posts". We build comprehensive full-funnel Meta ad architectures spanning Top of Funnel (TOF) hook testing, Middle of Funnel (MOF) objection handling, and Bottom of Funnel (BOF) dynamic retargeting.',
    features: [
      { title: 'Server-Side Conversions API (CAPI)', desc: '100% data fidelity bypassing iOS 14+ ad-blockers and tracking limitations.' },
      { title: 'High-Volume Creative Testing Engine', desc: 'Systematic testing of visual hooks, UGC video formats, direct-response copy angles, and carousel proof.' },
      { title: 'Advantage+ & CBO Budget Scaling', desc: 'Algorithmic campaign budget scaling that automatically pours ad spend into winning audiences.' },
      { title: 'Custom Audience Retargeting', desc: 'Laser-focused retargeting of video watchers, add-to-cart abandoners, and high-LTV past buyers.' }
    ],
    outcomes: ['Consistent 3x - 5x verified ROAS', 'Direct pipeline of qualified customer acquisitions', 'Weekly transparent reporting dashboard'],
    technologies: ['Meta Ads Manager', 'Facebook Pixel & CAPI', 'Looker Studio', 'Canva Pro / Premiere'],
    startingPrice: '$350 / mo',
    turnaround: 'Continuous Growth'
  },
  {
    id: 'google-search-ads',
    number: '05',
    title: 'Google Search & Performance Max (High-Intent Leads)',
    category: 'paid-ads',
    tagline: 'Capture prospective customers at the exact moment they search for your service.',
    description: 'When people are ready to buy or hire a high-ticket service, they turn to Google. We build laser-focused Search, Local Service Ads (LSA), and Performance Max campaigns that capture high-intent inquiries with zero wasted search queries.',
    features: [
      { title: 'Negative Keyword Filtering', desc: 'Aggressive pruning to eliminate accidental clicks from price-shoppers or unrelated searches.' },
      { title: 'High-Converting Landing Page Sync', desc: 'Message matching between ad copy and page headline for maximum Google Quality Score (9-10/10).' },
      { title: 'Call Tracking & Offline Lead Conversion', desc: 'Know exactly which keyword and ad produced phone calls, WhatsApp messages, or closed sales.' },
      { title: 'Local Map Pack Geo-Targeting', desc: 'Dominate local search queries for restaurants, clinics, real estate, and professional practices.' }
    ],
    outcomes: ['Lower cost-per-click through high quality scores', 'Immediate influx of urgent, high-intent buyer inquiries', 'Automated conversion bidding strategies'],
    technologies: ['Google Ads', 'Performance Max', 'Google Tag Manager (GTM)', 'Google Analytics 4 (GA4)'],
    startingPrice: '$400 / mo',
    turnaround: 'Continuous Growth'
  },
  {
    id: 'tiktok-creative-ads',
    number: '06',
    title: 'TikTok Ads & High-Retention Creatives',
    category: 'paid-ads',
    tagline: 'Harness short-form viral storytelling to scale products rapidly.',
    description: 'TikTok demands content that looks organic, engaging, and native. We script, produce, and deploy high-retention video ad creatives and Spark Ads that capture attention within the first 2 seconds.',
    features: [
      { title: 'Pattern-Interrupt Hook Scripts', desc: 'Hooks crafted specifically to stop rapid infinite scrolling and trigger curiosity.' },
      { title: 'TikTok Events API Integration', desc: 'Deep server-to-server tracking for accurate conversion attribution.' },
      { title: 'Spark Ads & Creator Collaborations', desc: 'Amplifying authentic user-generated content directly through verified creator handles.' },
      { title: 'Rapid Iteration Cycles', desc: 'Deploying fresh creative variations weekly to eliminate creative fatigue.' }
    ],
    outcomes: ['Low CPMs and massive viral brand reach', 'Sub-$2 customer add-to-cart acquisition costs', 'Rapid scale for trending D2C products'],
    technologies: ['TikTok Ads Manager', 'TikTok Events API', 'Short-form UGC Frameworks'],
    startingPrice: '$350 / mo',
    turnaround: 'Continuous Growth'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategic Audit',
    description: 'We analyze your current website speed, funnel drop-offs, and competitor ad strategies to uncover immediate profit levers.'
  },
  {
    step: '02',
    title: 'Free Interactive Demo Prototype',
    description: 'We construct a customized homepage prototype and a proven customer acquisition plan with zero upfront financial obligation.'
  },
  {
    step: '03',
    title: 'High-Velocity Sprint & Deployment',
    description: 'Once approved, we build out the full platform on a live staging server with daily milestone updates and end-to-end QA.'
  },
  {
    step: '04',
    title: 'Tracking, Launch & Profitable Scaling',
    description: 'We install server-side pixels, verify checkout flows, launch targeted ad funnels, and optimize weekly for compounding sales.'
  }
];
