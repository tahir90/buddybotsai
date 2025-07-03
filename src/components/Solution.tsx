import React from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="bg-canvas-navy py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary-text font-inter text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            Our AI Transformation Sprint finds, automates, and monetizes those hidden leaks—delivering provable savings in weeks, not quarters.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 h-1 bg-ai-glow-gradient mx-auto max-w-3xl origin-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Solution;