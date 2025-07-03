import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calculator, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
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
    
    // Navigate to full contact form with pre-filled data
    onNavigate('contact');
  };

  const achievements = [
    { icon: CheckCircle, text: '240+ Hours Saved' },
    { icon: CheckCircle, text: '85% Error Reduction' },
    { icon: CheckCircle, text: '150+ Companies Buddy-fied' }
  ];

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
            
            <h1 className="relative text-primary-text font-inter font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-ai-glow">
              Cut Costs by{' '}
              <span className="bg-ai-glow-gradient bg-clip-text text-transparent">
                30%
              </span>{' '}
              in 90 Days—Without Laying Off a Single Team Member
            </h1>
            
            <p className="text-body-text font-inter text-lg md:text-xl leading-relaxed mb-8">
              Our AI buddies bolt onto your systems, streamline workflows & amplify ROI—without disrupting your teams.
            </p>
            
            {/* Achievement Stats */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <IconComponent className="w-6 h-6 text-success-green" />
                    <span className="text-primary-text font-inter text-lg font-semibold">{achievement.text}</span>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={handleROICalculatorClick}
                className="bg-amber-cta text-canvas-navy px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transform hover:scale-105 transition-all duration-200 animate-glow flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calculator className="w-5 h-5" />
                <span>Get ROI Calculator</span>
              </motion.button>
              
              <motion.button
                onClick={handleStrategyCallClick}
                className="bg-transparent text-cyan-interactive px-8 py-4 rounded-full font-inter font-bold text-lg border-2 border-cyan-interactive hover:bg-cyan-interactive hover:text-canvas-navy transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </motion.button>
            </div>
            
            {/* Social Proof */}
            <p className="text-body-text font-inter text-sm">
              Trusted by CEOs at 150+ Companies
            </p>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 👀 Peeking Head Bot - positioned behind form container, peeking from top edge */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-0 hidden md:block">
              <img
                src="/bots/hero.png"
                alt="Peeking Head Bot - Attention cue toward form"
                className="w-30 h-25 drop-shadow-lg"
                style={{ width: '120px', height: '100px' }}
              />
            </div>

            <div className="bg-elevated-card rounded-xl p-8 shadow-2xl border border-neutral-stroke relative overflow-hidden z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-primary-text font-inter font-bold text-2xl mb-2">
                  Get Your Free ROI Assessment
                </h3>
                <p className="text-body-text font-inter mb-6">
                  See exactly how much you could save in 90 days
                </p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <select
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Annual Revenue</option>
                      {revenueRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-cta text-canvas-navy px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
                  >
                    Get My Free Assessment
                  </button>
                </form>
                
                <p className="text-body-text font-inter text-xs mt-4 text-center">
                  No spam. Unsubscribe anytime. Results in 24 hours.
                </p>
              </div>
            </div>
            
            {/* Logo Carousel */}
            <div className="mt-8">
              <p className="text-body-text font-inter text-sm text-center mb-6">
                Trusted by industry leaders
              </p>
              <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
                <div className="w-20 h-12 bg-elevated-card border border-neutral-stroke rounded-lg flex items-center justify-center hover:border-amber-cta transition-colors">
                  <span className="text-body-text font-inter text-xs font-semibold">ACME</span>
                </div>
                <div className="w-24 h-12 bg-elevated-card border border-neutral-stroke rounded-lg flex items-center justify-center hover:border-amber-cta transition-colors">
                  <span className="text-body-text font-inter text-xs font-semibold">TechCorp</span>
                </div>
                <div className="w-20 h-12 bg-elevated-card border border-neutral-stroke rounded-lg flex items-center justify-center hover:border-amber-cta transition-colors">
                  <span className="text-body-text font-inter text-xs font-semibold">Global</span>
                </div>
                <div className="w-24 h-12 bg-elevated-card border border-neutral-stroke rounded-lg flex items-center justify-center hover:border-amber-cta transition-colors">
                  <span className="text-body-text font-inter text-xs font-semibold">Industries</span>
                </div>
                <div className="w-20 h-12 bg-elevated-card border border-neutral-stroke rounded-lg flex items-center justify-center hover:border-amber-cta transition-colors">
                  <span className="text-body-text font-inter text-xs font-semibold">Innovate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;