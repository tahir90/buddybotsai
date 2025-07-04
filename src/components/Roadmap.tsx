import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cog, Rocket, BarChart3 } from 'lucide-react';

const Roadmap: React.FC = () => {
  const roadmapSteps = [
    {
      week: 'Week 1',
      title: 'Discovery & Audit',
      description: 'Deep-dive process mapping and cost leak identification',
      icon: Search
    },
    {
      week: 'Week 2-3',
      title: 'AI Solution Design',
      description: 'Custom automation blueprint tailored to your operations',
      icon: Cog
    },
    {
      week: 'Week 4-5',
      title: 'Pilot Deployment',
      description: 'Live implementation with real-time monitoring',
      icon: Rocket
    },
    {
      week: 'Week 6',
      title: 'Results & Scale Plan',
      description: 'ROI documentation and expansion roadmap delivery',
      icon: BarChart3
    }
  ];

  return (
    <section id="roadmap" className="bg-canvas-navy py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary-text font-inter font-bold text-3xl md:text-4xl mb-4">
            Your 6-Week Sprint Roadmap
          </h2>
        </motion.div>

        <div className="relative">
          {/* ✅ Bot image placed absolutely relative to timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute top-[0px] left-[calc(50%+220px)] hidden md:block z-10"
          >
            <img
              src="/blueprint.png"
              alt="Roadmap Buddy - Structured guidance reinforcement"
              className="drop-shadow-lg transform scale-x-[-1]"
              style={{ width: '140px', height: '160px' }}
            />
          </motion.div>

          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-cta h-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-16 relative">
            {roadmapSteps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-cta rounded-full border-4 border-canvas-navy z-10 hidden md:block"></div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left relative`}>
                    <div className="bg-elevated-card rounded-xl p-6 shadow-xl border border-neutral-stroke">
                      <div className={`flex items-center space-x-3 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                      } justify-center`}>
                        <IconComponent className="w-6 h-6 text-amber-cta" />
                        <span className="text-amber-cta font-inter font-bold">{step.week}</span>
                      </div>

                      <h3 className="text-primary-text font-inter font-bold text-xl mb-3">
                        {step.title}
                      </h3>

                      <p className="text-body-text font-inter leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;