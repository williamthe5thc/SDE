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
  Crown,
  Clock,
  ArrowUp,
  Footprints,
  Heart,
  Move3d
} from 'lucide-react';

const waltzData = {
  title: "Waltz",
  description: "An elegant ballroom dance characterized by its smooth, flowing movements and distinctive 3/4 time signature.",
  history: `The Waltz emerged in the late 18th century from German and Austrian folk dances. Initially 
    controversial due to its closed position, it became a symbol of elegance and refinement in European 
    ballrooms. Today, it exists in several forms including Modern Waltz (Slow), Viennese Waltz (Fast), 
    and Country Waltz, each maintaining the characteristic rise and fall motion and 3/4 timing.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Box Step", duration: "6:30" },
      { id: 2, title: "Proper Frame & Position", duration: "5:45" },
      { id: 3, title: "Rise & Fall Technique", duration: "7:15" },
      { id: 4, title: "Natural Turn Basics", duration: "8:00" }
    ],
    intermediate: [
      { id: 5, title: "Reverse Turns", duration: "8:30" },
      { id: 6, title: "Progressive Steps", duration: "7:45" },
      { id: 7, title: "Hesitation Change", duration: "9:00" }
    ],
    advanced: [
      { id: 8, title: "Advanced Turns & Spins", duration: "10:15" },
      { id: 9, title: "Complex Combinations", duration: "11:30" },
      { id: 10, title: "Fleckrl", duration: "12:00" }
    ]
  },
  fundamentals: {
    timing: {
      description: "3/4 time signature with emphasis on count 1",
      pattern: "1-2-3, 1-2-3",
      keyPoints: [
        "Strong downbeat on 1",
        "Lighter steps on 2-3",
        "Continuous flow of movement",
        "Rise and fall throughout"
      ]
    },
    frame: {
      description: "Elegant, lifted posture with proper connection",
      elements: [
        "Upright posture with lifted chest",
        "Connected through core and frame",
        "Elbows lifted and supported",
        "Head turned slightly left (Leader)"
      ]
    },
    movement: {
      description: "Smooth, flowing motion with rise and fall",
      characteristics: [
        "Begin rising on 1",
        "Continue rise through 2",
        "Lower gradually on 3",
        "Smooth transitions between steps"
      ]
    }
  },
  basicPatterns: [
    {
      name: "Box Step",
      counts: "1-2-3",
      description: "Foundation pattern forming a box shape",
      leadSteps: [
        "Forward with left foot (1)",
        "Right foot to side (2)",
        "Close left foot (3)",
        "Back with right foot (1)",
        "Left foot to side (2)",
        "Close right foot (3)"
      ],
      followSteps: [
        "Back with right foot (1)",
        "Left foot to side (2)",
        "Close right foot (3)",
        "Forward with left foot (1)",
        "Right foot to side (2)",
        "Close left foot (3)"
      ]
    },
    {
      name: "Natural Turn",
      counts: "1-2-3",
      description: "Basic turning pattern to the right",
      steps: [
        "Begin with forward step",
        "Side step while turning",
        "Close with rise",
        "Back step continuing turn",
        "Side step completing turn",
        "Close to finish"
      ]
    },
    {
      name: "Progressive Steps",
      counts: "1-2-3",
      description: "Moving forward in line of dance",
      steps: [
        "Forward step with rise",
        "Side step maintaining height",
        "Close with lowering",
        "Repeat pattern progressing"
      ]
    }
  ],
  technique: {
    riseAndFall: {
      description: "Characteristic waltz elevation changes",
      elements: [
        {
          phase: "Rise",
          timing: "Begin on 1, continue through 2",
          tips: [
            "Start from ankles",
            "Maintain straight legs at height",
            "Keep shoulders level",
            "Use body rise, not just feet"
          ]
        },
        {
          phase: "Fall",
          timing: "Lower gradually on 3",
          tips: [
            "Control the lowering",
            "Keep core engaged",
            "Maintain frame during lowering",
            "Prepare for next rise"
          ]
        }
      ]
    },
    footwork: {
      description: "Precise foot placement and action",
      elements: [
        {
          name: "Heel Lead",
          when: "Forward steps",
          description: "Contact floor with heel first"
        },
        {
          name: "Toe Lead",
          when: "Backward steps",
          description: "Contact floor with toe first"
        },
        {
          name: "Ball-Flat",
          when: "Side steps",
          description: "Contact with ball then lower to flat"
        }
      ]
    }
  },
  music: {
    traditional: [
      {
        title: "The Blue Danube",
        composer: "Johann Strauss II",
        tempo: "28-30 measures per minute",
        style: "Viennese Waltz"
      },
      {
        title: "Moon River",
        composer: "Henry Mancini",
        tempo: "84-88 beats per minute",
        style: "Slow Waltz"
      },
      {
        title: "Tales from the Vienna Woods",
        composer: "Johann Strauss II",
        tempo: "58-60 measures per minute",
        style: "Viennese Waltz"
      }
    ],
    modern: [
      {
        title: "Perfect",
        artist: "Ed Sheeran",
        tempo: "Slow Waltz",
        difficulty: "Beginner"
      },
      {
        title: "Take It to the Limit",
        artist: "Eagles",
        tempo: "Slow Waltz",
        difficulty: "Intermediate"
      }
    ]
  },
  etiquette: {
    floorcraft: [
      "Move counterclockwise around the floor",
      "Maintain line of dance",
      "Be aware of surrounding couples",
      "Avoid stopping in traffic"
    ],
    socialDancing: [
      "Request dances politely",
      "Thank partner after each dance",
      "Maintain appropriate frame",
      "Follow skill level of partner"
    ]
  }
};

// Waltz Timing Display Component
const WaltzTiming = ({ measures = 2 }) => {
  const beats = Array(measures).fill(['1', '2', '3']).flat();
  
  return (
    <div className="flex gap-2 items-center my-4">
      {beats.map((beat, index) => (
        <div 
          key={index}
          className={`h-8 w-8 flex items-center justify-center ${
            beat === '1' ? 'bg-indigo-600' : 'bg-indigo-400'
          } rounded text-white font-mono ${
            index % 3 === 0 ? 'border-2 border-indigo-200' : ''
          }`}
        >
          {beat}
        </div>
      ))}
    </div>
  );
};

const WaltzPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{waltzData.title}</h1>
          <p className="text-xl mb-6">{waltzData.description}</p>
          <Button className="bg-white text-indigo-900 hover:bg-indigo-50">
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
            <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="technique">Technique</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About the Waltz</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {waltzData.history}
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
                {waltzData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-indigo-600" />
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

          {/* Fundamentals Tab */}
          <TabsContent value="fundamentals">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Timing
                  </CardTitle>
                  <CardDescription>{waltzData.fundamentals.timing.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <WaltzTiming />
                  <ul className="space-y-2 mt-4">
                    {waltzData.fundamentals.timing.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Frame
                  </CardTitle>
                  <CardDescription>{waltzData.fundamentals.frame.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {waltzData.fundamentals.frame.elements.map((element, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                        {element}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Move3d className="w-5 h-5" />
                    Movement
                  </CardTitle>
                  <CardDescription>{waltzData.fundamentals.movement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {waltzData.fundamentals.movement.characteristics.map((char, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns">
            <div className="grid md:grid-cols-2 gap-6">
              {waltzData.basicPatterns.map((pattern, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Footprints className="w-5 h-5" />
                      {pattern.name}
                    </CardTitle>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <WaltzTiming measures={1} />
                    <div className="space-y-4 mt-4">
                      {pattern.leadSteps ? (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">Lead Steps</h4>
                            <ul className="space-y-2">
                              {pattern.leadSteps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-indigo
                                  
                                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Follow Steps</h4>
                            <ul className="space-y-2">
                              {pattern.followSteps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <ul className="space-y-2">
                          {pattern.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technique Tab */}
          <TabsContent value="technique">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rise and Fall</CardTitle>
                  <CardDescription>{waltzData.technique.riseAndFall.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {waltzData.technique.riseAndFall.elements.map((element, index) => (
                      <div key={index} className="space-y-3">
                        <h3 className="font-semibold text-indigo-600">{element.phase}</h3>
                        <p className="text-sm text-gray-600">Timing: {element.timing}</p>
                        <ul className="space-y-2">
                          {element.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Footwork</CardTitle>
                  <CardDescription>{waltzData.technique.footwork.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {waltzData.technique.footwork.elements.map((element, index) => (
                      <div key={index} className="p-4 bg-indigo-50 rounded-lg">
                        <h3 className="font-semibold text-indigo-600 mb-2">{element.name}</h3>
                        <p className="text-sm mb-1">When: {element.when}</p>
                        <p className="text-sm text-gray-600">{element.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Traditional Waltz Music</CardTitle>
                  <CardDescription>Classical compositions for waltz</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {waltzData.music.traditional.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.composer}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-indigo-600">{song.style}</span>
                          <span className="text-gray-600 ml-2">• {song.tempo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modern Waltz Songs</CardTitle>
                  <CardDescription>Contemporary music in 3/4 time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {waltzData.music.modern.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-indigo-600">{song.tempo}</span>
                          <span className="text-gray-600 ml-2">• {song.difficulty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Etiquette Section */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="w-5 h-5" />
                      Floor Craft
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {waltzData.etiquette.floorcraft.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Social Dancing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {waltzData.etiquette.socialDancing.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WaltzPage;
