// src/components/common/Navigation/index.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

export const Navigation = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { label: 'Dance Styles', path: '/dance-styles' },
    { label: 'Events', path: '/events' },
    { label: 'Learning', path: '/learning-pathways' },
  ];

  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
            location.pathname.startsWith(item.path)
              ? 'border-primary text-primary'
              : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;