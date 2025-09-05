import { Thermometer } from 'lucide-react';

export const HeatmapPlaceholder = () => {
  // Generate a grid pattern for heatmap simulation
  const generateHeatmapData = () => {
    const grid = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 12; col++) {
        const intensity = Math.random();
        grid.push({
          id: `${row}-${col}`,
          x: col,
          y: row,
          intensity,
          color: getHeatmapColor(intensity)
        });
      }
    }
    return grid;
  };

  const getHeatmapColor = (intensity: number) => {
    if (intensity < 0.2) return 'bg-blue-200'; // Low accessibility
    if (intensity < 0.4) return 'bg-blue-300';
    if (intensity < 0.6) return 'bg-yellow-300';
    if (intensity < 0.8) return 'bg-orange-300';
    return 'bg-red-400'; // High accessibility
  };

  const heatmapData = generateHeatmapData();

  return (
    <div className="h-64 relative">
      {/* Heatmap Grid */}
      <div className="grid grid-cols-12 grid-rows-8 gap-1 h-full p-2 bg-gray-50 rounded-lg">
        {heatmapData.map((cell) => (
          <div
            key={cell.id}
            className={`${cell.color} rounded-sm transition-all duration-300 hover:scale-110 cursor-pointer`}
            title={`Accessibility: ${Math.round(cell.intensity * 100)}%`}
          />
        ))}
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-2 left-2 bg-white/90 rounded-lg p-3 border border-border shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <Thermometer className="h-4 w-4 text-foreground" />
          <span className="text-xs font-medium">Service Accessibility</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-200 rounded-sm"></div>
          <span className="text-xs text-muted-foreground">Low</span>
          <div className="w-3 h-3 bg-yellow-300 rounded-sm ml-2"></div>
          <span className="text-xs text-muted-foreground">Medium</span>
          <div className="w-3 h-3 bg-red-400 rounded-sm ml-2"></div>
          <span className="text-xs text-muted-foreground">High</span>
        </div>
      </div>
      
      {/* Center Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white/95 border border-border rounded-lg p-4 text-center shadow-card">
          <Thermometer className="h-8 w-8 text-accent mx-auto mb-2" />
          <h3 className="font-semibold text-foreground">Accessibility Heatmap</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Neighborhood service coverage analysis
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Ready for geographic data
          </p>
        </div>
      </div>
    </div>
  );
};