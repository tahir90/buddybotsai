import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle, Send } from 'lucide-react';

interface ContactFormProps {
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    annualRevenue: '',
    employees: '',
    urgency: '',
    challenges: '',
    goals: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'contact_form_submit',
        event_category: 'lead_generation',
        event_label: 'Contact-Form-Submit'
      });
    }
    
    setIsSubmitted(true);
  };

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Financial Services',
    'Retail/E-commerce',
    'Technology',
    'Professional Services',
    'Construction',
    'Transportation & Logistics',
    'Other'
  ];

  const revenueRanges = [
    'Under $1M',
    '$1M - $5M',
    '$5M - $25M',
    '$25M - $100M',
    '$100M - $500M',
    '$500M+'
  ];

  const employeeRanges = [
    '1-10',
    '11-50',
    '51-200',
    '201-500',
    '501-1000',
    '1000+'
  ];

  const urgencyLevels = [
    'Immediate (within 30 days)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Just exploring options'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-canvas-navy pt-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <div className="bg-elevated-card rounded-xl p-12 border border-success-green">
            <CheckCircle className="w-16 h-16 text-success-green mx-auto mb-6" />
            <h1 className="text-primary-text font-inter font-bold text-3xl mb-4">
              Thank You for Your Interest!
            </h1>
            <p className="text-body-text font-inter text-lg mb-6">
              We've received your information and will be in touch within 24 hours with your custom ROI assessment.
            </p>
            <div className="bg-canvas-navy rounded-lg p-6 mb-6">
              <h3 className="text-amber-cta font-inter font-bold text-lg mb-4">What Happens Next:</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-cta text-canvas-navy rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <span className="text-body-text font-inter">We'll review your information and prepare a custom analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-cta text-canvas-navy rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <span className="text-body-text font-inter">Our team will reach out within 24 hours to schedule a brief discovery call</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-cta text-canvas-navy rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <span className="text-body-text font-inter">You'll receive a detailed ROI forecast and implementation roadmap</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onBack}
              className="bg-primary-purple text-primary-text px-8 py-3 rounded-full font-inter font-bold hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200"
            >
              Return to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

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
              <Mail className="w-8 h-8 text-amber-cta" />
              <h1 className="text-primary-text font-inter font-bold text-3xl md:text-4xl">
                Get Your Free ROI Assessment
              </h1>
            </div>
            <p className="text-body-text font-inter text-lg">
              Tell us about your business and we'll create a custom automation roadmap
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-primary-text font-inter font-bold text-lg mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-body-text font-inter font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-body-text font-inter font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h3 className="text-primary-text font-inter font-bold text-lg mb-4">Company Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
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
                      Annual Revenue *
                    </label>
                    <select
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                    >
                      <option value="">Select Revenue Range</option>
                      {revenueRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      Number of Employees *
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                    >
                      <option value="">Select Employee Range</option>
                      {employeeRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-8">
              <h3 className="text-primary-text font-inter font-bold text-lg mb-4">Project Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Implementation Timeline *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-bg border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-primary-purple focus:outline-none transition-colors"
                  >
                    <option value="">Select Timeline</option>
                    {urgencyLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Current Operational Challenges *
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Describe your biggest operational pain points, manual processes, or inefficiencies..."
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Automation Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="What specific outcomes are you hoping to achieve with automation?"
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-stroke">
              <button
                type="submit"
                className="w-full bg-primary-purple text-primary-text px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Get My Free ROI Assessment</span>
              </button>
              
              <p className="text-body-text font-inter text-sm text-center mt-4">
                * Required fields. We'll respond within 24 hours with your custom analysis.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;