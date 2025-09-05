import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { routeLoadData } from '@/data/mockData';
import type { DashboardFilters } from '../DashboardLayout';

interface RouteLoadChartProps {
  filters: DashboardFilters;
}

export const RouteLoadChart = ({ filters }: RouteLoadChartProps) => {
  // Filter data based on transport type
  const getFilteredData = () => {
    if (filters.transportType === 'both') return routeLoadData;
    if (filters.transportType === 'bus') return routeLoadData.filter(item => item.type === 'Bus');
    if (filters.transportType === 'metro') return routeLoadData.filter(item => item.type === 'Metro');
    return routeLoadData;
  };

  const data = getFilteredData().map(item => ({
    ...item,
    utilization: Math.round((item.averageLoad / item.capacity) * 100)
  }));

  const getBarColor = (status: string) => {
    switch (status) {
      case 'overcrowded': return 'hsl(var(--destructive))';
      case 'optimal': return 'hsl(var(--accent))';
      case 'underutilized': return 'hsl(var(--warning))';
      default: return 'hsl(var(--primary))';
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-sm text-muted-foreground">{`Type: ${data.type}`}</p>
          <p className="text-sm" style={{ color: payload[0].color }}>
            {`Utilization: ${data.utilization}%`}
          </p>
          <p className="text-sm text-muted-foreground">
            {`Load: ${data.averageLoad}/${data.capacity}`}
          </p>
          <p className="text-sm font-medium" style={{ 
            color: getBarColor(data.status)
          }}>
            Status: {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="route" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          angle={-45}
          textAnchor="end"
          height={80}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          label={{ value: 'Utilization %', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="utilization" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};