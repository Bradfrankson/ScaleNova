import React from 'react';

interface ScaleNovaLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function ScaleNovaLogo({ className = "", width = 200, height = 80 }: ScaleNovaLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle/Arrow Logo */}
      <g transform="translate(200, 20)">
        {/* Left side of triangle - dark blue to teal gradient */}
        <path
          d="M -60 60 L -20 0 L -20 60 Z"
          fill="url(#leftGradient)"
        />
        
        {/* Right side of triangle - light green gradient */}
        <path
          d="M 20 0 L 60 60 L 20 60 Z"
          fill="url(#rightGradient)"
        />
        
        {/* Down arrow in center */}
        <path
          d="M -8 25 L 8 25 L 8 20 L 15 30 L 0 45 L -15 30 L -8 20 Z"
          fill="#0A1F44"
        />
      </g>
      
      {/* SCALENOVA Text */}
      <g transform="translate(50, 100)">
        {/* SCALE - in green */}
        <text
          x="0"
          y="0"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          fill="#8BC34A"
        >
          SCALE
        </text>
        
        {/* NOVA - in dark blue */}
        <text
          x="120"
          y="0"
          fontSize="32"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          fill="#0A1F44"
        >
          NOVA
        </text>
      </g>
      
      {/* MARKETING AGENCY Text */}
      <g transform="translate(50, 130)">
        <text
          x="0"
          y="0"
          fontSize="14"
          fontWeight="600"
          fontFamily="Arial, sans-serif"
          fill="#0A1F44"
          letterSpacing="2px"
        >
          MARKETING AGENCY
        </text>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1F44" />
          <stop offset="50%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#00695C" />
        </linearGradient>
        
        <linearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" />
          <stop offset="50%" stopColor="#9CCC65" />
          <stop offset="100%" stopColor="#AED581" />
        </linearGradient>
      </defs>
    </svg>
  );
}
