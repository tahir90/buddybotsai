import React from 'react';
import { motion } from 'framer-motion';

const SolutionBridge: React.FC = () => {
  const bridgeSteps = [
    { label: 'Manual Chaos', color: 'bg-warning-red' },
    { label: 'Process Audit', color: 'bg-primary-magenta' },
    { label: 'AI Integration', color: 'bg-primary-purple' },
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
        
        {/* Bridge visualization with circles and labels properly aligned */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-20">
            {/* Main bridge line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-6 left-0 right-0 h-1 bg-purple-gradient origin-left"
            >
              {/* Circles positioned absolutely on the line */}
              {bridgeSteps.map((step, index) => (
                <motion.div
                  key={`circle-${index}`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute w-4 h-4 ${step.color} rounded-full -top-1.5`}
                  style={{ 
                    left: `${(index * 100) / (bridgeSteps.length - 1)}%`,
                    transform: 'translateX(-50%)'
                  }}
                />
              ))}
            </motion.div>
            
            {/* Labels positioned with proper centering under each circle */}
            {bridgeSteps.map((step, index) => (
              <motion.div
                key={`label-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="absolute top-12"
                style={{ 
                  left: `${(index * 100) / (bridgeSteps.length - 1)}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div className={`text-sm font-inter font-medium text-center whitespace-nowrap ${
                  index === 0 ? 'text-warning-red' : 
                  index === 1 ? 'text-primary-magenta' :
                  index === 2 ? 'text-primary-purple' : 'text-success-green'
                }`}>
                  {step.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBridge;