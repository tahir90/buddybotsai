import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface UrgencyProps {
  onNavigate?: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const Urgency: React.FC<UrgencyProps> = ({ onNavigate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate next 90-day intake date (next quarter)
    const now = new Date();
    const currentQuarter = Math.floor(now.getMonth() / 3);
    const nextQuarter = (currentQuarter + 1) % 4;
    const nextYear = nextQuarter === 0 ? now.getFullYear() + 1 : now.getFullYear();
    const nextIntakeDate = new Date(nextYear, nextQuarter * 3, 1);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextIntakeDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleUrgencyCTA = () => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        event_category: 'urgency',
        event_label: 'Sprint-Slot-Reserve'
      });
    }
    
    if (onNavigate) {
      onNavigate('strategy-call');
    } else {
      // Fallback to dispatching navigation event
      const event = new CustomEvent('navigate-to-strategy-call');
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="urgency" className="bg-ai-glow-gradient py-16" role="region" aria-labelledby="urgency-heading">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="urgency-heading" className="text-canvas-navy font-inter font-bold text-3xl md:text-4xl mb-8">
            Only 4 Strategy Call Slots Left This Quarter
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto mb-8" role="timer" aria-label="Countdown timer for strategy call slots">
            <div className="bg-canvas-navy rounded-lg p-4 border border-neutral-stroke">
              <div className="text-primary-text font-inter font-bold text-2xl md:text-3xl">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-body-text font-inter text-sm">Days</div>
            </div>
            
            <div className="bg-canvas-navy rounded-lg p-4 border border-neutral-stroke">
              <div className="text-primary-text font-inter font-bold text-2xl md:text-3xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-body-text font-inter text-sm">Hours</div>
            </div>
            
            <div className="bg-canvas-navy rounded-lg p-4 border border-neutral-stroke">
              <div className="text-primary-text font-inter font-bold text-2xl md:text-3xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-body-text font-inter text-sm">Minutes</div>
            </div>
            
            <div className="bg-canvas-navy rounded-lg p-4 border border-neutral-stroke">
              <div className="text-primary-text font-inter font-bold text-2xl md:text-3xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-body-text font-inter text-sm">Seconds</div>
            </div>
          </div>
          
          <motion.button
            onClick={handleUrgencyCTA}
           className="bg-canvas-navy text-primary-purple px-8 py-4 rounded-full font-inter font-bold text-lg hover:bg-primary-purple hover:text-canvas-navy border-2 border-canvas-navy hover:border-primary-purple transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Reserve strategy call slot for AI transformation consultation"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            <span>Reserve My Sprint Slot</span>
          </motion.button>
          
          <p className="text-canvas-navy font-inter text-sm mt-4 opacity-80">
            Next intake starts in Q2 2025 • Limited capacity
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;