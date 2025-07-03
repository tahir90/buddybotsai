import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Manufacturing",
      avatar: "👩‍💼",
      quote: "TransformAI reduced our operational costs by 35% in just 8 weeks. We eliminated 240 hours of manual work per week and reinvested that time into strategic growth initiatives.",
      metrics: [
        { icon: DollarSign, value: "35%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "240hrs/week", label: "Time Saved", color: "text-amber-cta" },
        { icon: TrendingUp, value: "380%", label: "ROI", color: "text-cyan-interactive" }
      ]
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director",
      company: "Global Logistics Inc",
      avatar: "👨‍💼",
      quote: "From manual chaos to automated precision in 6 weeks. Our fulfillment speed increased 40% while cutting operational costs 18%. The ROI was immediate and measurable.",
      metrics: [
        { icon: DollarSign, value: "18%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "40%", label: "Speed Increase", color: "text-amber-cta" },
        { icon: TrendingUp, value: "290%", label: "ROI", color: "text-cyan-interactive" }
      ]
    },
    {
      name: "Dr. Amanda Foster",
      role: "CEO",
      company: "MedDevice Solutions",
      avatar: "👩‍⚕️",
      quote: "Zero disruption, maximum impact. The team delivered exactly what they promised – measurable ROI with risk-free implementation. Our efficiency gains compound monthly.",
      metrics: [
        { icon: DollarSign, value: "28%", label: "Cost Reduction", color: "text-success-green" },
        { icon: Clock, value: "180hrs/week", label: "Time Saved", color: "text-amber-cta" },
        { icon: TrendingUp, value: "420%", label: "ROI", color: "text-cyan-interactive" }
      ]
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section id="social" className="bg-canvas-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-4">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="bg-elevated-card rounded-2xl p-8 md:p-12 border border-neutral-stroke relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          
          {/* Quote icon */}
          <div className="text-center mb-8">
            <div className="text-6xl text-amber-cta font-serif">"</div>
          </div>
          
          {/* Main testimonial content */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <blockquote className="text-primary-text font-inter text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              {currentData.quote}
            </blockquote>
            
            {/* Client info */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-4xl">{currentData.avatar}</div>
              <div className="text-left">
                <div className="text-cyan-interactive font-inter font-semibold text-lg">
                  {currentData.name}
                </div>
                <div className="text-amber-cta font-inter font-medium">
                  {currentData.role}
                </div>
                <div className="text-body-text font-inter text-sm">
                  {currentData.company}
                </div>
              </div>
            </div>
          </motion.div>
          
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
                  <div className={`w-16 h-16 ${metric.color.replace('text-', 'bg-')} bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className={`${metric.color} font-inter font-bold text-2xl mb-1`}>
                    {metric.value}
                  </div>
                  <div className="text-body-text font-inter text-sm">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-canvas-navy border-2 border-cyan-interactive rounded-full flex items-center justify-center hover:bg-cyan-interactive hover:border-cyan-interactive transition-all duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-interactive group-hover:text-canvas-navy transition-colors" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-amber-cta' : 'bg-neutral-stroke'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-canvas-navy border-2 border-cyan-interactive rounded-full flex items-center justify-center hover:bg-cyan-interactive hover:border-cyan-interactive transition-all duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-cyan-interactive group-hover:text-canvas-navy transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;