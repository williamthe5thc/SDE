import { DancePaths } from '@/types/learning-pathways';

export const dancePaths: DancePaths = {
  "Country Swing": {
    levels: {
      beginner: {
        title: "Beginner Basics",
        description: "Master the fundamentals of Country Swing",
        progress: 0,
        milestones: [
          {
            id: 1,
            title: "Basic Rhythm & Steps",
            description: "Learn the 6-count basic and rhythm foundations",
            completed: false,
            resources: [
              { type: "video", title: "Basic Step Tutorial", duration: "5:30" },
              { type: "practice", title: "Rhythm Training Exercise" },
              { type: "reading", title: "Understanding Country Swing Timing" }
            ]
          },
          {
            id: 2,
            title: "Lead & Follow Basics",
            description: "Learn fundamental connection and frame",
            completed: false,
            resources: [
              { type: "video", title: "Frame & Connection", duration: "8:15" },
              { type: "practice", title: "Frame Maintenance Drill" }
            ]
          }
        ]
      },
      intermediate: {
        title: "Intermediate Combinations",
        description: "Build your repertoire with advanced moves",
        progress: 0,
        locked: true,
        milestones: []
      },
      advanced: {
        title: "Advanced Styling",
        description: "Master advanced techniques and styling",
        progress: 0,
        locked: true,
        milestones: []
      }
    }
  }
};