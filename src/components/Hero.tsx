import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calculator, Phone } from 'lucide-react';
import AIParticles from './AIParticles';
import LiveMetrics from './LiveMetrics';
import SmartTooltip from './SmartTooltip';

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

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationType, setAnimationType] = useState<'slide' | 'particle' | 'flip'>('slide');

  // ROI Preview state
  const [showROIPreview, setShowROIPreview] = useState(false);

  // Success stories carousel
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  
  const successStories = [
    "Medical clinics achieved 30% ROI implementing AI automation",
    "Manufacturing companies save 20% annual costs with custom AI solutions", 
    "Financial services reduced processing time by 65% using AI workflows",
    "Retail businesses increased efficiency by 40% through automated inventory",
    "Healthcare providers cut administrative costs by 35% with AI assistants",
    "Logistics companies improved delivery accuracy by 50% using AI optimization"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Show ROI preview when industry and revenue are selected
    if (name === 'industry' || name === 'annualRevenue') {
      const updatedData = { ...formData, [name]: value };
      setShowROIPreview(updatedData.industry !== '' && updatedData.annualRevenue !== '');
    }
  };

  // Calculate quick ROI based on industry and revenue
  const calculateQuickROI = () => {
    if (!formData.industry || !formData.annualRevenue) return 0;
    
    // Base savings multipliers by industry
    const industryMultipliers: { [key: string]: number } = {
      'Manufacturing': 0.25,
      'Healthcare': 0.30,
      'Financial Services': 0.35,
      'Retail/E-commerce': 0.20,
      'Technology': 0.28,
      'Professional Services': 0.32,
      'Other': 0.25
    };
    
    // Revenue range to base amount mapping
    const revenueBaseAmounts: { [key: string]: number } = {
      '$1M - $5M': 2500000,
      '$5M - $25M': 15000000,
      '$25M - $100M': 62500000,
      '$100M - $500M': 300000000,
      '$500M+': 750000000
    };
    
    const multiplier = industryMultipliers[formData.industry] || 0.25;
    const baseAmount = revenueBaseAmounts[formData.annualRevenue] || 0;
    
    // Calculate estimated annual savings (typically 3-8% of revenue for operational efficiency)
    return Math.round(baseAmount * 0.05 * multiplier);
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
    
    // Build prefill data object
    const prefillData = {
      name: `${formData.firstName || ''} ${formData.lastName || ''}`.trim(),
      email: formData.email,
      company: formData.companyName,
      phone: formData.phone,
      industry: formData.industry,
      annualRevenue: formData.annualRevenue
    };
    
    // Navigate to strategy call with prefill data passed directly
    onNavigate('strategy-call', prefillData);
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

  // Dynamic words that cycle with smooth transitions
  const dynamicWords = [
    { line1: "Cut operational costs", line2: "by 30%" },
    { line1: "Increase conversion", line2: "rates by 40%" },
    { line1: "Automate 120+ hours", line2: "per week" },
    { line1: "Deploy Specific Custom AI", line2: "Solution" },
    { line1: "Drive results with", line2: "proven ROI" }
  ];

  // Cycle through words every 4 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  // Cycle through success stories every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [successStories.length]);

  // Animation variants for different types
  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slide':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 }
        };
      case 'particle':
        return {
          initial: { 
            opacity: 0, 
            scale: 0.3, 
            rotate: 180,
            filter: "blur(10px)"
          },
          animate: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            filter: "blur(0px)"
          },
          exit: { 
            opacity: 0, 
            scale: 0.3, 
            rotate: -180,
            filter: "blur(10px)"
          }
        };
      case 'flip':
        return {
          initial: { 
            opacity: 0, 
            rotateX: -90, 
            transformPerspective: 1000 
          },
          animate: { 
            opacity: 1, 
            rotateX: 0 
          },
          exit: { 
            opacity: 0, 
            rotateX: 90 
          }
        };
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -50 }
        };
    }
  };

  return (
    <main>
      <section id="hero" className="min-h-screen bg-canvas-navy bg-circuit-pattern flex items-center pt-20 relative overflow-hidden" role="banner">
        {/* AI Particles Background */}
        <AIParticles density={30} speed={0.3} interactive={true} />
        
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-ai-glow-gradient opacity-20 blur-3xl rounded-full"></div>
              
              {/* AI Transformation Agency Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-cyan-400 bg-opacity-15 rounded-full px-6 py-3 border border-cyan-400 border-opacity-70 mb-6"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 font-inter font-bold text-sm uppercase tracking-wide">
                  AI Transformation Agency
                </span>
              </motion.div>
              
              {/* Enhanced Headline with Smooth Word Transitions */}
              <h1 className="relative text-primary-text font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6 drop-shadow-ai-glow" itemProp="headline">
                <span className="block">
                  <span className="text-primary-text">We help you </span>
                  <div className="block sm:inline-block relative min-h-[2.5em] sm:min-h-[1.2em] overflow-hidden w-full">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${animationType}-${currentWordIndex}`}
                        initial={getAnimationVariants().initial}
                        animate={getAnimationVariants().animate}
                        exit={getAnimationVariants().exit}
                        transition={{ 
                          duration: animationType === 'flip' ? 0.7 : 0.6, 
                          ease: animationType === 'particle' ? [0.25, 0.46, 0.45, 0.94] : "easeOut" 
                        }}
                        className="bg-ai-glow-gradient bg-clip-text text-transparent block break-words hyphens-auto"
                        style={{
                          transformStyle: animationType === 'flip' ? 'preserve-3d' : 'flat',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word'
                        }}
                      >
                        <span className="block">{dynamicWords[currentWordIndex].line1}</span>
                        <span className="block">{dynamicWords[currentWordIndex].line2}</span>
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-body-text font-normal mt-2 break-words hyphens-auto" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  in 90 days with AI-Powered Transformation
                </span>
              </h1>
              
              {/* Enhanced Value Proposition */}
              <p className="text-body-text font-inter text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 break-words hyphens-auto" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                We turn everyday teams into{' '}
                <SmartTooltip 
                  content="High-performance teams powered by AI automation"
                  aiInsight="25% manual hours automated + live KPI dashboard"
                  type="tip"
                >
                  <span className="text-amber-500 font-semibold cursor-help">"buddy-fied"</span>
                </SmartTooltip>
                {' '}departments — automated, data-driven, and built for exponential growth.
              </p>
              
              {/* Buddy-fied Department Definition */}
              <div className="bg-elevated-card rounded-lg p-4 mb-6 border border-primary-purple border-opacity-30">
                <p className="text-body-text font-inter text-xs sm:text-sm leading-relaxed break-words hyphens-auto" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                  <span className="text-amber-500 font-inter font-bold">✨ Buddy-fied Department</span> = a team with ≥ 25% manual hours automated + a self-refreshing KPI dashboard.
                </p>
              </div>
              
              {/* Live Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <LiveMetrics />
              </motion.div>
              
              {/* Enhanced CTA Button */}
              <div className="flex justify-start mb-8 w-full">
                <motion.button
                  onClick={handleROICalculatorClick}
                  className="bg-amber-cta text-canvas-navy px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter font-bold text-base sm:text-lg hover:bg-yellow-400 hover:text-canvas-navy border-2 border-transparent hover:border-yellow-400 transform hover:scale-105 transition-all duration-200 animate-glow flex items-center justify-center space-x-2 relative overflow-hidden group w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                  <Calculator className="w-5 h-5" />
                  <span>Calculate My ROI</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Enhanced Form with Smart ROI Integration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* 👀 Peeking Head Bot - positioned behind form container, peeking from top edge */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-0 hidden md:block">
                <img
                  src="/hero.png"
                  alt="Peeking Head Bot - Attention cue toward form"
                  className="w-30 h-25 drop-shadow-lg"
                  style={{ width: '120px', height: '100px' }}
                  loading="lazy"
                  width="120"
                  height="100"
                />
              </div>

              {/* Enhanced Lead Form with Smart ROI Integration */}
              <div className="bg-elevated-card rounded-xl p-8 shadow-2xl border border-neutral-stroke relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <Phone className="w-6 h-6 text-primary-purple" />
                    <h2 className="text-primary-text font-inter font-bold text-lg sm:text-xl">
                      Book Strategy Call
                    </h2>
                  </div>
                  <p className="text-body-text font-inter mb-6 text-xs sm:text-sm break-words">
                    Get your custom transformation roadmap
                  </p>

                  {/* Smart ROI Preview - Integrated into Form */}
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4" role="form" aria-label="Strategy Call Request Form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                        required
                        aria-label="First Name"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                        required
                        aria-label="Last Name"
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
                      aria-label="Company Name"
                    />
                    
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                      required
                      aria-label="Industry Selection"
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
                      aria-label="Annual Revenue Range"
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
                      aria-label="Phone Number"
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                      required
                      aria-label="Business Email Address"
                    />
                    
                    <button
                      type="submit"
                      className="w-full bg-primary-purple text-primary-text px-6 py-3 sm:py-4 rounded-full font-inter font-bold text-base sm:text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200 animate-glow relative overflow-hidden group"
                      aria-label="Submit form to book strategy call"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
                      Book My Strategy Call
                    </button>
                  </form>
                  
                  <p className="text-body-text font-inter text-xs mt-4 text-center break-words">
                    No spam • Results in 24 hours
                  </p>
                  
                  {/* Success Stories Carousel - moved here for better balance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-canvas-navy rounded-lg p-3 sm:p-4 mt-4 border border-neutral-stroke relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-ai-glow-gradient opacity-5 rounded-lg"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                        <span className="text-primary-purple font-inter font-semibold text-xs sm:text-sm">Live Success Stories</span>
                      </div>
                      
                      <div className="relative h-12 sm:h-10 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={currentStoryIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-primary-text font-inter text-xs leading-tight absolute inset-0 flex items-center justify-center text-center px-2 break-words hyphens-auto"
                            style={{ 
                              wordBreak: 'break-word', 
                              overflowWrap: 'break-word',
                              lineHeight: '1.3'
                            }}
                          >
                            ✨ {successStories[currentStoryIndex]}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                      
                      {/* Story navigation dots */}
                      <div className="flex justify-center space-x-1 mt-2">
                        {successStories.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStoryIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              index === currentStoryIndex 
                                ? 'bg-primary-purple scale-125' 
                                : 'bg-neutral-stroke hover:bg-primary-purple hover:scale-110'
                            }`}
                            aria-label={`View success story ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;