
// src/pages/error/server-error.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export const ServerErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <AlertOctagon className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-6 text-3xl font-bold">Server Error</h1>
        <p className="mt-4 text-muted-foreground">
          Something went wrong on our end. We're working to fix it. Please try again later.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleRefresh} variant="outline" className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Refresh Page
          </Button>
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};