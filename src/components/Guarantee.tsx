import React from 'react';
import { motion } from 'framer-motion';

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
            <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-6 max-w-2xl leading-tight">
              ROI-or-Free 90-Day Guarantee
            </h2>

            <p className="text-body-text font-inter text-lg leading-relaxed max-w-2xl">
              We're so confident in our AI Transformation Sprint that we guarantee documented ROI within 90 days.
              If you don't see measurable cost savings that exceed our fees, you pay nothing and keep all implemented solutions.
              Your success is our only payment.
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
              src="/ROI.png"
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