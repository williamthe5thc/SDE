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
  Heart
} from 'lucide-react';
import { DanceData, Level, Tutorial } from '@/types/dance';

const rumbaData = {
  title: "Rumba",
  description: "A romantic Latin dance characterized by its sensual hip movements and slow, dramatic rhythm. The 'dance of love' tells a story of courtship through fluid movements and expressive gestures.",
  history: `The Rumba originated in Cuba, with roots in African rhythms and Spanish colonial influence. 
    While there are several styles of Rumba (including Guaguancó, Yambú, and Columbia), the ballroom version 
    evolved from the Cuban Son and became popular in the United States during the 1930s. Today's ballroom Rumba 
    is known for its slower tempo and romantic character, making it a favorite among social dancers.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Box Step & Cuban Motion", duration: "7:30" },
      { id: 2, title: "Hip Movement Technique", duration: "6:45" },
      { id: 3, title: "Basic Holds & Frame", duration: "5:15" }
    ],
    intermediate: [
      { id: 4, title: "Spot Turns & Hand-to-Hand", duration: "8:20" },
      { id: 5, title: "Progressive Walks & Checks", duration: "9:15" },
      { id: 6, title: "Fan Position & Hockey Stick", duration: "10:00" }
    ],
    advanced: [
      { id: 7, title: "Advanced Cuban Motion", duration: "11:30" },
      { id: 8, title: "Complex Turn Patterns", duration: "12:15" },
      { id: 9, title: "Advanced Styling & Expression", duration: "10:45" }
    ]
  },
  practiceExercises: [
    {
      title: "Cuban Motion Training",
      description: "Master the essential hip movement of Rumba",
      steps: [
        "Stand with feet together",
        "Transfer weight slowly side to side",
        "Allow hips to move naturally",
        "Practice figure-8 hip motion",
        "Add arm styling gradually"
      ]
    },
    {
      title: "Slow-Quick-Quick Timing",
      description: "Perfect the characteristic Rumba timing",
      steps: [
        "Count '2-3-4, 1' pattern",
        "Practice basic box step",
        "Focus on delayed weight changes",
        "Maintain consistent timing"
      ]
    },
    {
      title: "Connection Exercise",
      description: "Develop lead/follow connection",
      steps: [
        "Practice proper frame",
        "Maintain gentle resistance",
        "Work on non-verbal cues",
        "Practice slow weight transfers"
      ]
    }
  ],
  musicSuggestions: [
    { title: "Bésame Mucho", artist: "Various Artists", bpm: 100 },
    { title: "Perhaps, Perhaps, Perhaps", artist: "Doris Day", bpm: 102 },
    { title: "El Reloj", artist: "Luis Miguel", bpm: 98 },
    { title: "Historia de un Amor", artist: "Guadalupe Pineda", bpm: 100 },
    { title: "Sabor a Mí", artist: "Los Panchos", bpm: 96 }
  ],
  partnerTips: [
    "Maintain strong core connection",
    "Express emotion through movement",
    "Use slow weight transfers for balance",
    "Keep upper body quiet while hips move",
    "Focus on musical interpretation",
    "Practice smooth arm styling",
    "Stay grounded through feet"
  ]
};

const RumbaPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  // Custom timing visualization component
  const RhythmDisplay = () => (
    <div className="flex items-center justify-center gap-4 p-6 bg-gray-50 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white mb-2">
          Slow
        </div>
        <span className="text-sm text-gray-600">2</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white mb-2">
          Quick
        </div>
        <span className="text-sm text-gray-600">3</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center text-white mb-2">
          Quick
        </div>
        <span className="text-sm text-gray-600">4</span>
      </div>
      <div className="flex flex-col items-center opacity-50">
        <div className="w-12 h-12 border-2 border-rose-300 rounded-full flex items-center justify-center text-rose-300 mb-2">
          Hold
        </div>
        <span className="text-sm text-gray-600">1</span>
      </div>
    </div>
  );

  // Custom hip movement visualization
  const HipMotionGuide = () => (
    <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg mt-6">
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-rose-300 rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite]">
          <div className="w-4 h-4 bg-rose-600 rounded-full transform -translate-x-16" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-sm text-gray-600">Hip Motion Pattern</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-rose-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{rumbaData.title}</h1>
          <p className="text-xl mb-6">{rumbaData.description}</p>
          <Button className="bg-white text-rose-900 hover:bg-rose-50">
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
                <CardTitle>About {rumbaData.title}</CardTitle>
                <CardDescription>History and Basic Elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {rumbaData.history}
                </p>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Basic Rhythm Pattern</h3>
                  <RhythmDisplay />
                </div>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Cuban Motion</h3>
                  <HipMotionGuide />
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
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  Beginner
                </Button>
                <Button 
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('intermediate')}
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  Intermediate
                </Button>
                <Button 
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('advanced')}
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  Advanced
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {rumbaData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-rose-600" />
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
              {rumbaData.practiceExercises.map((exercise, index) => (
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
                <CardDescription>Classic Rumba songs for practice and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rumbaData.musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <h3 className="font-semibold">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-rose-600" />
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
                <CardDescription>Essential guidelines for dancing Rumba</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {rumbaData.partnerTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-rose-600 flex-shrink-0" />
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

export default RumbaPage;
