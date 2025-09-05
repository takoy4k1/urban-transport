import { SidebarTrigger } from '@/components/ui/sidebar';
import { BarChart3, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-border bg-card shadow-card flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">
              Smart Public Transport Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              AI-Driven Urban Mobility Analysis
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>
    </header>
  );
};