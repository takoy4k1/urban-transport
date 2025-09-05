import { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from './DashboardSidebar';
import { DashboardHeader } from './DashboardHeader';
import { DashboardContent } from './DashboardContent';

export interface DashboardFilters {
  timeOfDay: string;
  dayOfWeek: string;
  transportType: string;
}

export const DashboardLayout = () => {
  const [filters, setFilters] = useState<DashboardFilters>({
    timeOfDay: 'all',
    dayOfWeek: 'all',
    transportType: 'both',
  });

  const handleFilterChange = (key: keyof DashboardFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <DashboardContent filters={filters} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};