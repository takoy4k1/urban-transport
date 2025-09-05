// Mock data for Urban Public Transport Analysis Dashboard

export interface RidershipByHour {
  hour: string;
  passengers: number;
  bus: number;
  metro: number;
}

export interface RouteLoad {
  route: string;
  averageLoad: number;
  capacity: number;
  type: 'Bus' | 'Metro';
  status: 'overcrowded' | 'optimal' | 'underutilized';
}

export interface DayOfWeekData {
  day: string;
  ridership: number;
  efficiency: number;
}

export interface OptimizationData {
  metric: string;
  before: number;
  after: number;
  improvement: number;
}

// Ridership by hour data
export const ridershipByHour: RidershipByHour[] = [
  { hour: '05:00', passengers: 120, bus: 80, metro: 40 },
  { hour: '06:00', passengers: 380, bus: 220, metro: 160 },
  { hour: '07:00', passengers: 820, bus: 480, metro: 340 },
  { hour: '08:00', passengers: 1420, bus: 780, metro: 640 },
  { hour: '09:00', passengers: 1680, bus: 920, metro: 760 },
  { hour: '10:00', passengers: 940, bus: 520, metro: 420 },
  { hour: '11:00', passengers: 720, bus: 400, metro: 320 },
  { hour: '12:00', passengers: 1100, bus: 620, metro: 480 },
  { hour: '13:00', passengers: 980, bus: 540, metro: 440 },
  { hour: '14:00', passengers: 850, bus: 460, metro: 390 },
  { hour: '15:00', passengers: 780, bus: 420, metro: 360 },
  { hour: '16:00', passengers: 920, bus: 500, metro: 420 },
  { hour: '17:00', passengers: 1520, bus: 840, metro: 680 },
  { hour: '18:00', passengers: 1780, bus: 980, metro: 800 },
  { hour: '19:00', passengers: 1240, bus: 680, metro: 560 },
  { hour: '20:00', passengers: 860, bus: 460, metro: 400 },
  { hour: '21:00', passengers: 540, bus: 300, metro: 240 },
  { hour: '22:00', passengers: 320, bus: 180, metro: 140 },
  { hour: '23:00', passengers: 180, bus: 100, metro: 80 },
];

// Route load analysis data
export const routeLoadData: RouteLoad[] = [
  { route: 'Route 42', averageLoad: 95, capacity: 80, type: 'Bus', status: 'overcrowded' },
  { route: 'Route 15', averageLoad: 88, capacity: 90, type: 'Bus', status: 'optimal' },
  { route: 'Metro Line A', averageLoad: 120, capacity: 100, type: 'Metro', status: 'overcrowded' },
  { route: 'Route 8', averageLoad: 45, capacity: 80, type: 'Bus', status: 'underutilized' },
  { route: 'Metro Line B', averageLoad: 85, capacity: 100, type: 'Metro', status: 'optimal' },
  { route: 'Route 23', averageLoad: 25, capacity: 60, type: 'Bus', status: 'underutilized' },
  { route: 'Route 67', averageLoad: 78, capacity: 80, type: 'Bus', status: 'optimal' },
  { route: 'Metro Line C', averageLoad: 110, capacity: 100, type: 'Metro', status: 'overcrowded' },
];

// Day of week ridership data
export const dayOfWeekData: DayOfWeekData[] = [
  { day: 'Monday', ridership: 15420, efficiency: 78 },
  { day: 'Tuesday', ridership: 16200, efficiency: 82 },
  { day: 'Wednesday', ridership: 15980, efficiency: 80 },
  { day: 'Thursday', ridership: 16500, efficiency: 85 },
  { day: 'Friday', ridership: 17200, efficiency: 88 },
  { day: 'Saturday', ridership: 9800, efficiency: 65 },
  { day: 'Sunday', ridership: 7200, efficiency: 58 },
];

// AI Optimization simulation data
export const optimizationData: OptimizationData[] = [
  { metric: 'Average Wait Time (min)', before: 8.5, after: 6.2, improvement: 27 },
  { metric: 'Route Efficiency (%)', before: 72, after: 89, improvement: 24 },
  { metric: 'Peak Hour Delays (min)', before: 12.3, after: 7.8, improvement: 37 },
  { metric: 'Service Coverage (%)', before: 68, after: 85, improvement: 25 },
];

// Filter options
export const timeOfDayOptions = [
  { value: 'all', label: 'All Day' },
  { value: 'morning', label: 'Morning (6-12)' },
  { value: 'afternoon', label: 'Afternoon (12-18)' },
  { value: 'evening', label: 'Evening (18-22)' },
  { value: 'night', label: 'Night (22-6)' },
];

export const dayOfWeekOptions = [
  { value: 'all', label: 'All Days' },
  { value: 'weekday', label: 'Weekdays' },
  { value: 'weekend', label: 'Weekends' },
];

export const transportTypeOptions = [
  { value: 'both', label: 'Bus & Metro' },
  { value: 'bus', label: 'Bus Only' },
  { value: 'metro', label: 'Metro Only' },
];