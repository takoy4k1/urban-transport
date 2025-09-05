import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { dayOfWeekData } from '@/data/mockData';
import type { DashboardFilters } from '../DashboardLayout';

interface DayOfWeekChartProps {
  filters: DashboardFilters;
}

export const DayOfWeekChart = ({ filters }: DayOfWeekChartProps) => {
  // Filter data based on day of week filter
  const getFilteredData = () => {
    if (filters.dayOfWeek === 'all') return dayOfWeekData;
    if (filters.dayOfWeek === 'weekday') {
      return dayOfWeekData.filter(item => 
        !['Saturday', 'Sunday'].includes(item.day)
      );
    }
    if (filters.dayOfWeek === 'weekend') {
      return dayOfWeekData.filter(item => 
        ['Saturday', 'Sunday'].includes(item.day)
      );
    }
    return dayOfWeekData;
  };

  const data = getFilteredData();

  // Generate colors for each slice
  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--accent))',
    'hsl(var(--warning))',
    'hsl(217 91% 50%)',
    'hsl(158 64% 62%)',
    'hsl(45 93% 70%)',
    'hsl(217 91% 30%)',
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-foreground">{data.day}</p>
          <p className="text-sm" style={{ color: payload[0].color }}>
            {`Ridership: ${data.ridership.toLocaleString()}`}
          </p>
          <p className="text-sm text-muted-foreground">
            {`Efficiency: ${data.efficiency}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.05) return null; // Don't show labels for very small slices
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="ridership"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value, entry) => (
            <span style={{ color: entry.color }}>{value}</span>
          )}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};