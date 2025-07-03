import React from 'react';
import { Bot, Shield, Globe, FileCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-elevated-card py-12 border-t border-neutral-stroke">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-amber-cta" />
              <span className="text-primary-text font-inter font-bold text-xl">
                BuddyBots.ai
              </span>
            </div>
            
            <p className="text-body-text font-inter mb-6">
              Transforming operations with AI-powered automation that delivers measurable ROI in weeks, not months.
            </p>
            
            <div className="text-body-text font-inter text-sm">
              <p>123 Innovation Drive, Suite 400</p>
              <p>Tech City, TC 12345</p>
              <p>United States</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-primary-text font-inter font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-body-text hover:text-cyan-interactive font-inter text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-body-text hover:text-cyan-interactive font-inter text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-body-text hover:text-cyan-interactive font-inter text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary-text font-inter font-semibold mb-4">Compliance</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-body-text" />
                <span className="text-body-text font-inter text-sm">ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-body-text" />
                <span className="text-body-text font-inter text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileCheck className="w-4 h-4 text-body-text" />
                <span className="text-body-text font-inter text-sm">SOC 2 Pending</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-stroke mt-8 pt-8 text-center">
          <p className="text-body-text font-inter text-sm">
            © 2025 BuddyBots.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;