import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, CheckCircle, ArrowRight, Zap, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<number[]>([]); // Track which steps should show results

  const demoSteps = [
    {
      title: 'Current State Analysis',
      description: 'AI scans your current processes and identifies inefficiencies',
      duration: 2500,
      color: 'bg-primary-purple',
      outcomes: [
        { metric: 'Manual Tasks Found', value: '47', unit: 'processes' },
        { metric: 'Time Waste Identified', value: '240', unit: 'hrs/week' },
        { metric: 'Error Rate Detected', value: '12%', unit: 'avg' }
      ],
      businessImpact: 'Discovered $180K in annual waste from manual processes'
    },
    {
      title: 'Opportunity Mapping',
      description: 'AI identifies high-impact automation opportunities',
      duration: 2000,
      color: 'bg-primary-magenta',
      outcomes: [
        { metric: 'Automation Opportunities', value: '23', unit: 'identified' },
        { metric: 'ROI Potential', value: '340%', unit: 'projected' },
        { metric: 'Quick Wins', value: '8', unit: 'immediate' }
      ],
      businessImpact: 'Prioritized solutions targeting $280K annual savings'
    },
    {
      title: 'Smart Automation Design',
      description: 'Custom AI workflows built for your specific needs',
      duration: 2200,
      color: 'bg-success-green',
      outcomes: [
        { metric: 'Workflows Created', value: '12', unit: 'automated' },
        { metric: 'Integration Points', value: '6', unit: 'systems' },
        { metric: 'Efficiency Gain', value: '65%', unit: 'improvement' }
      ],
      businessImpact: 'Designed systems to eliminate 180 hours/week of manual work'
    },
    {
      title: 'Live Implementation',
      description: 'AI solutions deployed with zero disruption',
      duration: 1800,
      color: 'bg-cyan-400',
      outcomes: [
        { metric: 'Uptime Maintained', value: '100%', unit: 'during deploy' },
        { metric: 'Team Training', value: '95%', unit: 'adoption rate' },
        { metric: 'Go-Live Success', value: '48hrs', unit: 'deployment' }
      ],
      businessImpact: 'Seamless transition with immediate 25% efficiency boost'
    },
    {
      title: 'Results & Optimization',
      description: 'Real-time monitoring delivers measurable ROI',
      duration: 1500,
      color: 'bg-amber-500',
      outcomes: [
        { metric: 'Cost Reduction', value: '32%', unit: 'achieved' },
        { metric: 'Time Savings', value: '180', unit: 'hrs/week' },
        { metric: 'ROI Delivered', value: '285%', unit: 'in 90 days' }
      ],
      businessImpact: 'Delivered $285K annual savings with 90-day ROI guarantee'
    }
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isPlaying && currentStep < demoSteps.length) {
      timeout = setTimeout(() => {
        // First, show results for the current step
        setShowResults(prev => [...prev, currentStep]);
        
        // Then after a brief delay, mark as completed and move to next step
        setTimeout(() => {
          setCompletedSteps(prev => [...prev, currentStep]);
          setCurrentStep(prev => prev + 1);
        }, 800); // 800ms delay to show results before moving to next step
        
      }, demoSteps[currentStep].duration);
    } else if (currentStep >= demoSteps.length) {
      setIsPlaying(false);
    }

    return () => clearTimeout(timeout);
  }, [isPlaying, currentStep, demoSteps]);

  const handlePlay = () => {
    if (currentStep >= demoSteps.length) {
      // Reset demo
      setCurrentStep(0);
      setCompletedSteps([]);
      setShowResults([]);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setCompletedSteps([]);
    setShowResults([]);
  };

  const handleStepClick = (index: number) => {
    if (!isPlaying) {
      setCurrentStep(index);
      setCompletedSteps(Array.from({ length: index }, (_, i) => i));
      setShowResults(Array.from({ length: index }, (_, i) => i));
    }
  };

  return (
    <div className="bg-elevated-card rounded-xl border border-neutral-stroke relative overflow-hidden">
      <div className="absolute inset-0 bg-ai-glow-gradient opacity-5"></div>
      
      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h3 className="text-primary-text font-inter font-bold text-lg sm:text-xl md:text-2xl mb-2">
              AI Transformation in Action
            </h3>
            <p className="text-body-text font-inter text-sm md:text-base">
              Watch real business outcomes unfold step by step
            </p>
          </div>
          
          <div className="flex items-center justify-center sm:justify-end space-x-3">
            <button
              onClick={handlePlay}
              className="bg-primary-purple text-primary-text p-3 rounded-full hover:bg-primary-magenta transition-colors duration-200 group flex-shrink-0"
              aria-label={isPlaying ? "Pause demo" : "Play demo"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              )}
            </button>
            <button
              onClick={handleReset}
              className="bg-canvas-navy text-body-text p-3 rounded-full hover:text-primary-text hover:bg-neutral-stroke transition-colors duration-200 flex-shrink-0"
              aria-label="Reset demo"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {demoSteps.map((step, index) => {
            const isActive = currentStep === index && isPlaying;
            const isCompleted = completedSteps.includes(index);
            const shouldShowResults = showResults.includes(index);
            const isClickable = !isPlaying;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                  scale: isActive ? 1.02 : 1
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative rounded-xl border transition-all duration-500 cursor-pointer ${
                  isActive ? 'border-primary-purple bg-primary-purple bg-opacity-10 shadow-lg' :
                  isCompleted ? 'border-success-green bg-success-green bg-opacity-5' :
                  'border-neutral-stroke hover:border-primary-purple'
                } ${isClickable ? 'hover:scale-[1.01]' : ''}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="p-4 sm:p-6">
                  {/* Step Header */}
                  <div className="flex items-start sm:items-center justify-between mb-4 gap-3">
                    <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      {/* Fixed size icon container to prevent stretching */}
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                        isCompleted ? 'bg-success-green' :
                        isActive ? 'bg-primary-purple animate-pulse' :
                        'bg-neutral-stroke'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : isActive ? (
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        ) : (
                          <span className="text-body-text font-inter font-bold text-base sm:text-lg">{index + 1}</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className={`font-inter font-bold text-base sm:text-lg transition-colors duration-300 break-words ${
                          isActive || isCompleted ? 'text-primary-text' : 'text-body-text'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`font-inter text-sm transition-colors duration-300 break-words leading-relaxed ${
                          isActive || isCompleted ? 'text-body-text' : 'text-secondary-text'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Fixed size container for spinner/arrow to prevent layout shifts */}
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {/* Show spinner only when active and results haven't been shown yet */}
                      {isActive && !shouldShowResults && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-primary-purple border-t-transparent rounded-full animate-spin"
                        />
                      )}

                      {/* Show arrow when completed */}
                      {isCompleted && (
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-success-green" />
                      )}
                    </div>
                  </div>

                  {/* Outcomes - Show when results should be displayed (after execution completes) */}
                  <AnimatePresence>
                    {shouldShowResults && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-neutral-stroke">
                          {/* Business Impact */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-canvas-navy rounded-lg p-3 sm:p-4 mb-4"
                          >
                            <div className="flex items-center space-x-2 mb-2">
                              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-cta flex-shrink-0" />
                              <span className="text-amber-cta font-inter font-bold text-sm">Business Impact</span>
                            </div>
                            <p className="text-primary-text font-inter text-sm leading-relaxed break-words">
                              {step.businessImpact}
                            </p>
                          </motion.div>

                          {/* Metrics Grid - Responsive layout */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {step.outcomes.map((outcome, outcomeIndex) => (
                              <motion.div
                                key={outcomeIndex}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.2 + outcomeIndex * 0.1 }}
                                className="bg-elevated-card rounded-lg p-3 text-center border border-neutral-stroke"
                              >
                                <div className="text-primary-purple font-inter font-bold text-base sm:text-lg mb-1 break-words">
                                  {outcome.value}
                                </div>
                                <div className="text-body-text font-inter text-xs leading-tight break-words">
                                  {outcome.metric}
                                </div>
                                <div className="text-secondary-text font-inter text-xs break-words">
                                  {outcome.unit}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final Results Summary */}
        {currentStep >= demoSteps.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-success-green to-cyan-400 rounded-xl text-center"
          >
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-4" />
            <h4 className="text-white font-inter font-bold text-lg sm:text-xl mb-2">
              Transformation Complete!
            </h4>
            <p className="text-white font-inter text-sm sm:text-base mb-4 break-words">
              Your business is now AI-powered with measurable results
            </p>
            
            {/* Final ROI Summary - Responsive grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-1" />
                <div className="text-white font-inter font-bold text-base sm:text-lg break-words">$285K</div>
                <div className="text-white font-inter text-xs break-words">Annual Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-1" />
                <div className="text-white font-inter font-bold text-base sm:text-lg break-words">180hrs</div>
                <div className="text-white font-inter text-xs break-words">Weekly Savings</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-1" />
                <div className="text-white font-inter font-bold text-base sm:text-lg break-words">285%</div>
                <div className="text-white font-inter text-xs break-words">ROI Achieved</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto mb-1" />
                <div className="text-white font-inter font-bold text-base sm:text-lg break-words">90 Days</div>
                <div className="text-white font-inter text-xs break-words">To Full ROI</div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default InteractiveDemo;