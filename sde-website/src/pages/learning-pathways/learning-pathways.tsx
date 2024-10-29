import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Book,
  Medal,
  Star,
  CheckCircle2,
  LockKeyhole,
  PlayCircle,
  ChevronRight,
  BookOpen,
  Music,
  Users,
  Dumbbell
} from 'lucide-react';

// Sample data structure for dance paths
const dancePaths = {
  "Country Swing": {
    levels: {
      beginner: {
        title: "Beginner Basics",
        description: "Master the fundamentals of Country Swing",
        progress: 0,
        milestones: [
          {
            id: 1,
            title: "Basic Rhythm & Steps",
            description: "Learn the 6-count basic and rhythm foundations",
            completed: false,
            resources: [
              { type: "video", title: "Basic Step Tutorial", duration: "5:30" },
              { type: "practice", title: "Rhythm Training Exercise" },
              { type: "reading", title: "Understanding Country Swing Timing" }
            ]
          },
          {
            id: 2,
            title: "Lead & Follow Basics",
            description: "Learn fundamental connection and frame",
            completed: false,
            resources: [
              { type: "video", title: "Frame & Connection", duration: "8:15" },
              { type: "practice", title: "Frame Maintenance Drill" }
            ]
          },
          {
            id: 3,
            title: "Basic Turns",
            description: "Inside and outside turn fundamentals",
            completed: false,
            locked: true,
            resources: [
              { type: "video", title: "Basic Turns Tutorial", duration: "7:45" },
              { type: "practice", title: "Solo Turn Practice" }
            ]
          }
        ]
      },
      intermediate: {
        title: "Intermediate Combinations",
        description: "Build your repertoire with advanced moves",
        progress: 0,
        locked: true,
        milestones: [
          {
            id: 1,
            title: "Advanced Turn Patterns",
            description: "Complex turn combinations and transitions",
            completed: false,
            resources: [
              { type: "video", title: "Turn Pattern Tutorial", duration: "10:30" }
            ]
          }
        ]
      },
      advanced: {
        title: "Advanced Styling",
        description: "Master advanced techniques and styling",
        progress: 0,
        locked: true,
        milestones: [
          {
            id: 1,
            title: "Advanced Styling",
            description: "Personal style and advanced variations",
            completed: false,
            resources: [
              { type: "video", title: "Style Workshop", duration: "15:00" }
            ]
          }
        ]
      }
    }
  }
};

const LearningPathways = () => {
  const [selectedDance, setSelectedDance] = useState("Country Swing");
  const [selectedLevel, setSelectedLevel] = useState("beginner");

  const ResourceIcon = ({ type }) => {
    switch (type) {
      case "video":
        return <PlayCircle className="w-4 h-4" />;
      case "practice":
        return <Dumbbell className="w-4 h-4" />;
      case "reading":
        return <BookOpen className="w-4 h-4" />;
      default:
        return <ChevronRight className="w-4 h-4" />;
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case "beginner":
        return <Book className="w-6 h-6" />;
      case "intermediate":
        return <Medal className="w-6 h-6" />;
      case "advanced":
        return <Star className="w-6 h-6" />;
      default:
        return <Book className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Learning Pathways</h1>
          <p className="text-xl">Track your progress and master new dance styles step by step</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* Dance Style Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Dance Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => setSelectedDance("Country Swing")}
                  >
                    <Music className="w-4 h-4 mr-2" />
                    Country Swing
                  </Button>
                  {/* Additional dance styles would be added here */}
                </div>
              </CardContent>
            </Card>

            {/* Overall Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Overall</span>
                      <span className="text-sm text-gray-500">25%</span>
                    </div>
                    <Progress value={25} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            {/* Level Selection */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(dancePaths[selectedDance].levels).map(([level, data]) => (
                <Card
                  key={level}
                  className={`cursor-pointer transition-shadow hover:shadow-lg ${
                    selectedLevel === level ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => !data.locked && setSelectedLevel(level)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-blue-600">
                        {getLevelIcon(level)}
                      </div>
                      {data.locked && <LockKeyhole className="w-4 h-4 text-gray-400" />}
                    </div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <Progress value={data.progress} className="mt-2" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Milestones</CardTitle>
                <CardDescription>
                  Complete these milestones to progress to the next level
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dancePaths[selectedDance].levels[selectedLevel].milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className={`border rounded-lg p-4 ${
                        milestone.locked ? 'opacity-50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={milestone.locked}
                          className="flex-shrink-0"
                        >
                          {milestone.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : (
                            "Start"
                          )}
                        </Button>
                      </div>

                      {/* Resources */}
                      <div className="space-y-2">
                        {milestone.resources.map((resource, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div className="flex items-center gap-2">
                              <ResourceIcon type={resource.type} />
                              <span>{resource.title}</span>
                            </div>
                            {resource.duration && (
                              <Badge variant="secondary">{resource.duration}</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathways;
