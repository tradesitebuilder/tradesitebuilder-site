
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-background border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="inline-flex items-center mb-6">
              <Logo className="h-12" />
            </Link>
            <p className="text-brand-secondary text-sm max-w-sm mb-6">
              Professional websites for hard-working tradespeople. Manchester-based, operating globally. We handle the tech, you handle the tools.
            </p>
            <div className="flex gap-4">
              <span className="inline-block px-3 py-1 bg-brand-surface border border-brand-border rounded text-[10px] font-bold tracking-widest uppercase text-brand-secondary">
                Cancel Anytime
              </span>
              <span className="inline-block px-3 py-1 bg-brand-surface border border-brand-border rounded text-[10px] font-bold tracking-widest uppercase text-brand-yellow/80 border-brand-yellow/20">
                No Setup Fee
              </span>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-brand-primary font-display font-semibold mb-6">Explore</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/services" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Our Services</Link>
              <Link to="/pricing" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Pricing Plans</Link>
              <Link to="/faq" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Questions & Answers</Link>
              <Link to="/contact" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Free Mockup</Link>
            </nav>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-brand-primary font-display font-semibold mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">
                {EMAIL_ADDRESS}
              </a>
              <p className="text-brand-secondary text-sm">
                Manchester, UK
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-secondary text-[12px]">
            © {new Date().getFullYear()} Tradesitebuilder. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-brand-secondary hover:text-brand-primary text-[12px]">Terms</a>
            <a href="#" className="text-brand-secondary hover:text-brand-primary text-[12px]">Privacy</a>
            <a href="#" className="text-brand-secondary hover:text-brand-primary text-[12px]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
