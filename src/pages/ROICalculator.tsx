import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowLeft, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

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
    const employees = parseInt(formData.employees) || 0;
    const hourlyRate = parseFloat(formData.avgHourlyRate) || 0;
    const manualHours = parseFloat(formData.manualHoursPerWeek) || 0;
    const errorRate = parseFloat(formData.errorRate) || 0;
    const revenue = parseFloat(formData.annualRevenue.replace(/[^0-9.]/g, '')) || 0;

    // Calculate time savings (assuming 30% automation efficiency)
    const automatedHours = manualHours * 0.3;
    const weeklySavings = automatedHours * hourlyRate;
    const annualSavings = weeklySavings * 52;

    // Calculate error cost savings (assuming errors cost 2% of revenue)
    const currentErrorCost = revenue * (errorRate / 100) * 0.02;
    const errorCostSavings = currentErrorCost * 0.85; // 85% error reduction

    const totalAnnualSavings = annualSavings + errorCostSavings;
    const estimatedInvestment = 50000; // Estimated AI implementation cost
    const roi = ((totalAnnualSavings - estimatedInvestment) / estimatedInvestment) * 100;

    setResults({
      weeklySavings,
      annualSavings,
      errorCostSavings,
      totalAnnualSavings,
      roi
    });

    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'roi_calculation',
        event_category: 'engagement',
        event_label: 'ROI-Calculator-Complete',
        roi_value: totalAnnualSavings
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

  return (
    <div className="min-h-screen bg-canvas-navy pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-cyan-interactive hover:text-primary-text transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-inter">Back to Home</span>
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Calculator className="w-8 h-8 text-amber-cta" />
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                  >
                    <option value="">Select Revenue Range</option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={calculateROI}
                  className="w-full bg-amber-cta text-canvas-navy px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-canvas-navy rounded-lg p-4 text-center">
                      <Clock className="w-6 h-6 text-amber-cta mx-auto mb-2" />
                      <div className="text-primary-text font-inter font-bold text-2xl">
                        ${results.weeklySavings.toLocaleString()}
                      </div>
                      <div className="text-body-text font-inter text-sm">Weekly Savings</div>
                    </div>

                    <div className="bg-canvas-navy rounded-lg p-4 text-center">
                      <DollarSign className="w-6 h-6 text-success-green mx-auto mb-2" />
                      <div className="text-primary-text font-inter font-bold text-2xl">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-body-text font-inter text-sm">Annual Time Savings</div>
                    </div>
                  </div>

                  <div className="bg-canvas-navy rounded-lg p-6">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-cyan-interactive mx-auto mb-3" />
                      <div className="text-primary-text font-inter font-bold text-3xl mb-2">
                        ${results.totalAnnualSavings.toLocaleString()}
                      </div>
                      <div className="text-body-text font-inter text-lg mb-4">Total Annual Savings</div>
                      <div className="text-amber-cta font-inter font-bold text-xl">
                        {results.roi.toFixed(0)}% ROI
                      </div>
                    </div>
                  </div>

                  <div className="bg-ai-glow-gradient bg-opacity-10 rounded-lg p-4 border border-amber-cta">
                    <p className="text-primary-text font-inter text-center">
                      <strong>Error Cost Savings:</strong> ${results.errorCostSavings.toLocaleString()} annually
                    </p>
                  </div>

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
                      // In a real implementation, this would open a contact form
                      alert('Contact form would open here. This demo shows the tracking and interaction.');
                    }}
                    className="w-full bg-amber-cta text-canvas-navy px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
                  >
                    Get My Custom ROI Report
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-body-text mx-auto mb-4 opacity-50" />
                  <p className="text-body-text font-inter text-lg">
                    Fill out the form to see your potential savings
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