import React from 'react';
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
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Info,
  AlertTriangle,
  CalendarDays,
  Music,
  Heart,
  Camera,
  Volume2,
  Star
} from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

const sdeRules = [
  {
    id: 1,
    title: "Be Courteous Towards Everyone",
    description: "Respect other people's feelings, bodies, & personal space"
  },
  {
    id: 2,
    title: "Be Respectful Towards the Location",
    description: "Visitors are welcome, but remember that we dance in LDS Church buildings--please be respectful in language/dress/behavior"
  },
  {
    id: 3,
    title: "Don't Wander the Building",
    description: "Stay in the Gym or Foyers, unless you're going to the Bathrooms or Parking Lots"
  },
  {
    id: 4,
    title: "Observe Good Dance Etiquette",
    description: "Guys can ask girls to dance, girls can ask guys to dance, & it's okay for anyone to say \"No\" to a dance"
  },
  {
    id: 5,
    title: "Don't Monopolize",
    description: "Unless you came *with* someone, only dance/chat for 1 or 2 songs in a row"
  },
  {
    id: 6,
    title: "Line of Dance Goes Counter-Clockwise",
    description: "Stationary dancers in the center, slow-moving dancers outside that, fast-moving dancers near the edge, non-dancers all the way to the walls"
  },
  {
    id: 7,
    title: "No Over-the-Head Lifts/Aerials",
    description: "No dance moves where the Follow's body goes over the Lead's head--it's a liability issue w/the Church"
  },
  {
    id: 8,
    title: "Photos/Videos Are Allowed",
    description: "We allow people to take, & post on Social Media, photos/videos at SDE--but please do not take close-up photos/videos of others without their permission/consent"
  },
  {
    id: 9,
    title: "Be Quiet Outside",
    description: "We don't want the Neighbors to complain"
  },
  {
    id: 10,
    title: "Have Fun!",
    description: ""
  }
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">The Social Dance Effect</h1>
          <p className="text-xl mb-6">
            Welcome to our weekly FREE social dance venue in the Salt Lake Valley!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="info" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
            <TabsTrigger value="info">About SDE</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
          </TabsList>

          {/* About SDE Tab */}
          <TabsContent value="info">
            <Card>
              <CardHeader>
                <CardTitle>About The Social Dance Effect</CardTitle>
                <CardDescription>Your weekly social dance destination</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <Music className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Dance Variety</h3>
                      <p className="text-gray-600">Mix of Swing, Latin, & Ballroom Dancing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Progressive Learning</h3>
                      <p className="text-gray-600">Monthly progressive lessons that build week by week</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Who Can Come</h3>
                      <p className="text-gray-600">Target age group is 20s & 30s, but anyone is welcome!</p>
                    </div>
                  </div>
                </div>

                <Alert className="bg-blue-50">
                  <Info className="w-4 h-4" />
                  <AlertTitle>Free Entry</AlertTitle>
                  <AlertDescription>
                    All our events are completely FREE! No partner needed.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Schedule</CardTitle>
                <CardDescription>Every Tuesday Evening</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <div>
                          <h3 className="font-semibold mb-2">Dance Lesson</h3>
                          <p className="text-gray-600">7:30 PM - 8:30 PM</p>
                          <p className="text-sm text-gray-500 mt-2 font-semibold">
                            *Please be on time if you can!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Music className="w-6 h-6 text-blue-600" />
                        <div>
                          <h3 className="font-semibold mb-2">Social Dancing</h3>
                          <p className="text-gray-600">8:30 PM - 10:00 PM</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Mix of Swing, Latin, and Ballroom music
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Location Tab */}
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Venue Location</CardTitle>
                <CardDescription>LDS Church Building in Midvale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">7500 S 700 E</p>
                    <p>Midvale, UT 84047</p>
                  </div>
                </div>

                <Alert variant="warning" className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="w-4 h-4" />
                  <AlertTitle>Important Note</AlertTitle>
                  <AlertDescription>
                    Always check each week's Facebook Event to confirm the location!
                  </AlertDescription>
                </Alert>

                {/* Map placeholder */}
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <img 
                    src="/api/placeholder/800/400" 
                    alt="Map location"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rules Tab */}
          <TabsContent value="rules">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SDE Rules & Guidelines</CardTitle>
                  <CardDescription>Please read and follow these rules to ensure everyone has a great time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sdeRules.map((rule) => (
                      <div key={rule.id} className="flex items-start gap-3 border-b pb-4 last:border-0">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 font-semibold">{rule.id}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{rule.title}</h3>
                          {rule.description && (
                            <p className="text-gray-600">{rule.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Alert className="bg-blue-50">
                <Info className="w-4 h-4" />
                <AlertTitle>Remember</AlertTitle>
                <AlertDescription>
                  We dance in LDS Church buildings. Please be respectful and help us maintain a positive relationship with the venue.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsPage;
