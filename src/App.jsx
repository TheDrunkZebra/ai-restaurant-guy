import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Landing Page Sections
import HeroSection from './sections/HeroSection';
import TestimonialSection from './sections/TestimonialSection';
import WeekOneSection from './sections/WeekOneSection';
import CaseStudyMetrics from './sections/CaseStudyMetrics';
import HowSystemsWork from './sections/HowSystemsWork';
import PricingSection from './sections/PricingSection';
import ROISnapshot from './sections/ROISnapshot';
import LightbulbCaseStudy from './sections/LightbulbCaseStudy';
import AboutSection from './sections/AboutSection';
import HowItWorks from './sections/HowItWorks';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';
import CheckoutWizard from './components/CheckoutWizard';

// Blog
import BlogIndex from './blog/BlogIndex';
import BlogPost from './blog/BlogPost';

// Pages
import ThankYou from './pages/ThankYou';

/**
 * Landing Page Component
 */
function LandingPage({ onOpenModal }) {
  return (
    <>
      <Navbar onOpenModal={onOpenModal} />
      <HeroSection onOpenModal={onOpenModal} />
      <TestimonialSection />
      <WeekOneSection />
      <CaseStudyMetrics />
      <HowSystemsWork onOpenModal={onOpenModal} />
      <PricingSection onOpenModal={onOpenModal} />
      <ROISnapshot onOpenModal={onOpenModal} />
      <LightbulbCaseStudy />
      <AboutSection onOpenModal={onOpenModal} />
      <HowItWorks />
      <FAQ />
      <FinalCTA onOpenModal={onOpenModal} />
      <Footer />
    </>
  );
}

/**
 * Blog Layout Wrapper (includes footer)
 */
function BlogLayout({ children, onOpenModal }) {
  return (
    <>
      {/* Simple header for blog pages */}
      <nav className="fixed w-full z-50 bg-[#0B0F14]/80 backdrop-blur-md py-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-[#F8FAFC]">
              The AI Restaurant Guy
            </a>
            <button
              onClick={onOpenModal}
              data-cta="discovery-audit"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-[#0B0F14] bg-[#4ADE80] rounded-lg hover:bg-[#3FCF70] transition-all"
            >
              Book Discovery Audit
            </button>
          </div>
        </div>
      </nav>
      {children}
      <Footer />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0B0F14] text-[#F8FAFC] selection:bg-primary selection:text-background">
          <Routes>
            {/* Landing Page */}
            <Route
              path="/"
              element={<LandingPage onOpenModal={openModal} />}
            />

            {/* Blog Index */}
            <Route
              path="/blog"
              element={
                <BlogLayout onOpenModal={openModal}>
                  <BlogIndex onOpenModal={openModal} />
                </BlogLayout>
              }
            />

            {/* Blog Post */}
            <Route
              path="/blog/:slug"
              element={
                <BlogLayout onOpenModal={openModal}>
                  <BlogPost onOpenModal={openModal} />
                </BlogLayout>
              }
            />

            {/* Thank You (post-checkout) */}
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>

          {/* Checkout Wizard Modal (available on all pages) */}
          {isModalOpen && <CheckoutWizard onClose={closeModal} />}
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
