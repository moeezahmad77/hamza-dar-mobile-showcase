interface PhoneMockupProps {
  color: string;
  appName: string;
}

const PhoneMockup = ({ color, appName }: PhoneMockupProps) => {
  return (
    <div className="relative w-32 h-64 mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-foreground rounded-[2rem] shadow-xl">
        {/* Screen */}
        <div className="absolute inset-2 bg-background rounded-[1.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="h-6 bg-foreground/5 flex items-center justify-between px-4">
            <span className="text-[8px] text-muted-foreground">9:41</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-foreground/20" />
              <div className="w-2 h-2 rounded-full bg-foreground/20" />
              <div className="w-2 h-2 rounded-full bg-foreground/20" />
            </div>
          </div>
          
          {/* App content */}
          <div className="p-3">
            {/* App header */}
            <div 
              className="h-8 rounded-lg mb-2 flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <span className="text-white text-[8px] font-bold">{appName}</span>
            </div>
            
            {/* Content blocks */}
            <div className="space-y-2">
              <div className="h-16 bg-muted rounded-lg" />
              <div className="flex gap-2">
                <div className="h-10 flex-1 bg-muted rounded-lg" />
                <div className="h-10 flex-1 bg-muted rounded-lg" />
              </div>
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div 
                className="h-8 rounded-lg mt-4 flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <span className="text-white text-[7px] font-medium">Get Started</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-foreground rounded-full" />
      </div>
    </div>
  );
};

export default PhoneMockup;
