import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calculator, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    industry: '',
    annualRevenue: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleROICalculatorClick = () => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        event_category: 'engagement',
        event_label: 'Hero-ROI-Calculator-Click'
      });
    }
    
    onNavigate('roi-calculator');
  };

  const handleStrategyCallClick = () => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        event_category: 'engagement',
        event_label: 'Hero-Strategy-Call-Click'
      });
    }
    
    onNavigate('strategy-call');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'form_submit',
        event_category: 'lead_generation',
        event_label: 'Hero-Lead-Form'
      });
    }
    
    // Navigate to strategy call with pre-filled data
    const prefillData = {
      name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
      email: formData.email,
      company: formData.companyName,
      phone: formData.phone,
      industry: formData.industry,
      annualRevenue: formData.annualRevenue
    };
    
    // Pass the data to the navigation function
    onNavigate('strategy-call');
    
    // Set the form data in a way that StrategyCall can access it
    setTimeout(() => {
      const event = new CustomEvent('hero-form-data', { detail: prefillData });
      window.dispatchEvent(event);
    }, 100);
  };


  const industries = [
    'Manufacturing',
    'Healthcare',
    'Financial Services',
    'Retail/E-commerce',
    'Technology',
    'Professional Services',
    'Other'
  ];

  const revenueRanges = [
    '$1M - $5M',
    '$5M - $25M',
    '$25M - $100M',
    '$100M - $500M',
    '$500M+'
  ];

  return (
    <section id="hero" className="min-h-screen bg-canvas-navy bg-circuit-pattern flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-ai-glow-gradient opacity-20 blur-3xl rounded-full"></div>
            
            {/* AI Transformation Agency Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-purple bg-opacity-20 rounded-full px-6 py-3 border border-primary-purple border-opacity-50 mb-6"
            >
              <div className="w-3 h-3 bg-primary-purple rounded-full animate-pulse"></div>
              <span className="text-primary-purple font-inter font-bold text-sm uppercase tracking-wide">
                AI Transformation Agency
              </span>
            </motion.div>
            
            {/* Main Headline - More Concise */}
            <h1 className="relative text-primary-text font-inter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-ai-glow">
              Cut Costs by{' '}
              <span className="bg-ai-glow-gradient bg-clip-text text-transparent">
                30%
              </span>
              {' '}in 90 Days{' '}
              <span className="block text-2xl md:text-3xl lg:text-4xl text-body-text font-normal mt-2">
                — Unlock Hidden Efficiency & Growth
              </span>
            </h1>
            
            {/* Simplified Value Proposition */}
            <p className="text-body-text font-inter text-lg md:text-xl leading-relaxed mb-4">
              We turn everyday teams into <span className="text-amber-500 font-semibold">"buddy-fied"</span> departments — automated, data-driven, and built for AI-powered ROI and growth.
            </p>
            
            {/* Buddy-fied Definition */}
            <div className="bg-elevated-card rounded-lg p-4 mb-6 border border-primary-purple border-opacity-30">
              <p className="text-body-text font-inter text-sm leading-relaxed">
                <span className="text-amber-500 font-inter font-bold">✨ Buddy-fied Department</span> = ≥ 25% manual hours automated + a live KPI dashboard.
              </p>
            </div>
            
            {/* Compact Achievement Stats - Horizontal Layout */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center space-x-2 bg-elevated-card rounded-full px-4 py-2 border border-neutral-stroke"
              >
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span className="text-primary-text font-inter text-sm font-semibold">240+ Hours Saved</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center space-x-2 bg-elevated-card rounded-full px-4 py-2 border border-neutral-stroke"
              >
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span className="text-primary-text font-inter text-sm font-semibold">85% Error Reduction</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center space-x-2 bg-elevated-card rounded-full px-4 py-2 border border-neutral-stroke"
              >
                <CheckCircle className="w-4 h-4 text-success-green" />
                <span className="text-primary-text font-inter text-sm font-semibold">50+ Companies Buddy-fied</span>
              </motion.div>
            </div>
            
            {/* Single CTA Button */}
            <div className="flex justify-start mb-8">
              <motion.button
                onClick={handleROICalculatorClick}
                className="bg-amber-500 text-canvas-navy px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-amber-600 hover:text-canvas-navy border-2 border-transparent hover:border-amber-600 transform hover:scale-105 transition-all duration-200 animate-glow flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate My ROI</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Simplified Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Peeking Head Bot */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-0 hidden md:block">
              <img
                src="./hero.png"
                alt="Peeking Head Bot"
                className="w-30 h-25 drop-shadow-lg"
                style={{ width: '120px', height: '100px' }}
              />
            </div>

            <div className="bg-elevated-card rounded-xl p-8 shadow-2xl border border-neutral-stroke relative overflow-hidden z-10 mt-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-primary-text font-inter font-bold text-2xl mb-2">
                  Get Your Free ROI Assessment
                </h3>
                <p className="text-body-text font-inter mb-6">
                  See exactly how much you could save in 90 days
                </p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    required
                  />
                  
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                  
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Annual Revenue</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    required
                  />
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-purple text-primary-text px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200 animate-glow"
                  >
                    Book My Strategy Call
                  </button>
                </form>
                
                <p className="text-body-text font-inter text-xs mt-4 text-center">
                  No spam • Results in 24 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;