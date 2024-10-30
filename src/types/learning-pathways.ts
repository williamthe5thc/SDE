export interface Resource {
  type: 'video' | 'practice' | 'reading';
  title: string;
  duration?: string;
}

export interface Milestone {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked?: boolean;
  resources: Resource[];
}

export interface LevelData {
  title: string;
  description: string;
  progress: number;
  locked?: boolean;
  milestones: Milestone[];
}

export interface Levels {
  beginner: LevelData;
  intermediate: LevelData;
  advanced: LevelData;
}

export interface DanceStyle {
  levels: Levels;
}

export interface DancePaths {
  [key: string]: DanceStyle;
}

export type LevelType = keyof Levels;