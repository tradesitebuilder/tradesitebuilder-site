
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_FEATURES, WHATS_INCLUDED } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8">What we build for you.</h1>
          <p className="text-xl text-brand-secondary leading-relaxed">
            Professional, fast-loading websites tailored for tradespeople. No fluff, just high-quality digital assets that generate leads.
          </p>
        </div>

        {/* What we build */}
        <div className="mb-32">
          <h2 className="text-2xl font-display font-bold text-brand-primary mb-12 flex items-center gap-4">
            <div className="h-0.5 w-12 bg-brand-accent"></div>
            Core Deliverables
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_FEATURES.map((feature, i) => (
              <div 
                key={i}
                className="p-8 bg-brand-surface border border-brand-border rounded-2xl flex items-start gap-6"
              >
                <div className="p-4 bg-brand-surfaceLight border border-brand-border rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-brand-primary mb-3">{feature.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="mb-32 p-12 md:p-20 bg-brand-surface border border-brand-border rounded-3xl">
          <h2 className="text-3xl font-display font-bold text-brand-primary mb-12 text-center">Every subscription includes:</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {WHATS_INCLUDED.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-brand-primary font-bold mb-3">{item.title}</h3>
                <p className="text-brand-secondary text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Types */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-3xl font-display font-bold text-brand-primary mb-8">Standard pages we can include</h2>
              <p className="text-brand-secondary mb-10">We build sites that give customers exactly what they need to choose your business over a competitor.</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {['Home Page', 'Our Services', 'Areas Covered', 'Project Gallery', 'About Us', 'Contact Form', 'FAQ Section', 'Privacy Policy'].map((page, i) => (
                  <div key={i} className="flex items-center gap-3 text-brand-primary font-medium">
                    <CheckCircle2 size={18} className="text-brand-accent" />
                    {page}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-brand-surfaceLight border border-brand-border p-8 rounded-2xl w-full">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-4">
                 <div className="h-8 bg-brand-surface border border-brand-border rounded w-3/4"></div>
                 <div className="h-40 bg-brand-surface border border-brand-border rounded w-full flex items-center justify-center">
                    <span className="text-brand-border text-xs font-bold uppercase tracking-widest">Project Gallery Visual</span>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-brand-surface border border-brand-border rounded"></div>
                    <div className="h-20 bg-brand-surface border border-brand-border rounded"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-brand-accent rounded-2xl">
          <div className="text-brand-primary">
            <h3 className="text-2xl font-display font-bold mb-2">Ready to see your site?</h3>
            <p className="opacity-80">We'll build a custom mockup of your homepage for free.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/pricing" className="bg-brand-primary text-brand-background px-6 py-3 rounded-full font-bold text-sm">View pricing</Link>
            <Link to="/contact" className="bg-brand-background/20 text-brand-primary border border-brand-primary/20 hover:bg-brand-background/30 px-6 py-3 rounded-full font-bold text-sm">Get a mockup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
