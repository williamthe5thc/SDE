import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Video, 
  Music, 
  Users, 
  Dumbbell,
  PlayCircle,
  Timer,
  ArrowRight
} from 'lucide-react';
import { DanceData, Level, Tutorial } from '@/types/dance';

const foxtrotData = {
  title: "Foxtrot",
  description: "An elegant and smooth ballroom dance characterized by long, flowing movements and a distinctive slow-quick-quick rhythm.",
  history: `The Foxtrot emerged in the summer of 1914, named after its creator, vaudeville actor Harry Fox. 
    Originally a fast-paced dance set to ragtime music, it evolved into the smooth, sophisticated style we know today. 
    The dance gained popularity in the ballroom scene during the 1920s and 1930s, eventually becoming a staple of 
    social dancing and competitive ballroom programs.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Forward and Backward Steps", duration: "6:45" },
      { id: 2, title: "The Box Step Pattern", duration: "7:30" },
      { id: 3, title: "Promenade Position Basics", duration: "5:15" }
    ],
    intermediate: [
      { id: 4, title: "Three Step and Feather Step", duration: "8:20" },
      { id: 5, title: "Natural and Reverse Turns", duration: "9:45" },
      { id: 6, title: "Progressive Side Steps", duration: "7:15" }
    ],
    advanced: [
      { id: 7, title: "Weave Patterns", duration: "10:30" },
      { id: 8, title: "Outside Swivels", duration: "11:15" },
      { id: 9, title: "Advanced Combinations", duration: "12:00" }
    ]
  },
  practiceExercises: [
    {
      title: "Basic Rhythm Training",
      description: "Master the slow-quick-quick timing pattern",
      steps: [
        "Count 'Slow (1-2), Quick (3), Quick (4)'",
        "Practice with basic forward and backward steps",
        "Use a metronome set to 120 BPM",
        "Focus on smooth weight transfers"
      ]
    },
    {
      title: "Frame and Posture",
      description: "Develop proper dance position and frame",
      steps: [
        "Stand tall with shoulders back",
        "Maintain contact points with partner",
        "Practice rise and fall motion",
        "Keep elbows lifted and supported"
      ]
    },
    {
      title: "Progressive Movement",
      description: "Practice moving across the floor smoothly",
      steps: [
        "Walk in line of dance",
        "Maintain consistent speed",
        "Practice floor craft awareness",
        "Use progressive side steps"
      ]
    }
  ],
  musicSuggestions: [
    { title: "The Way You Look Tonight", artist: "Frank Sinatra", bpm: 128 },
    { title: "Fly Me to the Moon", artist: "Michael Bublé", bpm: 124 },
    { title: "Cheek to Cheek", artist: "Fred Astaire", bpm: 126 },
    { title: "Come Dance with Me", artist: "Frank Sinatra", bpm: 130 },
    { title: "L-O-V-E", artist: "Nat King Cole", bpm: 122 }
  ],
  partnerTips: [
    "Maintain proper frame throughout movements",
    "Lead through body movement, not arms",
    "Follow through complete weight transfers",
    "Keep steps smooth and gliding",
    "Move together as one unit",
    "Practice rise and fall timing",
    "Stay in time with the music's slower tempo"
  ]
};

const FoxtrotPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  // Custom timing visualization component
  const RhythmDisplay = () => (
    <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white mb-2">
          Slow
        </div>
        <span className="text-sm text-gray-600">1-2</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white mb-2">
          Quick
        </div>
        <span className="text-sm text-gray-600">3</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white mb-2">
          Quick
        </div>
        <span className="text-sm text-gray-600">4</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{foxtrotData.title}</h1>
          <p className="text-xl mb-6">{foxtrotData.description}</p>
          <Button className="bg-white text-purple-900 hover:bg-purple-50">
            Start Learning
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="tips">Partner Tips</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About {foxtrotData.title}</CardTitle>
                <CardDescription>History and Basic Rhythm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {foxtrotData.history}
                </p>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Basic Rhythm Pattern</h3>
                  <RhythmDisplay />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials">
            <div className="space-y-6">
              <div className="flex gap-4 mb-6">
                <Button 
                  variant={selectedLevel === 'beginner' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('beginner')}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Beginner
                </Button>
                <Button 
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('intermediate')}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Intermediate
                </Button>
                <Button 
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('advanced')}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Advanced
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {foxtrotData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-purple-600" />
                        <div>
                          <h3 className="font-semibold">{tutorial.title}</h3>
                          <p className="text-sm text-gray-600">Duration: {tutorial.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <div className="grid md:grid-cols-2 gap-6">
              {foxtrotData.practiceExercises.map((exercise, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-600">{step}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Music</CardTitle>
                <CardDescription>Classic Foxtrot songs for practice and social dancing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {foxtrotData.musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <h3 className="font-semibold">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-gray-600">{song.bpm} BPM</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partner Tips Tab */}
          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle>Partner Tips</CardTitle>
                <CardDescription>Essential guidelines for dancing the Foxtrot</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {foxtrotData.partnerTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FoxtrotPage;
