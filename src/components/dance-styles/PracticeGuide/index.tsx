// src/components/dance-styles/PracticeGuide/index.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface PracticeStep {
  title: string;
  description: string;
  steps: string[];
}

interface PracticeGuideProps {
  title?: string;
  steps: PracticeStep[];
  difficulty?: string;
}

const PracticeGuide: React.FC<PracticeGuideProps> = ({
  title,
  steps,
  difficulty = 'Beginner'
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || `${difficulty} Practice Guide`}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <ul className="list-disc pl-4 space-y-1">
                {step.steps.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeGuide;