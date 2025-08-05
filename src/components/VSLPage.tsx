import React from 'react';
import { Play, CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';
import Header from './Header';

interface VSLPageProps {
  onCTAClick: () => void;
}

export default function VSLPage({ onCTAClick }: VSLPageProps) {
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







      {/* Lead Generation Form Section */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1F44] mb-4">
              We'll Reach Out to You
            </h2>
            <p className="text-gray-600">
              Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/2BgvHCHwuU3YUrlOCYzk"
              style={{width:'100%', height:'770px', border:'none', borderRadius:'3px'}}
              id="inline-2BgvHCHwuU3YUrlOCYzk" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Mold"
              data-height="770"
              data-layout-iframe-id="inline-2BgvHCHwuU3YUrlOCYzk"
              data-form-id="2BgvHCHwuU3YUrlOCYzk"
              title="Mold"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
