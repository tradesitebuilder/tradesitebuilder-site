
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_FEATURES, WHATS_INCLUDED } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8">Websites built for <span className="text-brand-accent italic font-serif">growth.</span></h1>
          <p className="text-xl text-brand-secondary leading-relaxed">
            Every site we build is engineered specifically for tradespeople. We don't just make them look good; we make them generate work.
          </p>
        </div>

        {/* Deliverables */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES_FEATURES.map((feature, i) => (
              <div 
                key={i}
                className="p-10 bg-brand-surface border border-brand-border/50 rounded-[2rem] hover:border-brand-accent transition-all group"
              >
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all text-brand-accent">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-4">{feature.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription details */}
        <div className="mb-32 p-12 md:p-20 bg-brand-surface border border-brand-border/50 rounded-[3rem]">
          <h2 className="text-3xl font-display font-bold text-brand-primary mb-16 text-center">Every subscription includes:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHATS_INCLUDED.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-brand-accent/5 border border-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-brand-primary font-bold mb-3">{item.title}</h3>
                <p className="text-brand-secondary text-[11px] leading-relaxed px-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Pages */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-display font-bold text-brand-primary mb-8 leading-tight">Everything you need to compete online.</h2>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                {['Home Page', 'Our Services', 'Areas Covered', 'Project Gallery', 'About Us', 'Contact Form', 'FAQ Section', 'Google Maps'].map((page, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-secondary font-medium">
                    <CheckCircle2 size={18} className="text-brand-accent" />
                    {page}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
               <div className="rounded-[2rem] h-64 overflow-hidden shadow-2xl border border-brand-border/50 bg-brand-surface">
                 <img src="https://images.unsplash.com/photo-1541888941259-7997a9446bb5?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Worksite" />
               </div>
               <div className="rounded-[2rem] h-64 overflow-hidden mt-12 shadow-2xl border border-brand-border/50 bg-brand-surface">
                 <img src="https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-60" alt="Inspection" />
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-accent p-12 md:p-20 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 blue-glow">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Start your transformation.</h3>
            <p className="text-white/80 font-medium text-lg">See your new homepage before you pay a penny.</p>
          </div>
          <Link to="/contact" className="bg-white text-brand-accent px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
            Get your mockup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
