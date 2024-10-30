// src/pages/home/home-page.tsx
import React from 'react';
import { SEO } from '@/components/common/SEO';
import { StyleOverview } from '@/components/dance-styles/StyleOverview';
import { useGlobalContext } from '@/context/GlobalContext';

const HomePage = () => {
  const { state } = useGlobalContext();

  // Sample data for StyleOverview
  const sampleDanceStyle = {
    history: {
      origin: "Originated in the 1920s ballrooms of New York",
      evolution: "Evolved from traditional ballroom dance styles",
      significance: "Became one of the most popular social dances in America"
    },
    basicSteps: [
      {
        name: "Basic Step",
        description: "The fundamental 8-count pattern",
        keyPoints: ["Start with feet together", "Step back on count 1", "Return on count 5"]
      }
    ],
    commonMistakes: [
      "Looking at feet too much",
      "Rushing the tempo",
      "Poor posture"
    ]
  };

  

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Welcome to Social Dance Effect"
        description="Learn social dancing with our comprehensive guides and community"
      />
      
      {/* Hero Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Social Dance Effect
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your journey to becoming a confident social dancer starts here
          </p>
        </div>
      </section>

      {/* Dance Style Overview Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Dance Style</h2>
          <StyleOverview 
            history={sampleDanceStyle.history}
            basicSteps={sampleDanceStyle.basicSteps}
            commonMistakes={sampleDanceStyle.commonMistakes}
          />
        </div>
      </section>

      
    </div>
  );
};

export default HomePage;