
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../types';

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden transition-all"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-surfaceLight transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="text-brand-primary font-semibold font-display pr-8">{item.question}</span>
            <ChevronDown 
              className={`text-brand-secondary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              size={20} 
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 pt-0 text-brand-secondary text-sm leading-relaxed border-t border-brand-border/50">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
