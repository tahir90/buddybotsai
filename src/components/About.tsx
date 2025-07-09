import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Zap, TrendingUp, Shield } from 'lucide-react';

const About: React.FC = () => {
  const whyChooseUs = [
    'We turn AI from a buzzword into a business tool',
    'Our transformations improve ops, marketing, support & leadership visibility',
    'Fast results with zero disruption to your current tools or workflows',
    'Trusted by founders, COOs, and operations teams scaling with lean resources'
  ];

  const whatWeDo = [
    'Identify the biggest leverage points in your teams',
    'Apply targeted AI systems where they create immediate impact',
    'Build a transformation roadmap tailored to your business goals'
  ];

  return (
    <section id="about" className="bg-canvas-navy py-20 relative overflow-hidden" role="region" aria-labelledby="about-heading">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-ai-glow-gradient opacity-15 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Headline */}
            <h2 id="about-heading" className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-8 leading-tight">
              Built by Practitioners Leading{' '}
              <span className="bg-ai-glow-gradient bg-clip-text text-transparent">
                Real AI Transformation
              </span>
            </h2>
            
            {/* Story Paragraph */}
            <div className="space-y-6 text-body-text font-inter text-lg leading-relaxed mb-12">
              <p>
                At BuddyBots.ai, we help modern teams unlock real ROI through smart, practical AI transformation.
              </p>
              
              <p>
                We don't believe in hype, dashboards no one uses, or AI theater. We believe in building "buddy-fied" departments—high-performance teams powered by lean AI systems that simplify workflows, reduce costs, and scale results.
              </p>
              
              <p>
                Our team brings deep experience in product, ops, and growth, and we've helped businesses launch real AI systems that save hundreds of hours, reduce decision fatigue, and unlock untapped profit.
              </p>
            </div>
            
            {/* Why Growing Teams Choose BuddyBots */}
            <div className="mb-12">
              <h3 className="text-primary-text font-inter font-bold text-2xl mb-6" itemProp="name">
                Why Growing Teams Choose BuddyBots
              </h3>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-success-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-body-text font-inter text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right: Team Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke relative overflow-hidden">
              <div className="absolute inset-0 bg-ai-glow-gradient opacity-10 rounded-xl"></div>
              
              <div className="relative z-10">
                {/* Team Bot Image */}
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-ai-glow-gradient bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary-purple">
                    <Users className="w-16 h-16 text-primary-purple" aria-hidden="true" />
                  </div>
                </div>
                
                <h3 className="text-primary-text font-inter font-bold text-xl mb-4 text-center" itemProp="name">
                  Meet Your AI Transformation Team
                </h3>
                
                <p className="text-body-text font-inter text-base leading-relaxed mb-6 text-center">
                  We're engineers, strategists, and workflow specialists focused on one mission:
                  <br />
                  <strong className="text-primary-purple">
                    Helping you run smarter, lighter, and faster with AI — no disruption, no code bloat.
                  </strong>
                </p>
                
                {/* What We Do */}
                <div className="bg-canvas-navy rounded-lg p-6">
                  <h4 className="text-primary-purple font-inter font-bold text-lg mb-4 text-center" itemProp="name">
                    What We Do:
                  </h4>
                  
                  <div className="space-y-3">
                    {whatWeDo.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-body-text font-inter text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;