import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Show sticky button when user scrolls past hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowStickyButton(scrollY > heroHeight - 100);
      }
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
        event_label: 'Header-Cal-Booking-Click'
      });
    }
    
    onNavigate('strategy-call');
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Process', id: 'transformation-journey' },
    { label: 'Testimonials', id: 'social' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <motion.header
      role="banner"
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
          aria-label="BuddyBots.ai - AI Transformation Agency Home"
        >
          <Bot className="w-8 h-8 text-primary-purple" />
          <span className="text-primary-text font-inter font-bold text-xl">
            BuddyBots.ai
          </span>
        </button>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-body-text hover:text-primary-magenta font-inter font-medium transition-colors duration-200"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={handleCTAClick}
            className={`bg-primary-purple text-primary-text px-6 py-2 rounded-full font-inter font-bold text-sm hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-500 ${
              showStickyButton ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
            aria-label="Book strategy call for AI transformation consultation"
          >
            Book Free Strategy Call
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary-text"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isMobileMenuOpen}
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
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-body-text hover:text-primary-magenta font-inter font-medium transition-colors duration-200"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA - Always present but with smooth opacity transition */}
            <button
              onClick={handleCTAClick}
              className={`w-full bg-primary-purple text-primary-text px-6 py-3 rounded-full font-inter font-bold text-sm hover:bg-primary-magenta hover:text-primary-text border-2 border-transparent hover:border-primary-magenta transition-all duration-500 ${
                showStickyButton ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              aria-label="Book strategy call for AI transformation consultation"
            >
              Book Free Strategy Call
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;