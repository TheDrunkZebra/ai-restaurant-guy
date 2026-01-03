import React from 'react';
import HeroSection from './HeroSection';
import ShopTheSystems from './ShopTheSystems';
import ProfitRecoveryForm from './ProfitRecoveryForm';
import RevenueRecoveryAudit from './RevenueRecoveryAudit';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <HeroSection />
      <ShopTheSystems />
      <ProfitRecoveryForm />
      <RevenueRecoveryAudit />
    </div>
  );
}

export default App;

