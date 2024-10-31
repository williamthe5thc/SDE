// src/pages/learning/dashboard/components/AchievementGrid.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Clock, Calendar, Users, Music } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  unlocked: boolean;
  date?: string;
}

const AchievementGrid = () => {
  const achievements: Achievement[] = [
    {
      id: "first-lesson",
      title: "First Steps",
      description: "Completed your first dance lesson",
      icon: Star,
      unlocked: true,
      date: "2024-01-15"
    },
    {
      id: "practice-streak",
      title: "Practice Makes Perfect",
      description: "Practiced for 7 consecutive days",
      icon: Calendar,
      unlocked: true,
      date: "2024-02-01"
    },
    {
      id: "social-butterfly",
      title: "Social Butterfly",
      description: "Danced with 10 different partners",
      icon: Users,
      unlocked: false
    },
    // Add more achievements
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {achievements.map((achievement) => (
        <Card 
          key={achievement.id}
          className={`relative ${!achievement.unlocked ? 'grayscale opacity-50' : ''}`}
        >
          <CardContent className="pt-6">
            <div className="text-center">
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {achievement.description}
              </p>
              {achievement.unlocked && achievement.date && (
                <p className="text-xs text-muted-foreground">
                  Unlocked on {new Date(achievement.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AchievementGrid;

