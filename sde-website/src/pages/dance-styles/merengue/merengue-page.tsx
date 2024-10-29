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

const merengueData = {
  title: "Merengue",
  description: "The national dance of the Dominican Republic, known for its marching rhythm, hip motion, and easy-to-learn steps.",
  history: `Merengue emerged in the Dominican Republic in the mid-19th century. Originally a rural dance, 
    it gained popularity and was promoted to national dance status in the 1930s by Rafael Trujillo. 
    The dance is characterized by its simple marching step and hip movement, making it one of the 
    easiest Latin dances to learn while still offering room for complexity and styling.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Marching Step", duration: "4:30" },
      { id: 2, title: "Hip Motion Basics", duration: "5:15" },
      { id: 3, title: "Simple Turns", duration: "6:00" },
      { id: 4, title: "Partner Connection", duration: "5:45" }
    ],
    intermediate: [
      { id: 5, title: "Advanced Hip Movement", duration: "7:30" },
      { id: 6, title: "Turn Combinations", duration: "8:15" },
      { id: 7, title: "Styling & Arm Work", duration: "7:45" }
    ],
    advanced: [
      { id: 8, title: "Complex Patterns", duration: "9:30" },
      { id: 9, title: "Performance Styling", duration: "10:15" },
      { id: 10, title: "Footwork Variations", duration: "8:45" }
    ]
  },
  fundamentals: [
    {
      name: "Basic Step",
      description: "The foundation of merengue",
      key_elements: [
        "Marching rhythm in place",
        "Alternating weight transfer",
        "Natural hip motion",
        "Continuous movement"
      ]
    },
    {
      name: "Hip Motion",
      description: "Essential styling element",
      key_elements: [
        "Hip lifts with steps",
        "Side-to-side motion",
        "Controlled movement",
        "Balance and posture"
      ]
    },
    {
      name: "Partner Work",
      description: "Close position basics",
      key_elements: [
        "Proper frame",
        "Lead and follow connection",
        "Synchronized movement",
        "Comfortable proximity"
      ]
    }
  ],
  patterns: [
    {
      name: "Basic March",
      counts: "1, 2, 3, 4",
      description: "Simple marching step with hip motion",
      steps: [
        "Step right foot",
        "Step left foot",
        "Continue alternating",
        "Add hip motion naturally"
      ]
    },
    {
      name: "Spot Turn",
      counts: "1, 2, 3, 4",
      description: "Turn in place while maintaining rhythm",
      steps: [
        "Start with basic step",
        "Begin rotating direction",
        "Continue stepping while turning",
        "Complete full rotation"
      ]
    },
    {
      name: "Partner Turn",
      counts: "1, 2, 3, 4",
      description: "Basic turn while connected",
      steps: [
        "Raise connected hands",
        "Lead turn with gentle guidance",
        "Maintain rhythm during turn",
        "Return to closed position"
      ]
    }
  ],
  styling: {
    hipMovement: [
      {
        title: "Basic Hip Action",
        description: "Natural hip lift with each step",
        tips: [
          "Let hips rise naturally with steps",
          "Keep movement controlled",
          "Don't force the motion",
          "Maintain good posture"
        ]
      },
      {
        title: "Hip Figure-8",
        description: "Advanced hip styling pattern",
        tips: [
          "Practice smooth transitions",
          "Keep upper body stable",
          "Connect movement to steps",
          "Control speed and size"
        ]
      }
    ],
    armStyling: [
      {
        title: "Basic Frame",
        description: "Standard arm positioning",
        tips: [
          "Maintain gentle connection",
          "Keep elbows slightly bent",
          "Allow natural movement",
          "Stay relaxed"
        ]
      },
      {
        title: "Free Styling",
        description: "Creative arm movements",
        tips: [
          "Move arms fluidly",
          "Coordinate with body movement",
          "Express the music",
          "Keep it playful"
        ]
      }
    ]
  },
  music: {
    rhythm: {
      description: "Strong 2/4 or 4/4 time with emphasis on the first beat",
      characteristics: [
        "Steady marching beat",
        "Tambora drum prominence",
        "Güira rhythm pattern",
        "Accordion or saxophone melody"
      ]
    },
    songs: [
      {
        title: "El Baile del Perrito",
        artist: "Wilfrido Vargas",
        tempo: "Fast",
        difficulty: "Intermediate"
      },
      {
        title: "La Bilirrubina",
        artist: "Juan Luis Guerra",
        tempo: "Medium",
        difficulty: "Beginner"
      },
      {
        title: "Comerte a Besos",
        artist: "Elvis Crespo",
        tempo: "Medium-Fast",
        difficulty: "Intermediate"
      }
    ]
  },
  tips: {
    beginners: [
      "Focus on the basic marching step",
      "Let hip motion develop naturally",
      "Keep steps small and controlled",
      "Stay relaxed and have fun"
    ],
    advanced: [
      "Experiment with timing variations",
      "Add complex turn patterns",
      "Incorporate body isolations",
      "Develop unique styling"
    ],
    social: [
      "Be mindful of space",
      "Adapt to partner's level",
      "Keep it playful and light",
      "Maintain good connection"
    ]
  }
};

// Rhythm Pattern Visual Component
const RhythmDisplay = ({ counts }) => {
  return (
    <div className="flex gap-2 items-center my-4">
      {counts.split(', ').map((count, index) => (
        <div 
          key={index}
          className="h-8 w-8 flex items-center justify-center bg-orange-400 rounded text-white font-mono"
        >
          {count}
        </div>
      ))}
    </div>
  );
};

const MerenguePage = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{merengueData.title}</h1>
          <p className="text-xl mb-6">{merengueData.description}</p>
          <Button className="bg-white text-orange-800 hover:bg-orange-50">
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
                <CardTitle>About Merengue</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {merengueData.history}
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
                {merengueData.videoTutorials[selectedLevel].map((tutorial) => (
                  <Card key={tutorial.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <PlayCircle className="w-10 h-10 text-orange-600" />
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
              {merengueData.fundamentals.map((fundamental, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{fundamental.name}</CardTitle>
                    <CardDescription>{fundamental.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {fundamental.key_elements.map((element, elemIndex) => (
                        <li key={elemIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          {element}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns">
            <div className="grid md:grid-cols-2 gap-6">
              {merengueData.patterns.map((pattern, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Footprints className="w-5 h-5" />
                      {pattern.name}
                    </CardTitle>
                    <CardDescription>{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RhythmDisplay counts={pattern.counts} />
                    <ul className="space-y-2 mt-4">
                      {pattern.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Styling Tab */}
          <TabsContent value="styling">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {merengueData.styling.hipMovement.map((style, index) => (
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
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {merengueData.styling.armStyling.map((style, index) => (
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
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
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
                  <CardTitle>Understanding Merengue Rhythm</CardTitle>
                  <CardDescription>{merengueData.music.rhythm.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {merengueData.music.rhythm
                    
                    {merengueData.music.rhythm.characteristics.map((char, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Music className="w-4 h-4 text-orange-600" />
                        {char}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Songs</CardTitle>
                  <CardDescription>Popular merengue music for practice and social dancing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {merengueData.music.songs.map((song, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border-b last:border-0">
                        <div>
                          <h3 className="font-semibold">{song.title}</h3>
                          <p className="text-sm text-gray-600">{song.artist}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-orange-600">{song.tempo}</span>
                          <span className="text-gray-600 ml-2">• {song.difficulty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Dance Tips Section */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-orange-600" />
                      Beginner Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {merengueData.tips.beginners.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RotateCcw className="w-5 h-5 text-orange-600" />
                      Advanced Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {merengueData.tips.advanced.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-600" />
                      Social Dancing Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {merengueData.tips.social.map((tip, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
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

export default MerenguePage;
