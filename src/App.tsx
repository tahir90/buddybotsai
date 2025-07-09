import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Pain from './components/Pain';
import TransformationJourney from './components/TransformationJourney';
import About from './components/About';
// import SolutionBridge from './components/SolutionBridge';
// import Solution from './components/Solution';
// import USP from './components/USP';
// import CaseStudy from './components/CaseStudy';
// import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Urgency from './components/Urgency';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ROICalculator from './pages/ROICalculator';
import StrategyCall from './pages/StrategyCall';
import ContactForm from './pages/ContactForm';

type PageType = 'home' | 'roi-calculator' | 'strategy-call' | 'contact';

const App = ({ onNavigate }: {
  onNavigate: (page: 'home' | 'roi-calculator' | 'strategy-call' | 'contact', data?: any) => void;
}) => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [formData, setFormData] = useState<any>(null);

  const navigateToPage = (page: PageType, data?: any) => {
    // Set form data first if provided
    if (data) setFormData(data);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Listen for custom navigation events
  React.useEffect(() => {
    const handleNavigateToStrategyCall = () => {
      navigateToPage('strategy-call');
    };

    window.addEventListener('navigate-to-strategy-call', handleNavigateToStrategyCall);
    
    return () => {
      window.removeEventListener('navigate-to-strategy-call', handleNavigateToStrategyCall);
    };
  }, []);

  // Listen for hero form data
  React.useEffect(() => {
    const handleHeroFormData = (event: any) => {
      setFormData(event.detail);
    };

    window.addEventListener('hero-form-data', handleHeroFormData);
    
    return () => {
      window.removeEventListener('hero-form-data', handleHeroFormData);
    };
  }, []);

  const navigateHome = () => {
    setCurrentPage('home');
    setFormData(null);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'roi-calculator') {
    return <ROICalculator onBack={navigateHome} />;
  }

  if (currentPage === 'strategy-call') {
    return <StrategyCall onBack={navigateHome} prefillData={formData} />;
  }

  if (currentPage === 'contact') {
    return <ContactForm onBack={navigateHome} />;
  }

  return (
    <div className="font-inter bg-canvas-navy">
      <Header onNavigate={navigateToPage} />
      <Hero onNavigate={navigateToPage} />
      <Services />
      <Pain />
      <TransformationJourney />
      <About />
      {/* <SolutionBridge /> */}
      {/* <Solution /> */}
      {/* <USP /> */}
      {/* <CaseStudy /> */}
      {/* <Roadmap /> */}
      <FAQ />
      <Guarantee />
      <Urgency />
      <Testimonials />
      <FinalCTA onNavigate={navigateToPage} />
      <Footer />
    </div>
  );
};

export default App;