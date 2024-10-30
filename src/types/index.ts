// Types for video tutorials
interface Tutorial {
  id: number;
  title: string;
  duration: string;
}

interface VideoTutorials {
  beginner: Tutorial[];
  intermediate: Tutorial[];
  advanced: Tutorial[];
}

// Types for dance patterns
interface DancePattern {
  name: string;
  counts: string;
  description: string;
  steps: string[];
  leadSteps?: string[];
  followSteps?: string[];
}

// Types for practice guides
interface PracticeStep {
  title: string;
  description: string;
  steps: string[];
}

interface PracticeGuide {
  title: string;
  difficulty: string;
  steps: PracticeStep[];
}

// Types for music suggestions
interface SongSuggestion {
  title: string;
  artist: string;
  bpm?: number;
  tempo?: string;
  style?: string;
  difficulty?: string;
}

// Types for formation patterns
interface FormationPattern {
  pattern: number[][];
}

// Types for rhythm display
interface RhythmDisplayProps {
  pattern: string;
  counts?: string;
}

// Level selection type
type Level = 'beginner' | 'intermediate' | 'advanced';

// Generic dance data structure
interface DanceData {
  title: string;
  description: string;
  history: string;
  videoTutorials: VideoTutorials;
  fundamentalPatterns?: DancePattern[];
  practiceGuides?: PracticeGuide[];
  musicSuggestions?: SongSuggestion[];
}

export type {
  Tutorial,
  VideoTutorials,
  DancePattern,
  PracticeStep,
  PracticeGuide,
  SongSuggestion,
  FormationPattern,
  RhythmDisplayProps,
  Level,
  DanceData
};