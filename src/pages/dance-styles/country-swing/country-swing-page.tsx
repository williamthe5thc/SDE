// src/pages/dance-styles/dance-style-page.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import TutorialPlayer from '@/components/dance-styles/TutorialPlayer';
import PracticeGuide from '@/components/dance-styles/PracticeGuide';  // Changed from { PracticeGuide 

import { useGlobalContext } from '@/context/GlobalContext';
import { DanceData, Level, Tutorial, PracticeStep } from '@/types/dance';

interface DanceStyleData {
  name: string;
  description: string;
  history: string;
  difficulty: string;
  videoUrl: string;
  practiceSteps: {
    title: string;
    description: string;
    steps: string[];  // Changed this to match PracticeStep interface
  }[];
}

const DanceStylePage = () => {
  const { styleId } = useParams<{ styleId: string }>();
  const { state } = useGlobalContext();

  const danceStyleData: DanceStyleData = {
    name: 'Salsa',
    description: 'A vibrant Latin dance characterized by quick steps and hip movements.',
    history: 'Salsa emerged from Cuban and Puerto Rican dance traditions...',
    difficulty: 'Intermediate',
    videoUrl: '/assets/videos/tutorials/salsa-basics.mp4',
    practiceSteps: [
      {
        title: 'Basic Step Pattern',
        description: 'Learn the fundamental 8-count basic step pattern.',
        steps: [  // Changed from tips to steps
          'Keep your weight forward',
          'Maintain a slight bend in your knees',
          'Practice with and without music',
        ],
      },
    ]
  };

  return (
    <>
      <SEO 
        title={`Learn ${danceStyleData.name} - The Social Dance Effect`}
        description={danceStyleData.description}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {danceStyleData.name}
          </h1>
          <p className="text-xl">{danceStyleData.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Quick Info</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600">Difficulty</dt>
                  <dd className="font-medium">{danceStyleData.difficulty}</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Next Class</dt>
                  <dd className="font-medium">Tuesday, 7:00 PM</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Location</dt>
                  <dd className="font-medium">Main Studio - Provo</dd>
                </div>
              </dl>
              <button className="w-full mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Register for Class
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Video Tutorial */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Learn the Basics</h2>
              <TutorialPlayer
                videoUrl={danceStyleData.videoUrl}
                title="Introduction to Salsa"
                description="Get started with the fundamental steps and movements of Salsa dancing."
                timestamps={[
                  { time: 0, label: 'Introduction' },
                  { time: 120, label: 'Basic Step Pattern' },
                  { time: 300, label: 'Leading and Following' },
                ]}
              />
            </section>

            {/* Practice Guide */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Practice Guide</h2>
             <PracticeGuide
  title={`${danceStyleData.name} Practice Guide`}  // Use title instead of danceStyle
  difficulty="Beginner"                            // Use difficulty instead of level
  steps={danceStyleData.practiceSteps}
/>
            </section>

            {/* History Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">History & Background</h2>
              <div className="prose max-w-none">
                <p>{danceStyleData.history}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DanceStylePage;