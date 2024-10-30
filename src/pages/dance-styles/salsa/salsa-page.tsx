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
  Music,
  Users,
  ArrowRight,
  Clock,
  RotateCcw,
  Footprints,
  Heart
} from 'lucide-react';
import { DanceData, Level, Tutorial } from '@/types/dance';

const salsaData = {
  title: "Salsa",
  description: "A vibrant, energetic Latin dance characterized by quick turns, hip movements, and intricate footwork, danced on the 1 or 2.",
  history: `Salsa emerged in the 1960s in New York City, blending Cuban Son, Mambo, and other Caribbean 
    dance styles. It evolved through various Latin communities, developing distinct styles including LA Style 
    (danced on 1) and New York Style (danced on 2). Today, salsa is celebrated worldwide through social 
    dancing and competitions.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:45" },
      { id: 2, title: "Right Turn Basic", duration: "6:30" },
      { id: 3, title: "Left Turn Basic", duration: "6:15" },
      { id: 4, title: "Cross Body Lead", duration: "7:00" }
    ],
    intermediate: [
      { id: 5, title: "Multiple Turn Combinations", duration: "8:30" },
      { id: 6, title: "Hand Styling", duration: "7:45" },
      { id: 7, title: "Salsa Shines", duration: "9:15" }
    ],
    advanced: [
      { id: 8, title: "Advanced Turn Patterns", duration: "10:30" },
      { id: 9, title: "Advanced Styling & Body Movement", duration: "11:45" },
      { id: 10, title: "Performance Combinations", duration: "12:00" }
    ]
  },
  timing: {
    styles: [
      {
        name: "On1 (LA Style)",
        pattern: "1-2-3-pause-5-6-7-pause",
        description: "Break forward on count 1, popular in LA and worldwide",
        keyPoints: [
          "Break forward on 1",
          "Hold on 4",
          "Break back on 5",
          "Hold on 8"
        ]
      },
      {
        name: "On2 (NY Style)",
        pattern: "1-2-3-pause-5-6-7-pause",
        description: "Break on count 2, popular in New York",
        keyPoints: [
          "Step on 1",
          "Break forward on 2",
          "Hold on 4",
          "Break back on 6"
        ]
      }
    ],
    basicPatterns: [
      {
        name: "Basic Step",
        counts: "1-2-3, 5-6-7",
        description: "Foundation of all salsa moves",
        steps: [
          "Forward/back break step",
          "Side step",
          "Step in place",
          "Repeat opposite direction"
        ]
      },
      {
        name: "Right Turn",
        counts: "1-2-3, 5-6-7",
        description: "Basic right-hand turn",
        steps: [
          "Forward break",
          "Start turn right",
          "Complete turn",
          "Step in place"
        ]
      },
      {
        name: "Cross Body Lead",
        counts: "1-2-3, 5-6-7",
        description: "Lead crosses in front of follow",
        steps: [
          "Forward break",
          "Quarter turn left",
          "Cross in front",
          "Complete pattern"
        ]
      }
    ]
  },
  stylingElements: [
    {
      name: "Cuban Motion",
      description: "Hip movement created by straight leg technique",
      tips: [
        "Straighten back leg on each step",
        "Allow hips to move naturally",
        "Keep upper body relaxed"
      ]
    },
    {
      name: "Hand Styling",
      description: "Arm and hand movements during dance",
      tips: [
        "Keep arms relaxed but active",
        "Move hands in natural curves",
        "Match styling to music accents"
      ]
    },
    {
      name: "Body Isolation",
      description: "Independent movement of body parts",
      tips: [
        "Practice separating hip and shoulder movement",
        "Use rib cage isolations",
        "Control arm movements independently"
      ]
    }
  ],
  musicality: {
    instruments: [
      {
        name: "Clave",
        description: "Basic rhythm pattern (2-3 or 3-2)",
        importance: "Foundation of salsa rhythm"
      },
      {
        name: "Congas",
        description: "Provide main dance rhythm",
        importance: "Help maintain basic step timing"
      },
      {
        name: "Piano",
        description: "Montuno pattern",
        importance: "Good for styling accents"
      }
    ],
    recommendedSongs: [
      {
        title: "Vivir Mi Vida",
        artist: "Marc Anthony",
        tempo: "Medium",
        style: "Modern Salsa"
      },
      {
        title: "La Vida Es Un Carnaval",
        artist: "Celia Cruz",
        tempo: "Medium-Fast",
        style: "Classic Salsa"
      },
      {
        title: "Llorarás",
        artist: "Oscar D'León",
        tempo: "Medium",
        style: "Traditional Salsa"
      }
    ]
  },
  partnerWork: {
    connection: [
      "Maintain frame without tension",
      "Listen to partner's momentum",
      "Clear lead/follow through frame",
      "Maintain eye contact when appropriate",
      "Stay on your own axis during turns"
    ],
    commonMistakes: [
      {
        issue: "Breaking Frame",
        solution: "Practice maintaining arm position without tension"
      },
      {
        issue: "Missing Timing",
        solution: "Practice basic step with music until automatic"
      },
      {
        issue: "Poor Turn Technique",
        solution: "Practice spotting and staying on axis"
      }
    ]
  }
};

// Timing Pattern Visual Component
const TimingPattern: React.FC<{ pattern: string }> = ({ pattern }) => {

  const beats = pattern.split('-');
  return (
    <div className="flex gap-2 items-center my-4">
      {beats.map((beat, index) => (
        <div 
          key={index}
          className={`h-8 w-8 flex items-center justify-center ${
            beat === 'pause' ? 'bg-gray-200' : 'bg-blue-400'
          } rounded text-sm font-mono`}
        >
          {beat === 'pause' ? '•' : beat}
        </div>
      ))}
    </div>
  );
};

const SalsaPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{salsaData.title}</h1>
          <p className="text-xl mb-6">{salsaData.description}</p>
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
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="musicality">Musicality</TabsTrigger>
            <TabsTrigger value="partner">Partner Work</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About Salsa</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {salsaData.history}
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
                {salsaData.videoTutorials[selectedLevel].map((tutorial) => (
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

          {/* Timing Tab */}
          <TabsContent value="timing">
            <div className="space-y-6">
              {salsaData.timing.styles.map((style, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{style.name}</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TimingPattern pattern={style.pattern} />
                    <ul className="mt-4 space-y-2">
                      {style.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              <div className="grid md:grid-cols-2 gap-6">
                {salsaData.timing.basicPatterns.map((pattern, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Footprints className="w-5 h-5" />
                        {pattern.name}
                      </CardTitle>
                      <CardDescription className="font-mono">{pattern.counts}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{pattern.description}</p>
                      <ul className="space-y-2">
                        {pattern.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            {step}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Styling Tab */}
          <TabsContent value="styling">
            <div className="grid md:grid-cols-3 gap-6">
              {salsaData.stylingElements.map((element, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{element.name}</CardTitle>
                    <CardDescription>{element.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {element.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Musicality Tab */}
          <TabsContent value="musicality">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Salsa Music</CardTitle>
                  <CardDescription>Key instruments and their roles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {salsaData.musicality.instruments.map((instrument, index) => (
                      <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                        <h3 className="font-semibold">{instrument.name}</h3>
                        <p className="text-gray-600">{instrument.description}</p>
                        <p className="text-sm text-blue-600 mt-1">{instrument.importance}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Songs</CardTitle>
                  <CardDescription>Great songs for practice and social dancing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salsaData.musicality.recommendedSongs.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                          
                          </div>
                        <div className="text-sm">
                          <span className="text-blue-600">{song.tempo}</span>
                          <span className="text-gray-600 ml-2">• {song.style}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Partner Work Tab */}
          <TabsContent value="partner">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connection Fundamentals</CardTitle>
                  <CardDescription>Essential elements of partner connection</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {salsaData.partnerWork.connection.map((tip, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Issues & Solutions</CardTitle>
                  <CardDescription>Addressing frequent partner work challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salsaData.partnerWork.commonMistakes.map((mistake, index) => (
                      <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                        <h3 className="font-semibold text-red-600">{mistake.issue}</h3>
                        <p className="text-gray-600">
                          <span className="font-semibold">Solution: </span>
                          {mistake.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Practice Tips Section */}
            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Quick Tips for Better Partner Dancing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Before the Dance</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Make eye contact and smile</li>
                        <li>• Clear communication of timing style (On1/On2)</li>
                        <li>• Respectful distance at start</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2">During the Dance</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Stay on time with the music</li>
                        <li>• Maintain good frame</li>
                        <li>• Adapt to partner's level</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2">After the Dance</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Thank your partner</li>
                        <li>• Provide positive feedback</li>
                        <li>• End with courtesy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SalsaPage;

                        