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
  Clock,
  RotateCcw,
  Footprints,
  Waves,
  Radio
} from 'lucide-react';

const chaChaData = {
  title: "Cha-Cha",
  description: "A lively, syncopated Cuban dance characterized by its distinctive 'cha-cha-cha' rhythm and Latin styling.",
  history: `The Cha-Cha evolved from the Danzón and Mambo in Cuba during the early 1950s. 
    Originally called Cha-Cha-Chá, it was named after the shuffling sound dancers' feet made during 
    the triple step. The dance quickly spread internationally and became a standard in both Latin and 
    ballroom dance. Today, it remains one of the most popular Latin dances, known for its playful 
    character and energetic rhythm.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Step & Timing", duration: "5:45" },
      { id: 2, title: "Cuban Motion Basics", duration: "6:30" },
      { id: 3, title: "Basic New York", duration: "7:15" },
      { id: 4, title: "Spot Turn Fundamentals", duration: "6:45" }
    ],
    intermediate: [
      { id: 5, title: "Hand to Hand", duration: "8:30" },
      { id: 6, title: "Hip Twists & Fan", duration: "9:15" },
      { id: 7, title: "Open Break & Cross Body", duration: "8:45" }
    ],
    advanced: [
      { id: 8, title: "Advanced Turns & Spins", duration: "10:30" },
      { id: 9, title: "Complex Combinations", duration: "11:15" },
      { id: 10, title: "Performance Styling", duration: "12:00" }
    ]
  },
  fundamentals: {
    timing: {
      description: "2-3-4-&-1 rhythm with emphasis on the 'cha-cha-cha'",
      patterns: [
        {
          name: "Basic Count",
          pattern: "2-3-4-&-1",
          description: "Standard timing for basic step"
        },
        {
          name: "Guapacha Timing",
          pattern: "2-3-4-(1&)",
          description: "Syncopated timing variation"
        }
      ],
      keyPoints: [
        "Strong step on 2",
        "Cha-cha-cha on 4-&-1",
        "Keep rhythm consistent",
        "Maintain clear timing"
      ]
    },
    cubanMotion: {
      description: "Hip movement created through leg straightening",
      elements: [
        {
          name: "Hip Action",
          tips: [
            "Straighten supporting leg",
            "Allow hip to rise naturally",
            "Keep movement controlled",
            "Move from the ground up"
          ]
        },
        {
          name: "Body Movement",
          tips: [
            "Maintain upper body stillness",
            "Use subtle torso rotation",
            "Keep shoulders level",
            "Stay grounded through feet"
          ]
        }
      ]
    }
  },
  basicPatterns: [
    {
      name: "Basic Step",
      timing: "2-3-4-&-1",
      description: "Foundation pattern in closed position",
      leadSteps: [
        "Forward left (2)",
        "Recover right (3)",
        "Side left (4)",
        "Close right (&)",
        "Side left (1)"
      ],
      followSteps: [
        "Back right (2)",
        "Recover left (3)",
        "Side right (4)",
        "Close left (&)",
        "Side right (1)"
      ]
    },
    {
      name: "New York",
      timing: "2-3-4-&-1",
      description: "Open break with forward steps",
      steps: [
        "Open break position",
        "Forward step outside partner",
        "Recover step",
        "Cha-cha-cha in place",
        "Return to closed position"
      ]
    },
    {
      name: "Spot Turn",
      timing: "2-3-4-&-1",
      description: "Turn in place maintaining rhythm",
      steps: [
        "Forward to initiate turn",
        "Continue turning",
        "Complete turn",
        "Cha-cha-cha in place"
      ]
    }
  ],
  styling: {
    hipMovement: [
      {
        title: "Basic Hip Action",
        description: "Natural hip sway through leg straightening",
        tips: [
          "Let hips move naturally",
          "Don't force the movement",
          "Keep upper body steady",
          "Use pressure into floor"
        ]
      },
      {
        title: "Latin Motion",
        description: "Cuban-style hip and body movement",
        tips: [
          "Use subtle body rotation",
          "Connect movement through core",
          "Keep shoulders level",
          "Allow natural flow"
        ]
      }
    ],
    armStyling: [
      {
        title: "Basic Frame",
        description: "Standard dance position arms",
        tips: [
          "Maintain firm but relaxed frame",
          "Keep elbows lifted",
          "Support arms from back",
          "Allow natural movement"
        ]
      },
      {
        title: "Open Position",
        description: "Styling for separated positions",
        tips: [
          "Keep arms energized",
          "Match partner's energy",
          "Use natural arm paths",
          "Coordinate with body movement"
        ]
      }
    ]
  },
  music: {
    rhythm: {
      description: "Strong 4/4 time with emphasis on 1 and the cha-cha-cha",
      characteristics: [
        "Clear percussion rhythm",
        "Distinct 'cha-cha-cha' beat",
        "Tempo 120-128 BPM",
        "Strong musical phrasing"
      ]
    },
    songs: [
      {
        title: "Oye Como Va",
        artist: "Tito Puente",
        tempo: "Medium",
        difficulty: "Beginner-Intermediate"
      },
      {
        title: "Sway",
        artist: "Michael Bublé",
        tempo: "Medium",
        difficulty: "Beginner"
      },
      {
        title: "Love Song",
        artist: "Selena",
        tempo: "Medium-Fast",
        difficulty: "Intermediate"
      }
    ]
  }
};

// Cha-Cha Timing Display Component
const ChaChaRhythm = ({ pattern }) => {
  const beats = pattern.split('-');
  
  return (
    <div className="flex gap-2 items-center my-4">
      {beats.map((beat, index) => (
        <div 
          key={index}
          className={`h-8 ${beat.length > 1 ? 'w-12' : 'w-8'} flex items-center justify-center ${
            beat.includes('&') ? 'bg-red-300' : 'bg-red-500'
          } rounded text-white font-mono ${
            beat === '2' ? 'border-2 border-red-200' : ''
          }`}
        >
          {beat}
        </div>
      ))}
    </div>
  );
};

const ChaChaPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{chaChaData.title}</h1>
          <p className="text-xl mb-6">{chaChaData.description}</p>
          <Button className="bg-white text-red-800 hover:bg-red-50">
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
            <TabsTrigger value="styling">Styling</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About Cha-Cha</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {chaChaData.history}
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
                {chaChaData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-red-600" />
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
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Timing Patterns</CardTitle>
                  <CardDescription>{chaChaData.fundamentals.timing.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {chaChaData.fundamentals.timing.patterns.map((pattern, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-2">{pattern.name}</h3>
                        <ChaChaRhythm pattern={pattern.pattern} />
                        <p className="text-sm text-gray-600 mt-2">{pattern.description}</p>
                      </div>
                    ))}
                    <div className="mt-4">
                      <h3 className="font-semibold mb-2">Key Points</h3>
                      <ul className="space-y-2">
                        {chaChaData.fundamentals.timing.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-red-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cuban Motion</CardTitle>
                  <CardDescription>{chaChaData.fundamentals.cubanMotion.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {chaChaData.fundamentals.cubanMotion.elements.map((element, index) => (
                      <div key={index}>
                        <h3 className="font-semibold mb-2">{element.name}</h3>
                        <ul className="space-y-2">
                          {element.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-center gap-2">
                              <Waves className="w-4 h-4 text-red-600" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns">
            <div className="grid md:grid-cols-2 gap-6">
              {chaChaData.basicPatterns.map((pattern, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Footprints className="w-5 h-5" />
                      {pattern.name}
                    </CardTitle>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChaChaRhythm pattern={pattern.timing} />
                    <div className="space-y-4 mt-4">
                      {pattern.leadSteps ? (
                        <>
                          <div>
                            <h4 className="font-semibold mb-2">Lead Steps</h4>
                            <ul className="space-y-2">
                              {pattern.leadSteps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semib
                            
                            <h4 className="font-semibold mb-2">Follow Steps</h4>
                            <ul className="space-y-2">
                              {pattern.followSteps.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
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
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
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

          {/* Styling Tab */}
          <TabsContent value="styling">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {chaChaData.styling.hipMovement.map((style, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Waves className="w-5 h-5" />
                        {style.title}
                      </CardTitle>
                      <CardDescription>{style.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {style.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {chaChaData.styling.armStyling.map((style, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        {style.title}
                      </CardTitle>
                      <CardDescription>{style.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {style.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Radio className="w-5 h-5" />
                    Rhythm Understanding
                  </CardTitle>
                  <CardDescription>{chaChaData.music.rhythm.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      {chaChaData.music.rhythm.characteristics.map((char, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                          <Music className="w-5 h-5 text-red-600" />
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Music</CardTitle>
                  <CardDescription>Popular songs for practice and social dancing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {chaChaData.music.songs.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-red-600">{song.tempo}</span>
                          <span className="text-gray-600 ml-2">• {song.difficulty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practice Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Practice with Music</CardTitle>
                  <CardDescription>Tips for developing musicality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Finding the Beat</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Listen for the strong 2 count</li>
                        <li>• Feel the cha-cha-cha rhythm</li>
                        <li>• Practice with slower music first</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Musical Phrasing</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Notice 8-bar phrases</li>
                        <li>• Start combinations on phrase</li>
                        <li>• Match energy to music</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Styling with Music</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Add hip motion on beats</li>
                        <li>• Style with percussion</li>
                        <li>• Express musical accents</li>
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

export default ChaChaPage;
