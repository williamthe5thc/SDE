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
  Heart,
  Waves
} from 'lucide-react';

const bachataData = {
  title: "Bachata",
  description: "A sensual Latin dance from the Dominican Republic characterized by romantic music, hip movements, and close partner connection.",
  history: `Bachata originated in the Dominican Republic during the 1960s, evolving from bolero rhythms. 
    Initially considered 'music of the bitter', it was associated with rural and lower-class life. The dance 
    and music gained worldwide popularity in the 1990s and 2000s, developing various styles including 
    Traditional, Modern, and Sensual Bachata. Today, it's celebrated globally for its intimate connection 
    and expressive movements.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:30" },
      { id: 2, title: "Side to Side Basic", duration: "6:15" },
      { id: 3, title: "Basic Turn Patterns", duration: "7:00" },
      { id: 4, title: "Hip Movement Basics", duration: "6:45" }
    ],
    intermediate: [
      { id: 5, title: "Body Wave Movements", duration: "8:30" },
      { id: 6, title: "Sensual Styling", duration: "9:15" },
      { id: 7, title: "Intermediate Turn Combinations", duration: "8:45" }
    ],
    advanced: [
      { id: 8, title: "Complex Body Movement", duration: "10:30" },
      { id: 9, title: "Advanced Turn Patterns", duration: "11:00" },
      { id: 10, title: "Sensual Bachata Choreography", duration: "12:15" }
    ]
  },
  styles: [
    {
      name: "Traditional Bachata",
      description: "Original Dominican style with simple, elegant movements",
      characteristics: [
        "Square box step pattern",
        "Subtle hip movements",
        "Close partner connection",
        "Traditional arm styling"
      ]
    },
    {
      name: "Modern Bachata",
      description: "Contemporary fusion with urban dance elements",
      characteristics: [
        "Dynamic turn patterns",
        "Complex footwork",
        "Urban dance influence",
        "More separated partner work"
      ]
    },
    {
      name: "Sensual Bachata",
      description: "Focuses on body movement and intimate connection",
      characteristics: [
        "Body waves",
        "Slower timing",
        "Close connection",
        "Flowing movements"
      ]
    }
  ],
  basicPatterns: [
    {
      name: "Basic Step",
      counts: "1-2-3-tap, 5-6-7-tap",
      description: "Foundation of all bachata moves",
      steps: [
        "Side step left (1)",
        "Together (2)",
        "Side step left (3)",
        "Hip lift/tap (4)",
        "Repeat right side (5-8)"
      ]
    },
    {
      name: "Side to Side",
      counts: "1-2-3-tap, 5-6-7-tap",
      description: "Basic lateral movement pattern",
      steps: [
        "Step left (1)",
        "Together (2)",
        "Step left (3)",
        "Tap (4)",
        "Reverse direction (5-8)"
      ]
    },
    {
      name: "Forward and Back",
      counts: "1-2-3-tap, 5-6-7-tap",
      description: "Basic forward/backward pattern",
      steps: [
        "Forward step (1)",
        "Together (2)",
        "Forward step (3)",
        "Tap (4)",
        "Back step sequence (5-8)"
      ]
    }
  ],
  bodyMovement: {
    hipMovement: [
      {
        name: "Basic Hip Action",
        description: "Natural hip movement on the tap",
        tips: [
          "Move hips side to side naturally",
          "Lift hip slightly on tap",
          "Keep movement smooth and controlled"
        ]
      },
      {
        name: "Body Wave",
        description: "Flowing movement through the body",
        tips: [
          "Start movement from chest",
          "Flow through torso",
          "End with hip movement",
          "Keep knees soft"
        ]
      },
      {
        name: "Isolation",
        description: "Independent hip movements",
        tips: [
          "Practice hip circles",
          "Control movement speed",
          "Maintain upper body stability"
        ]
      }
    ],
    musicality: {
      elements: [
        {
          name: "Basic Rhythm",
          pattern: "Quick-quick-quick-tap",
          description: "Standard bachata timing"
        },
        {
          name: "Syncopation",
          pattern: "Quick-slow-quick",
          description: "Advanced timing variation"
        }
      ],
      songs: [
        {
          title: "Propuesta Indecente",
          artist: "Romeo Santos",
          style: "Modern Bachata",
          tempo: "Medium"
        },
        {
          title: "Darte un Beso",
          artist: "Prince Royce",
          style: "Traditional Bachata",
          tempo: "Medium"
        },
        {
          title: "Obsesión",
          artist: "Aventura",
          style: "Modern Bachata",
          tempo: "Medium-Fast"
        }
      ]
    }
  },
  partnerConnection: {
    fundamentals: [
      {
        title: "Frame",
        description: "Maintain gentle but firm connection through arms",
        tips: [
          "Keep arms slightly bent",
          "Maintain consistent frame pressure",
          "Allow flexibility in frame"
        ]
      },
      {
        title: "Leading/Following",
        description: "Clear communication through body movement",
        tips: [
          "Lead with body, not arms",
          "Stay connected to partner's center",
          "Follow through complete movements"
        ]
      },
      {
        title: "Body Contact",
        description: "Appropriate connection level for style",
        tips: [
          "Adjust contact based on style",
          "Maintain respectful distance",
          "Connect through frame first"
        ]
      }
    ]
  }
};

// Rhythm Pattern Visual Component
const RhythmPattern = ({ pattern }) => {
  const beats = pattern.split('-');
  return (
    <div className="flex gap-2 items-center my-4">
      {beats.map((beat, index) => (
        <div 
          key={index}
          className={`h-8 w-8 flex items-center justify-center ${
            beat === 'tap' ? 'bg-purple-200' : 'bg-purple-400'
          } rounded text-sm font-mono text-white`}
        >
          {beat === 'tap' ? '•' : beat}
        </div>
      ))}
    </div>
  );
};

const BachataPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{bachataData.title}</h1>
          <p className="text-xl mb-6">{bachataData.description}</p>
          <Button className="bg-white text-purple-900 hover:bg-purple-50">
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
            <TabsTrigger value="styles">Styles</TabsTrigger>
            <TabsTrigger value="movement">Body Movement</TabsTrigger>
            <TabsTrigger value="musicality">Musicality</TabsTrigger>
            <TabsTrigger value="partner">Partner Work</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About Bachata</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {bachataData.history}
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
                {bachataData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id}>
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

          {/* Styles Tab */}
          <TabsContent value="styles">
            <div className="grid md:grid-cols-3 gap-6">
              {bachataData.styles.map((style, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{style.name}</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {style.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Body Movement Tab */}
          <TabsContent value="movement">
            <div className="space-y-6">
              {bachataData.bodyMovement.hipMovement.map((movement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Waves className="w-5 h-5" />
                      {movement.name}
                    </CardTitle>
                    <CardDescription>{movement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {movement.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
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
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rhythm Patterns</CardTitle>
                  <CardDescription>Understanding bachata timing</CardDescription>
                </CardHeader>
                <CardContent>
                  {bachataData.bodyMovement.musicality.elements.map((element, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h3 className="font-semibold mb-2">{element.name}</h3>
                      <p className="text-gray-600 mb-2">{element.description}</p>
                      <div className="font-mono text-sm bg-purple-50 p-2 rounded">
                        {element.pattern}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Music</CardTitle>
                  <CardDescription>Popular bachata songs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bachataData.bodyMovement.musicality.songs.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-purple-600">{song.tempo}</span>
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
            <div className="space-y-6">
              {bachataData.partnerConnection.fundamentals.map((fundamental, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className
                      
                      
                      
                      
                      
                      <Users className="w-5 h-5" />
                      {fundamental.title}
                    </CardTitle>
                    <CardDescription>{fundamental.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fundamental.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Connection Practice Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    Connection Practice Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Basic Connection</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Start with closed position</li>
                        <li>• Practice frame maintenance</li>
                        <li>• Focus on center connection</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Movement Flow</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Synchronize body waves</li>
                        <li>• Match partner's energy</li>
                        <li>• Maintain smooth transitions</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Advanced Connection</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Practice tension/compression</li>
                        <li>• Work on dynamic movements</li>
                        <li>• Develop musical connection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety and Etiquette */}
              <Card>
                <CardHeader>
                  <CardTitle>Safety and Etiquette</CardTitle>
                  <CardDescription>Important guidelines for social dancing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-purple-600">Do's</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Respect personal boundaries
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Maintain appropriate distance
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Communicate comfort levels
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-purple-600">Don'ts</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Force movements or styling
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Rush into advanced moves
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Ignore partner's comfort
                        </li>
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

export default BachataPage;
