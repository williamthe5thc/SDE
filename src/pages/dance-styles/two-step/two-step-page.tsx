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
  Boot,
  ArrowRight,
  ArrowUpRight,
  CircleDot
} from 'lucide-react';

const twoStepData = {
  title: "Two-Step",
  description: "A progressive country western dance characterized by its smooth, gliding movement and distinctive 'quick-quick-slow-slow' rhythm pattern. Perfect for dancing to country music!",
  history: `The Two-Step emerged from the late 19th century as country western dance gained popularity. 
    Initially influenced by the Foxtrot, it evolved into its own distinct style in Texas dance halls. 
    The dance gets its name from the two-step rhythm pattern, though it actually consists of four steps 
    total. Modern Two-Step has incorporated elements from other country dances while maintaining its 
    signature progressive movement around the dance floor. It remains a cornerstone of country western 
    dancing, especially popular in Texas and throughout the western United States.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Quick-Quick-Slow-Slow Pattern", duration: "6:15" },
      { id: 2, title: "Progressive Movement Basics", duration: "7:30" },
      { id: 3, title: "Lead & Follow Foundation", duration: "5:45" }
    ],
    intermediate: [
      { id: 4, title: "Turns & Sweetheart Position", duration: "8:20" },
      { id: 5, title: "Double Turns & Wraps", duration: "9:15" },
      { id: 6, title: "Counter-Clockwise Progression", duration: "7:45" }
    ],
    advanced: [
      { id: 7, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 8, title: "Shadow Position Variations", duration: "11:15" },
      { id: 9, title: "Speed Control & Styling", duration: "9:45" }
    ]
  },
  practiceExercises: [
    {
      title: "Basic Rhythm Training",
      description: "Master the quick-quick-slow-slow timing",
      steps: [
        "Practice timing without movement",
        "Add basic forward movement",
        "Maintain consistent step size",
        "Focus on smooth transitions"
      ]
    },
    {
      title: "Progressive Movement",
      description: "Learn to move smoothly around the floor",
      steps: [
        "Practice line of dance direction",
        "Maintain frame while moving",
        "Control speed and momentum",
        "Navigate floor patterns"
      ]
    },
    {
      title: "Frame & Connection",
      description: "Develop proper dance position",
      steps: [
        "Establish proper frame",
        "Practice constant connection",
        "Work on lead/follow signals",
        "Maintain frame while turning"
      ]
    }
  ],
  musicSuggestions: [
    { title: "Neon Moon", artist: "Brooks & Dunn", bpm: 108 },
    { title: "Amazed", artist: "Lonestar", bpm: 112 },
    { title: "Check Yes or No", artist: "George Strait", bpm: 104 },
    { title: "Cruise", artist: "Florida Georgia Line", bpm: 110 },
    { title: "Die a Happy Man", artist: "Thomas Rhett", bpm: 106 }
  ],
  partnerTips: [
    "Maintain strong but flexible frame",
    "Lead with your body, not arms",
    "Follow through each movement",
    "Keep steps smooth and consistent",
    "Stay in time with the music",
    "Look over partner's shoulder",
    "Navigate the dance floor together"
  ]
};

const TwoStepPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  // Custom rhythm visualization component
  const RhythmDisplay = () => (
    <div className="flex flex-col items-center space-y-8 p-6 bg-gray-50 rounded-lg">
      {/* Basic pattern visualization */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white mb-2">
            Quick
          </div>
          <span className="text-sm text-gray-600">1</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white mb-2">
            Quick
          </div>
          <span className="text-sm text-gray-600">2</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mb-2">
            Slow
          </div>
          <span className="text-sm text-gray-600">3-4</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mb-2">
            Slow
          </div>
          <span className="text-sm text-gray-600">5-6</span>
        </div>
      </div>

      {/* Floor pattern visualization */}
      <div className="relative w-48 h-48 border-2 border-green-200 rounded-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <ArrowUpRight className="w-24 h-24 text-green-600 rotate-45" />
          <CircleDot className="w-4 h-4 text-green-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
          Line of Dance
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{twoStepData.title}</h1>
          <p className="text-xl mb-6">{twoStepData.description}</p>
          <Button className="bg-white text-green-900 hover:bg-green-50">
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
                <CardTitle>About {twoStepData.title}</CardTitle>
                <CardDescription>History and Basic Pattern</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {twoStepData.history}
                </p>
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-4">Basic Pattern & Floor Movement</h3>
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
                  className="bg-green-600 hover:bg-green-700"
                >
                  Beginner
                </Button>
                <Button 
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('intermediate')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Intermediate
                </Button>
                <Button 
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('advanced')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Advanced
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {twoStepData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-green-600" />
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
              {twoStepData.practiceExercises.map((exercise, index) => (
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
                <CardDescription>Classic and modern country songs for Two-Step</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {twoStepData.musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <h3 className="font-semibold">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-green-600" />
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
                <CardDescription>Essential guidelines for Two-Step</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {twoStepData.partnerTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Boot className="w-5 h-5 text-green-600 flex-shrink-0" />
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

export default TwoStepPage;
