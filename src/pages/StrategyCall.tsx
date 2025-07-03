import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowLeft, Calendar, Clock, CheckCircle, User } from 'lucide-react';

interface StrategyCallProps {
  onBack: () => void;
}

const StrategyCall: React.FC<StrategyCallProps> = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    challenges: ''
  });

  const [isBooked, setIsBooked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'strategy_call_booked',
        event_category: 'conversion',
        event_label: 'Strategy-Call-Booking'
      });
    }
    
    setIsBooked(true);
  };

  // Generate next 14 days for booking
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates;
  };

  const availableTimes = [
    '9:00 AM EST',
    '10:00 AM EST',
    '11:00 AM EST',
    '1:00 PM EST',
    '2:00 PM EST',
    '3:00 PM EST',
    '4:00 PM EST'
  ];

  const roles = [
    'CEO/President',
    'COO',
    'CTO',
    'VP Operations',
    'Director',
    'Manager',
    'Other'
  ];

  if (isBooked) {
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
              Strategy Call Booked!
            </h1>
            <p className="text-body-text font-inter text-lg mb-6">
              Thank you for booking your strategy call. We'll send you a calendar invitation and preparation materials within the next hour.
            </p>
            <div className="bg-canvas-navy rounded-lg p-6 mb-6">
              <h3 className="text-amber-cta font-inter font-bold text-lg mb-4">What to Expect:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                  <span className="text-body-text font-inter">45-minute deep-dive into your operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                  <span className="text-body-text font-inter">Custom automation opportunities assessment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                  <span className="text-body-text font-inter">Preliminary ROI projections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success-green mt-0.5 flex-shrink-0" />
                  <span className="text-body-text font-inter">Next steps roadmap (if it's a good fit)</span>
                </li>
              </ul>
            </div>
            <button
              onClick={onBack}
              className="bg-amber-cta text-canvas-navy px-8 py-3 rounded-full font-inter font-bold hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
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
              <Phone className="w-8 h-8 text-amber-cta" />
              <h1 className="text-primary-text font-inter font-bold text-3xl md:text-4xl">
                Book Your Strategy Call
              </h1>
            </div>
            <p className="text-body-text font-inter text-lg">
              45-minute deep-dive to identify your biggest automation opportunities
            </p>
          </div>

          <form onSubmit={handleBooking} className="grid lg:grid-cols-2 gap-12">
            {/* Personal Information */}
            <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke">
              <h3 className="text-primary-text font-inter font-bold text-xl mb-6">
                Your Information
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-body-text font-inter font-medium mb-2">
                      First Name
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
                      Last Name
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
                    Business Email
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
                    Phone Number
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

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Company Name
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
                    Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors"
                  >
                    <option value="">Select Your Role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-body-text font-inter font-medium mb-2">
                    Biggest Operational Challenge
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Briefly describe your main operational pain point..."
                    className="w-full px-4 py-3 bg-canvas-navy border border-neutral-stroke rounded-lg text-primary-text placeholder-body-text font-inter focus:border-cyan-interactive focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-elevated-card rounded-xl p-8 border border-neutral-stroke">
              <h3 className="text-primary-text font-inter font-bold text-xl mb-6">
                Select Date & Time
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-body-text font-inter font-medium mb-3">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Available Dates
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                    {getAvailableDates().map((date) => (
                      <button
                        key={date.value}
                        type="button"
                        onClick={() => setSelectedDate(date.value)}
                        className={`text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                          selectedDate === date.value
                            ? 'bg-amber-cta text-canvas-navy border-amber-cta'
                            : 'bg-canvas-navy text-primary-text border-neutral-stroke hover:border-cyan-interactive'
                        }`}
                      >
                        {date.label}
                      </button>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div>
                    <label className="block text-body-text font-inter font-medium mb-3">
                      <Clock className="w-5 h-5 inline mr-2" />
                      Available Times
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-4 py-3 rounded-lg border transition-all duration-200 ${
                            selectedTime === time
                              ? 'bg-amber-cta text-canvas-navy border-amber-cta'
                              : 'bg-canvas-navy text-primary-text border-neutral-stroke hover:border-cyan-interactive'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="bg-canvas-navy rounded-lg p-4 border border-success-green">
                    <h4 className="text-success-green font-inter font-bold mb-2">Selected Appointment:</h4>
                    <p className="text-primary-text font-inter">
                      {getAvailableDates().find(d => d.value === selectedDate)?.label} at {selectedTime}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full bg-amber-cta text-canvas-navy px-6 py-4 rounded-full font-inter font-bold text-lg hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book My Strategy Call
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyCall;