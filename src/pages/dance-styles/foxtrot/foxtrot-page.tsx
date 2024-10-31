
// src/pages/dance-styles/foxtrot/foxtrot-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const foxtrotData = {
  title: "Foxtrot",
  description: "An elegant and smooth ballroom dance characterized by long, flowing movements and a distinctive slow-quick-quick rhythm.",
  history: `The Foxtrot emerged in the summer of 1914, named after its creator, vaudeville actor Harry Fox. 
    Originally a fast-paced dance set to ragtime music, it evolved into the smooth, sophisticated style we know today. 
    The dance gained popularity in the ballroom scene during the 1920s and 1930s, eventually becoming a staple of 
    social dancing and competitive ballroom programs.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Forward and Backward Steps", duration: "6:45" },
      { id: 2, title: "The Box Step Pattern", duration: "7:30" },
      { id: 3, title: "Promenade Position Basics", duration: "5:15" }
    ],
    intermediate: [
      { id: 4, title: "Three Step and Feather Step", duration: "8:20" },
      { id: 5, title: "Natural and Reverse Turns", duration: "9:45" },
      { id: 6, title: "Progressive Side Steps", duration: "7:15" }
    ],
    advanced: [
      { id: 7, title: "Weave Patterns", duration: "10:30" },
      { id: 8, title: "Outside Swivels", duration: "11:15" },
      { id: 9, title: "Advanced Combinations", duration: "12:00" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic Step",
      counts: "SQQ SQQ",
      description: "Progressive walking pattern",
      steps: [
        "Slow step forward (1-2)",
        "Quick side step (3)",
        "Quick close (4)",
        "Repeat opposite foot"
      ]
    },
    {
      name: "Box Step",
      counts: "SQQ SQQ",
      description: "Basic box pattern",
      steps: [
        "Forward step (slow)",
        "Side step (quick)",
        "Close feet (quick)",
        "Back step and repeat"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Timing",
        pattern: "Slow-Quick-Quick",
        description: "Standard foxtrot rhythm"
      }
    ],
    recommendedSongs: [
      {
        title: "The Way You Look Tonight",
        artist: "Frank Sinatra",
        tempo: "Medium",
        style: "Classic"
      },
      {
        title: "Fly Me to the Moon",
        artist: "Michael Bublé",
        tempo: "Medium",
        style: "Modern"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Maintain proper frame throughout movements",
      "Lead through body movement, not arms",
      "Keep steps smooth and gliding",
      "Move together as one unit"
    ],
    follow: [
      "Follow through complete weight transfers",
      "Stay connected through frame",
      "Match leader's stride length",
      "Maintain elegant posture"
    ]
  },
  theme: {
    primary: "purple-900",
    secondary: "purple-600",
    accent: "purple"
  }
};

const FoxtrotPage = () => {
  return (
    <BaseDanceStyle data={foxtrotData}>
      <div className="mt-8 bg-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Frame and Posture</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-purple-200 rounded">
            <h4 className="font-semibold">Basic Frame</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Stand tall with shoulders back</li>
              <li>Maintain contact points with partner</li>
              <li>Keep elbows lifted and supported</li>
            </ul>
          </div>
          <div className="p-4 border border-purple-200 rounded">
            <h4 className="font-semibold">Movement Style</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Smooth, continuous motion</li>
              <li>Gliding steps with no bounce</li>
              <li>Elegant rise and fall</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default FoxtrotPage;