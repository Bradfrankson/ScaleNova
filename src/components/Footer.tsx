import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <p className="text-gray-300 mb-4">
              Professional lead generation agency specializing in high-quality leads.
              We help businesses grow with our proven lead generation strategies.
            </p>
            <div className="text-gray-300">
              <p className="mb-1">📧 demo@scalenova.com</p>
              <p>📞 (555) 123-4567</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#demo" className="hover:text-[#C7EA4D] transition-colors">
                  Book Demo
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C7EA4D] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="hover:text-[#C7EA4D] transition-colors underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-[#C7EA4D] transition-colors underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ScaleNova Marketing Agency. All rights reserved. |
            <Link 
              to="/terms-of-service" 
              className="hover:text-[#C7EA4D] transition-colors underline ml-1"
            >
              Terms of Service
            </Link> | 
            <Link 
              to="/privacy-policy" 
              className="hover:text-[#C7EA4D] transition-colors underline ml-1"
            >
              Privacy Policy
            </Link>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This website uses cookies to enhance user experience. By continuing to use this site, 
            you agree to our use of cookies as described in our Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
