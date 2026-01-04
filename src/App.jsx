import React from 'react';
import HeroSection from './sections/HeroSection';
import ShopTheSystems from './sections/ShopTheSystems';
import CaseStudy from './sections/CaseStudy';
import RevenueRecoveryAudit from './sections/RevenueRecoveryAudit';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary selection:bg-primary selection:text-background">
      <HeroSection />
      <ShopTheSystems />
      <CaseStudy />
      <RevenueRecoveryAudit />
      <Footer />
    </div>
  );
}

export default App;
