import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    // Google Tag Manager event tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'cta_click',
        event_category: 'engagement',
        event_label: 'Header-ROI-Forecast-Click'
      });
    }
    
    onNavigate('contact');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Solutions', id: 'usp' },
    { label: 'Case Study', id: 'case' },
    { label: 'Process', id: 'roadmap' },
    { label: 'Testimonials', id: 'social' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-canvas-navy shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Bot className="w-8 h-8 text-amber-cta" />
          <span className="text-primary-text font-inter font-bold text-xl">
            BuddyBots.ai
          </span>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-body-text hover:text-cyan-interactive font-inter font-medium transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <button
          onClick={handleCTAClick}
          className="hidden md:block bg-amber-cta text-canvas-navy px-6 py-2 rounded-full font-inter font-bold text-sm hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
        >
          Get My Free ROI Forecast
        </button>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary-text"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-canvas-navy border-t border-neutral-stroke"
        >
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-body-text hover:text-cyan-interactive font-inter font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleCTAClick}
              className="w-full bg-amber-cta text-canvas-navy px-6 py-3 rounded-full font-inter font-bold text-sm hover:bg-canvas-navy hover:text-amber-cta border-2 border-transparent hover:border-amber-cta transition-all duration-200"
            >
              Get My Free ROI Forecast
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;