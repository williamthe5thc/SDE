// ProgressTracker.tsx
import React from 'react';

interface Progress {
  totalSkills: number;
  completedSkills: number;
  currentLevel: string;
  nextMilestone: string;
  skillsToNextLevel: number;
}

interface ProgressTrackerProps {
  progress: Progress;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const completionPercentage = (progress.completedSkills / progress.totalSkills) * 100;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
        
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span>Progress to {progress.nextMilestone}</span>
            <span>{completionPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Current Level</p>
            <p className="text-xl font-semibold">{progress.currentLevel}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm text-gray-600">Skills to Next Level</p>
            <p className="text-xl font-semibold">{progress.skillsToNextLevel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};