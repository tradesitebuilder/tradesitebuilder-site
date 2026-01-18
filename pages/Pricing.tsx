
import React from 'react';
import { PRICING_PLANS } from '../constants';
import PricingCard from '../components/PricingCard';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8">Transparent pricing. No hidden fees.</h1>
          <p className="text-xl text-brand-secondary leading-relaxed">
            Simple, monthly subscriptions that cover everything. Hosting, management, and edits included.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Features Table */}
        <div className="bg-brand-surface border border-brand-border rounded-3xl overflow-hidden mb-24">
          <div className="p-8 border-b border-brand-border bg-brand-surfaceLight">
            <h2 className="text-2xl font-display font-bold text-brand-primary">Included in every plan:</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 p-8 lg:p-12">
            {[
              { title: "No setup fee", desc: "We build your initial site for free. You only pay once you're ready to go live." },
              { title: "Cancel anytime", desc: "No long-term contracts. If you want to stop, you can cancel at any point." },
              { title: "Fast professional hosting", desc: "We use high-performance servers to ensure your site loads instantly for customers." },
              { title: "Ongoing support", desc: "Need a change? Just text us. We handle all content updates for you." },
              { title: "SEO optimization", desc: "Basic setup to ensure your site is readable by Google and local search engines." },
              { title: "Mobile first", desc: "Every site is built to look perfect and work smoothly on iPhones and Androids." },
              { title: "Security (SSL)", desc: "Your site will have the padlock icon, showing customers it's safe to use." },
              { title: "Contact notifications", desc: "Lead form submissions are sent instantly to your phone and email." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 text-brand-accent"><Check size={20} /></div>
                <div>
                  <h4 className="text-brand-primary font-bold mb-1">{feature.title}</h4>
                  <p className="text-brand-secondary text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="text-center p-8 bg-brand-surfaceLight border border-brand-border rounded-2xl max-w-2xl mx-auto">
          <p className="text-brand-secondary text-sm italic">
            "We wanted pricing to be as straightforward as a fixed-price quote. No surprises, just professional service for a monthly fee you can afford."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
