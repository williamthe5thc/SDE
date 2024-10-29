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
  Download
} from 'lucide-react';

// This would typically come from a CMS or API
const countrySwingData = {
  title: "Country Swing",
  description: "A playful and energetic dance style that combines elements of East Coast Swing with country western dance moves.",
  history: `Country Swing emerged from the rich traditions of both American country western dance and swing dancing. 
    It gained popularity in western dance halls and has evolved into a versatile social dance style that's especially 
    popular in the western United States.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Steps and Rhythm", duration: "5:30" },
      { id: 2, title: "Lead and Follow Fundamentals", duration: "8:15" },
      { id: 3, title: "Basic Turns and Spins", duration: "6:45" }
    ],
    intermediate: [
      { id: 4, title: "Advanced Turn Patterns", duration: "7:20" },
      { id: 5, title: "Dips and Leans", duration: "9:10" }
    ],
    advanced: [
      { id: 6, title: "Aerial Moves", duration: "10:30" },
      { id: 7, title: "Complex Combinations", duration: "12:45" }
    ]
  },
  practiceExercises: [
    {
      title: "Basic Rhythm Training",
      description: "Practice the basic 6-count rhythm without a partner",
      steps: [
        "Count '1-2-3-4-5-6' while stepping in place",
        "Add basic rock step on counts 1-2",
        "Practice for 5 minutes or until comfortable"
      ]
    },
    {
      title: "Frame Maintenance",
      description: "Work on maintaining proper dance frame",
      steps: [
        "Stand in front of a mirror",
        "Hold frame position for 30 seconds",
        "Check elbow and hand position"
      ]
    }
  ],
  musicSuggestions: [
    { title: "Boot Scootin' Boogie", artist: "Brooks & Dunn", bpm: 126 },
    { title: "Chattahoochee", artist: "Alan Jackson", bpm: 130 },
    { title: "Save a Horse", artist: "Big & Rich", bpm: 124 }
  ],
  partnerTips: [
    "Maintain a strong but gentle frame",
    "Lead with your body, not your arms",
    "Stay on time with the music",
    "Keep your movements smooth and controlled",
    "Communicate clearly with your partner"
  ]
};

const DanceStylePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{countrySwingData.title}</h1>
          <p className="text-xl mb-6">{countrySwingData.description}</p>
          <Button className="bg-white text-blue-900 hover:bg-blue-50">
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
                <CardTitle>About {countrySwingData.title}</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {countrySwingData.history}
                </p>
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
                >
                  Beginner
                </Button>
                <Button 
                  variant={selectedLevel === 'intermediate' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('intermediate')}
                >
                  Intermediate
                </Button>
                <Button 
                  variant={selectedLevel === 'advanced' ? 'default' : 'outline'}
                  onClick={() => setSelectedLevel('advanced')}
                >
                  Advanced
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {countrySwingData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-blue-600" />
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
              {countrySwingData.practiceExercises.map((exercise, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exercise.title}</CardTitle>
                    <CardDescription>{exercise.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
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
                <CardDescription>Popular songs for {countrySwingData.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {countrySwingData.musicSuggestions.map((song, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <h3 className="font-semibold">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        {song.bpm} BPM
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
                <CardDescription>Essential guidelines for dancing with a partner</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {countrySwingData.partnerTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{tip}</span>
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

export default DanceStylePage;
