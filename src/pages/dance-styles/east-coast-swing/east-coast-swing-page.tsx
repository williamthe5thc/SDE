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
  PlayCircle,
  Timer,
  Music,
  Users,
  Star,
  ArrowRight,
  ArrowLeft,
  RotateCcw
} from 'lucide-react';
import { DanceData, Level, Tutorial } from '@/types/dance';

const eastCoastSwingData = {
  title: "East Coast Swing",
  description: "A lively, upbeat social dance derived from Lindy Hop, characterized by its bouncy rock step and triple steps. Perfect for swing and rock & roll music!",
  history: `East Coast Swing evolved from Lindy Hop in the 1940s as a simplified form of swing dancing. 
    Dance studios, particularly Arthur Murray, developed this standardized version to make swing dancing 
    more accessible to the general public. The basic 6-count pattern and rock step made it easier to learn 
    than the more complex 8-count Lindy Hop. Today, it remains one of the most popular social dances, 
    adaptable to various music styles from classic swing to modern rock and pop.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic 6-Count Pattern", duration: "6:30" },
      { id: 2, title: "Rock Step Technique", duration: "5:45" },
      { id: 3, title: "Lead & Follow Basics", duration: "7:15" }
    ],
    intermediate: [
      { id: 4, title: "Triple Step Variations", duration: "8:20" },
      { id: 5, title: "Inside & Outside Turns", duration: "9:15" },
      { id: 6, title: "Changing Places & Tuck Turns", duration: "8:45" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 8, title: "Swing Outs & Lindy Moves", duration: "11:15" },
      { id: 9, title: "Musicality & Styling", duration: "9:45" }
    ]
  },
  practiceExercises: [
    {
      title: "Triple Step Training",
      description: "Master the fundamental triple step timing",
      steps: [
        "Practice 'tri-ple-step' rhythm in place",
        "Add gentle bounce in knees",
        "Keep steps small and controlled",
        "Maintain consistent timing"
      ]
    },
    {
      title: "Rock Step Drill",
      description: "Perfect the characteristic rock step",
      steps: [
        "Step back with good posture",
        "Push off back foot with energy",
        "Keep upper body stable",
        "Practice weight transfers"
      ]
    },
    {
      title: "Rotation Exercise",
      description: "Develop turning technique",
      steps: [
        "Practice spot turns slowly",
        "Keep core engaged",
        "Spot your turns",
        "Add triple steps gradually"
      ]
    }
  ],
  musicSuggestions: [
    { title: "In the Mood", artist: "Glenn Miller", bpm: 180 },
    { title: "Rock Around the Clock", artist: "Bill Haley", bpm: 176 },
    { title: "Jailhouse Rock", artist: "Elvis Presley", bpm: 168 },
    { title: "Zoot Suit Riot", artist: "Cherry Poppin' Daddies", bpm: 174 },
    { title: "Jump, Jive an' Wail", artist: "Louis Prima", bpm: 170 }
  ],
  partnerTips: [
    "Keep frame light but connected",
    "Maintain bouncy rhythm throughout",
    "Lead with clear body movement",
    "Follow through complete weight changes",
    "Stay relaxed in shoulders",
    "Keep energy level high",
    "Listen to the music's accents"
  ]
};

const EastCoastSwingPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  // Custom rhythm visualization component
  const RhythmDisplay = () => (
    <div className="flex flex-col items-center space-y-8 p-6 bg-gray-50 rounded-lg">
      {/* Basic 6-count pattern */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white mb-2">
            Rock
          </div>
          <span className="text-sm text-gray-600">1-2</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white mb-2">
            Triple
          </div>
          <span className="text-sm text-gray-600">3&4</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white mb-2">
            Triple
          </div>
          <span className="text-sm text-gray-600">5&6</span>
        </div>
      </div>
      
      {/* Movement visualization */}
      <div className="flex items-center justify-center gap-8">
        <ArrowLeft className="w-6 h-6 text-amber-500" />
        <div className="flex items-center gap-2">
          <ArrowRight className="w-6 h-6 text-amber-500" />
          <RotateCcw className="w-6 h-6 text-amber-500" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{eastCoastSwingData.title}</h1>
          <p className="text-xl mb-6">{eastCoastSwingData.description}</p>
          <Button className="bg-white text-amber-900 hover:bg-amber-50">
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
                <CardTitle>About {eastCoastSwingData.title}</CardTitle>
                <CardDescription>History and Basic Pattern</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {eastCoastSwingData.history}
                </p>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Basic 6-Count Pattern</h3>
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
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Beginner
                </Button>
                <Button 
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('intermediate')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Intermediate
                </Button>
                <Button 
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('advanced')}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Advanced
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {eastCoastSwingData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-amber-600" />
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
              {eastCoastSwingData.practiceExercises.map((exercise, index) => (
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
                <CardDescription>Classic swing and rock & roll for practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eastCoastSwingData.musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <h3 className="font-semibold">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-amber-600" />
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
                <CardDescription>Essential guidelines for East Coast Swing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {eastCoastSwingData.partnerTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-amber-600 flex-shrink-0" />
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

export default EastCoastSwingPage;
