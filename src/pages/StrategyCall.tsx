import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, CheckCircle, Calendar, Clock, User } from 'lucide-react';

interface StrategyCallProps {
  onBack: () => void;
  prefillData?: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    industry?: string;
    annualRevenue?: string;
  };
}

const StrategyCall: React.FC<StrategyCallProps> = ({ onBack, prefillData }) => {
  useEffect(() => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'strategy_call_page_view',
        event_category: 'booking',
        event_label: 'Strategy-Call-Page-Loaded'
      });
    }

    // Simple script injection - exactly like the working version
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});

      // Build config object with prefill data
      var config = {
        layout: "month_view"
      };
      
      // Add prefill data if available
      ${prefillData?.name ? `config.name = ${JSON.stringify(prefillData.name)};` : ''}
      ${prefillData?.email ? `config.email = ${JSON.stringify(prefillData.email)};` : ''}
      ${prefillData?.phone ? `config.attendeePhoneNumber = ${JSON.stringify(prefillData.phone)};` : ''}
      ${prefillData?.company ? `config.CompanyName = ${JSON.stringify(prefillData.company)};` : ''}
      ${prefillData?.industry ? `config.industry = ${JSON.stringify(prefillData.industry)};` : ''}
      ${prefillData?.annualRevenue ? `config["Annual-Revenue"] = ${JSON.stringify(prefillData.annualRevenue)};` : ''}
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: config,
        calLink: "buddybotsai/30min",
      });

      Cal.ns["30min"]("ui", {"cssVarsPerTheme":{"dark":{"cal-brand":"#9c5de9"}},"hideEventTypeDetails":true,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Clean up the script when component unmounts
      const scripts = document.querySelectorAll('script');
      scripts.forEach(s => {
        if (s.innerHTML.includes('Cal("init"')) {
          s.remove();
        }
      });
    };
  }, [prefillData]);

  const benefits = [
    {
      icon: Calendar,
      title: "45-Minute Deep Dive",
      description: "Comprehensive analysis of your operations and automation opportunities"
    },
    {
      icon: CheckCircle,
      title: "Custom ROI Assessment", 
      description: "Preliminary savings projections specific to your business"
    },
    {
      icon: User,
      title: "Expert Consultation",
      description: "Direct access to our AI transformation specialists"
    },
    {
      icon: Clock,
      title: "Implementation Roadmap",
      description: "Clear next steps if we're a good fit for your goals"
    }
  ];

  return (
    <div className="min-h-screen bg-canvas-navy pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-cyan-interactive hover:text-primary-text transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter">Back to Home</span>
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Phone className="w-8 h-8 text-primary-purple" />
              <h1 className="text-primary-text font-inter font-bold text-3xl md:text-4xl">
                Book Your Strategy Call
              </h1>
            </div>
            <p className="text-body-text font-inter text-lg max-w-2xl mx-auto">
              Schedule a 45-minute consultation to discover your biggest automation opportunities and get a custom ROI assessment
            </p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-primary-text font-inter font-bold text-xl mb-6">
                  What You'll Get:
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-10 h-10 bg-amber-cta bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary-purple" />
                        </div>
                        <div>
                          <h4 className="text-primary-text font-inter font-semibold text-base mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-body-text font-inter text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-elevated-card rounded-xl p-6 border border-neutral-stroke">
                <h4 className="text-primary-text font-inter font-bold text-lg mb-4">
                  Why Book With Us?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                    <span className="text-body-text font-inter text-sm">47+ successful AI transformations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                    <span className="text-body-text font-inter text-sm">Average 30% cost reduction in 90 days</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                    <span className="text-body-text font-inter text-sm">Risk-free consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0" />
                    <span className="text-body-text font-inter text-sm">No obligation to proceed</span>
                  </li>
                </ul>
              </div>

              {/* Guarantee */}
              <div className="bg-ai-glow-gradient bg-opacity-10 rounded-xl p-6 border border-amber-cta">
                <div className="bg-ai-glow-gradient bg-opacity-10 rounded-xl p-6 border border-primary-purple">
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary-purple" />
                    <h4 className="text-primary-text font-inter font-bold text-base">
                      Strategy Call Promise
                    </h4>
                  </div>
                  <p className="text-body-text font-inter text-sm">
                    We'll identify at least 3 specific opportunities—or you'll walk away with clear, actionable insights to elevate your business.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Cal.com Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-elevated-card rounded-xl border border-neutral-stroke overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-stroke">
                <h3 className="text-primary-text font-inter font-bold text-xl text-center">
                  Select Your Preferred Time
                </h3>
                <p className="text-body-text font-inter text-center mt-2">
                  All times shown in your local timezone
                </p>
              </div>
              
              {/* Cal.com Inline Embed */}
              <div style={{width:'100%',height:'100%',overflow:'scroll'}} className="h-[600px] w-full">
                <div 
                  id="my-cal-inline-30min" 
                />
              </div>
              
              <div className="p-4 border-t border-neutral-stroke bg-canvas-navy">
                <p className="text-body-text font-inter text-sm text-center">
                  📧 You'll receive an instant confirmation email with meeting details and preparation materials
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyCall;