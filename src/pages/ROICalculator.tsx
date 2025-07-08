import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowLeft, TrendingUp, DollarSign, Clock, Users, Zap, CheckCircle, Search, Target, Lightbulb } from 'lucide-react';

interface ROICalculatorProps {
  onBack: () => void;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    employees: '',
    avgHourlyRate: '',
    manualHoursPerWeek: '',
    errorRate: '',
    industry: '',
    annualRevenue: ''
  });

  const [results, setResults] = useState<{
    weeklySavings: number;
    annualSavings: number;
    errorCostSavings: number;
    totalAnnualSavings: number;
    roi: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateROI = () => {
    const numberOfEmployees = parseInt(formData.employees) || 0;
    const hourlyRate = parseFloat(formData.avgHourlyRate) || 0;
    const manualHoursPerWeek = parseFloat(formData.manualHoursPerWeek) || 0;
    let errorRatePercent = parseFloat(formData.errorRate) || 0;
    
    // 1. Clamp Edge Cases
    errorRatePercent = Math.max(0, Math.min(100, errorRatePercent));
    const clampedManualHoursPerWeek = Math.max(0, manualHoursPerWeek);

    // 2. Annual Time Savings
    const annualHoursSaved = clampedManualHoursPerWeek * 52;
    const annualTimeSavings = annualHoursSaved * hourlyRate;

    // 3. Error Cost Savings (errors cost 30 minutes per error)
    const annualErrorHours = (errorRatePercent / 100) * annualHoursSaved * 0.5;
    const errorCostSavings = annualErrorHours * hourlyRate;

    // 4. Total Savings
    const totalSavings = annualTimeSavings + errorCostSavings;

    // 5. ROI Calculation (Average AI transformation cost = $17,250)
    const estimatedProjectCost = 17250;
    const roiPercentage = ((totalSavings - estimatedProjectCost) / estimatedProjectCost) * 100;

    // Weekly savings
    const weeklySavings = annualTimeSavings / 52;

    setResults({
      weeklySavings,
      annualSavings: annualTimeSavings,
      errorCostSavings,
      totalAnnualSavings: totalSavings,
      roi: Math.max(-999, Math.min(999, roiPercentage)) // Cap at ±999%
    });

    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'roi_calculation',
        event_category: 'engagement',
        event_label: 'ROI-Calculator-Complete',
        roi_value: totalSavings
      });
    }
  };

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Financial Services',
    'Retail/E-commerce',
    'Technology',
    'Professional Services',
    'Other'
  ];

  const revenueRanges = [
    '$1M - $5M',
    '$5M - $25M',
    '$25M - $100M',
    '$100M - $500M',
    '$500M+'
  ];

  // Check if ROI is less than 1%
  const isLowROI = results && results.roi < 1;

  return (
    <div className="min-h-screen bg-canvas-navy pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-primary-magenta hover:text-primary-text transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter">Back to Home</span>
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calculator className="w-8 h-8 text-primary-purple" />
              <h1 className="text-primary-text font-inter font-bold text-3xl md:text-4xl">
                ROI Calculator
              </h1>
            </div>
            <p className="text-body-text font-inter text-lg">
              Calculate your potential savings with AI automation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke">
              <h3 className="text-primary-text font-inter font-bold text-xl mb-6">
                Your Current Operations
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    placeholder="e.g., 50"
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    type="number"
                    name="avgHourlyRate"
                    value={formData.avgHourlyRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 35"
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Manual Process Hours per Week
                  </label>
                  <input
                    type="number"
                    name="manualHoursPerWeek"
                    value={formData.manualHoursPerWeek}
                    onChange={handleInputChange}
                    placeholder="e.g., 120"
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Current Error Rate (%)
                  </label>
                  <input
                    type="number"
                    name="errorRate"
                    value={formData.errorRate}
                    onChange={handleInputChange}
                    placeholder="e.g., 5"
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Annual Revenue
                  </label>
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select Revenue Range</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-primary-purple text-primary-text px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200 animate-glow"
                >
                  Calculate My ROI
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke">
              <h3 className="text-primary-text font-inter font-bold text-xl mb-6">
                Your Potential Savings
              </h3>

              {results ? (
                <div className="space-y-6">
                  {isLowROI ? (
                    /* Low ROI Message */
                    <div className="space-y-6">
                      {/* Main Message Card */}
                      <div className="bg-gradient-to-r from-primary-purple to-primary-magenta rounded-xl p-8 text-center">
                        <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
                        <h4 className="text-white font-inter font-bold text-2xl mb-4">
                          Hidden Growth Potential Detected
                        </h4>
                        <p className="text-white font-inter text-lg leading-relaxed">
                          Based on the data provided, the surface-level ROI doesn't appear significant. However, this often indicates untapped opportunities that our experts can uncover.
                        </p>
                      </div>

                      {/* Why This Happens */}
                      <div className="bg-canvas-navy rounded-lg p-6 border border-primary-purple border-opacity-30">
                        <h4 className="text-primary-text font-inter font-bold text-lg mb-4 flex items-center space-x-2">
                          <Search className="w-5 h-5 text-primary-purple" />
                          <span>Why This Happens:</span>
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Many high-impact automation opportunities aren't visible in basic calculations
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Revenue-generating automations often provide 5-10x more value than cost-saving ones
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-purple flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Strategic workflow improvements can unlock exponential growth
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* What We'll Discover */}
                      <div className="bg-ai-glow-gradient bg-opacity-10 rounded-lg p-6 border border-primary-purple">
                        <h4 className="text-primary-text font-inter font-bold text-lg mb-4 flex items-center space-x-2">
                          <Target className="w-5 h-5 text-primary-purple" />
                          <span>What Our Strategy Call Will Uncover:</span>
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Hidden revenue leaks in your current processes
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Customer experience improvements that drive retention
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Strategic automation opportunities for competitive advantage
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Growth acceleration through intelligent workflow design
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="space-y-4">
                        <button
                          onClick={() => {
                            // Google Tag Manager event tracking
                            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                              (window as any).dataLayer.push({
                                event: 'cta_click',
                                event_category: 'conversion',
                                event_label: 'ROI-Calculator-Low-ROI-CTA'
                              });
                            }
                            // Navigate to strategy call page
                            window.dispatchEvent(new CustomEvent('navigate-to-strategy-call'));
                          }}
                          className="w-full bg-primary-purple text-primary-text px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200 animate-glow"
                        >
                          Discover My Hidden Growth Potential
                        </button>
                        
                        <div className="bg-success-green bg-opacity-10 rounded-lg p-4 border border-success-green border-opacity-30">
                          <p className="text-primary-text font-inter text-sm text-center">
                            <strong>💡 Strategy Call Promise:</strong> We'll identify at least 3 specific opportunities—or you'll walk away with clear, actionable insights to elevate your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Normal High ROI Results */
                    <div className="space-y-6">
                      {/* Main Results Cards */}
                      <div className="space-y-4">
                        {/* Weekly Savings */}
                        <div className="bg-gradient-to-r from-primary-purple to-primary-magenta rounded-xl p-6 text-center">
                          <div className="flex items-center justify-center space-x-3 mb-3">
                            <Clock className="w-6 h-6 text-white" />
                            <span className="text-white font-inter font-medium">Weekly Savings</span>
                          </div>
                          <div className="text-white font-inter font-bold text-3xl">
                            ${results.weeklySavings.toLocaleString()}
                          </div>
                        </div>

                        {/* Annual Savings */}
                        <div className="bg-gradient-to-r from-success-green to-cyan-400 rounded-xl p-6 text-center">
                          <div className="flex items-center justify-center space-x-3 mb-3">
                            <DollarSign className="w-6 h-6 text-white" />
                            <span className="text-white font-inter font-medium">Annual Savings</span>
                          </div>
                          <div className="text-white font-inter font-bold text-3xl">
                            ${results.totalAnnualSavings.toLocaleString()}
                          </div>
                        </div>

                        {/* ROI */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 text-center">
                          <div className="flex items-center justify-center space-x-3 mb-3">
                            <TrendingUp className="w-6 h-6 text-white" />
                            <span className="text-white font-inter font-medium">Return on Investment</span>
                          </div>
                          <div className="text-white font-inter font-bold text-3xl">
                            {results.roi.toFixed(0)}% ROI
                          </div>
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="bg-canvas-navy rounded-lg p-6 border border-primary-purple border-opacity-30">
                        <h4 className="text-primary-text font-inter font-bold text-lg mb-4 flex items-center space-x-2">
                          <Zap className="w-5 h-5 text-amber-cta" />
                          <span>What This Means for You:</span>
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Save {Math.round(results.weeklySavings / 40)} hours per week of manual work
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Reduce operational costs by {Math.round((results.totalAnnualSavings / (results.totalAnnualSavings + 100000)) * 100)}%
                            </span>
                          </div>
                          <div className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                            <span className="text-body-text font-inter text-sm">
                              Free up your team for strategic, high-value work
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="space-y-4">
                        <button
                          onClick={() => {
                            // Google Tag Manager event tracking
                            if (typeof window !== 'undefined' && (window as any).dataLayer) {
                              (window as any).dataLayer.push({
                                event: 'cta_click',
                                event_category: 'conversion',
                                event_label: 'ROI-Calculator-CTA'
                              });
                            }
                            // Navigate to strategy call page
                            window.dispatchEvent(new CustomEvent('navigate-to-strategy-call'));
                          }}
                          className="w-full bg-primary-purple text-primary-text px-6 py-3 rounded-lg font-inter font-semibold text-base hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200"
                        >
                          Book Free Strategy Call
                        </button>
                        
                        <div className="bg-ai-glow-gradient bg-opacity-10 rounded-lg p-4 border border-primary-purple">
                          <p className="text-primary-text font-inter text-sm text-center">
                            <strong>💡 Strategy Call Promise:</strong> We'll identify at least 3 specific opportunities—or you'll walk away with clear, actionable insights to elevate your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-primary-purple bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calculator className="w-12 h-12 text-primary-purple" />
                  </div>
                  <h4 className="text-primary-text font-inter font-bold text-lg mb-2">
                    Ready to See Your Savings?
                  </h4>
                  <p className="text-body-text font-inter text-base">
                    Fill out the form to discover your automation potential
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculator;