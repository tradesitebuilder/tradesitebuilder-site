
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  return (
    <div 
      className={`relative group rounded-2xl p-8 border transition-all duration-500 ${
        plan.featured 
          ? 'bg-brand-surface border-brand-accent scale-105 shadow-xl shadow-brand-accent/10 z-10' 
          : 'bg-brand-surface border-brand-border hover:border-brand-secondary'
      }`}
      style={{ 
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
      }}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-background text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-display font-bold text-brand-primary mb-2">{plan.name}</h3>
        <p className="text-brand-secondary text-sm min-h-[40px]">{plan.description}</p>
      </div>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-display font-bold text-brand-primary">£{plan.price}</span>
        <span className="text-brand-secondary">/ month</span>
      </div>

      <div className="space-y-4 mb-10">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`mt-0.5 rounded-full p-0.5 ${plan.featured ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-surfaceLight text-brand-secondary'}`}>
              <Check size={14} />
            </div>
            <span className="text-sm text-brand-secondary">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        state={{ selectedPlan: plan.id }}
        className={`block w-full text-center py-4 rounded-xl font-semibold transition-all active:scale-95 ${
          plan.featured 
            ? 'bg-brand-accent hover:bg-brand-accentHover text-brand-primary shadow-lg shadow-brand-accent/20' 
            : 'bg-brand-surfaceLight hover:bg-brand-border text-brand-primary border border-brand-border'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
};

export default PricingCard;
