// src/components/dance-styles/BaseDanceStyle.tsx
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

export interface DanceStyleData {
  title: string;
  description: string;
  history: string;
  videoTutorials: {
    beginner: Tutorial[];
    intermediate: Tutorial[];
    advanced: Tutorial[];
  };
  fundamentals?: {
    timing?: {
      description: string;
      pattern: string;
      keyPoints: string[];
    };
    frame?: {
      description: string;
      elements: string[];
    };
    movement?: {
      description: string;
      characteristics: string[];
    };
  };
  basicPatterns: {
    name: string;
    counts: string;
    description: string;
    steps: string[];
  }[];
  musicality?: {
    rhythmPatterns?: {
      name: string;
      pattern: string;
      description: string;
    }[];
    recommendedSongs?: {
      title: string;
      artist: string;
      tempo: string;
      style?: string;
    }[];
  };
  styling?: {
    elements: {
      name: string;
      description: string;
      tips: string[];
    }[];
  };
  partnerWork?: {
    lead: string[];
    follow: string[];
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface BaseDanceStyleProps {
  data: DanceStyleData;
  children?: React.ReactNode;
}

const BaseDanceStyle: React.FC<BaseDanceStyleProps> = ({ data, children }) => {
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-${data.theme.primary} text-white py-16`}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl mb-6">{data.description}</p>
          <Button className={`bg-white text-${data.theme.primary} hover:bg-${data.theme.accent}-50`}>
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
            <TabsTrigger value="musicality">Musicality</TabsTrigger>
            <TabsTrigger value="partner">Partner Work</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>About {data.title}</CardTitle>
                <CardDescription>History and Background</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{data.history}</p>
                {children && <div className="mt-6">{children}</div>}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add other tab contents similar to existing dance pages */}
          {/* ... */}

        </Tabs>
      </div>
    </div>
  );
};

export default BaseDanceStyle;