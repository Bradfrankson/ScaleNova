import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import VSLPage from './components/VSLPage';
import ThankYouPage from './components/ThankYouPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

function VSLPageWrapper() {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Open calendar booking in new tab
    window.open('https://api.leadconnectorhq.com/widget/booking/taZKX2Va4UV95RVhYHBB', '_blank');

    // Navigate to thank you page with smooth transition
    navigate('/thank-you');
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <VSLPage onCTAClick={handleCTAClick} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VSLPageWrapper />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;