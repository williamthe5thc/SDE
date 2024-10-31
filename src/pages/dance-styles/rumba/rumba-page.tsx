
// src/pages/dance-styles/rumba/rumba-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const rumbaData = {
  title: "Rumba",
  description: "A romantic Latin dance characterized by its sensual hip movements and slow, dramatic rhythm. The 'dance of love' tells a story of courtship through fluid movements and expressive gestures.",
  history: `The Rumba originated in Cuba, with roots in African rhythms and Spanish colonial influence. 
    While there are several styles of Rumba (including Guaguancó, Yambú, and Columbia), the ballroom version 
    evolved from the Cuban Son and became popular in the United States during the 1930s. Today's ballroom Rumba 
    is known for its slower tempo and romantic character, making it a favorite among social dancers.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Box Step & Cuban Motion", duration: "7:30" },
      { id: 2, title: "Hip Movement Technique", duration: "6:45" },
      { id: 3, title: "Basic Holds & Frame", duration: "5:15" }
    ],
    intermediate: [
      { id: 4, title: "Spot Turns & Hand-to-Hand", duration: "8:20" },
      { id: 5, title: "Progressive Walks & Checks", duration: "9:15" },
      { id: 6, title: "Fan Position & Hockey Stick", duration: "10:00" }
    ],
    advanced: [
      { id: 7, title: "Advanced Cuban Motion", duration: "11:30" },
      { id: 8, title: "Complex Turn Patterns", duration: "12:15" },
      { id: 9, title: "Advanced Styling & Expression", duration: "10:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Box Step",
      counts: "2-3-4, 1",
      description: "Basic box pattern with Cuban motion",
      steps: [
        "Forward step with Cuban motion",
        "Side step continuing motion",
        "Close with weight change",
        "Repeat pattern backwards"
      ]
    },
    {
      name: "Progressive Walks",
      counts: "2-3-4, 1",
      description: "Walking steps with Cuban motion",
      steps: [
        "Forward step with hip motion",
        "Continue walking pattern",
        "Maintain Cuban motion",
        "Control speed and momentum"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Timing",
        pattern: "Slow-Quick-Quick",
        description: "Standard rumba rhythm"
      }
    ],
    recommendedSongs: [
      {
        title: "Bésame Mucho",
        artist: "Various Artists",
        tempo: "Slow",
        style: "Traditional"
      },
      {
        title: "Perhaps, Perhaps, Perhaps",
        artist: "Doris Day",
        tempo: "Medium",
        style: "Classic"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Maintain strong core connection",
      "Express emotion through movement",
      "Lead through body, not arms",
      "Control tempo and momentum"
    ],
    follow: [
      "Match partner's energy",
      "Express through styling",
      "Maintain frame connection",
      "Complete each movement fully"
    ]
  },
  theme: {
    primary: "rose-900",
    secondary: "rose-600",
    accent: "rose"
  }
};

const RumbaPage = () => {
  return (
    <BaseDanceStyle data={rumbaData}>
      <div className="mt-8 bg-rose-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Cuban Motion Technique</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-rose-200 rounded">
            <h4 className="font-semibold">Hip Movement</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Begin rising on 1</li>
              <li>Continue rise through 2</li>
              <li>Lower gradually on 3</li>
              <li>Smooth transitions between steps</li>
            </ul>
          </div>
          <div className="p-4 border border-rose-200 rounded">
            <h4 className="font-semibold">Expression</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Tell a story through movement</li>
              <li>Use facial expressions</li>
              <li>Connect with your partner</li>
              <li>Feel the music's emotion</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default RumbaPage;