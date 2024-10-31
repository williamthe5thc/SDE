// src/pages/dance-styles/merengue/merengue-page.tsx
import React from 'react';
import BaseDanceStyle from '@/components/dance-styles/BaseDanceStyle';

const merengueData = {
  title: "Merengue",
  description: "The national dance of the Dominican Republic, known for its marching rhythm, hip motion, and easy-to-learn steps.",
  history: `Merengue emerged in the Dominican Republic in the mid-19th century. Originally a rural dance, 
    it gained popularity and was promoted to national dance status in the 1930s by Rafael Trujillo. 
    The dance is characterized by its simple marching step and hip movement, making it one of the 
    easiest Latin dances to learn while still offering room for complexity and styling.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Marching Step", duration: "4:30" },
      { id: 2, title: "Hip Motion Basics", duration: "5:15" },
      { id: 3, title: "Simple Turns", duration: "6:00" },
      { id: 4, title: "Partner Connection", duration: "5:45" }
    ],
    intermediate: [
      { id: 5, title: "Advanced Hip Movement", duration: "7:30" },
      { id: 6, title: "Turn Combinations", duration: "8:15" },
      { id: 7, title: "Styling & Arm Work", duration: "7:45" }
    ],
    advanced: [
      { id: 8, title: "Complex Patterns", duration: "9:30" },
      { id: 9, title: "Performance Styling", duration: "10:15" },
      { id: 10, title: "Footwork Variations", duration: "8:45" }
    ]
  },
  basicPatterns: [
    {
      name: "Basic March",
      counts: "1, 2, 3, 4",
      description: "Simple marching step with hip motion",
      steps: [
        "Step right foot",
        "Step left foot",
        "Continue alternating",
        "Add hip motion naturally"
      ]
    },
    {
      name: "Spot Turn",
      counts: "1, 2, 3, 4",
      description: "Turn in place while maintaining rhythm",
      steps: [
        "Start with basic step",
        "Begin rotating direction",
        "Continue stepping while turning",
        "Complete full rotation"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic Rhythm",
        pattern: "1-2-3-4",
        description: "Simple marching beat"
      }
    ],
    recommendedSongs: [
      {
        title: "El Baile del Perrito",
        artist: "Wilfrido Vargas",
        tempo: "Fast",
        style: "Traditional"
      },
      {
        title: "La Bilirrubina",
        artist: "Juan Luis Guerra",
        tempo: "Medium",
        style: "Modern"
      }
    ]
  },
  partnerWork: {
    lead: [
      "Keep frame light but connected",
      "Lead with clear body movement",
      "Stay relaxed and have fun",
      "Guide partner gently"
    ],
    follow: [
      "Stay connected through frame",
      "Mirror partner's energy",
      "Maintain good posture",
      "Follow natural momentum"
    ]
  },
  theme: {
    primary: "orange-800",
    secondary: "orange-600",
    accent: "orange"
  }
};

const MerenguePage = () => {
  return (
    <BaseDanceStyle data={merengueData}>
      <div className="mt-8 bg-orange-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Hip Movement Guide</h3>
        <div className="grid gap-4">
          <div className="p-4 border border-orange-200 rounded">
            <h4 className="font-semibold">Basic Hip Action</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Natural hip lift with each step</li>
              <li>Keep movement controlled</li>
              <li>Don't force the motion</li>
              <li>Maintain good posture</li>
            </ul>
          </div>
          <div className="p-4 border border-orange-200 rounded">
            <h4 className="font-semibold">Advanced Styling</h4>
            <ul className="list-disc pl-4 mt-2">
              <li>Add hip figure-8s</li>
              <li>Practice smooth transitions</li>
              <li>Keep upper body stable</li>
              <li>Control speed and size of movement</li>
            </ul>
          </div>
        </div>
      </div>
    </BaseDanceStyle>
  );
};

export default MerenguePage;