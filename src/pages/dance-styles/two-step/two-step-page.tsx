// src/pages/dance-styles/two-step/two-step-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const twoStepData = {
  title: "Two-Step",
  description: "A progressive country western dance characterized by its smooth, gliding movement and distinctive 'quick-quick-slow-slow' rhythm pattern.",
  history: `The Two-Step emerged from the late 19th century as country western dance gained popularity. 
    Initially influenced by the Foxtrot, it evolved into its own distinct style in Texas dance halls. 
    The dance gets its name from the two-step rhythm pattern, though it actually consists of four steps 
    total. Modern Two-Step has incorporated elements from other country dances while maintaining its 
    signature progressive movement around the dance floor.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Quick-Quick-Slow-Slow Pattern", duration: "6:15" },
      { id: 2, title: "Progressive Movement Basics", duration: "7:30" },
      { id: 3, title: "Lead & Follow Foundation", duration: "5:45" }
    ],
    intermediate: [
      { id: 4, title: "Turns & Sweetheart Position", duration: "8:20" },
      { id: 5, title: "Double Turns & Wraps", duration: "9:15" },
      { id: 6, title: "Counter-Clockwise Progression", duration: "7:45" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 8, title: "Shadow Position Variations", duration: "11:15" },
      { id: 9, title: "Speed Control & Styling", duration: "9:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic Two-Step",
      counts: "Q-Q-S-S",
      description: "Progressive pattern moving counterclockwise",
      steps: [
        "Quick step forward (R)",
        "Quick step forward (L)",
        "Slow step forward (R)",
        "Slow step forward (L)"
      ]
    },
    {
      name: "Turn Pattern",
      counts: "Q-Q-S-S",
      description: "Basic turning sequence",
      steps: [
        "Quick step to turn",
        "Quick step continuing turn",
        "Slow step completing turn",
        "Slow step to finish"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Pattern",
        pattern: "Quick-Quick-Slow-Slow",
        description: "Standard two-step timing"
      }
    ],
    recommendedSongs: [
      {
        title: "Neon Moon",
        artist: "Brooks & Dunn",
        tempo: "Medium",
        style: "Traditional Country"
      },
      {
        title: "Amazed",
        artist: "Lonestar",
        tempo: "Slow",
        style: "Modern Country"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Maintain strong frame",
      "Lead with body movement",
      "Control direction and speed",
      "Navigate the dance floor"
    ],
    follow: [
      "Match leader's stride length",
      "Stay connected through frame",
      "Maintain counterbalance",
      "Follow momentum naturally"
    ]
  },
  theme: {
    primary: "green-900",
    secondary: "green-600",
    accent: "green"
  }
};

const TwoStepPage = () => {
  return (
    <BaseDanceStyle data={twoStepData}>
      <div className="mt-8 bg-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Floor Craft Tips</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-green-200 rounded">
            <h4 className="font-semibold">Line of Dance</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Move counterclockwise around the floor</li>
              <li>Stay in your lane</li>
              <li>Maintain consistent speed</li>
              <li>Be aware of other couples</li>
            </ul>
          </div>
          <div className="p-4 border border-green-200 rounded">
            <h4 className="font-semibold">Speed Control</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Adjust to floor conditions</li>
              <li>Match other dancers' pace</li>
              <li>Use progressive movement</li>
              <li>Control momentum through turns</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default TwoStepPage;