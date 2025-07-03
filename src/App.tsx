import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pain from './components/Pain';
import SolutionBridge from './components/SolutionBridge';
import Solution from './components/Solution';
import USP from './components/USP';
import CaseStudy from './components/CaseStudy';
import Roadmap from './components/Roadmap';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Urgency from './components/Urgency';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Import pages
import ROICalculator from './pages/ROICalculator';
import StrategyCall from './pages/StrategyCall';
import ContactForm from './pages/ContactForm';

type PageType = 'home' | 'roi-calculator' | 'strategy-call' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateToPage = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'roi-calculator') {
    return <ROICalculator onBack={navigateHome} />;
  }

  if (currentPage === 'strategy-call') {
    return <StrategyCall onBack={navigateHome} />;
  }

  if (currentPage === 'contact') {
    return <ContactForm onBack={navigateHome} />;
  }

  return (
    <div className="font-inter bg-canvas-navy">
      <Header onNavigate={navigateToPage} />
      <Hero onNavigate={navigateToPage} />
      <Pain />
      <SolutionBridge />
      <Solution />
      <USP />
      <CaseStudy />
      <Roadmap />
      <FAQ />
      <Guarantee />
      <Urgency />
      <Testimonials />
      <FinalCTA onNavigate={navigateToPage} />
      <Footer />
    </div>
  );
}

export default App;