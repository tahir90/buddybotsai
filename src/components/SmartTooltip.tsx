import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, TrendingUp, Zap } from 'lucide-react';

interface SmartTooltipProps {
  children: React.ReactNode;
  content: string;
  aiInsight?: string;
  type?: 'info' | 'insight' | 'tip';
  delay?: number;
}

const SmartTooltip: React.FC<SmartTooltipProps> = ({ 
  children, 
  content, 
  aiInsight,
  type = 'info',
  delay = 500
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout>();
  const elementRef = useRef<HTMLDivElement>(null);

  const icons = {
    info: TrendingUp,
    insight: Lightbulb,
    tip: Zap
  };

  const colors = {
    info: 'border-primary-purple bg-primary-purple',
    insight: 'border-amber-500 bg-amber-500',
    tip: 'border-cyan-400 bg-cyan-400'
  };

  const IconComponent = icons[type];

  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setPosition({
          x: rect.left + rect.width / 2,
          y: rect.top - 10
        });
      }
    };

    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={elementRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: position.x,
              top: position.y,
              transform: 'translateX(-50%) translateY(-100%)',
              maxWidth: '300px'
            }}
          >
            <div className={`bg-canvas-navy border ${colors[type]} bg-opacity-20 border-opacity-50 rounded-lg p-4 shadow-2xl backdrop-blur-sm`}>
              <div className="flex items-start space-x-3">
                <div className={`w-6 h-6 ${colors[type]} bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <IconComponent className={`w-3 h-3 ${colors[type].split(' ')[0].replace('border-', 'text-')}`} />
                </div>
                <div>
                  <div className="text-primary-text font-inter font-medium text-sm mb-1">
                    {content}
                  </div>
                  {aiInsight && (
                    <div className="text-body-text font-inter text-xs">
                      💡 {aiInsight}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Arrow */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-canvas-navy" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SmartTooltip;