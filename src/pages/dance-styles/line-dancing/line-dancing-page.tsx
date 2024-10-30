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
  Grid,
  PlayCircle,
  Download,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {FormationDisplayProps, DanceData, Level, Tutorial } from '@/types/dance';

const lineDancingData = {
  title: "Line Dancing",
  description: "A choreographed dance with repeated sequences of steps performed in lines or rows by a group of people. No partner required!",
  history: `Line dancing emerged in the 1970s during the disco era but gained massive popularity 
    in the 1990s with country western dancing. Today, line dancing encompasses many musical styles 
    including country, pop, and Latin rhythms. It's perfect for beginners as it requires no partner 
    and helps develop rhythm and coordination.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Line Dancing Steps", duration: "4:45" },
      { id: 2, title: "Grapevine and Shuffle", duration: "6:30" },
      { id: 3, title: "Electric Slide Basics", duration: "7:15" }
    ],
    intermediate: [
      { id: 4, title: "Tush Push Tutorial", duration: "8:20" },
      { id: 5, title: "Copperhead Road", duration: "10:15" }
    ],
    advanced: [
      { id: 6, title: "Advanced Footwork Patterns", duration: "11:30" },
      { id: 7, title: "Complex Line Dance Combinations", duration: "13:45" }
    ]
  },
  commonDances: [
    {
      name: "Electric Slide",
      difficulty: "Beginner",
      steps: "32 counts",
      description: "Classic line dance perfect for beginners"
    },
    {
      name: "Boot Scootin' Boogie",
      difficulty: "Beginner-Intermediate",
      steps: "32 counts",
      description: "Popular country-western line dance"
    },
    {
      name: "Copperhead Road",
      difficulty: "Intermediate",
      steps: "48 counts",
      description: "High-energy dance with kicks and turns"
    },
    {
      name: "Tush Push",
      difficulty: "Intermediate",
      steps: "40 counts",
      description: "Smooth dance with hip movements"
    }
  ],
  practiceExercises: [
    {
      title: "Basic Step Combinations",
      description: "Practice fundamental step patterns",
      steps: [
        "Grapevine right and left",
        "Forward and back basic steps",
        "Quarter turns in place",
        "Heel and toe combinations"
      ]
    },
    {
      title: "Formation Practice",
      description: "Learn proper line positioning",
      steps: [
        "Practice maintaining line spacing",
        "Work on staying in your 'lane'",
        "Practice turning while maintaining position",
        "Learn to adjust spacing during movement"
      ]
    }
  ],
  musicSuggestions: [
    { title: "Achy Breaky Heart", artist: "Billy Ray Cyrus", bpm: 120 },
    { title: "Cotton Eye Joe", artist: "Rednex", bpm: 134 },
    { title: "Copperhead Road", artist: "Steve Earle", bpm: 128 },
    { title: "Electric Slide", artist: "Marcia Griffiths", bpm: 118 }
  ],
  floorFormations: [
    {
      name: "Standard Lines",
      description: "Typical formation with equal spacing",
      pattern: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1]
      ]
    },
    {
      name: "Staggered Lines",
      description: "Offset formation for better visibility",
      pattern: [
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 1, 1, 1, 0]
      ]
    }
  ]
};

const LineDancingPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  const FormationDisplay: React.FC<FormationDisplayProps> = ({ pattern }) => (
  <div className="grid gap-2">
    {pattern.map((row: number[], rowIndex: number) => (
      <div key={rowIndex} className="flex justify-center gap-2">
        {row.map((cell: number, cellIndex: number) => (
          <div key={cellIndex} className={`w-8 h-8 rounded-full ${cell ? 'bg-blue-600' : 'bg-gray-200'}`}>
            {cell ? <Users className="w-4 h-4 text-white" /> : null}
          </div>
        ))}
      </div>
    ))}
  </div>
);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{lineDancingData.title}</h1>
          <p className="text-xl mb-6">{lineDancingData.description}</p>
          <Button className="bg-white text-blue-900 hover:bg-blue-50">
            Start Learning
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
            <TabsTrigger value="dances">Popular Dances</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="formations">Formations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About Line Dancing</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {lineDancingData.history}
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
                {lineDancingData.videoTutorials[selectedLevel].map((tutorial) => (
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

          {/* Popular Dances Tab */}
          <TabsContent value="dances">
            <div className="grid md:grid-cols-2 gap-6">
              {lineDancingData.commonDances.map((dance, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{dance.name}</CardTitle>
                    <CardDescription>{dance.difficulty} • {dance.steps}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{dance.description}</p>
                    <Button variant="ghost" className="mt-4">
                      Learn Dance <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice">
            <div className="grid md:grid-cols-2 gap-6">
              {lineDancingData.practiceExercises.map((exercise, index) => (
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
                <CardDescription>Popular songs for line dancing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lineDancingData.musicSuggestions.map((song, index) => (
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

          {/* Formations Tab */}
          <TabsContent value="formations">
            <div className="grid md:grid-cols-2 gap-6">
              {lineDancingData.floorFormations.map((formation, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{formation.name}</CardTitle>
                    <CardDescription>{formation.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center py-6">
                      <FormationDisplay pattern={formation.pattern} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LineDancingPage;
