// src/pages/learning/dashboard/components/SkillTree.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Lock, Check, ArrowRight } from 'lucide-react';

interface SkillNode {
  id: string;
  title: string;
  description: string;
  progress: number;
  completed: boolean;
  locked: boolean;
  dependencies: string[];
}

const SkillTree = () => {
  const skills: SkillNode[] = [
    {
      id: "basic-rhythm",
      title: "Basic Rhythm & Timing",
      description: "Master the fundamental beats and timing patterns",
      progress: 100,
      completed: true,
      locked: false,
      dependencies: []
    },
    {
      id: "basic-steps",
      title: "Basic Steps",
      description: "Learn essential dance steps and patterns",
      progress: 75,
      completed: false,
      locked: false,
      dependencies: ["basic-rhythm"]
    },
    {
      id: "turns",
      title: "Turns & Spins",
      description: "Master various turning techniques",
      progress: 30,
      completed: false,
      locked: false,
      dependencies: ["basic-steps"]
    },
    {
      id: "styling",
      title: "Styling & Expression",
      description: "Add personal flair and style to your dancing",
      progress: 0,
      completed: false,
      locked: true,
      dependencies: ["turns"]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <Card key={skill.id} className={skill.locked ? 'opacity-75' : ''}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">
                {skill.title}
                {skill.locked && <Lock className="inline ml-2 h-4 w-4" />}
                {skill.completed && <Check className="inline ml-2 h-4 w-4 text-green-500" />}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <Progress value={skill.progress} className="mb-4" />
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{skill.progress}% Complete</span>
                <Button variant="outline" size="sm" disabled={skill.locked}>
                  {skill.locked ? 'Locked' : 'Continue'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SkillTree;