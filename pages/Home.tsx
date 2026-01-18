
import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PRICING_PLANS } from '../constants';
import { ArrowRight, Phone, CheckCircle2, Layout, ShieldCheck, Zap, Laptop, MessageSquare, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-primary leading-[1.1] mb-8">
              Professional websites for trade businesses.
            </h1>
            <p className="text-xl text-brand-secondary mb-10 max-w-xl leading-relaxed">
              We build, host, and manage your website so you can focus on the job while your site handles the leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accentHover text-brand-primary px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-accent/20 active:scale-95"
              >
                Get a free homepage mockup
                <ArrowRight size={20} />
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-surfaceLight hover:bg-brand-border text-brand-primary px-8 py-4 rounded-full font-bold transition-all border border-brand-border active:scale-95"
              >
                <Phone size={20} />
                Call {PHONE_NUMBER}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-secondary font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-accent" /> From £20/month</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-yellow" /> No setup fee</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-accent" /> Cancel anytime</div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
            {/* Visual Schematic */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-accent/10 blur-[120px] rounded-full"></div>
              
              {/* Animated Schematic Elements */}
              <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-8 h-full">
                <div className="bg-brand-surface border border-brand-border p-6 rounded-2xl flex flex-col justify-center items-center gap-4 animate-bounce-slow">
                   <Laptop className="text-brand-accent w-12 h-12" />
                   <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Your Website</span>
                </div>
                <div className="bg-brand-surface border border-brand-border p-6 rounded-2xl flex flex-col justify-center items-center gap-4 animate-bounce-slow delay-150">
                   <MessageSquare className="text-brand-yellow w-12 h-12" />
                   <span className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Contact Form</span>
                </div>
                <div className="col-span-2 bg-brand-surface border border-brand-yellow/30 p-6 rounded-2xl flex justify-center items-center gap-6 animate-pulse-slow">
                   <div className="flex-1 border-t border-brand-yellow border-dashed relative">
                      <div className="absolute -top-1.5 right-0 w-3 h-3 bg-brand-yellow rounded-full animate-ping"></div>
                   </div>
                   <Rocket className="text-brand-yellow w-12 h-12" />
                   <div className="flex-1 text-right">
                      <div className="text-brand-primary font-bold">New Enquiry</div>
                      <div className="text-[10px] text-brand-secondary">Ready to quote</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-brand-surface border-y border-brand-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
          {[
            { label: "Free Mockup", desc: "No upfront cost" },
            { label: "No Setup Fee", desc: "Start today" },
            { label: "Hosting Included", desc: "Fast & Secure" },
            { label: "Ongoing Edits", desc: "We manage it all" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-brand-primary font-display font-bold text-lg">{item.label}</span>
              <span className="text-brand-secondary text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-6">Built for trades. Managed by us.</h2>
            <p className="text-brand-secondary">A complete hands-off solution for your digital presence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Layout className="w-8 h-8" />, title: "Build your website", desc: "Custom designed to match your brand and trade." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Host it for you", desc: "Blazing fast speeds and 99.9% uptime guaranteed." },
              { icon: <Zap className="w-8 h-8" />, title: "Keep it updated", desc: "Send us a text, and we'll update your site in hours." },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Lead Generation", desc: "Strategic placement of buttons to get you more calls." }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="p-8 bg-brand-surface border border-brand-border rounded-2xl hover:border-brand-accent/50 transition-colors group"
                style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className={`mb-6 group-hover:scale-110 transition-transform ${i % 2 === 0 ? 'text-brand-accent' : 'text-brand-yellow'}`}>{feature.icon}</div>
                <h3 className="text-brand-primary font-display font-bold text-xl mb-4">{feature.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-brand-primary mb-16 text-center">3 steps to a professional site</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-surfaceLight border border-brand-border rounded-full flex items-center justify-center font-display font-bold text-brand-yellow mb-6 relative z-10">1</div>
              <h3 className="text-brand-primary font-bold mb-3">You send details</h3>
              <p className="text-brand-secondary text-sm">Tell us your trade, location, and some basic info about your business.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="hidden md:block absolute top-6 -left-1/2 w-full border-t border-brand-border border-dashed z-0"></div>
              <div className="w-12 h-12 bg-brand-surfaceLight border border-brand-border rounded-full flex items-center justify-center font-display font-bold text-brand-yellow mb-6 relative z-10">2</div>
              <h3 className="text-brand-primary font-bold mb-3">We build a mockup</h3>
              <p className="text-brand-secondary text-sm">We'll build your homepage mockup for free within 48 hours. No commitment.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="hidden md:block absolute top-6 -left-1/2 w-full border-t border-brand-border border-dashed z-0"></div>
              <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-display font-bold text-brand-background mb-6 relative z-10">3</div>
              <h3 className="text-brand-primary font-bold mb-3">Go live</h3>
              <p className="text-brand-secondary text-sm">Approve the design, start your subscription, and we'll launch your site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-yellow/10 via-brand-accent/10 to-transparent border border-brand-accent/20 rounded-3xl p-12 md:p-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-8">Ready to dominate your local area?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/pricing"
              className="bg-brand-primary text-brand-background px-8 py-4 rounded-full font-bold hover:bg-brand-secondary transition-colors"
            >
              See pricing
            </Link>
            <Link
              to="/contact"
              className="bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-brand-accentHover transition-colors"
            >
              Get a free mockup
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow { animation: bounce 3s infinite; }
        .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
    </div>
  );
};

export default Home;
