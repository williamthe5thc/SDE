// src/pages/dance-styles/salsa/salsa-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const salsaData = {
  title: "Salsa",
  description: "A vibrant, energetic Latin dance characterized by quick turns, hip movements, and intricate footwork, danced on the 1 or 2.",
  history: `Salsa emerged in the 1960s in New York City, blending Cuban Son, Mambo, and other Caribbean 
    dance styles. It evolved through various Latin communities, developing distinct styles including LA Style 
    (danced on 1) and New York Style (danced on 2). Today, salsa is celebrated worldwide through social 
    dancing and competitions.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:45" },
      { id: 2, title: "Right Turn Basic", duration: "6:30" },
      { id: 3, title: "Left Turn Basic", duration: "6:15" },
      { id: 4, title: "Cross Body Lead", duration: "7:00" }
    ],
    intermediate: [
      { id: 5, title: "Multiple Turn Combinations", duration: "8:30" },
      { id: 6, title: "Hand Styling", duration: "7:45" },
      { id: 7, title: "Salsa Shines", duration: "9:15" }
    ],
    advanced: [
      { id: 8, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 9, title: "Advanced Styling & Body Movement", duration: "11:45" },
      { id: 10, title: "Performance Combinations", duration: "12:00" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic Step",
      counts: "1-2-3, 5-6-7",
      description: "Foundation of all salsa moves",
      steps: [
        "Forward/back break step",
        "Side step",
        "Step in place",
        "Repeat opposite direction"
      ]
    },
    {
      name: "Cross Body Lead",
      counts: "1-2-3, 5-6-7",
      description: "Lead crosses in front of follow",
      steps: [
        "Forward break",
        "Quarter turn left",
        "Cross in front",
        "Complete pattern"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "On1 (LA Style)",
        pattern: "1-2-3-pause-5-6-7-pause",
        description: "Break forward on count 1"
      },
      {
        name: "On2 (NY Style)",
        pattern: "1-2-3-pause-5-6-7-pause",
        description: "Break on count 2"
      }
    ],
    recommendedSongs: [
      {
        title: "Vivir Mi Vida",
        artist: "Marc Anthony",
        tempo: "Medium",
        style: "Modern Salsa"
      },
      {
        title: "La Vida Es Un Carnaval",
        artist: "Celia Cruz",
        tempo: "Medium-Fast",
        style: "Classic Salsa"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Create clear intentions through body movement",
      "Maintain consistent frame without being rigid",
      "Lead through your center, not your arms",
      "Stay grounded during patterns"
    ],
    follow: [
      "Maintain your own frame and balance",
      "Follow momentum, not hands",
      "Stay connected to the ground",
      "Complete each pattern fully"
    ]
  },
  theme: {
    primary: "blue-900",
    secondary: "blue-600",
    accent: "blue"
  }
};

const SalsaPage = () => {
  return (
    <BaseDanceStyle data={salsaData}>
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Salsa Styles</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">LA Style (On1)</h4>
            <p>Break forward on count 1, popular worldwide</p>
          </div>
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">NY Style (On2)</h4>
            <p>Break on count 2, popular in New York</p>
          </div>
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">Cuban Style</h4>
            <p>Circular motion, more relaxed timing</p>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default SalsaPage;