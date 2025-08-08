import React, { useEffect } from 'react';
import { Play, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';
import Header from './Header';

interface VSLPageProps {
  onCTAClick: () => void;
}

export default function VSLPage({ onCTAClick }: VSLPageProps) {
  useEffect(() => {
    // Load the calendar embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header onBookInspection={onCTAClick} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A1F44] mb-6 leading-tight">
              Get <span className="text-[#00FF00] font-extrabold bg-gradient-to-r from-[#00FF00] to-[#32CD32] bg-clip-text text-transparent">100+ Exclusive Mold Leads</span> — Book Your Free Demo to See How
            </h1>
          </div>

          {/* Video Section */}
          <div className="relative max-w-xs sm:max-w-sm mx-auto mb-8">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-auto"
                style={{ aspectRatio: '9/16' }}
                controls
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='640' viewBox='0 0 360 640'%3E%3Crect width='360' height='640' fill='%23000000'/%3E%3Ccircle cx='180' cy='320' r='40' fill='%23C7EA4D'/%3E%3Cpolygon points='170,300 170,340 200,320' fill='%230A1F44'/%3E%3C/svg%3E"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center" style={{ aspectRatio: '9/16' }}>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C7EA4D] rounded-full flex items-center justify-center mb-4 mx-auto hover:bg-[#B8DB3E] transition-colors cursor-pointer">
                      <Play className="w-4 h-4 sm:w-6 sm:h-6 text-[#0A1F44] ml-1" />
                    </div>
                    <p className="text-white text-xs sm:text-sm">Your browser does not support the video tag.</p>
                  </div>
                </div>
              </video>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-16">
            <button
              onClick={onCTAClick}
              className="inline-flex items-center px-6 py-3 bg-[#C7EA4D] text-[#0A1F44] font-bold text-lg rounded-xl hover:bg-[#B8DB3E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Free Demo Call Now
            </button>

          </div>
        </div>
      </section>







      {/* Calendar Booking Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1F44] mb-4">
              📅 Book Your Free Demo Now
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule your personalized consultation and discover how we can generate 100+ exclusive mold leads for your business.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#0A1F44] to-[#1565C0] p-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                🚀 Free Strategy Session
              </h3>
              <p className="text-gray-200 text-sm">
                No commitment • 30-minute consultation • Immediate value
              </p>
            </div>

            <div className="p-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/taZKX2Va4UV95RVhYHBB"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  borderRadius: '8px'
                }}
                scrolling="no"
                id="taZKX2Va4UV95RVhYHBB_1754543731869"
                title="Book Your Free Demo"
              />
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  No sales pressure
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Instant calendar access
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Expert consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
