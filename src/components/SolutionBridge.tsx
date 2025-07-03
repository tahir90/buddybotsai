import React from 'react';
import { motion } from 'framer-motion';

const SolutionBridge: React.FC = () => {
  const bridgeSteps = [
    { label: 'Manual Chaos', color: 'bg-warning-red' },
    { label: 'Process Audit', color: 'bg-cyan-interactive' },
    { label: 'AI Integration', color: 'bg-amber-cta' },
    { label: 'Automated Profits', color: 'bg-success-green' }
  ];

  return (
    <section id="solution-bridge" className="bg-canvas-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-text font-inter text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-12">
            You don't need a full tech team—just the right buddy.
          </p>
        </motion.div>
        
        {/* Animated Bridge Line with properly centered dots */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl mb-8"
        >
          {/* Main bridge line */}
          <div className="h-1 bg-ai-glow-gradient mx-auto origin-left relative">
            {/* Animated dots along the line - perfectly centered */}
            {bridgeSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className={`absolute w-4 h-4 ${step.color} rounded-full`}
                style={{ 
                  left: `${(index * 100) / (bridgeSteps.length - 1)}%`, 
                  top: '-6px',
                  transform: 'translateX(-50%)'
                }}
              ></motion.div>
            ))}
          </div>
          
          {/* Bridge labels - properly aligned */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {bridgeSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-sm font-inter font-medium ${
                  index === 0 ? 'text-warning-red' : 
                  index === 1 ? 'text-cyan-interactive' :
                  index === 2 ? 'text-amber-cta' : 'text-success-green'
                }`}>
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionBridge;