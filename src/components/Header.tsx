import React from 'react';
import { Phone } from 'lucide-react';
import ScaleNovaLogo from './ScaleNovaLogo';

interface HeaderProps {
  onBookInspection?: () => void;
}

export default function Header({ onBookInspection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-xl z-[60] border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="bg-white py-2 px-4 flex items-center justify-center">
              <img
                src="/new logo.png"
                alt="ScaleNova"
                className="h-[60px] w-auto object-contain mx-auto"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={onBookInspection}
            className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-[#C7EA4D] text-[#0A1F44] font-bold text-sm sm:text-base lg:text-lg rounded-xl hover:bg-[#B8DB3E] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            <span className="hidden sm:inline">Book Demo</span>
            <span className="sm:hidden">Demo</span>
          </button>
        </div>
      </div>
    </header>
  );
}