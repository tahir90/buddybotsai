import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Cog, HeadphonesIcon, Calendar, CheckCircle } from 'lucide-react';

const TransformationJourney: React.FC = () => {
  const journeySteps = [
    {
      week: 'Week 1',
      phase: 'Audit & Strategy',
      description: 'Deep-dive process mapping, cost leak identification, and custom roadmap creation',
      icon: Search,
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple',
      details: [
        'Assess current workflows and inefficiencies',
        'Identify AI-ready opportunities',
        'Build custom roadmap based on ROI potential'
      ]
    },
    {
      week: 'Week 2-3',
      phase: 'Solution Design',
      description: 'Custom automation blueprint tailored to your operations and business goals',
      icon: Target,
      color: 'text-primary-magenta',
      bgColor: 'bg-primary-magenta',
      details: [
        'Design AI solutions for maximum impact',
        'Plan integration with existing systems',
        'Prepare deployment strategy'
      ]
    },
    {
      week: 'Week 4-5',
      phase: 'Implementation',
      description: 'Live deployment with real-time monitoring—no rip-and-replace, no disruptions',
      icon: Cog,
      color: 'text-primary-purple',
      bgColor: 'bg-primary-purple',
      details: [
        'Deploy AI solutions in parallel environments',
        'Test and optimize performance',
        'Ensure zero disruption to operations'
      ]
    },
    {
      week: 'Week 6',
      phase: 'Launch & Support',
      description: 'Team training, fine-tuning, and ROI documentation with expansion roadmap',
      icon: HeadphonesIcon,
      color: 'text-primary-magenta',
      bgColor: 'bg-primary-magenta',
      details: [
        'Train your team on new systems',
        'Document measurable ROI results',
        'Deliver expansion roadmap for continued growth'
      ]
    }
  ];

  return (
    <section id="transformation-journey" className="bg-canvas-navy py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-ai-glow-gradient opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-magenta-gradient opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            Your Complete{' '}
            <span className="bg-ai-glow-gradient bg-clip-text text-transparent">
              AI Transformation Journey
            </span>
          </h2>
          
          <p className="text-body-text font-inter text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            A proven 6-week sprint that delivers measurable ROI through strategic AI implementation—no disruption, maximum impact.
          </p>
        </motion.div>

        <div className="relative">
          {/* Bot image positioned absolutely relative to timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-[0px] left-[calc(50%+220px)] hidden lg:block z-10"
          >
            <img
              src="./blueprint.png"
              alt="Transformation Journey Guide"
              className="drop-shadow-lg transform scale-x-[-1]"
              style={{ width: '140px', height: '160px' }}
            />
          </motion.div>

          {/* Timeline vertical line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-purple to-primary-magenta h-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-16 relative">
            {journeySteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-purple rounded-full border-4 border-canvas-navy z-10 hidden md:block"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${
                    (index === 1 || index === 2) ? 'text-left' : 
                    index % 2 === 0 ? 'text-left' : 'text-left'
                  } relative`}>
                    <div className="bg-elevated-card rounded-xl p-8 shadow-xl border border-neutral-stroke hover:border-primary-purple transition-all duration-300 group hover:transform hover:scale-105 relative overflow-hidden">
                      {/* Card background glow effect */}
                      <div className="absolute inset-0 bg-ai-glow-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
                      
                      <div className="relative z-10">
                        {/* Week badge and icon */}
                        <div className={`flex items-center space-x-3 mb-6 ${
                          'justify-start'
                        }`}>
                          <div className={`w-12 h-12 ${step.bgColor} bg-opacity-20 rounded-full flex items-center justify-center border-2 ${step.color.replace('text-', 'border-')}`}>
                            <IconComponent className={`w-6 h-6 ${step.color}`} />
                          </div>
                          <div>
                            <span className={`${step.color} font-inter font-bold text-lg`}>{step.week}</span>
                            <div className="text-primary-text font-inter font-bold text-xl">{step.phase}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-body-text font-inter text-lg leading-relaxed mb-6 ${
                          'text-left'
                        }`}>
                          {step.description}
                        </p>

                        {/* Details */}
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className={`flex items-start space-x-2 ${
                              'justify-start text-left'
                            }`}>
                              <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                              <span className="text-body-text font-inter text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke relative overflow-hidden">
            <div className="absolute inset-0 bg-ai-glow-gradient opacity-10 rounded-xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Calendar className="w-8 h-8 text-primary-purple" />
                <h3 className="text-primary-text font-inter font-bold text-2xl md:text-3xl">
                  Ready to Start Your 6-Week Sprint?
                </h3>
              </div>
              
              <p className="text-body-text font-inter text-lg mb-8 max-w-2xl mx-auto">
                Join businesses who've transformed their operations in just 6 weeks. Proven process, guaranteed results, zero risk.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    // Google Tag Manager event tracking
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'cta_click',
                        event_category: 'engagement',
                        event_label: 'Journey-Section-Strategy-Call'
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
                ✅ 90-day ROI guarantee • ✅ Zero disruption promise • ✅ 24-hour response
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationJourney;