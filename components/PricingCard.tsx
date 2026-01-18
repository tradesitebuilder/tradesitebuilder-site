
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
      className={`relative group rounded-[2.5rem] p-10 border transition-all duration-500 ${
        plan.featured 
          ? 'bg-brand-surface border-brand-accent scale-105 shadow-2xl shadow-brand-accent/10 z-10' 
          : 'bg-brand-surface border-brand-border hover:border-brand-accent/50'
      }`}
      style={{ 
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
      }}
    >
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full shadow-xl">
          Most Popular
        </div>
      )}

      <div className="mb-10">
        <h3 className="text-2xl font-display font-bold text-brand-primary mb-3">{plan.name}</h3>
        <p className="text-brand-secondary text-sm leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex items-baseline gap-2 mb-10">
        <span className="text-5xl font-display font-bold text-brand-primary">£{plan.price}</span>
        <span className="text-brand-secondary font-medium">/ month</span>
      </div>

      <div className="space-y-5 mb-12">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className={`mt-0.5 rounded-full p-1 ${plan.featured ? 'bg-brand-accent/20 text-brand-accent' : 'bg-brand-surfaceLight text-brand-secondary'}`}>
              <Check size={14} strokeWidth={3} />
            </div>
            <span className="text-sm text-brand-secondary leading-tight">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        state={{ selectedPlan: plan.id }}
        className={`block w-full text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all active:scale-95 ${
          plan.featured 
            ? 'bg-brand-accent hover:bg-brand-accentHover text-white shadow-xl shadow-brand-accent/20' 
            : 'bg-brand-background border border-brand-border hover:border-brand-accent text-brand-primary'
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
};

export default PricingCard;
