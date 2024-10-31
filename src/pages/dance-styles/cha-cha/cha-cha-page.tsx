// src/pages/dance-styles/cha-cha/cha-cha-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const chaChaData = {
  title: "Cha-Cha",
  description: "A lively, syncopated Latin dance characterized by its distinctive 'cha-cha-cha' rhythm and Cuban motion. Popular for its playful character and energetic movements.",
  history: `The Cha-Cha developed in Cuba in the early 1950s, evolving from the Danzón-Mambo. 
    Dance instructor Enrique Jorrín noticed his students had difficulty with the syncopated rhythms 
    of the Mambo and created a simpler rhythm they could follow more easily. The name came from the 
    sound of dancers' feet shuffling during the triple step, and the dance quickly became popular 
    worldwide for its energetic and flirtatious character.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:30" },
      { id: 2, title: "Cuban Motion Basics", duration: "6:15" },
      { id: 3, title: "Basic Turns & Underarm Turns", duration: "7:00" },
      { id: 4, title: "Check Steps", duration: "5:45" }
    ],
    intermediate: [
      { id: 5, title: "New York Walks", duration: "8:30" },
      { id: 6, title: "Spot Turn Variations", duration: "7:45" },
      { id: 7, title: "Hand to Hand", duration: "8:15" }
    ],
    advanced: [
      { id: 8, title: "Advanced Turn Patterns", duration: "9:30" },
      { id: 9, title: "Complex Combinations", duration: "10:15" },
      { id: 10, title: "Performance Styling", duration: "11:00" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic Step",
      counts: "2-3-4&1",
      description: "Foundation pattern of Cha-Cha",
      steps: [
        "Rock step forward (2)",
        "Recover back (3)",
        "Cha-cha-cha in place (4&1)",
        "Add Cuban motion throughout"
      ]
    },
    {
      name: "New York",
      counts: "2-3-4&1",
      description: "Side step with opening action",
      steps: [
        "Break forward/back (2)",
        "Recover (3)",
        "Side cha-cha-cha (4&1)",
        "Open to face partner's direction"
      ]
    },
    {
      name: "Spot Turn",
      counts: "2-3-4&1",
      description: "Turn in place",
      steps: [
        "Forward checking action (2)",
        "Recover turning (3)",
        "Complete turn with cha-cha-cha (4&1)",
        "Maintain Cuban motion through turn"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Rhythm",
        pattern: "2-3-4&1",
        description: "Standard Cha-Cha timing"
      },
      {
        name: "Guapacha",
        pattern: "2-3-4(pause)1",
        description: "Syncopated timing variation"
      }
    ],
    recommendedSongs: [
      {
        title: "Oye Como Va",
        artist: "Tito Puente",
        tempo: "Medium",
        style: "Traditional"
      },
      {
        title: "Sway",
        artist: "Michael Bublé",
        tempo: "Medium",
        style: "Modern"
      },
      {
        title: "Love and Dancing",
        artist: "Enrique Iglesias",
        tempo: "Medium-Fast",
        style: "Contemporary"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Lead with clear intention",
      "Maintain frame while moving",
      "Guide partner through turns",
      "Keep timing precise",
      "Show character and style"
    ],
    follow: [
      "Stay connected through frame",
      "Complete each movement fully",
      "Maintain Cuban motion",
      "Match leader's energy",
      "Express musicality independently"
    ]
  },
  theme: {
    primary: "pink-900",
    secondary: "pink-600",
    accent: "pink"
  }
};

const ChaChaPage = () => {
  return (
    <BaseDanceStyle data={chaChaData}>
      <div className="mt-8 bg-pink-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Key Technical Elements</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-pink-200 rounded">
            <h4 className="font-semibold">Cuban Motion</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Hip movement through straight legs</li>
              <li>Weight transfers create natural motion</li>
              <li>Movement initiates from the floor</li>
              <li>Maintain level shoulders</li>
              <li>Compact, controlled hip action</li>
            </ul>
          </div>
          <div className="p-4 border border-pink-200 rounded">
            <h4 className="font-semibold">Cha-Cha-Cha Rhythm</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Crisp, precise timing</li>
              <li>Sharp, quick triple step</li>
              <li>Clear weight changes</li>
              <li>Maintain consistent tempo</li>
              <li>Energy on the "cha-cha-cha"</li>
            </ul>
          </div>
          <div className="p-4 border border-pink-200 rounded">
            <h4 className="font-semibold">Dance Character</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Playful and flirtatious</li>
              <li>Sharp, precise movements</li>
              <li>Compact steps</li>
              <li>Strong musical connection</li>
              <li>Energetic expression</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default ChaChaPage;