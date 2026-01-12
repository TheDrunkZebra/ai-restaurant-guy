import { useState } from 'react';
import HeroSection from './sections/HeroSection';
import SocialProofSection from './sections/SocialProofSection';
import TestimonialSection from './sections/TestimonialSection';
import WeekOneSection from './sections/WeekOneSection';
import CaseStudyMetrics from './sections/CaseStudyMetrics';
import ShopTheSystems from './sections/ShopTheSystems';
import PricingSection from './sections/PricingSection';
import ROISnapshot from './sections/ROISnapshot';
import LightbulbCaseStudy from './sections/LightbulbCaseStudy';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import AIBuildPlanModal from './components/AIBuildPlanModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] selection:bg-primary selection:text-background">
      <Navbar onOpenModal={openModal} />
      <HeroSection onOpenModal={openModal} />
      <SocialProofSection />
      <TestimonialSection />
      <WeekOneSection />
      <CaseStudyMetrics />
      <ShopTheSystems />
      <PricingSection onOpenModal={openModal} />
      <ROISnapshot onOpenModal={openModal} />
      <LightbulbCaseStudy />
      <HowItWorks />
      <FAQ />
      <FinalCTA onOpenModal={openModal} />
      <Footer />
      <AIBuildPlanModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
