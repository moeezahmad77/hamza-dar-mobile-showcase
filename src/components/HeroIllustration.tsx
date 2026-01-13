const HeroIllustration = () => {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background blob */}
      <ellipse cx="250" cy="320" rx="180" ry="30" fill="currentColor" opacity="0.05" />
      
      {/* Desk */}
      <rect x="100" y="280" width="300" height="12" rx="4" fill="currentColor" opacity="0.1" />
      <rect x="120" y="292" width="8" height="60" rx="2" fill="currentColor" opacity="0.1" />
      <rect x="372" y="292" width="8" height="60" rx="2" fill="currentColor" opacity="0.1" />

      {/* Laptop */}
      <g className="animate-float">
        {/* Laptop screen */}
        <rect x="160" y="180" width="180" height="100" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <rect x="170" y="190" width="160" height="80" rx="4" fill="currentColor" opacity="0.03" />
        
        {/* Code lines on screen */}
        <rect x="180" y="200" width="60" height="4" rx="2" fill="hsl(217 91% 60%)" opacity="0.6" />
        <rect x="180" y="212" width="100" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="180" y="224" width="80" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="180" y="236" width="120" height="4" rx="2" fill="hsl(217 91% 60%)" opacity="0.4" />
        <rect x="180" y="248" width="70" height="4" rx="2" fill="currentColor" opacity="0.2" />
        
        {/* Laptop base */}
        <path d="M140 280 L160 280 L165 285 L335 285 L340 280 L360 280 L355 292 L145 292 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
      </g>

      {/* Mobile phone left */}
      <g className="animate-float-delayed">
        <rect x="80" y="200" width="45" height="80" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="85" y="210" width="35" height="55" rx="2" fill="currentColor" opacity="0.03" />
        <circle cx="102.5" cy="272" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* App icon */}
        <rect x="90" y="218" width="12" height="12" rx="3" fill="hsl(217 91% 60%)" opacity="0.5" />
        <rect x="106" y="218" width="12" height="12" rx="3" fill="currentColor" opacity="0.15" />
        <rect x="90" y="234" width="12" height="12" rx="3" fill="currentColor" opacity="0.15" />
        <rect x="106" y="234" width="12" height="12" rx="3" fill="hsl(217 91% 60%)" opacity="0.3" />
      </g>

      {/* Mobile phone right */}
      <g className="animate-float" style={{ animationDelay: '1s' }}>
        <rect x="375" y="190" width="50" height="90" rx="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="380" y="200" width="40" height="65" rx="2" fill="currentColor" opacity="0.03" />
        <circle cx="400" cy="275" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* App UI elements */}
        <rect x="385" y="208" width="30" height="4" rx="2" fill="hsl(217 91% 60%)" opacity="0.5" />
        <rect x="385" y="218" width="25" height="3" rx="1.5" fill="currentColor" opacity="0.2" />
        <rect x="385" y="228" width="30" height="20" rx="3" fill="currentColor" opacity="0.08" />
        <rect x="385" y="252" width="20" height="8" rx="2" fill="hsl(217 91% 60%)" opacity="0.4" />
      </g>

      {/* Person */}
      <g>
        {/* Body */}
        <path
          d="M250 160 C250 160 240 175 230 190 L220 260 L280 260 L270 190 C260 175 250 160 250 160"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Head */}
        <circle cx="250" cy="130" r="35" stroke="currentColor" strokeWidth="2.5" fill="none" />
        
        {/* Hair */}
        <path
          d="M220 115 Q225 95 250 90 Q275 95 280 115"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <path d="M222 118 Q220 108 230 100" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M278 118 Q280 108 270 100" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Face */}
        <circle cx="238" cy="128" r="3" fill="currentColor" />
        <circle cx="262" cy="128" r="3" fill="currentColor" />
        <path d="M245 145 Q250 150 255 145" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Arms */}
        <path d="M230 190 Q200 200 180 240" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M270 190 Q300 200 320 240" stroke="currentColor" strokeWidth="2.5" fill="none" />
        
        {/* Hands on keyboard */}
        <circle cx="180" cy="242" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="320" cy="242" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      </g>

      {/* Floating elements */}
      <g className="animate-float-delayed">
        <rect x="60" y="140" width="20" height="20" rx="4" stroke="hsl(217 91% 60%)" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>
      <g className="animate-float" style={{ animationDelay: '3s' }}>
        <circle cx="420" cy="130" r="10" stroke="hsl(217 91% 60%)" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>
      <g className="animate-float-delayed" style={{ animationDelay: '1s' }}>
        <path d="M440 200 L450 210 L440 220" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M460 200 L450 210 L460 220" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
      </g>
      <g className="animate-float" style={{ animationDelay: '4s' }}>
        <rect x="50" y="250" width="15" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" transform="rotate(15 57 257)" />
      </g>
    </svg>
  );
};

export default HeroIllustration;
