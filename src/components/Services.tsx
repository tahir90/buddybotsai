import React from 'react';
import { motion } from 'framer-motion';
import { Mic, BarChart3, Target, Users, Search, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Mic,
      title: '24/7 Voice Agents',
      description: 'Answer calls, qualify leads, book appointments - even while you sleep',
      benefit: 'Save 15+ hours/week on phone calls',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple bg-opacity-20'
    },
    {
      icon: BarChart3,
      title: 'Smart CRM Systems',
      description: 'Automatically organize leads, follow up prospects, and never miss a deal',
      benefit: 'Increase conversion rates by 40%',
      color: 'text-primary-magenta',
      bgColor: 'bg-primary-magenta bg-opacity-20'
    },
    {
      icon: Target,
      title: 'AI Lead Generation',
      description: 'Find perfect prospects automatically across multiple channels',
      benefit: '3x more qualified leads monthly',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple bg-opacity-20'
    },
    {
      icon: Users,
      title: 'HR Process Automation',
      description: 'Streamline hiring, onboarding, and employee management tasks',
      benefit: 'Reduce HR workload by 60%',
      color: 'text-primary-magenta',
      bgColor: 'bg-primary-magenta bg-opacity-20'
    },
    {
      icon: Search,
      title: 'AI-Powered SEO',
      description: 'Automate content creation, keyword research, and ranking optimization',
      benefit: 'Boost organic traffic by 200%',
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple bg-opacity-20'
    },
    {
      icon: Zap,
      title: 'Custom AI Solutions',
      description: 'Tailored automation for your specific business challenges',
      benefit: 'Solve unique problems efficiently',
      color: 'text-primary-magenta',
      bgColor: 'bg-primary-magenta bg-opacity-20'
    }
  ];

  return (
    <section id="services" className="bg-canvas-navy py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-glow-gradient opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-magenta-gradient opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            We Don't Just Talk AI—
            <br />
            <span className="bg-ai-glow-gradient bg-clip-text text-transparent">
              We Deliver Automation That Saves Time & Makes Money
            </span>
          </h2>
          
          <p className="text-body-text font-inter text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Transform your operations with proven AI solutions that work 24/7 to grow your business while you focus on what matters most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke hover:border-primary-purple transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden"
              >
                {/* Card background glow effect */}
                <div className="absolute inset-0 bg-ai-glow-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-primary-text font-inter font-bold text-xl mb-4 group-hover:text-primary-purple transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-body-text font-inter text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Benefit Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-solid" style={{ borderColor: '#E4E7EB' }}>
                    <span className={`${service.color} font-inter font-semibold text-sm`}>
                      {service.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke relative overflow-hidden">
            <div className="absolute inset-0 bg-ai-glow-gradient opacity-10 rounded-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-primary-text font-inter font-bold text-2xl md:text-3xl mb-4">
                Ready to Automate Your Success?
              </h3>
              
              <p className="text-body-text font-inter text-lg mb-8 max-w-2xl mx-auto">
                Each solution is custom-built for your business, deployed in weeks, and guaranteed to deliver measurable ROI within 90 days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    // Google Tag Manager event tracking
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'cta_click',
                        event_category: 'engagement',
                        event_label: 'Services-Section-Strategy-Call'
                      });
                    }
                    // Navigate to strategy call page
                    const event = new CustomEvent('navigate-to-strategy-call');
                    window.dispatchEvent(event);
                  }}
                  className="bg-primary-purple text-primary-text px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transform hover:scale-105 transition-all duration-200 animate-glow"
                >
                  Book Strategy Call
                </button>
              </div>
              
              <p className="text-body-text font-inter text-sm mt-6">
                ✅ No obligation • ✅ Free consultation • ✅ 24-hour response
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;