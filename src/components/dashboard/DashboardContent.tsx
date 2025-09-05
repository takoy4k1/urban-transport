import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RidershipChart } from './charts/RidershipChart';
import { RouteLoadChart } from './charts/RouteLoadChart';
import { DayOfWeekChart } from './charts/DayOfWeekChart';
import { OptimizationChart } from './charts/OptimizationChart';
import { MapPlaceholder } from './charts/MapPlaceholder';
import { HeatmapPlaceholder } from './charts/HeatmapPlaceholder';
import type { DashboardFilters } from './DashboardLayout';

interface DashboardContentProps {
  filters: DashboardFilters;
}

export const DashboardContent = ({ filters }: DashboardContentProps) => {
  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-primary text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Daily Ridership</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,580</div>
            <p className="text-xs text-white/80 mt-1">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-accent text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-white/90">Route Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-white/80 mt-1">Above city average</p>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Routes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">42</div>
            <p className="text-xs text-muted-foreground mt-1">Across 3 transport types</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Route Coverage Map */}
        <Card className="shadow-chart">
          <CardHeader>
            <CardTitle>Route Coverage Map</CardTitle>
            <CardDescription>
              Geographic distribution of transport networks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MapPlaceholder />
          </CardContent>
        </Card>

        {/* Accessibility Heatmap */}
        <Card className="shadow-chart">
          <CardHeader>
            <CardTitle>Accessibility Heatmap</CardTitle>
            <CardDescription>
              Service coverage by neighborhood
            </CardDescription>
          </CardHeader>
          <CardContent>
            <HeatmapPlaceholder />
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ridership Analysis */}
        <Card className="shadow-chart">
          <CardHeader>
            <CardTitle>Passenger Load Analysis</CardTitle>
            <CardDescription>
              Ridership patterns throughout the day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RidershipChart filters={filters} />
          </CardContent>
        </Card>

        {/* Route Load Analysis */}
        <Card className="shadow-chart">
          <CardHeader>
            <CardTitle>Route Utilization</CardTitle>
            <CardDescription>
              Overcrowding vs underutilization analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RouteLoadChart filters={filters} />
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Day of Week Analysis */}
        <Card className="shadow-chart">
          <CardHeader>
            <CardTitle>Weekly Ridership Trends</CardTitle>
            <CardDescription>
              Passenger volume by day of week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DayOfWeekChart filters={filters} />
          </CardContent>
        </Card>

        {/* AI Optimization */}
        <Card className="shadow-chart border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              AI-Driven Optimization
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                Simulation
              </span>
            </CardTitle>
            <CardDescription>
              Potential improvements with AI scheduling
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OptimizationChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};