
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-background py-24 px-6 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div>
            <Logo className="h-10 mb-8" />
            <p className="text-brand-secondary text-sm leading-relaxed max-w-xs">
              We are a website design company built from a boots-on-the-ground friendship with tradespeople.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xl mb-8">Tradesite</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/services" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Website Design for Tradespeople</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-bold text-xl mb-8">Information</h4>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-brand-secondary hover:text-brand-accent transition-colors text-sm">Cookie Policy</a>
            </nav>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-border text-center">
          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-secondary">
            © COPYRIGHT. TRADESITEBUILDER {new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;