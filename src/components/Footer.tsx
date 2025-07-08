import React from 'react';
import { Bot } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elevated-card py-16 border-t border-neutral-stroke relative overflow-hidden">
      {/* Large outlined text background */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none pb-8">
        <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-inter font-black text-transparent select-none opacity-40"
             style={{
               WebkitTextStroke: '3px rgba(107, 70, 193, 0.6)',
               textStroke: '3px rgba(107, 70, 193, 0.6)',
               lineHeight: '0.8'
             }}>
          BuddyBots
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-primary-purple" />
              <span className="text-primary-text font-inter font-bold text-xl">
                BuddyBots.ai
              </span>
            </div>
            
            <p className="text-body-text font-inter text-lg mb-8 max-w-2xl mx-auto">
              Transforming operations with AI-powered automation that delivers measurable ROI in weeks, not months.
            </p>
          </div>
          
          {/* Chatbase-style text */}
          <div className="mb-8">
            <p className="text-body-text font-inter text-base leading-relaxed max-w-4xl mx-auto">
              We help businesses automate their operations with AI solutions that actually work. 
              Our proven 6-week transformation sprint delivers measurable ROI through strategic AI implementation. 
              Join 150+ companies who've already transformed their workflows and cut costs by 30% or more.
            </p>
          </div>
          
          {/* Contact info */}
          <div className="mb-8">
            <p className="text-body-text font-inter text-sm">
              Questions? Reach out at{' '}
              <a href="mailto:hello@buddybots.ai" className="text-primary-purple hover:text-primary-magenta transition-colors">
                hello@buddybots.ai
              </a>
            </p>
          </div>
          
          {/* Copyright */}
          <p className="text-body-text font-inter text-sm">
            © 2025 BuddyBots.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;