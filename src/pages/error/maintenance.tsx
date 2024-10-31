// src/pages/error/maintenance.tsx
import React from 'react';
import { Settings, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <Settings className="mx-auto h-12 w-12 text-blue-500 animate-spin-slow" />
        <h1 className="mt-6 text-3xl font-bold">Under Maintenance</h1>
        <p className="mt-4 text-muted-foreground">
          We're currently performing scheduled maintenance to improve your experience.
          We'll be back shortly!
        </p>
        <div className="mt-8">
          <Button className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Get Notified When We're Back
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Expected completion: ~30 minutes
        </p>
      </div>
    </div>
  );
};
