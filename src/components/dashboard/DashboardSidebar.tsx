import { Filter, Clock, Calendar, Bus } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { timeOfDayOptions, dayOfWeekOptions, transportTypeOptions } from '@/data/mockData';
import type { DashboardFilters } from './DashboardLayout';

interface DashboardSidebarProps {
  filters: DashboardFilters;
  onFilterChange: (key: keyof DashboardFilters, value: string) => void;
}

export const DashboardSidebar = ({ filters, onFilterChange }: DashboardSidebarProps) => {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-sidebar-primary" />
          <h2 className="text-lg font-semibold text-sidebar-foreground">Filters</h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sidebar-foreground mb-3">
            <Clock className="h-4 w-4" />
            Time Analysis
          </SidebarGroupLabel>
          <SidebarGroupContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="timeOfDay" className="text-sm font-medium text-sidebar-foreground">
                Time of Day
              </Label>
              <Select
                value={filters.timeOfDay}
                onValueChange={(value) => onFilterChange('timeOfDay', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  {timeOfDayOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dayOfWeek" className="text-sm font-medium text-sidebar-foreground">
                Day of Week
              </Label>
              <Select
                value={filters.dayOfWeek}
                onValueChange={(value) => onFilterChange('dayOfWeek', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select day type" />
                </SelectTrigger>
                <SelectContent>
                  {dayOfWeekOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sidebar-foreground mb-3">
            <Bus className="h-4 w-4" />
            Transport Type
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <Label htmlFor="transportType" className="text-sm font-medium text-sidebar-foreground">
                Service Type
              </Label>
              <Select
                value={filters.transportType}
                onValueChange={(value) => onFilterChange('transportType', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select transport" />
                </SelectTrigger>
                <SelectContent>
                  {transportTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};