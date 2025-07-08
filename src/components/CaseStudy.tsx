import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingDown } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    
    if (!isModalOpen) {
      // Google Tag Manager event tracking
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'modal_open',
          event_category: 'engagement',
          event_label: 'Case-Study-Modal'
        });
      }
    }
  };

  return (
    <section id="case" className="bg-canvas-navy py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-elevated-card rounded-xl p-8 shadow-2xl relative overflow-hidden border border-neutral-stroke"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-ai-glow-gradient opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-2">
              <h3 className="text-primary-purple font-inter font-bold text-2xl md:text-3xl mb-4">
                $402K Annual Savings in 57 Days
              </h3>
              
              <p className="text-body-text font-inter text-lg leading-relaxed mb-6">
                Manufacturing client eliminated manual inventory reconciliation, automated vendor invoice matching, and deployed predictive maintenance alerts. Result: 22% operational cost reduction and 40% faster order fulfillment. Board approval secured in single presentation.
              </p>
              
              <button
                onClick={handleModalToggle}
                className="bg-ai-glow-gradient text-primary-text px-6 py-3 rounded-full font-inter font-bold hover:opacity-90 transition-opacity duration-200 animate-glow"
              >
                Show Me the Full Breakdown
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-primary-magenta text-primary-text w-24 h-24 rounded-full flex items-center justify-center animate-pulse-magenta">
                <div className="text-center">
                  <TrendingDown className="w-8 h-8 mx-auto mb-1" />
                  <div className="font-inter font-bold text-sm">-22%</div>
                  <div className="font-inter text-xs">cost</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleModalToggle}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-canvas-navy rounded-xl p-8 max-w-2xl w-full max-h-96 overflow-y-auto border border-neutral-stroke"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-primary-text font-inter font-bold text-2xl">
                  Complete Case Study Breakdown
                </h3>
                <button
                  onClick={handleModalToggle}
                  className="text-body-text hover:text-primary-text transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4 text-body-text font-inter">
                <div>
                  <h4 className="text-primary-purple font-semibold mb-2">Challenge:</h4>
                  <p>600-employee manufacturing company losing $50K monthly to inventory discrepancies and manual processes.</p>
                </div>
                
                <div>
                  <h4 className="text-primary-purple font-semibold mb-2">Solution Deployed:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>AI-powered inventory reconciliation system</li>
                    <li>Automated vendor invoice matching</li>
                    <li>Predictive maintenance alerts</li>
                    <li>Real-time reporting dashboard</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-primary-purple font-semibold mb-2">Results:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>$402K annual savings verified</li>
                    <li>40% faster order fulfillment</li>
                    <li>95% reduction in inventory errors</li>
                    <li>ROI: 380% in first year</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudy;