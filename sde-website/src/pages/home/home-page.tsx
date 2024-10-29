import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const danceStyles = [
    "Country Swing", "Line Dancing", "West Coast Swing", "Salsa",
    "Bachata", "Merengue", "Waltz", "Cha-Cha", "Foxtrot",
    "Rumba", "East Coast Swing", "Two-Step"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">The Social Dance Effect</h1>
          <p className="text-xl mb-8">
            Join our vibrant community of dancers in the Salt Lake Valley.
            Free weekly social dancing for all ages and skill levels!
          </p>
          <div className="flex gap-4">
            <Button className="bg-white text-blue-900 hover:bg-blue-50">
              Join Our Classes
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-blue-800">
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Weekly Schedule</h3>
              <p>Every Tuesday Evening</p>
              <p>Lessons: 7:30 PM - 8:30 PM</p>
              <p>Social Dancing: 8:30 PM - 10:00 PM</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p>Midvale, Utah</p>
              <p className="text-sm text-gray-600">
                Check our social media for weekly location updates
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">Free Entry</h3>
              <p>Open to all ages</p>
              <p>Perfect for 20s & 30s</p>
              <p>No partner needed</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore Our Dance Styles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {danceStyles.map((style) => (
            <Card key={style} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{style}</h3>
                <Button variant="ghost" className="text-blue-600 p-0 hover:text-blue-800">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Dancing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us this Tuesday for a fun-filled evening of dancing and community.
            No experience necessary!
          </p>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
