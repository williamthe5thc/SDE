// src/pages/dance-styles/country-swing/country-swing-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';
import { PlayCircle } from 'lucide-react';

const countrySwingData = {
  title: "Country Swing",
  description: "A lively, energetic partner dance that combines elements of swing dancing with country western style.",
  history: `Country Swing evolved from traditional swing dancing in the American West, 
    adapting to country western music and culture. It's characterized by its quick tempo, 
    dynamic turns, and playful nature. Popular in western dance venues and country bars, 
    it maintains the core principles of swing dancing while incorporating unique elements 
    that suit country music's rhythm and style.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic 6-Count Pattern", duration: "5:30" },
      { id: 2, title: "Inside Turn Basics", duration: "6:15" },
      { id: 3, title: "Outside Turn Fundamentals", duration: "5:45" }
    ],
    intermediate: [
      { id: 4, title: "Sugar Push Variations", duration: "7:30" },
      { id: 5, title: "Multiple Turn Combinations", duration: "8:15" },
      { id: 6, title: "Dips and Leans", duration: "7:45" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turn Patterns", duration: "9:30" },
      { id: 8, title: "Aerial Moves and Lifts", duration: "10:15" },
      { id: 9, title: "Performance Combinations", duration: "11:00" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic 6-Count",
      counts: "1-2-3-4-5-6",
      description: "Foundation pattern for country swing",
      steps: [
        "Rock step back on 1-2",
        "Triple step on 3&4",
        "Triple step on 5&6",
        "Maintain frame throughout"
      ]
    },
    {
      name: "Inside Turn",
      counts: "1-2-3-4-5-6",
      description: "Basic right-hand turn for follower",
      steps: [
        "Lead: Basic footwork, guide turn",
        "Follow: Right turn under joined hands",
        "Both: Complete triple steps",
        "Return to basic position"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Rhythm",
        pattern: "1-2-3&4-5&6",
        description: "Standard 6-count pattern with triple steps"
      },
      {
        name: "Slow Rhythm",
        pattern: "1-2-3-4-5-6",
        description: "Modified pattern for slower songs"
      }
    ],
    recommendedSongs: [
      {
        title: "Boot Scootin' Boogie",
        artist: "Brooks & Dunn",
        tempo: "Medium-Fast",
        style: "Traditional"
      },
      {
        title: "Save a Horse (Ride a Cowboy)",
        artist: "Big & Rich",
        tempo: "Fast",
        style: "Modern"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Maintain clear frame",
      "Lead with body movement",
      "Provide clear directional cues",
      "Control momentum and speed"
    ],
    follow: [
      "Stay connected through frame",
      "Complete each pattern fully",
      "Maintain balanced position",
      "Match leader's energy"
    ]
  },
  theme: {
    primary: "amber-800",
    secondary: "amber-600",
    accent: "amber"
  }
};

const CountrySwingPage = () => {
  return (
    <BaseDanceStyle data={countrySwingData}>
      {/* Add any country swing specific content here */}
      <div className="mt-8 bg-amber-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Why Country Swing?</h3>
        <ul className="space-y-2">
          <li>✓ Easy to learn basic steps</li>
          <li>✓ Great workout and cardio</li>
          <li>✓ Vibrant social dance community</li>
          <li>✓ Works with modern country music</li>
        </ul>
      </div>
    </BaseDanceStyle>
  );
};

export default CountrySwingPage;