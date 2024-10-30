// RulesGuide.tsx

import React from 'react';

interface Rule {
  id: string;
  title: string;
  description: string;
}

interface RulesGuideProps {
  rules: Rule[];
}

export const RulesGuide: React.FC<RulesGuideProps> = ({ rules = [] }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Event Rules & Guidelines</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-6">
          {rules.map((rule) => (
            <div key={rule.id}>
              <h3 className="text-lg font-semibold mb-2">{rule.title}</h3>
              <p className="text-gray-600">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};