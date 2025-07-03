import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="bg-canvas-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-6">
              90-Day ROI-or-Free Guarantee
            </h2>
            
            <p className="text-body-text font-inter text-lg leading-relaxed">
              We're so confident in our AI Transformation Sprint that we guarantee documented ROI within 90 days. If you don't see measurable cost savings that exceed our fees, you pay nothing and keep all implemented solutions. Your success is our only payment.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            {/* 🛡️ Shield Bot - Trust and risk reversal, right-aligned on desktop, centered on mobile */}
            <div className="relative" style={{ padding: '16px', marginLeft: '24px' }}>
              <img
                src="/bots/ROI.png"
                alt="Shield Bot - ROI Guarantee Trust"
                className="drop-shadow-lg"
                style={{ width: '180px', height: '200px' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;