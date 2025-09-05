import { MapPin, Bus, Train } from 'lucide-react';

export const MapPlaceholder = () => {
  return (
    <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-border overflow-hidden">
      {/* Map Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-gray-300" />
          ))}
        </div>
      </div>
      
      {/* Simulated Route Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Bus routes */}
        <path
          d="M 20 50 Q 100 30 180 80 T 300 60"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        <path
          d="M 50 120 Q 150 100 250 140 T 350 120"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          className="animate-pulse"
        />
        
        {/* Metro routes */}
        <path
          d="M 80 200 L 320 200"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M 200 50 L 200 220"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          fill="none"
        />
      </svg>
      
      {/* Transport Icons */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="flex items-center gap-2 text-xs bg-white/80 px-2 py-1 rounded">
          <Bus className="h-3 w-3 text-primary" />
          <span>Bus Routes</span>
        </div>
        <div className="flex items-center gap-2 text-xs bg-white/80 px-2 py-1 rounded">
          <Train className="h-3 w-3 text-accent" />
          <span>Metro Lines</span>
        </div>
      </div>
      
      {/* Station Markers */}
      <MapPin className="absolute top-12 left-20 h-4 w-4 text-primary" />
      <MapPin className="absolute top-20 left-32 h-4 w-4 text-accent" />
      <MapPin className="absolute top-16 right-24 h-4 w-4 text-primary" />
      <MapPin className="absolute bottom-20 left-16 h-4 w-4 text-accent" />
      <MapPin className="absolute bottom-16 right-20 h-4 w-4 text-primary" />
      
      {/* Center Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/90 border border-border rounded-lg p-4 text-center shadow-card">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
          <h3 className="font-semibold text-foreground">Interactive Route Map</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Real transport network visualization
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Ready for live data integration
          </p>
        </div>
      </div>
    </div>
  );
};