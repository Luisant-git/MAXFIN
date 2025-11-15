import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AppointmentPage from './pages/AppointmentPage';
import FeaturesPage from './pages/FeaturesPage';
import BlogPage from './pages/BlogPage';
import TeamPage from './pages/TeamPage';
import TestimonialPage from './pages/TestimonialPage';
import ContactPage from './pages/ContactPage';
import BranchesPage from './pages/BranchesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import LoginPage from './pages/LoginPage';
import ScrollToTopButton from './ui/ScrollToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-maxfin-text">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ComingSoonPage title="Service Details" />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            {/* Routes from 'More' dropdown */}
            <Route path="/faq" element={<ComingSoonPage title="FAQ" />} />
            <Route path="/pricing" element={<ComingSoonPage title="Pricing" />} />
            <Route path="/retailer-signup" element={<ComingSoonPage title="Retailer Signup" />} />
            <Route path="/distributor-signup" element={<ComingSoonPage title="Distributor Signup" />} />
            <Route path="/api-docs" element={<ComingSoonPage title="API Documentation" />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;