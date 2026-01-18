
import React from 'react';
import { PricingPlan, FAQItem } from './types';
import { Layout, Globe, PenTool, PhoneCall, ShieldCheck, Zap, Layers, Smartphone, Target } from 'lucide-react';

export const PHONE_NUMBER = "07579043141";
export const EMAIL_ADDRESS = "tradesitebuilder@outlook.com";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "one-page",
    name: "One-Page Website",
    price: "20",
    description: "Best for simple trade businesses",
    features: [
      "1 scrolling page",
      "Hosting included",
      "Edits included",
      "SSL Certificate",
      "Mobile optimized"
    ],
    cta: "Choose one-page"
  },
  {
    id: "multi-page-small",
    name: "2–5 Page Website",
    price: "30",
    description: "Best for growing trades",
    features: [
      "Up to 5 pages",
      "Hosting included",
      "Edits included",
      "SSL Certificate",
      "Basic SEO",
      "Gallery section"
    ],
    featured: true,
    cta: "Choose 2–5 pages"
  },
  {
    id: "multi-page-large",
    name: "5+ Page Website",
    price: "40",
    description: "Best for larger operations",
    features: [
      "5+ pages",
      "Hosting included",
      "Edits included",
      "Priority support",
      "Advanced SEO",
      "Google Maps integration"
    ],
    cta: "Choose 5+ pages"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is there a contract?",
    answer: "No. We believe in our service, so there are no long-term contracts. You can cancel your subscription at any time with no exit fees."
  },
  {
    question: "How fast can you build my site?",
    answer: "We typically deliver the first mockup within 48 hours. Once you approve it and subscribe, we can usually have you live within 5-7 working days."
  },
  {
    question: "How do edits work?",
    answer: "Whenever you need a change, such as new photos, an updated price list, or a new service area, just text or email us. We handle the technical side so you don't have to learn a complicated website builder."
  },
  {
    question: "Do I need a domain?",
    answer: "If you have one, we can use it. If not, we can help you register one. We handle all the DNS and technical setup to point it to your new site."
  },
  {
    question: "Is hosting included?",
    answer: "Yes, professional high-speed hosting is included in every plan. Your site will be fast and reliable."
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. As your business grows, you can move from a one-page site to a multi-page setup seamlessly. We just update your subscription price."
  }
];

export const SERVICES_FEATURES = [
  {
    title: "One-page sites",
    description: "High-impact, single-scroll websites that tell your story quickly.",
    icon: <Layout className="w-6 h-6 text-brand-accent" />
  },
  {
    title: "Multi-page sites",
    description: "Dedicated pages for your services, gallery, and contact information.",
    icon: <Layers className="w-6 h-6 text-brand-accent" />
  },
  {
    title: "Mobile-first layouts",
    description: "Your customers are on their phones. We build with a mobile-first mindset.",
    icon: <Smartphone className="w-6 h-6 text-brand-accent" />
  },
  {
    title: "Conversion-focused",
    description: "Designed to turn visitors into enquiries with clear calls to action.",
    icon: <Target className="w-6 h-6 text-brand-accent" />
  }
];

export const WHATS_INCLUDED = [
  {
    title: "Professional Hosting",
    description: "Fast, secure, and reliable hosting included in your monthly fee.",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Ongoing Edits",
    description: "Need to change a phone number or photo? Just ask, we do it for you.",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    title: "Click-to-Call",
    description: "Optimized buttons that let customers call you instantly from their phones.",
    icon: <PhoneCall className="w-5 h-5" />
  },
  {
    title: "Basic SEO",
    description: "We set up your page titles and descriptions to help you show up on Google.",
    icon: <ShieldCheck className="w-5 h-5" />
  }
];
