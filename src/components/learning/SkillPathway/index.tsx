// SkillPathway.tsx
import React from 'react';

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  completed: boolean;
}

interface SkillPathwayProps {
  skills: Skill[];
  onSkillComplete?: (skillId: string) => void;
}

export const SkillPathway: React.FC<SkillPathwayProps> = ({
  skills = [],
  onSkillComplete
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Learning Pathway</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`bg-white shadow rounded-lg p-6 border-l-4 ${
              skill.completed ? 'border-green-500' : 'border-gray-300'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
                <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-gray-100">
                  {skill.level}
                </span>
              </div>
              {onSkillComplete && (
                <button
                  onClick={() => onSkillComplete(skill.id)}
                  className={`px-4 py-2 rounded ${
                    skill.completed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {skill.completed ? 'Completed' : 'Mark Complete'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};