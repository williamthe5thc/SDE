// src/components/common/Header/Header.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '@/context/GlobalContext';
import { Button } from '@/components/ui/button';
import {
  Menu,
  X,
  Sun,
  Moon,
  UserCircle
} from 'lucide-react';
import { DANCE_STYLES } from '@/utils/constants';

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Dance Styles',
    path: '/dance-styles',
    children: [
      { label: 'Salsa', path: '/dance-styles/salsa' },
      { label: 'Bachata', path: '/dance-styles/bachata' },
      { label: 'West Coast Swing', path: '/dance-styles/west-coast-swing' },
      { label: 'Country Swing', path: '/dance-styles/country-swing' },
      { label: 'Merengue', path: '/dance-styles/merengue' },
      { label: 'Waltz', path: '/dance-styles/waltz' },
      { label: 'Cha-Cha', path: '/dance-styles/cha-cha' },
      { label: 'Foxtrot', path: '/dance-styles/foxtrot' },
      { label: 'Rumba', path: '/dance-styles/rumba' },
      { label: 'Line Dancing', path: '/dance-styles/line-dancing' },
    ],
  },
  { label: 'Events', path: '/events' },
  { label: 'Learning', path: '/learning-pathways' },
];

export const Header = () => {
  const { state, dispatch } = useGlobalContext();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStylesMenuOpen, setIsStylesMenuOpen] = useState(false);

  const toggleTheme = () => {
    dispatch({ 
      type: 'SET_THEME', 
      payload: state.theme === 'light' ? 'dark' : 'light' 
    });
  };

  const isActivePath = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">SDE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                    isActivePath(item.path)
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                  }`}
                  onMouseEnter={() => item.children && setIsStylesMenuOpen(true)}
                  onMouseLeave={() => item.children && setIsStylesMenuOpen(false)}
                >
                  {item.label}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && isStylesMenuOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border border-border"
                    onMouseEnter={() => setIsStylesMenuOpen(true)}
                    onMouseLeave={() => setIsStylesMenuOpen(false)}
                  >
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {state.theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            {state.isAuthenticated ? (
              <Button variant="outline" className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Profile
              </Button>
            ) : (
              <Button className="flex items-center gap-2">
                <UserCircle className="h-5 w-5" />
                Sign In
              </Button>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <React.Fragment key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActivePath(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && isActivePath(item.path) && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-3 py-2 rounded-md text-sm font-medium ${
                            isActivePath(child.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;