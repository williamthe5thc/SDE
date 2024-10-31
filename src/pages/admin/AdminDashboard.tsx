// src/pages/admin/AdminDashboard.tsx
import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Settings, 
  BarChart, 
  Menu,
  FileText,
  Image,
  MessageSquare,
  BookOpen,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Admin components import
import AdminUsers from './components/AdminUsers';
import AdminEvents from './components/AdminEvents';
import AdminContent from './components/AdminContent';
import AdminAnalytics from './components/AdminAnalytics';
import AdminSettings from './components/AdminSettings';

interface MenuItem {
  name: string;
  icon: React.ElementType;
  component: React.ComponentType;
}

const menuItems: MenuItem[] = [
  { name: 'Analytics', icon: BarChart, component: AdminAnalytics },
  { name: 'Users', icon: Users, component: AdminUsers },
  { name: 'Events', icon: Calendar, component: AdminEvents },
  { name: 'Content', icon: FileText, component: AdminContent },
  { name: 'Settings', icon: Settings, component: AdminSettings },
];

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('Analytics');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveComponent = menuItems.find(item => item.name === activeMenu)?.component || AdminAnalytics;

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <Button variant="ghost" className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          md:block w-64 border-r border-border bg-card h-[calc(100vh-4rem)] fixed md:sticky top-16
        `}>
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Button
                    variant={activeMenu === item.name ? 'secondary' : 'ghost'}
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setActiveMenu(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;


