// src/pages/about/about-page.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Heart, Star, Music } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building a welcoming, inclusive dance community where everyone can thrive."
    },
    {
      icon: Heart,
      title: "Passion for Dance",
      description: "Sharing our love for dance and helping others discover their passion."
    },
    {
      icon: Star,
      title: "Quality Instruction",
      description: "Providing excellent instruction while keeping classes accessible and fun."
    },
    {
      icon: Music,
      title: "Musical Connection",
      description: "Fostering a deep appreciation for music and rhythmic expression."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Lead Instructor & Founder",
      image: "/api/placeholder/400/400",
      bio: "20+ years of dance experience across multiple styles."
    },
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      image: "/api/placeholder/400/400",
      bio: "Organizing memorable dance events since 2015."
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">About Social Dance Effect</h1>
          <p className="text-xl max-w-2xl">
            Founded in 2020, Social Dance Effect has grown into Utah's premier social dance community,
            bringing together dancers of all levels to learn, grow, and connect through dance.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary mb-2">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;