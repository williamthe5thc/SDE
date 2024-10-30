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
  HandMetal,
  Footprints
} from 'lucide-react';
import { RhythmDisplayProps, DanceData, Level, Tutorial } from '@/types/dance';
import {  } from '@/types/dance';

const westCoastSwingData = {
  title: "West Coast Swing",
  description: "A smooth, dynamic partner dance characterized by its elastic connection and musicality. Danced to a variety of music from blues to pop.",
  history: `West Coast Swing evolved from Lindy Hop in the 1940s and was influenced by blues dancing. 
    Originally called "Western Swing" in California, it has become one of the most versatile partner 
    dances, adapted to modern music while maintaining its characteristic slot pattern and elastic connection.`,
  videoTutorials: {
    beginner: [
      { id: 1, title: "Basic Sugar Push Pattern", duration: "6:30" },
      { id: 2, title: "Left Side Pass Fundamentals", duration: "7:15" },
      { id: 3, title: "Right Side Pass Basics", duration: "5:45" }
    ],
    intermediate: [
      { id: 4, title: "Whip Variations", duration: "9:20" },
      { id: 5, title: "Musicality & Styling", duration: "8:45" },
      { id: 6, title: "Inside Turn Patterns", duration: "7:30" }
    ],
    advanced: [
      { id: 7, title: "Advanced Connection", duration: "11:15" },
      { id: 8, title: "Musical Interpretation", duration: "10:30" },
      { id: 9, title: "Complex Pattern Combinations", duration: "12:45" }
    ]
  },
  fundamentalPatterns: [
    {
      name: "Sugar Push",
      counts: "1-2-3&4-5&6",
      description: "Basic 6-count pattern with compression and extension",
      keyPoints: [
        "Start in closed position",
        "Create compression on 1-2",
        "Extend on 3&4",
        "Return to center on 5&6"
      ]
    },
    {
      name: "Left Side Pass",
      counts: "1-2-3&4-5&6",
      description: "Leader redirects follower to left side of slot",
      keyPoints: [
        "Lead redirection on 1-2",
        "Clear slot on 3&4",
        "Return to slot on 5&6"
      ]
    },
    {
      name: "Right Side Pass",
      counts: "1-2-3&4-5&6",
      description: "Leader redirects follower to right side of slot",
      keyPoints: [
        "Lead redirection on 1-2",
        "Maintain connection through turn",
        "Return to slot on 5&6"
      ]
    },
    {
      name: "Whip",
      counts: "1-2-3&4-5&6",
      description: "Anchor turn pattern with rotation",
      keyPoints: [
        "Create rotation on 1-2",
        "Maintain connection through turn",
        "Strong anchor finish"
      ]
    }
  ],
  musicality: {
    rhythmPatterns: [
      {
        name: "Basic 6-Count",
        pattern: "1 2 3&4 5&6",
        description: "Foundation rhythm for most patterns"
      },
      {
        name: "8-Count Basic",
        pattern: "1 2 3&4 5 6 7&8",
        description: "Extended pattern for slower music"
      },
      {
        name: "Delayed Duck Out",
        pattern: "1 2 3... &4 5&6",
        description: "Creating musical pause on count 3"
      }
    ],
    musicStyles: [
      {
        genre: "Blues",
        description: "Traditional WCS music, great for learning",
        examples: ["Feeling Good - Michael Bublé", "Fever - Michael Bublé"]
      },
      {
        genre: "Pop",
        description: "Modern WCS music, popular at events",
        examples: ["Stay With Me - Sam Smith", "Shape of You - Ed Sheeran"]
      },
      {
        genre: "R&B",
        description: "Smooth style with clear rhythm",
        examples: ["All of Me - John Legend", "Earned It - The Weeknd"]
      }
    ]
  },
  connectionTips: {
    lead: [
      "Create clear intentions through body movement",
      "Maintain consistent frame without being rigid",
      "Lead through your center, not your arms",
      "Stay grounded during patterns",
      "Listen to your partner's momentum"
    ],
    follow: [
      "Maintain your own frame and balance",
      "Follow momentum, not hands",
      "Stay connected to the ground",
      "Complete each pattern fully",
      "Match the energy given by the lead"
    ]
  }
};

// Component for showing rhythm patterns visually
const RhythmDisplay: React.FC<RhythmDisplayProps> = ({ pattern }) => {
  const beats = pattern.split(' ');
  
  return (
    <div className="flex gap-2 items-center">
      {beats.map((beat: string, index: number) => (
        <div key={index} className={`h-8 flex items-center justify-center ${
          beat.includes('&') ? 'w-6 bg-blue-200' : 'w-8 bg-blue-400'
        } rounded text-sm font-mono`}>
          {beat}
        </div>
      ))}
    </div>
  );
};

const WestCoastSwingPage = () => {
  const [selectedLevel, setSelectedLevel] = useState<Level>('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{westCoastSwingData.title}</h1>
          <p className="text-xl mb-6">{westCoastSwingData.description}</p>
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
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="musicality">Musicality</TabsTrigger>
            <TabsTrigger value="connection">Connection</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About West Coast Swing</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {westCoastSwingData.history}
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
                {westCoastSwingData.videoTutorials[selectedLevel].map((tutorial) => (
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

          {/* Patterns Tab */}
          <TabsContent value="patterns">
            <div className="grid md:grid-cols-2 gap-6">
              {westCoastSwingData.fundamentalPatterns.map((pattern, index) => (
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
                      {pattern.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {point}
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
                  <CardTitle>Rhythm Patterns</CardTitle>
                  <CardDescription>Common timing structures in WCS</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {westCoastSwingData.musicality.rhythmPatterns.map((rhythm, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-semibold">{rhythm.name}</h3>
                      <RhythmDisplay pattern={rhythm.pattern} />
                      <p className="text-gray-600">{rhythm.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Music Styles</CardTitle>
                  <CardDescription>Different genres for WCS</CardDescription>
                </CardHeader>
                <CardContent>
                  {westCoastSwingData.musicality.musicStyles.map((style, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="font-semibold">{style.genre}</h3>
                      <p className="text-gray-600">{style.description}</p>
                      <ul className="mt-2 text-sm text-gray-500">
                        {style.examples.map((example, exIndex) => (
                          <li key={exIndex}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Connection Tab */}
          <TabsContent value="connection">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Lead Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {westCoastSwingData.connectionTips.lead.map((tip, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Follow Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {westCoastSwingData.connectionTips.follow.map((tip, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Music Tab */}
          <TabsContent value="music">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Music</CardTitle>
                <CardDescription>Songs for practice and social dancing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {westCoastSwingData.musicality.musicStyles.map((style, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h3 className="font-semibold mb-2">{style.genre}</h3>
                      <ul className="space-y-2">
                        {style.examples.map((song, songIndex) => (
                          <li key={songIndex} className="flex items-center gap-2">
                            <Music className="w-4 h-4 text-blue-600" />
                            {song}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WestCoastSwingPage;
