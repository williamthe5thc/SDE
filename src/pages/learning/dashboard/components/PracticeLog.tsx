// src/pages/learning/dashboard/components/PracticeLog.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface PracticeSession {
  id: string;
  date: string;
  duration: number;
  danceStyle: string;
  notes: string;
}

const PracticeLog = () => {
  const practiceSessions: PracticeSession[] = [
    {
      id: "1",
      date: "2024-02-28",
      duration: 60,
      danceStyle: "Salsa",
      notes: "Worked on basic steps and timing"
    },
    // Add more practice sessions
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Practice Log</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Log Practice
        </Button>
      </div>

      <div className="space-y-4">
        {practiceSessions.map((session) => (
          <Card key={session.id}>
            <CardContent className="flex justify-between items-center p-6">
              <div>
                <h3 className="font-semibold">{session.danceStyle}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(session.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{session.duration} minutes</p>
                <p className="text-sm text-muted-foreground">{session.notes}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PracticeLog;