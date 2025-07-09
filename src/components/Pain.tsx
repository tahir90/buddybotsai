import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const Pain: React.FC = () => {
  const painPoints = [
    'Sales team is losing leads due to manual CRM updates',
    'Every missed call = missed opportunity & revenue loss',
    'Hiring bottlenecks are slowing down team expansion and delivery',
    'Marketing teams are guessing instead of acting on real-time data'
  ];

  return (
    <section id="pain" className="bg-canvas-navy py-20" role="region" aria-labelledby="pain-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="pain-heading" className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-8">
              Every Manual Process Is Costing You—Twice.
            </h2>
            
            <div className="space-y-4 mb-8">
              {painPoints.map((pain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <AlertTriangle className="w-6 h-6 text-warning-red flex-shrink-0" aria-hidden="true" />
                  <span className="text-body-text font-inter text-lg">{pain}</span>
                </motion.div>
              ))}
            </div>
            
            <p className="text-body-text font-inter text-lg leading-relaxed">
              While you're stuck firefighting these operational breakdowns, competitors are scaling with AI-powered precision. Each day of delay compounds the revenue gap.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-elevated-card rounded-xl p-12 shadow-xl border border-neutral-stroke">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-primary-text font-inter font-bold text-xl mb-2" itemProp="name">
                  Hidden Cost Leaks
                </h3>
                <p className="text-body-text font-inter" itemProp="description">
                  Every manual process costs you twice: once in execution, again in missed opportunities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pain;