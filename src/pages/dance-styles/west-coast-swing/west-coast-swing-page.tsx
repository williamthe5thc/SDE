// src/pages/dance-styles/west-coast-swing/west-coast-swing-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const westCoastSwingData = {
  title: "West Coast Swing",
  description: "A smooth, dynamic partner dance characterized by its elastic connection and musicality. Danced to a variety of music from blues to pop.",
  history: `West Coast Swing evolved from Lindy Hop in the 1940s and was influenced by blues dancing. 
    Originally called "Western Swing" in California, it has become one of the most versatile partner 
    dances, adapted to modern music while maintaining its characteristic slot pattern and elastic connection.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Sugar Push Pattern", duration: "6:30" },
      { id: 2, title: "Left Side Pass Fundamentals", duration: "7:15" },
      { id: 3, title: "Right Side Pass Basics", duration: "5:45" }
    ],
    intermediate: [
      { id: 4, title: "Whip Variations", duration: "9:20" },
      { id: 5, title: "Musicality & Styling", duration: "8:45" },
      { id: 6, title: "Inside Turn Patterns", duration: "7:30" }
    ],
    advanced: [
      { id: 7, title: "Advanced Connection", duration: "11:15" },
      { id: 8, title: "Musical Interpretation", duration: "10:30" },
      { id: 9, title: "Complex Pattern Combinations", duration: "12:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Sugar Push",
      counts: "1-2-3&4-5&6",
      description: "Basic 6-count pattern with compression",
      steps: [
        "Walk walk",
        "Triple step in place",
        "Triple step back",
        "Anchor step"
      ]
    },
    {
      name: "Left Side Pass",
      counts: "1-2-3&4-5&6",
      description: "Lead redirects follow to left side",
      steps: [
        "Walk walk with direction change",
        "Triple step passing",
        "Triple step forward",
        "Anchor step"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic 6-Count",
        pattern: "1-2-3&4-5&6",
        description: "Standard WCS timing"
      }
    ],
    recommendedSongs: [
      {
        title: "Stay With Me",
        artist: "Sam Smith",
        tempo: "Medium",
        style: "Pop"
      },
      {
        title: "Feeling Good",
        artist: "Michael Bublé",
        tempo: "Medium",
        style: "Blues"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Create clear intentions",
      "Maintain elastic connection",
      "Lead through your center",
      "Stay grounded in anchor"
    ],
    follow: [
      "Match connection elasticity",
      "Complete each pattern fully",
      "Stay in your slot",
      "Strong anchor technique"
    ]
  },
  theme: {
    primary: "blue-900",
    secondary: "blue-600",
    accent: "blue"
  }
};

const WestCoastSwingPage = () => {
  return (
    <BaseDanceStyle data={westCoastSwingData}>
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Connection Elements</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">Elastic Connection</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Stretch and compress</li>
              <li>Maintain tension without force</li>
              <li>Connect through the ground</li>
              <li>Use body movement, not arms</li>
            </ul>
          </div>
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">The Slot</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Dance in a linear track</li>
              <li>Leader steps off slot</li>
              <li>Follower travels on slot</li>
              <li>Return to slot end of pattern</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default WestCoastSwingPage;