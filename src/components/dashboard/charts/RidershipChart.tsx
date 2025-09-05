import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ridershipByHour } from '@/data/mockData';
import type { DashboardFilters } from '../DashboardLayout';

interface RidershipChartProps {
  filters: DashboardFilters;
}

export const RidershipChart = ({ filters }: RidershipChartProps) => {
  // Filter data based on time of day
  const getFilteredData = () => {
    if (filters.timeOfDay === 'all') return ridershipByHour;
    
    const timeRanges = {
      morning: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00'],
      afternoon: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'],
      evening: ['18:00', '19:00', '20:00', '21:00'],
      night: ['22:00', '23:00', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00']
    };
    
    const selectedHours = timeRanges[filters.timeOfDay as keyof typeof timeRanges] || [];
    return ridershipByHour.filter(item => selectedHours.includes(item.hour));
  };

  const data = getFilteredData();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-foreground">{`Time: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey === 'passengers' ? 'Total' : entry.dataKey === 'bus' ? 'Bus' : 'Metro'}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="hour" 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        
        {filters.transportType !== 'metro' && (
          <Line
            type="monotone"
            dataKey="bus"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            name="Bus"
          />
        )}
        
        {filters.transportType !== 'bus' && (
          <Line
            type="monotone"
            dataKey="metro"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 4 }}
            name="Metro"
          />
        )}
        
        {filters.transportType === 'both' && (
          <Line
            type="monotone"
            dataKey="passengers"
            stroke="hsl(var(--warning))"
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--warning))', strokeWidth: 2, r: 5 }}
            name="Total"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};