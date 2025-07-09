import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DollarSign, Clock, TrendingUp, Star } from 'lucide-react';
import SmartTooltip from './SmartTooltip';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Manufacturing",
      quote: "BuddyBots.ai reduced our operational costs by 35% in just 8 weeks. We eliminated 240 hours of manual work per week and reinvested that time into strategic growth initiatives.",
      metrics: [
        { icon: DollarSign, value: "35%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "240hrs/week", label: "Time Saved", color: "text-amber-500" },
        { icon: TrendingUp, value: "380%", label: "ROI", color: "text-cyan-400" }
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "Global Logistics Inc",
      quote: "From manual chaos to automated precision in 6 weeks. Our fulfillment speed increased 40% while cutting operational costs 18%. The ROI was immediate and measurable.",
      metrics: [
        { icon: DollarSign, value: "18%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "40%", label: "Speed Increase", color: "text-amber-500" },
        { icon: TrendingUp, value: "290%", label: "ROI", color: "text-cyan-400" }
      ]
    },
    {
      name: "Dr. Amanda Foster",
      role: "CEO",
      company: "MedDevice Solutions",
      quote: "Zero disruption, maximum impact. The team delivered exactly what they promised – measurable ROI with risk-free implementation. Our efficiency gains compound monthly.",
      metrics: [
        { icon: DollarSign, value: "28%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "180hrs/week", label: "Time Saved", color: "text-amber-500" },
        { icon: TrendingUp, value: "420%", label: "ROI", color: "text-cyan-400" }
      ]
    }
  ];

  // Auto-loop through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="social" className="bg-canvas-navy py-20" role="region" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="testimonials-heading" className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="bg-elevated-card rounded-2xl border border-neutral-stroke relative overflow-hidden" itemScope itemType="https://schema.org/Review">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-amber-cta fill-current" aria-hidden="true" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-primary-text font-inter text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto text-center" itemProp="reviewBody">
                "{currentData.quote}"
              </blockquote>
              
              {/* Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {currentData.metrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 ${metric.color.replace('text-', 'bg-')} bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3`} role="img" aria-label={metric.label}>
                        <SmartTooltip
                          content={`${metric.label}: ${metric.value}`}
                          aiInsight={`This metric represents ${metric.label.toLowerCase()} achieved through our AI transformation process`}
                          type="insight"
                        >
                          <IconComponent className={`w-8 h-8 ${metric.color} hover:scale-110 transition-transform duration-300 cursor-pointer`} aria-hidden="true" />
                        </SmartTooltip>
                      </div>
                      <motion.div
                        key={`${currentTestimonial}-${index}`}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`${metric.color} font-inter font-bold text-2xl mb-1`}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-body-text font-inter text-sm">
                        {metric.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Client info - redesigned layout */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center space-x-4 bg-canvas-navy rounded-full px-8 py-4 border border-neutral-stroke">
                  <div className="w-12 h-12 bg-ai-glow-gradient rounded-full flex items-center justify-center" role="img" aria-label={`${currentData.name} avatar`}>
                    <span className="text-primary-text font-inter font-bold text-lg">
                      {currentData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left" itemScope itemType="https://schema.org/Person">
                    <div className="text-primary-text font-inter font-bold text-lg" itemProp="name">
                      {currentData.name}
                    </div>
                    <div className="text-primary-purple font-inter font-medium text-sm" itemProp="jobTitle">
                      {currentData.role}, {currentData.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 pb-6" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-success-green scale-125' 
                    : 'bg-neutral-stroke hover:bg-success-green hover:scale-110'
                }`}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;