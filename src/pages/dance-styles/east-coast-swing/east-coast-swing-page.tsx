// src/pages/dance-styles/east-coast-swing/east-coast-swing-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const eastCoastSwingData = {
  title: "East Coast Swing",
  description: "A lively, upbeat social dance derived from Lindy Hop, characterized by its bouncy rock step and triple steps. Perfect for swing and rock & roll music!",
  history: `East Coast Swing evolved from Lindy Hop in the 1940s as a simplified form of swing dancing. 
    Dance studios, particularly Arthur Murray, developed this standardized version to make swing dancing 
    more accessible to the general public. The basic 6-count pattern and rock step made it easier to learn 
    than the more complex 8-count Lindy Hop. Today, it remains one of the most popular social dances, 
    adaptable to various music styles from classic swing to modern rock and pop.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic 6-Count Pattern", duration: "6:30" },
      { id: 2, title: "Rock Step Technique", duration: "5:45" },
      { id: 3, title: "Lead & Follow Basics", duration: "7:15" }
    ],
    intermediate: [
      { id: 4, title: "Triple Step Variations", duration: "8:20" },
      { id: 5, title: "Inside & Outside Turns", duration: "9:15" },
      { id: 6, title: "Changing Places & Tuck Turns", duration: "8:45" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 8, title: "Swing Outs & Lindy Moves", duration: "11:15" },
      { id: 9, title: "Musicality & Styling", duration: "9:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Rock Step Basic",
      counts: "1, 2, 3&4, 5&6",
      description: "Foundation pattern for East Coast Swing",
      steps: [
        "Rock step back (1-2)",
        "Triple step in place (3&4)",
        "Triple step in place (5&6)",
        "Maintain bounce throughout"
      ]
    },
    {
      name: "Basic Turn",
      counts: "1, 2, 3&4, 5&6",
      description: "Simple right-hand turn pattern",
      steps: [
        "Rock step back (1-2)",
        "Begin turn on triple step (3&4)",
        "Complete turn (5&6)",
        "Keep bouncy rhythm"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic 6-Count",
        pattern: "rock-step-triple-step-triple-step",
        description: "Standard timing pattern"
      }
    ],
    recommendedSongs: [
      {
        title: "In the Mood",
        artist: "Glenn Miller",
        tempo: "Medium-Fast",
        style: "Big Band"
      },
      {
        title: "Rock Around the Clock",
        artist: "Bill Haley",
        tempo: "Fast",
        style: "Rock & Roll"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Keep frame light but connected",
      "Lead with clear body movement",
      "Stay relaxed in shoulders",
      "Maintain consistent rhythm"
    ],
    follow: [
      "Follow through complete weight changes",
      "Keep bouncy rhythm throughout",
      "Stay connected through frame",
      "Match leader's energy"
    ]
  },
  theme: {
    primary: "amber-900",
    secondary: "amber-600",
    accent: "amber"
  }
};

const EastCoastSwingPage = () => {
  return (
    <BaseDanceStyle data={eastCoastSwingData}>
      <div className="mt-8 bg-amber-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Practice Exercises</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-amber-200 rounded">
            <h4 className="font-semibold">Triple Step Training</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Practice 'tri-ple-step' rhythm in place</li>
              <li>Add gentle bounce in knees</li>
              <li>Keep steps small and controlled</li>
            </ul>
          </div>
          <div className="p-4 border border-amber-200 rounded">
            <h4 className="font-semibold">Rock Step Drill</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Push off back foot with energy</li>
              <li>Keep upper body stable</li>
              <li>Practice weight transfers</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default EastCoastSwingPage;