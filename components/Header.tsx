
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass border-b border-brand-border shadow-2xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Integration */}
        <Link to="/" className="flex items-center group">
          <Logo className={`transition-all duration-300 ${scrolled ? 'h-9' : 'h-12'}`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors text-sm font-medium"
          >
            <Phone size={16} />
            <span>Call {PHONE_NUMBER}</span>
          </a>
          <Link
            to="/contact"
            className="bg-brand-accent hover:bg-brand-accentHover text-brand-primary px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand-accent/20 active:scale-95"
          >
            Get a free mockup
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface border-b border-brand-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-brand-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 border-t border-brand-border pt-6">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 bg-brand-surfaceLight border border-brand-border py-3 rounded-full text-brand-primary font-medium"
            >
              <Phone size={18} />
              Call {PHONE_NUMBER}
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center bg-brand-accent py-3 rounded-full text-brand-primary font-semibold"
            >
              Get a free mockup
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
