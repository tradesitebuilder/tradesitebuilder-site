
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    setIsOpen(false);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [location, isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ\'s', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-brand-border/50 shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group shrink-0">
          <Logo className={`transition-all duration-300 ${scrolled ? 'h-6 md:h-7' : 'h-8 md:h-9'}`} />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.2em] font-black transition-all hover:text-brand-accent ${
                location.pathname === link.path ? 'text-brand-accent' : 'text-brand-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="bg-brand-accent hover:bg-brand-accentHover text-white px-7 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-2 group shadow-lg active:scale-95"
          >
            Get a quote
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <button 
          className="lg:hidden text-brand-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-brand-background z-50 p-6 flex flex-col gap-8 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-6 pt-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-black uppercase tracking-tight ${
                  location.pathname === link.path ? 'text-brand-accent' : 'text-brand-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-brand-accent py-5 rounded-2xl text-white font-black uppercase tracking-widest text-sm shadow-2xl"
          >
            Get a quote
            <ArrowRight size={20} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
