// src/App.js
import React, { useState } from 'react';
import { TEAM, FAQS } from './constants/data';
import { AnimatePresence } from 'framer-motion';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProblemsAndSolutions from './components/ProblemsAndSolutions';
import ComingSoon from './components/ComingSoon';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

export default function App() {
  const [route, setRoute] = useState('home');
  const [showJoinModal, setShowJoinModal] = useState(false);

  const handleSetRoute = (newRoute) => {
    setRoute(newRoute);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderRoute = () => {
    switch (route) {
      case 'home':
        return (
          <>
            <Hero onJoin={() => setShowJoinModal(true)} />
            <Features />
            <HowItWorks />  
            <ProblemsAndSolutions />
            <ComingSoon onJoin={() => setShowJoinModal(true)} />
          </>
        );
      case 'about':
        return <About team={TEAM} />;
      case 'mission':
        return <MissionVision />;
      case 'faq':
        return <Faq faqs={FAQS} />;
      case 'contact':
        return <Contact contacts={TEAM} />;
      case 'privacy-policy':
        return <PrivacyPolicy />;
      case 'terms-of-service':
        return <TermsOfService />;
      default:
        return <Hero onJoin={() => setShowJoinModal(true)} />;
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#00111a] text-white">
      <Header route={route} setRoute={handleSetRoute} />

      <main>
        {renderRoute()}
      </main>

      <Footer setRoute={handleSetRoute} />

      <AnimatePresence>
        {showJoinModal && <JoinModal onClose={() => setShowJoinModal(false)} />}
      </AnimatePresence>
    </div>
  );
}