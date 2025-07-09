import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, Zap } from 'lucide-react';

const LiveMetrics: React.FC = () => {
  // Static base values that represent realistic cumulative achievements
  const baseMetrics = {
    hoursSaved: 3487,
    costReduction: 2647293,
    companiesTransformed: 47,
    automationsRunning: 242
  };

  const [displayMetrics, setDisplayMetrics] = useState(baseMetrics);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    // Only update metrics occasionally to show realistic growth
    const interval = setInterval(() => {
      const now = Date.now();
      const timeSinceLastUpdate = now - lastUpdate;
      
      // Only update every 30 seconds and with realistic increments
      if (timeSinceLastUpdate > 30000) {
        setDisplayMetrics(prev => ({
          hoursSaved: prev.hoursSaved + Math.floor(Math.random() * 2), // 0-1 hours
          costReduction: prev.costReduction + Math.floor(Math.random() * 500), // $0-499
          companiesTransformed: prev.companiesTransformed + (Math.random() > 0.98 ? 1 : 0), // Very rare
          automationsRunning: prev.automationsRunning + (Math.random() > 0.7 ? 1 : 0) // Occasional new automation
        }));
        setLastUpdate(now);
      }
    }, 5000); // Check every 5 seconds but only update every 30 seconds

    return () => clearInterval(interval);
  }, [lastUpdate]);

  const metricItems = [
    {
      icon: Clock,
      value: displayMetrics.hoursSaved.toLocaleString(),
      label: 'Hours Automated',
      color: 'text-amber-500',
      suffix: '+'
    },
    {
      icon: DollarSign,
      value: `$${(displayMetrics.costReduction / 1000000).toFixed(1)}M`,
      label: 'Cost Savings',
      color: 'text-success-green',
      suffix: ''
    },
    {
      icon: Users,
      value: displayMetrics.companiesTransformed.toString(),
      label: 'Companies Transformed',
      color: 'text-primary-purple',
      suffix: '+'
    },
    {
      icon: Zap,
      value: displayMetrics.automationsRunning.toLocaleString(),
      label: 'Live Automations',
      color: 'text-cyan-400',
      suffix: '+'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
      {metricItems.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-elevated-card rounded-lg p-2 sm:p-3 lg:p-4 border border-neutral-stroke relative overflow-hidden group hover:border-primary-purple transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-ai-glow-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-1 sm:space-x-2 mb-1 sm:mb-1.5 lg:mb-2">
                <IconComponent className={`w-4 h-4 lg:w-5 lg:h-5 ${metric.color}`} />
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              </div>
              
              <motion.div
                key={metric.value}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`${metric.color} font-inter font-bold text-xs sm:text-sm lg:text-base xl:text-lg mb-1 break-words hyphens-auto`}
                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
              >
                {metric.value}{metric.suffix}
              </motion.div>
              
              <div className="text-body-text font-inter text-xs lg:text-sm break-words leading-tight hyphens-auto" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
                {metric.label}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default LiveMetrics;