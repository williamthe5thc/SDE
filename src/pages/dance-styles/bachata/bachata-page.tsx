// src/pages/dance-styles/bachata/bachata-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const bachataData = {
  title: "Bachata",
  description: "A sensual Latin dance from the Dominican Republic characterized by romantic music, hip movements, and close partner connection.",
  history: `Bachata originated in the Dominican Republic during the 1960s, evolving from bolero rhythms. 
    Initially considered 'music of the bitter', it was associated with rural and lower-class life. The dance 
    and music gained worldwide popularity in the 1990s and 2000s, developing various styles including 
    Traditional, Modern, and Sensual Bachata. Today, it's celebrated globally for its intimate connection 
    and expressive movements.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:30" },
      { id: 2, title: "Side to Side Basic", duration: "6:15" },
      { id: 3, title: "Basic Turn Patterns", duration: "7:00" },
      { id: 4, title: "Hip Movement Basics", duration: "6:45" }
    ],
    intermediate: [
      { id: 5, title: "Body Wave Movements", duration: "8:30" },
      { id: 6, title: "Sensual Styling", duration: "9:15" },
      { id: 7, title: "Intermediate Turn Combinations", duration: "8:45" }
    ],
    advanced: [
      { id: 8, title: "Complex Body Movement", duration: "10:30" },
      { id: 9, title: "Advanced Turn Patterns", duration: "11:00" },
      { id: 10, title: "Sensual Bachata Choreography", duration: "12:15" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic Step",
      counts: "1-2-3-tap, 5-6-7-tap",
      description: "Foundation of all bachata moves",
      steps: [
        "Side step left (1)",
        "Together (2)",
        "Side step left (3)",
        "Hip lift/tap (4)",
        "Repeat right side (5-8)"
      ]
    },
    {
      name: "Side to Side",
      counts: "1-2-3-tap, 5-6-7-tap",
      description: "Basic lateral movement pattern",
      steps: [
        "Step left (1)",
        "Together (2)",
        "Step left (3)",
        "Tap (4)",
        "Reverse direction (5-8)"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Rhythm",
        pattern: "Quick-quick-quick-tap",
        description: "Standard bachata timing"
      },
      {
        name: "Syncopation",
        pattern: "Quick-slow-quick",
        description: "Advanced timing variation"
      }
    ],
    recommendedSongs: [
      {
        title: "Propuesta Indecente",
        artist: "Romeo Santos",
        tempo: "Medium",
        style: "Modern Bachata"
      },
      {
        title: "Darte un Beso",
        artist: "Prince Royce",
        tempo: "Medium",
        style: "Traditional Bachata"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Lead with body movement, not arms",
      "Stay connected to partner's center",
      "Maintain consistent frame pressure",
      "Allow flexibility in frame"
    ],
    follow: [
      "Follow through complete movements",
      "Stay connected through frame",
      "Match leader's energy",
      "Maintain proper distance"
    ]
  },
  theme: {
    primary: "purple-900",
    secondary: "purple-600",
    accent: "purple"
  }
};

const BachataPage = () => {
  return (
    <BaseDanceStyle data={bachataData}>
      <div className="mt-8 bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Styles of Bachata</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-purple-200 rounded">
            <h4 className="font-semibold">Traditional Bachata</h4>
            <p>Original Dominican style with simple, elegant movements</p>
          </div>
          <div className="p-4 border border-purple-200 rounded">
            <h4 className="font-semibold">Modern Bachata</h4>
            <p>Contemporary fusion with urban dance elements</p>
          </div>
          <div className="p-4 border border-purple-200 rounded">
            <h4 className="font-semibold">Sensual Bachata</h4>
            <p>Focuses on body movement and intimate connection</p>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default BachataPage;