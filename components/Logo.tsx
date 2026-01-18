
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
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Monitor Frame */}
        <rect x="55" y="75" width="110" height="75" rx="6" fill="#f9fafb" fillOpacity="0.1" stroke="#f9fafb" strokeWidth="4"/>
        <path d="M85 150L75 165H145L135 150" fill="#f9fafb" stroke="#f9fafb" strokeWidth="2" strokeLinejoin="round"/>
        <rect x="100" y="165" width="20" height="5" fill="#f9fafb"/>
        
        {/* Buildings inside monitor */}
        <rect x="65" y="115" width="12" height="30" fill="#3b82f6" />
        <rect x="80" y="125" width="12" height="20" fill="#f1b31c" />
        <rect x="95" y="90" width="18" height="55" fill="#1d4ed8" />
        <rect x="115" y="105" width="12" height="40" fill="#3b82f6" />
        <rect x="130" y="120" width="12" height="25" fill="#1d4ed8" />
        <rect x="145" y="128" width="10" height="17" fill="#3b82f6" />

        {/* Windows */}
        <rect x="68" y="118" width="2" height="2" fill="white" fillOpacity="0.5" />
        <rect x="68" y="122" width="2" height="2" fill="white" fillOpacity="0.5" />
        <rect x="98" y="95" width="3" height="3" fill="white" fillOpacity="0.5" />
        <rect x="98" y="102" width="3" height="3" fill="white" fillOpacity="0.5" />
        <rect x="105" y="95" width="3" height="3" fill="white" fillOpacity="0.5" />
        <rect x="83" y="128" width="2" height="2" fill="white" fillOpacity="0.5" />

        {/* Crane */}
        <path d="M125 130V75L155 78V82L132 80V130" stroke="#f1b31c" strokeWidth="3" strokeLinecap="round"/>
        <path d="M125 75L175 90V95L125 82" fill="#f1b31c" fillOpacity="0.2" stroke="#f1b31c" strokeWidth="2"/>
        <line x1="135" y1="78" x2="135" y2="83" stroke="#f1b31c" strokeWidth="1.5"/>
        <line x1="145" y1="81" x2="145" y2="86" stroke="#f1b31c" strokeWidth="1.5"/>
        <circle cx="165" cy="105" r="3" stroke="#f1b31c" strokeWidth="2"/>
        <path d="M165 92V102" stroke="#f1b31c" strokeWidth="2"/>

        {/* Swooshes at base */}
        <path d="M40 135C60 165 140 165 170 145" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round"/>
        <path d="M45 145C65 175 145 175 175 155" stroke="#f1b31c" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-brand-primary font-display font-bold text-xl tracking-tight uppercase">TRADE SITE</span>
          <span className="text-brand-yellow font-display font-bold text-xl tracking-tight uppercase">BUILDER</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
