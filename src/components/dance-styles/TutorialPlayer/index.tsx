// src/components/dance-styles/TutorialPlayer/index.tsx
import React, { useState } from 'react';

interface TutorialPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  timestamps?: { time: number; label: string }[];
}

const TutorialPlayer: React.FC<TutorialPlayerProps> = ({
  videoUrl,
  title,
  description,
  timestamps = [],
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video Container */}
      <div className="relative aspect-w-16 aspect-h-9">
        <video
          src={videoUrl}
          className="w-full h-full object-cover"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* Tutorial Information */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Timestamps */}
        {timestamps.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Lesson Breakdown</h3>
            <div className="space-y-2">
              {timestamps.map((timestamp, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 rounded hover:bg-gray-50"
                  onClick={() => {
                    const videoElement = document.querySelector('video');
                    if (videoElement) {
                      videoElement.currentTime = timestamp.time;
                      videoElement.play();
                    }
                  }}
                >
                  <span className="text-blue-600">
                    {new Date(timestamp.time * 1000).toISOString().substr(14, 5)}
                  </span>
                  <span className="ml-3 text-gray-700">{timestamp.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialPlayer;
