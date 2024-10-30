import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Book, 
  Medal, 
  Star, 
  PlayCircle, 
  Lock,
  ChevronRight, 
  BookOpen, 
  Dumbbell 
} from 'lucide-react';
import type { Resource, DancePaths, LevelType } from '@/types/learning-pathways';
import { dancePaths } from '@/data/dance-paths';

const LearningPathways: React.FC = () => {
  const [selectedDance, setSelectedDance] = useState<keyof DancePaths>("Country Swing");
  const [selectedLevel, setSelectedLevel] = useState<LevelType>("beginner");

  const ResourceIcon: React.FC<{ type: Resource['type'] }> = ({ type }) => {
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

  const getLevelIcon = (level: LevelType): React.ReactNode => {
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
    <div className="grid md:grid-cols-4 gap-6">
      {Object.entries(dancePaths[selectedDance].levels).map(([level, data]) => (
        <Card
          key={level}
          className={`cursor-pointer transition-shadow hover:shadow-lg ${
            selectedLevel === level ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => !data.locked && setSelectedLevel(level as LevelType)}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-blue-600">
                {getLevelIcon(level as LevelType)}
              </div>
              {data.locked && <Lock className="w-4 h-4 text-gray-400" />}
            </div>
            <h3 className="font-semibold">{data.title}</h3>
            <Progress value={data.progress} className="mt-2" />
          </CardContent>
        </Card>
      ))}

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
  );
};

export default LearningPathways;