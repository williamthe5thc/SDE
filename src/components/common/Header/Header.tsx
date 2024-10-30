// src/components/common/Header/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '@/context/GlobalContext';
import Navigation from '../Navigation';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { state, dispatch } = useGlobalContext();

  const toggleTheme = () => {
    dispatch({ 
      type: 'SET_THEME', 
      payload: state.theme === 'light' ? 'dark' : 'light' 
    });
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              SDE
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {state.theme === 'light' ? '🌙' : '☀️'}
            </Button>
            
            {state.isAuthenticated ? (
              <Button variant="outline">
                Profile
              </Button>
            ) : (
              <Button>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;