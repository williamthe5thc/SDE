// src/pages/dance-styles/line-dancing/line-dancing-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const lineDancingData = {
  title: "Line Dancing",
  description: "A choreographed dance with repeated sequences of steps performed in lines or rows by a group of people. No partner required!",
  history: `Line dancing emerged in the 1970s during the disco era but gained massive popularity 
    in the 1990s with country western dancing. Today, line dancing encompasses many musical styles 
    including country, pop, and Latin rhythms. It's perfect for beginners as it requires no partner 
    and helps develop rhythm and coordination.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Line Dancing Steps", duration: "4:45" },
      { id: 2, title: "Grapevine and Shuffle", duration: "6:30" },
      { id: 3, title: "Electric Slide Basics", duration: "7:15" }
    ],
    intermediate: [
      { id: 4, title: "Tush Push Tutorial", duration: "8:20" },
      { id: 5, title: "Copperhead Road", duration: "10:15" }
    ],
    advanced: [
      { id: 6, title: "Advanced Footwork Patterns", duration: "11:30" },
      { id: 7, title: "Complex Line Dance Combinations", duration: "13:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Grapevine",
      counts: "1-2-3-4",
      description: "Basic side-stepping pattern",
      steps: [
        "Step right with right foot",
        "Cross left behind right",
        "Step right with right foot",
        "Touch left next to right"
      ]
    },
    {
      name: "Basic Shuffle",
      counts: "1&2",
      description: "Triple step movement",
      steps: [
        "Step forward right",
        "Step left next to right",
        "Step forward right again",
        "Repeat with left foot"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "4/4 Time",
        pattern: "1-2-3-4",
        description: "Basic 4-count rhythm"
      }
    ],
    recommendedSongs: [
      {
        title: "Electric Slide",
        artist: "Marcia Griffiths",
        tempo: "Medium",
        style: "Classic"
      },
      {
        title: "Achy Breaky Heart",
        artist: "Billy Ray Cyrus",
        tempo: "Medium",
        style: "Country"
      }
    ]
  },
  theme: {
    primary: "blue-900",
    secondary: "blue-600",
    accent: "blue"
  }
};

const LineDancingPage = () => {
  return (
    <BaseDanceStyle data={lineDancingData}>
      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Popular Line Dances</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">Electric Slide</h4>
            <p className="text-sm text-gray-600">32 counts • Beginner Level</p>
            <p className="mt-2">Classic line dance perfect for beginners</p>
          </div>
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">Boot Scootin' Boogie</h4>
            <p className="text-sm text-gray-600">32 counts • Beginner-Intermediate</p>
            <p className="mt-2">Popular country-western line dance</p>
          </div>
          <div className="p-4 border border-blue-200 rounded">
            <h4 className="font-semibold">Copperhead Road</h4>
            <p className="text-sm text-gray-600">48 counts • Intermediate</p>
            <p className="mt-2">High-energy dance with kicks and turns</p>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default LineDancingPage;