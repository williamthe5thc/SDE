// src/pages/learning/dashboard/components/GoalsTracker.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Target, Check } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  progress: number;
  completed: boolean;
}

const GoalsTracker = () => {
  const goals: Goal[] = [
    {
      id: "1",
      title: "Master Basic Salsa Steps",
      description: "Complete all beginner salsa patterns",
      deadline: "2024-03-30",
      progress: 65,
      completed: false
    },
    // Add more goals
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dance Goals</h2>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Goal
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {goals.map((goal) => (
          <Card key={goal.id}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                {goal.title}
                {goal.completed && <Check className="h-4 w-4 text-green-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {goal.description}
              </p>
              <Progress value={goal.progress} className="mb-2" />
              <div className="flex justify-between items-center text-sm">
                <span>{goal.progress}% Complete</span>
                <span className="text-muted-foreground">
                  Due: {new Date(goal.deadline).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GoalsTracker;