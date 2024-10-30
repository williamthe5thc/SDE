import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TutorialPlayer from '@/components/dance-styles/TutorialPlayer';
import PracticeGuide from '@/components/dance-styles/PracticeGuide';
import StyleOverview from '@/components/dance-styles/StyleOverview';
import { DanceData, Level, Tutorial } from '@/types/dance';

const ChaChaPage: React.FC = () => {
  const chachaData = {
    styleName: "Cha Cha",
    description: "The Cha Cha is a lively, flirtatious dance with Cuban origins, known for its distinctive rhythm and charismatic steps.",
    history: {
      origin: "The Cha Cha originated in Cuba in the early 1950s.",
      evolution: "Developed from the Danzón-Mambo, becoming a distinct style by the mid-1950s.",
      significance: "Known for its sharp steps and energetic turns, making it popular in both social and competitive dancing."
    },
    basicSteps: [
      {
        name: "Basic Step",
        description: "The foundational Cha Cha step pattern",
        keyPoints: [
          "Start with feet together",
          "Step left foot forward",
          "Replace weight to right foot",
          "Cha-cha-cha (three quick steps in place)",
          "Repeat in opposite direction"
        ]
      },
      {
        name: "Side Basic",
        description: "The basic step performed moving sideways",
        keyPoints: [
          "Step left foot to side",
          "Replace weight to right foot",
          "Cha-cha-cha to the side",
          "Repeat in opposite direction"
        ]
      }
    ],
    tutorials: [
      {
        title: "Basic Steps",
        videoUrl: "/tutorials/chacha/basic.mp4",
        timestamps: [
          { time: 0, label: "Introduction" },
          { time: 90, label: "Basic Step" },
          { time: 225, label: "Side Basic" }
        ],
        keyPoints: [
          "Keep your upper body still",
          "Focus on hip movement",
          "Maintain proper timing"
        ]
      }
    ],
    practiceGuides: [
      {
        title: "Beginner Practice Routine",
        difficulty: "Beginner",
        steps: [
          "Practice basic timing without steps",
          "Add basic step in place",
          "Practice side basic",
          "Combine movements"
        ],
        tips: [
          "Count out loud: 1-2-3-cha-cha",
          "Practice with music at slower tempo first",
          "Focus on smooth weight transfers"
        ]
      }
    ],
    commonMistakes: [
      "Rushing the cha-cha-cha steps",
      "Not transferring weight properly",
      "Forgetting hip movement",
      "Looking down at feet"
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{chachaData.styleName}</h1>
        <p className="text-lg text-gray-600">{chachaData.description}</p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="practice">Practice Guide</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <StyleOverview
            history={chachaData.history}
            basicSteps={chachaData.basicSteps}
            commonMistakes={chachaData.commonMistakes}
          />
        </TabsContent>

        <TabsContent value="tutorials">
          <div className="space-y-8">
            {chachaData.tutorials.map((tutorial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <TutorialPlayer
  videoUrl={tutorial.videoUrl}
  title={tutorial.title}
  description="Learn the basic patterns and techniques"  // Just provide a static description since it's not in data
  timestamps={tutorial.timestamps}
/>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practice">
          <div className="space-y-6">
            {chachaData.practiceGuides.map((guide, index) => (
              <PracticeGuide
  title={guide.title}
  steps={guide.steps.map(step => ({
    title: step,
    description: step,
    steps: [step]
  }))}
  difficulty={guide.difficulty}
/>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChaChaPage;