// src/types/learning-dashboard.ts
import { LucideIcon } from 'lucide-react';

export interface ProgressStats {
  completed: number;
  totalClasses: number;
  dancesLearned: number;
  practiceHours: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  date?: string;
}

export interface SkillNode {
  id: string;
  title: string;
  description: string;
  progress: number;
  completed: boolean;
  locked: boolean;
  dependencies: string[];
}

export interface PracticeSession {
  id: string;
  date: string;
  duration: number;
  danceStyle: string;
  notes: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  deadline: string;
  progress: number;
  completed: boolean;
}

export interface DanceSkill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  prerequisites: string[];
}

export interface PracticeLogEntry {
  id: string;
  date: Date;
  duration: number;
  style: string;
  notes: string;
  skills: string[];
}

export interface UserProgress {
  totalProgress: number;
  achievements: Achievement[];
  skills: DanceSkill[];
  practiceLog: PracticeLogEntry[];
  goals: Goal[];
}