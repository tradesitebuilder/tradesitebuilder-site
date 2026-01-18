
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        viewBox="0 0 300 200" 
        className="h-full w-auto" 
        style={{ overflow: 'hidden' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Monitor Frame */}
        <rect x="55" y="75" width="110" height="75" rx="6" fill="#f3f4f6" fillOpacity="0.05" stroke="#f3f4f6" strokeWidth="4"/>
        <path d="M85 150L75 165H145L135 150" fill="#f3f4f6" stroke="#f3f4f6" strokeWidth="2" strokeLinejoin="round"/>
        
        {/* Buildings inside monitor - Accentized */}
        <rect x="65" y="115" width="12" height="30" fill="#2563eb" />
        <rect x="80" y="125" width="12" height="20" fill="#1d4ed8" />
        <rect x="95" y="90" width="18" height="55" fill="#3b82f6" />
        <rect x="115" y="105" width="12" height="40" fill="#2563eb" />
        <rect x="130" y="120" width="12" height="25" fill="#1d4ed8" />

        {/* Windows */}
        <rect x="68" y="118" width="2" height="2" fill="white" fillOpacity="0.3" />
        <rect x="98" y="95" width="3" height="3" fill="white" fillOpacity="0.3" />

        {/* Crane - Accentized */}
        <path d="M125 130V75L155 78V82L132 80V130" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
        <path d="M125 75L175 90V95L125 82" fill="#2563eb" fillOpacity="0.1" stroke="#2563eb" strokeWidth="2"/>

        {/* Swooshes at base */}
        <path d="M40 135C60 165 140 165 170 145" stroke="#2563eb" strokeWidth="6" strokeLinecap="round"/>
        <path d="M45 145C65 175 145 175 175 155" stroke="#f3f4f6" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-brand-primary font-display font-bold text-xl tracking-tight uppercase">TRADE SITE</span>
          <span className="text-brand-accent font-display font-bold text-xl tracking-tight uppercase">BUILDER</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
