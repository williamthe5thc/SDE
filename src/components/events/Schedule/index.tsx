// Schedule.tsx
import React from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
}

interface ScheduleProps {
  events: Event[];
}

export const Schedule: React.FC<ScheduleProps> = ({ events = [] }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{event.date}</p>
                <p className="text-gray-600">{event.time}</p>
                <p className="text-gray-600">{event.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};