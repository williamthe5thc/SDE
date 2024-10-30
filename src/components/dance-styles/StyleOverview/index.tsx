// src/components/dance-styles/StyleOverview/index.tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StyleOverviewProps {
  history: {
    origin: string;
    evolution: string;
    significance: string;
  };
  basicSteps: Array<{
    name: string;
    description: string;
    keyPoints: string[];
  }>;
  commonMistakes: string[];
}

export const StyleOverview: React.FC<StyleOverviewProps> = ({
  history,
  basicSteps,
  commonMistakes
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* History Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">History</h3>
          <div className="space-y-4">
            <p><strong>Origin:</strong> {history.origin}</p>
            <p><strong>Evolution:</strong> {history.evolution}</p>
            <p><strong>Significance:</strong> {history.significance}</p>
          </div>
        </section>

        {/* Basic Steps Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Basic Steps</h3>
          <div className="space-y-6">
            {basicSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded">
                <h4 className="font-semibold mb-2">{step.name}</h4>
                <p className="mb-3">{step.description}</p>
                <div className="pl-4">
                  <h5 className="font-medium mb-2">Key Points:</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    {step.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes Section */}
        <section>
          <h3 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h3>
          <ul className="list-disc pl-6 space-y-2">
            {commonMistakes.map((mistake, index) => (
              <li key={index}>{mistake}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StyleOverview;