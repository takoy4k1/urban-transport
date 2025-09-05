import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { optimizationData } from '@/data/mockData';
import { TrendingUp } from 'lucide-react';

export const OptimizationChart = () => {
  const data = optimizationData.map(item => ({
    metric: item.metric.replace(' (min)', '').replace(' (%)', ''),
    before: item.before,
    after: item.after,
    improvement: item.improvement,
    fullMetric: item.metric
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg shadow-lg p-3">
          <p className="text-sm font-medium text-foreground">{data.fullMetric}</p>
          <div className="space-y-1 mt-2">
            <p className="text-sm text-muted-foreground">
              Before: {data.before}
            </p>
            <p className="text-sm text-accent">
              After: {data.after}
            </p>
            <p className="text-sm font-medium text-accent flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              Improvement: +{data.improvement}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="metric" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={11}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="before" fill="hsl(var(--muted))" name="Before" radius={[2, 2, 0, 0]} />
          <Bar dataKey="after" fill="hsl(var(--accent))" name="After AI" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      {/* Improvement Summary */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
        <div className="text-center">
          <div className="text-2xl font-bold text-accent">27%</div>
          <div className="text-xs text-muted-foreground">Avg Improvement</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">4</div>
          <div className="text-xs text-muted-foreground">Metrics Enhanced</div>
        </div>
      </div>
    </div>
  );
};