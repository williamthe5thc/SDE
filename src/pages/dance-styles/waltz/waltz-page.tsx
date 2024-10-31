// src/pages/dance-styles/waltz/waltz-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const waltzData = {
  title: "Waltz",
  description: "An elegant ballroom dance characterized by its smooth, flowing movements and distinctive 3/4 time signature.",
  history: `The Waltz emerged in the late 18th century from German and Austrian folk dances. Initially 
    controversial due to its closed position, it became a symbol of elegance and refinement in European 
    ballrooms. Today, it exists in several forms including Modern Waltz (Slow), Viennese Waltz (Fast), 
    and Country Waltz, each maintaining the characteristic rise and fall motion and 3/4 timing.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Box Step", duration: "6:30" },
      { id: 2, title: "Proper Frame & Position", duration: "5:45" },
      { id: 3, title: "Rise & Fall Technique", duration: "7:15" }
    ],
    intermediate: [
      { id: 4, title: "Reverse Turns", duration: "8:30" },
      { id: 5, title: "Progressive Steps", duration: "7:45" },
      { id: 6, title: "Hesitation Change", duration: "9:00" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turns & Spins", duration: "10:15" },
      { id: 8, title: "Complex Combinations", duration: "11:30" },
      { id: 9, title: "Fleckrl", duration: "12:00" }
    ]
  },
  basicPatterns: [
    {
      name: "Box Step",
      counts: "1-2-3",
      description: "Foundation pattern forming a box shape",
      steps: [
        "Forward step (1)",
        "Side step (2)",
        "Close feet (3)",
        "Repeat starting back"
      ]
    },
    {
      name: "Natural Turn",
      counts: "1-2-3",
      description: "Basic turning pattern to the right",
      steps: [
        "Forward step turning right",
        "Side step continuing turn",
        "Close feet completing turn",
        "Repeat pattern"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "3/4 Time",
        pattern: "1-2-3",
        description: "Basic waltz timing"
      }
    ],
    recommendedSongs: [
      {
        title: "The Blue Danube",
        artist: "Johann Strauss II",
        tempo: "Medium",
        style: "Classical"
      },
      {
        title: "Moon River",
        artist: "Henry Mancini",
        tempo: "Slow",
        style: "Modern"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Maintain proper frame",
      "Lead with body movement",
      "Control rise and fall",
      "Guide direction changes"
    ],
    follow: [
      "Match partner's rise and fall",
      "Maintain frame connection",
      "Follow through turns",
      "Keep upper body quiet"
    ]
  },
  theme: {
    primary: "indigo-900",
    secondary: "indigo-600",
    accent: "indigo"
  }
};

const WaltzPage = () => {
  return (
    <BaseDanceStyle data={waltzData}>
      <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Rise & Fall Technique</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-indigo-200 rounded">
            <h4 className="font-semibold">Rise Phase</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Begin rising on count 1</li>
              <li>Continue through count 2</li>
              <li>Maximum height on count 2</li>
              <li>Keep shoulders level</li>
            </ul>
          </div>
          <div className="p-4 border border-indigo-200 rounded">
            <h4 className="font-semibold">Fall Phase</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Begin lowering on count 3</li>
              <li>Control the descent</li>
              <li>Maintain frame throughout</li>
              <li>Prepare for next rise</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default WaltzPage;