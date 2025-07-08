import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';

const USP: React.FC = () => {
  const uspSteps = [
    { text: 'Pinpoint ≥ $250K savings', icon: DollarSign },
    { text: 'Live pilot in 6 weeks', icon: Clock },
    { text: 'Board-ready Impact Report', icon: CheckCircle }
  ];

  const comparisonData = [
    {
      feature: 'Implementation Speed',
      us: '6 weeks',
      traditional: '6-12 months',
      consultants: '12+ months'
    },
    {
      feature: 'Upfront Cost',
      us: '$0',
      traditional: '$50K-500K',
      consultants: '$100K+'
    },
    {
      feature: 'Risk Level',
      us: 'Zero Risk',
      traditional: 'High Risk',
      consultants: 'Very High Risk'
    },
    {
      feature: 'ROI Guarantee',
      us: '90-Day Promise',
      traditional: 'No Guarantee',
      consultants: 'No Guarantee'
    }
  ];

  return (
    <section id="usp" className="bg-canvas-navy py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-8">
            Done-For-You AI Transformation Sprint
          </h2>
          
          {/* Three key points - properly centered and spaced */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {uspSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center space-x-3 bg-elevated-card rounded-lg p-6 border border-neutral-stroke"
                >
                  <IconComponent className="w-6 h-6 text-primary-purple flex-shrink-0" />
                  <span className="text-primary-text font-inter text-lg font-medium">{step.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Comparison Table Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-primary-text font-inter font-bold text-2xl md:text-3xl text-center mb-12">
            Key Differentiators
          </h3>
          
          <div className="bg-elevated-card rounded-xl overflow-hidden border border-neutral-stroke shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-canvas-navy border-b border-neutral-stroke">
                    <th className="text-left p-6 text-body-text font-inter font-semibold text-lg">Feature</th>
                    <th className="text-center p-6 text-primary-purple font-inter font-semibold text-lg">BuddyBots Sprint</th>
                    <th className="text-center p-6 text-body-text font-inter font-semibold text-lg">Traditional IT</th>
                    <th className="text-center p-6 text-body-text font-inter font-semibold text-lg">Big Consultants</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-elevated-card' : 'bg-canvas-navy'}>
                      <td className="p-6 text-primary-text font-inter font-medium border-b border-neutral-stroke text-lg">{row.feature}</td>
                      <td className="p-6 text-center border-b border-neutral-stroke">
                        <span className="bg-primary-purple text-primary-text px-4 py-2 rounded-full font-inter font-bold text-sm">
                          {row.us}
                        </span>
                      </td>
                      <td className="p-6 text-center text-body-text font-inter border-b border-neutral-stroke text-lg">{row.traditional}</td>
                      <td className="p-6 text-center text-body-text font-inter border-b border-neutral-stroke text-lg">{row.consultants}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;