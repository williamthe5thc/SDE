
// src/pages/error/network-error.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { WifiOff, RefreshCw } from 'lucide-react';

export const NetworkErrorPage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <WifiOff className="mx-auto h-12 w-12 text-gray-500" />
        <h1 className="mt-6 text-3xl font-bold">No Internet Connection</h1>
        <p className="mt-4 text-muted-foreground">
          Please check your internet connection and try again.
        </p>
        <div className="mt-8">
          <Button onClick={handleRetry} className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Retry Connection
          </Button>
        </div>
      </div>
    </div>
  );
};
