// src/pages/admin/components/AdminAnalytics.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminAnalytics = () => {
  const data = [
    { month: 'Jan', attendance: 150, newUsers: 45 },
    { month: 'Feb', attendance: 180, newUsers: 52 },
    { month: 'Mar', attendance: 210, newUsers: 61 },
    { month: 'Apr', attendance: 190, newUsers: 48 },
    { month: 'May', attendance: 240, newUsers: 65 },
  ];

  const stats = [
    { title: 'Total Users', value: '1,234', change: '+12%' },
    { title: 'Monthly Active Users', value: '856', change: '+8%' },
    { title: 'Average Attendance', value: '205', change: '+15%' },
    { title: 'New Registrations', value: '45', change: '+5%' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Analytics Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Attendance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#2563eb" 
                  name="Attendance"
                />
                <Line 
                  type="monotone" 
                  dataKey="newUsers" 
                  stroke="#16a34a" 
                  name="New Users"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAnalytics;

