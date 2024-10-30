// src/types/dance.ts

// Level Type
export type Level = 'beginner' | 'intermediate' | 'advanced';

// Tutorial Types
export interface Tutorial {
  id: number;
  title: string;
  duration: string;
}

export interface VideoTutorials {
  beginner: Tutorial[];
  intermediate: Tutorial[];
  advanced: Tutorial[];
}

// Pattern Types
export interface FormationCell {
  active: boolean;
  position?: number;
}

export interface FormationPattern {
  pattern: number[][];
}

export interface FormationDisplayProps {
  pattern: number[][];
}

// Rhythm Display Types
export interface RhythmDisplayProps {
  pattern: string;
  counts?: string;
}

// Tutorial Player Types
export interface Timestamp {
  time: number;  // Changed from string to number
  label: string;
}

export interface TutorialPlayerProps {
  videoUrl: string;
  title: string;
  description?: string;
  timestamps?: Timestamp[];
}

// Practice Guide Types
export interface PracticeStep {
  title: string;
  description: string;
  steps: string[];
}

export interface PracticeGuideProps {
  title?: string;
  steps: PracticeStep[];
  difficulty?: string;
}

// Base Dance Data Structure
export interface DanceData {
  title: string;
  description: string;
  history: string;
  videoTutorials: VideoTutorials;
}