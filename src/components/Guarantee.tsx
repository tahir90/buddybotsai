import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section id="guarantee" className="bg-canvas-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-20 items-center">
          {/* ✅ LEFT: TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center space-x-3 bg-elevated-card rounded-full px-8 py-4 border border-primary-purple mb-8">
              <Shield className="w-8 h-8 text-primary-purple" />
              <div className="text-left">
                <div className="text-primary-text font-inter font-bold text-lg">Performance Guarantee</div>
                <div className="text-primary-purple font-inter text-sm">Measurable Results Within 90 Days</div>
              </div>
            </div>

            <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-6 max-w-2xl leading-tight">
              We Guarantee Documented ROI
            </h2>

            <p className="text-body-text font-inter text-lg leading-relaxed max-w-2xl">
              We stand behind every transformation with verified savings calculations and measurable performance metrics. Zero disruption, maximum impact, complete transparency.
            </p>
          </motion.div>

          {/* ✅ RIGHT: BOT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="./ROI.png"
              alt="ROI Guarantee Bot - Trust and risk reversal"
              className="drop-shadow-lg w-[200px] h-[230px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;