import { useEffect } from 'react';
import { CheckCircle, Play, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Thank You - Scale Nova Demo Booked';

    // Track Facebook Pixel events for thank you page
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
      (window as any).fbq('track', 'CompleteRegistration', {
        content_name: 'demo_booking_confirmed',
        status: 'confirmed'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="text-center pt-12 pb-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          You're Booked! 🎉
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Your call is scheduled. Follow these 3 steps to get the most out of your session.
        </p>
      </div>

      {/* Step 1: Main Video */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Step 1: Watch This Video Before Your Call
          </h2>
          <p className="text-gray-300 text-lg">
            What we will cover in this video:
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
          <video
            className="w-full rounded-xl"
            controls
            preload="metadata"
            poster="/Thank You.mp4#t=0.1"
          >
            <source src="/Thank You.mp4" type="video/mp4" />
            <div className="w-full h-64 bg-gray-700 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-gray-300">Your browser does not support the video tag.</p>
              </div>
            </div>
          </video>
        </div>
      </div>

      {/* Step 2: Calendar Confirmation */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Step 2: Confirm Your Call
          </h2>
          <p className="text-gray-300 text-lg">
            You'll receive a calendar invitation email. Click YES to confirm your attendance.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Calendar Invitation</p>
                <p className="text-gray-500 text-xs">from ScaleNova Team</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-gray-800 font-semibold">ScaleNova Demo Call</span>
              </div>
              <p className="text-gray-600 text-sm mb-1">📅 Today, 2:00 PM - 3:00 PM</p>
              <p className="text-gray-600 text-sm">📍 Video Call (Zoom/Teams)</p>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold">
                Yes
              </button>
              <button className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                Maybe
              </button>
              <button className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
                No
              </button>
            </div>
            
            <p className="text-center text-blue-500 text-sm mt-3">
              → Click "Yes" to confirm your call
            </p>
          </div>
        </div>
      </div>

      {/* Step 3: Additional Videos */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Step 3: Watch These Videos Before Your Call
          </h2>
          <p className="text-gray-300 text-lg">
            These videos will help you get the most out of your call and address common questions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">
              Can You Handle the Volume – or Want to Start Slow?
            </h3>
            <video
              className="w-full rounded-xl mb-4"
              controls
              preload="metadata"
              poster="/Volume.mp4#t=0.1"
            >
              <source src="/Volume.mp4" type="video/mp4" />
              <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-yellow-400" />
              </div>
            </video>

          </div>

          {/* Video 2 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">
              How We Generate Your Leads?
            </h3>
            <video
              className="w-full rounded-xl mb-4"
              controls
              preload="metadata"
              poster="/Generate leads how.mp4#t=0.1"
            >
              <source src="/Generate leads how.mp4" type="video/mp4" />
              <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-yellow-400" />
              </div>
            </video>

          </div>

          {/* Video 3 */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-yellow-400 font-bold mb-4 text-lg">
              Why Our Leads Are 100% Exclusive to You?
            </h3>
            <video
              className="w-full rounded-xl mb-4"
              controls
              preload="metadata"
              poster="/Exclusive.mp4#t=0.1"
            >
              <source src="/Exclusive.mp4" type="video/mp4" />
              <div className="w-full h-40 bg-gray-700 rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-yellow-400" />
              </div>
            </video>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 text-center text-black">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6">
            Your call is just around the corner. Make sure you've completed all 3 steps above to get maximum value.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-yellow-400 px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
