
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PHONE_NUMBER, EMAIL_ADDRESS, PRICING_PLANS } from '../constants';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const COOLDOWN_MINUTES = 10;
const LAST_SUBMISSION_KEY = 'tsb_last_submission_time';

const Contact: React.FC = () => {
  const location = useLocation();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error' | 'rate-limited'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState('');
  const [remainingCooldown, setRemainingCooldown] = useState(0);
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    trade: '',
    location: '',
    phone: '',
    email: '',
    plan: 'multi-page-small', // Default to featured plan
    message: ''
  });

  // Check for rate limiting on mount and whenever form state changes
  useEffect(() => {
    checkRateLimit();
    const timer = setInterval(checkRateLimit, 1000);
    return () => clearInterval(timer);
  }, []);

  const checkRateLimit = () => {
    const lastSub = localStorage.getItem(LAST_SUBMISSION_KEY);
    if (lastSub) {
      const lastTime = parseInt(lastSub, 10);
      const now = Date.now();
      const diff = now - lastTime;
      const cooldownMs = COOLDOWN_MINUTES * 60 * 1000;
      
      if (diff < cooldownMs) {
        setRemainingCooldown(Math.ceil((cooldownMs - diff) / 1000));
        return true;
      }
    }
    setRemainingCooldown(0);
    return false;
  };

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setFormData(prev => ({ ...prev, plan: location.state.selectedPlan }));
    }
  }, [location.state]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    
    if (!formData.trade.trim()) {
      newErrors.trade = "Your trade is required";
    }
    
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\s/g, '').length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please provide some details about your project";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (min 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    
    // Check rate limit one last time before submission
    if (checkRateLimit()) {
      setFormState('rate-limited');
      return;
    }

    if (!validate()) {
      setFormState('error');
      return;
    }

    setFormState('submitting');

    try {
      const response = await fetch('https://formspree.io/f/maqqykeq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Trade Mockup Request: ${formData.trade} from ${formData.name}`,
        })
      });

      if (response.ok) {
        localStorage.setItem(LAST_SUBMISSION_KEY, Date.now().toString());
        setFormState('success');
      } else {
        const data = await response.json();
        setServerError(data.error || "Something went wrong. Please try again or call us.");
        setFormState('error');
      }
    } catch (err) {
      setServerError("Network error. Please check your connection or call us directly.");
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => {
        const newErrs = { ...prev };
        delete newErrs[name as keyof ContactFormData];
        return newErrs;
      });
    }
    
    if (formState === 'error' || formState === 'rate-limited') setFormState('idle');
  };

  const formatCooldown = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (formState === 'success') {
    return (
      <div className="pt-32 pb-24 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-6 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-6">Thanks, we’ll be in touch shortly.</h1>
          <p className="text-xl text-brand-secondary mb-10">
            Thanks {formData.name}, we'll review your details and be in touch shortly with your free homepage mockup.
          </p>
          <div className="p-8 bg-brand-surface border border-brand-border rounded-2xl">
            <p className="text-brand-primary font-bold mb-4">For a faster response, call us directly:</p>
            <a href={`tel:${PHONE_NUMBER}`} className="text-2xl font-display font-bold text-brand-accent hover:underline">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content Left */}
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-primary mb-8">Get your free homepage mockup.</h1>
            <p className="text-xl text-brand-secondary mb-12 max-w-lg">
              No deposit. No contract. We'll build your homepage mockup first so you can see exactly what you're getting.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 rounded-full bg-brand-surfaceLight border border-brand-border flex items-center justify-center text-brand-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold mb-1">Call for a chat</h4>
                  <a href={`tel:${PHONE_NUMBER}`} className="text-brand-secondary hover:text-brand-primary transition-colors">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 rounded-full bg-brand-surfaceLight border border-brand-border flex items-center justify-center text-brand-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold mb-1">Email us</h4>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-brand-secondary hover:text-brand-primary transition-colors">{EMAIL_ADDRESS}</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 w-10 h-10 rounded-full bg-brand-surfaceLight border border-brand-border flex items-center justify-center text-brand-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold mb-1">Location</h4>
                  <p className="text-brand-secondary">Manchester-based, operating globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="bg-brand-surface border border-brand-border p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {remainingCooldown > 0 && (
              <div className="mb-6 p-4 bg-brand-yellow/10 border border-brand-yellow/30 rounded-xl flex items-center gap-3 text-brand-yellow text-sm animate-in fade-in slide-in-from-top-4">
                <Clock size={18} />
                <span>Please wait <strong>{formatCooldown(remainingCooldown)}</strong> before submitting another request.</span>
              </div>
            )}

            {serverError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400 text-sm animate-in fade-in slide-in-from-top-4">
                <AlertCircle size={18} />
                {serverError}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className={`space-y-6 ${remainingCooldown > 0 ? 'opacity-50 pointer-events-none' : ''}`} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors ${errors.name ? 'border-red-500/50' : 'border-brand-border'}`}
                    placeholder="e.g. John Smith"
                  />
                  {errors.name && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="trade" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Your Trade*</label>
                  <input
                    type="text"
                    id="trade"
                    name="trade"
                    value={formData.trade}
                    onChange={handleChange}
                    className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors ${errors.trade ? 'border-red-500/50' : 'border-brand-border'}`}
                    placeholder="e.g. Electrician"
                  />
                  {errors.trade && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.trade}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Area/Location*</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors ${errors.location ? 'border-red-500/50' : 'border-brand-border'}`}
                    placeholder="e.g. Manchester"
                  />
                  {errors.location && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.location}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors ${errors.phone ? 'border-red-500/50' : 'border-brand-border'}`}
                    placeholder="07xxx xxxxxx"
                  />
                  {errors.phone && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors ${errors.email ? 'border-red-500/50' : 'border-brand-border'}`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="plan" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Interested Plan</label>
                <div className="relative">
                  <select
                    id="plan"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full bg-brand-surfaceLight border border-brand-border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors appearance-none pr-10"
                  >
                    {PRICING_PLANS.map(plan => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} (£{plan.price}/mo)
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-secondary">Any details about your site?*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-brand-surfaceLight border rounded-xl px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-accent transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-brand-border'}`}
                  placeholder="Tell us what pages you need or any specific ideas you have..."
                />
                {errors.message && <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting' || remainingCooldown > 0}
                className="w-full bg-brand-accent hover:bg-brand-accentHover disabled:bg-brand-surfaceLight disabled:text-brand-secondary disabled:border-brand-border text-brand-primary py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-brand-accent/20"
              >
                {formState === 'submitting' ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <Send size={20} />
                )}
                {formState === 'submitting' ? 'Sending request...' : remainingCooldown > 0 ? `Wait ${formatCooldown(remainingCooldown)}` : 'Send request for free mockup'}
              </button>
              
              <p className="text-[10px] text-center text-brand-secondary uppercase tracking-widest font-bold">
                No setup fee · No contract · Cancel anytime
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
