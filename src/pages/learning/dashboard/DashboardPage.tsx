// src/pages/learning/dashboard/DashboardPage.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Trophy,
  Target,
  Calendar,
  Clock,
  ChevronRight,
  Star,
  BookOpen,
  Award,
  BarChart
} from 'lucide-react';

import SkillTree from './components/SkillTree';
import AchievementGrid from './components/AchievementGrid';
import PracticeLog from './components/PracticeLog';
import GoalsTracker from './components/GoalsTracker';

const DashboardPage = () => {
  const overallProgress = {
    completed: 35,
    totalClasses: 24,
    dancesLearned: 6,
    practiceHours: 48
  };

  const recentAchievements = [
    { id: 1, title: "Salsa Beginner", icon: Star, date: "2024-02-28" },
    { id: 2, title: "Practice Streak", icon: Calendar, date: "2024-02-25" },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Dashboard</h1>
        <p className="text-muted-foreground">
          Track your progress, set goals, and celebrate achievements
        </p>
      </div>

      {/* Progress Overview */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.completed}%</div>
            <Progress value={overallProgress.completed} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
            <Calendar className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.totalClasses}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Dances Learned</CardTitle>
            <BookOpen className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.dancesLearned}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Practice Hours</CardTitle>
            <Clock className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.practiceHours}h</div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="skills" className="space-y-6">
        <TabsList>
          <TabsTrigger value="skills">Skill Tree</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="practice">Practice Log</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
        </TabsList>

        <TabsContent value="skills">
          <SkillTree />
        </TabsContent>

        <TabsContent value="achievements">
          <AchievementGrid />
        </TabsContent>

        <TabsContent value="practice">
          <PracticeLog />
        </TabsContent>

        <TabsContent value="goals">
          <GoalsTracker />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPage;

