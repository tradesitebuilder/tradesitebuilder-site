
export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  trade: string;
  location: string;
  phone: string;
  email?: string;
  plan: string;
  message: string;
}
