import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Clock, DollarSign } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  const benefits = [
    { icon: CheckCircle, text: 'No code rip-outs' },
    { icon: Clock, text: 'Live in weeks' },
    { icon: DollarSign, text: 'Pay only on results' }
  ];

  const handleCTAClick = () => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        event_category: 'engagement',
        event_label: 'Final-ROI-Forecast-Click'
      });
    }
    
    onNavigate('contact');
  };

  return (
    <section id="final-cta" className="bg-canvas-navy py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-ai-glow-gradient opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ai-glow-gradient opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Headline */}
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-5xl mb-6">
            90-Day ROI-or-Free Guarantee
          </h2>
          
          {/* Subheadline */}
          <p className="text-body-text font-inter text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            If we don't hit measurable ROI in 90 days, you don't pay a dime. We're so confident in our AI Transformation Sprint that your success is our only payment method.
          </p>
          
          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-elevated-card rounded-full px-8 py-4 border border-success-green mb-8"
          >
            <Shield className="w-8 h-8 text-success-green" />
            <div className="text-left">
              <div className="text-primary-text font-inter font-bold text-lg">Risk-Free Promise</div>
              <div className="text-success-green font-inter text-sm">90-Day Money-Back Guarantee</div>
            </div>
          </motion.div>
          
          {/* Benefits */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-6 h-6 text-success-green" />
                  <span className="text-primary-text font-inter text-lg">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
          
          {/* Additional guarantee text */}
          <div className="bg-elevated-card rounded-xl p-6 mb-8 border border-neutral-stroke">
            <p className="text-body-text font-inter text-lg leading-relaxed">
              We guarantee documented cost savings that exceed our fees within 90 days. If you don't see measurable ROI with verified metrics, you pay nothing. Your success is literally our business model.
            </p>
          </div>
          
          {/* CTA Button Container with Bot - aligned on same horizontal plane */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-6">
            {/* Main CTA Button */}
            <motion.button
              onClick={handleCTAClick}
              className="bg-amber-cta text-canvas-navy px-12 py-6 rounded-full font-inter font-bold text-xl hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transform hover:scale-105 transition-all duration-200 animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get My Free ROI Forecast
            </motion.button>
            
            {/* 📣 Final CTA Bot - positioned right of button, same horizontal plane */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:ml-6 flex items-center"
              style={{ paddingLeft: '24px' }}
            >
              <img
                src="/bots/spots.png"
                alt="Final CTA Bot - Urgency to convert"
                className="drop-shadow-lg"
                style={{ width: '140px', height: 'auto' }}
              />
            </motion.div>
          </div>
          
          {/* Fine print */}
          <p className="text-body-text font-inter text-sm">
            No obligation • Free consultation • Results guaranteed • 24-hour response
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;