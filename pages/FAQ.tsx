
import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';
import { FAQS, PHONE_NUMBER } from '../constants';
import { MessageCircle, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8">Got questions?</h1>
          <p className="text-xl text-brand-secondary leading-relaxed">
            Everything you need to know about working with Tradesitebuilder.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-24">
          <Accordion items={FAQS} />
        </div>

        {/* Still got questions? */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-display font-bold text-brand-primary mb-4">Still got questions?</h2>
              <p className="text-brand-secondary text-sm mb-6">If you can't find the answer you're looking for, feel free to give us a shout directly.</p>
              <div className="flex flex-col gap-4">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-brand-primary font-bold hover:text-brand-accent transition-colors">
                  <Phone size={20} className="text-brand-accent" />
                  {PHONE_NUMBER}
                </a>
                <Link to="/contact" className="flex items-center gap-3 text-brand-primary font-bold hover:text-brand-accent transition-colors">
                  <MessageCircle size={20} className="text-brand-accent" />
                  Send us a message
                </Link>
              </div>
            </div>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden bg-brand-surfaceLight border border-brand-border flex items-center justify-center p-4">
               <div className="w-full h-full rounded-full bg-brand-accent/5 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 text-brand-accent">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7A8.38 8.38 0 0 1 16.3 4.5L21 3z"></path></svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
