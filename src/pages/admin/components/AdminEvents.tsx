// src/pages/admin/components/AdminEvents.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Edit2, Trash } from 'lucide-react';

const AdminEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Bachata Night',
      date: '2024-03-15',
      time: '19:30',
      location: 'Main Hall',
      status: 'Upcoming'
    },
    // Add more events
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Events</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    {event.status}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminEvents;

