
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, ShieldCheck, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const images = {
    largeHero: "https://images.unsplash.com/photo-1620626011761-9963d7b59675?auto=format&fit=crop&q=80&w=1200",
    smallHero: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400",
    feature1: "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=800",
    feature2: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    feature3: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
  };

  return (
    <div className="bg-brand-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-8">
              <span className="text-brand-accent text-[11px] font-black uppercase tracking-widest">Available 24/7 For Trades</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-brand-primary leading-[1.1] mb-8">
              Precision <span className="font-serif italic text-brand-accent">Websites</span> for Professional Trades.
            </h1>

            <p className="text-lg md:text-xl text-brand-secondary leading-relaxed mb-12 max-w-xl">
              We build high-performance websites for plumbers, electricians, and builders who want to win more business online.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accentHover text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 blue-glow"
              >
                Schedule Service <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto bg-transparent border border-brand-border text-brand-primary px-10 py-5 rounded-2xl font-bold hover:bg-brand-surface transition-all active:scale-95"
              >
                View Our Projects
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brand-border">
              <div>
                <p className="text-2xl font-display font-bold text-brand-primary">15+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mt-1">Years Exp</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-brand-primary">10k+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mt-1">Jobs Done</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-brand-primary">4.9/5</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary mt-1">Avg Rating</p>
              </div>
            </div>
          </div>

          <div className="relative group lg:block hidden">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] h-[650px] shadow-2xl border border-brand-border bg-brand-surface">
              <img 
                src={images.largeHero} 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                alt="Modern project" 
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-brand-surface/90 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl border border-brand-border max-w-[280px]">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-success/10 flex items-center justify-center text-brand-success shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="text-brand-primary font-bold text-sm">Certified & Professional</h4>
               </div>
               <div className="rounded-2xl overflow-hidden h-24 mb-4 bg-brand-background">
                  <img src={images.smallHero} className="w-full h-full object-cover opacity-70" alt="Trade detail" />
               </div>
               <p className="text-brand-secondary text-[11px] leading-relaxed">
                 Websites built to establish authority and trust from the first click.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Built to Win Work", desc: "Turn visitors into leads with intentional design." },
            { label: "No Tech Skills Needed", desc: "We handle it all, from setup to monthly updates." },
            { label: "Fast, No Hassle", desc: "Get live in days, not weeks. We do the heavy lifting." },
            { label: "Mobile Optimized", desc: "Optimised for speed and clarity on every device." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-surface border border-brand-border p-6 rounded-2xl flex items-center gap-4 hover:border-brand-accent transition-all">
              <div className="w-10 h-10 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                <Check size={20} strokeWidth={4} />
              </div>
              <div>
                <h4 className="text-brand-primary font-bold text-[13px] leading-tight mb-0.5">{item.label}</h4>
                <p className="text-brand-secondary text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-32 bg-brand-background border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-display font-bold text-brand-primary mb-4">Why choose TSB?</h2>
            <p className="text-brand-secondary max-w-2xl mx-auto">We cut through the noise to deliver websites that actually help you run your business.</p>
          </div>
           <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Save Your <span class='text-brand-accent'>Time</span>", 
                img: images.feature1,
                desc: "You focus on the tools, we focus on the tech. Hands-off website management."
              },
              { 
                title: "No <span class='text-brand-accent'>Tech</span> Stress", 
                img: images.feature2,
                desc: "Domain, hosting, and updates all sorted. No technical knowledge required."
              },
              { 
                title: "Real <span class='text-brand-accent'>Results</span>", 
                img: images.feature3,
                desc: "Optimised for local leads so customers find you when they need help fast."
              }
            ].map((card, i) => (
              <div key={i} className="relative h-[550px] rounded-[2.5rem] overflow-hidden group shadow-2xl bg-brand-surface border border-brand-border">
                 <img 
                   src={card.img} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 grayscale group-hover:grayscale-0" 
                   alt="Feature" 
                 />
                 <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-brand-background via-brand-background/40 to-transparent">
                    <h3 className="text-3xl font-display font-bold text-white mb-4 leading-tight" dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p className="text-brand-secondary text-sm leading-relaxed mb-8">{card.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-brand-accent font-bold text-sm hover:gap-4 transition-all">
                      Learn more <ArrowRight size={16} />
                    </Link>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-brand-primary">Built by professionals, for professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Michael", trade: "Plumber", text: "My enquiries doubled within a month of launching the new site. The design is clean and customers find it easy to use." },
              { name: "Chris", trade: "Electrician", text: "Finally a company that understands trades. No monthly fees for stuff I don't need, just a great site that works." },
              { name: "Roberto", trade: "Builder", text: "I don't have time to chase web designers. These guys just get it done. Highly recommended." }
            ].map((t, i) => (
              <div key={i} className="bg-brand-surface p-10 rounded-[2rem] border border-brand-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#3b82f6" stroke="#3b82f6" />)}
                </div>
                <h4 className="text-lg font-bold text-brand-primary mb-1">{t.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-6">{t.trade}</p>
                <p className="text-brand-secondary text-sm leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-accent p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden blue-glow">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ready to grow your trade business?</h2>
            <p className="text-white/80 text-lg mb-12 max-w-xl mx-auto">Get your free homepage mockup today. No setup fees, no contracts, just results.</p>
            <Link to="/contact" className="bg-white text-brand-accent px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all inline-block shadow-2xl">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;