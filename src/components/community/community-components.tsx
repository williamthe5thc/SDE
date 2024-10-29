import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  MessageSquare,
  Heart,
  Share2,
  Send,
  Star,
  Users,
  Mail,
  Facebook,
  Instagram,
  Clock,
  ThumbsUp
} from 'lucide-react';

// Sample data structure for forum posts
const forumPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/api/placeholder/32/32",
      role: "Instructor"
    },
    title: "Tips for Leading Country Swing",
    content: "Here are some key tips I've learned about leading in Country Swing...",
    category: "Dance Tips",
    likes: 24,
    replies: 12,
    timeAgo: "2 hours ago",
    tags: ["country-swing", "leading", "tips"]
  },
  {
    id: 2,
    author: {
      name: "Mike Smith",
      avatar: "/api/placeholder/32/32",
      role: "Member"
    },
    title: "Best Songs for Practicing Salsa",
    content: "I've compiled a list of my favorite songs for practicing Salsa timing...",
    category: "Music",
    likes: 18,
    replies: 8,
    timeAgo: "5 hours ago",
    tags: ["salsa", "music", "practice"]
  }
];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    author: {
      name: "Emily Davis",
      avatar: "/api/placeholder/64/64",
      dancingFor: "2 years"
    },
    content: "The Social Dance Effect has completely transformed my social life! I went from having two left feet to confidently dancing multiple styles.",
    image: "/api/placeholder/400/300",
    likes: 45,
    datePosted: "2024-03-15"
  },
  {
    id: 2,
    author: {
      name: "David Wilson",
      avatar: "/api/placeholder/64/64",
      dancingFor: "1 year"
    },
    content: "I never thought I could learn to dance, but the supportive community here made it possible. Now I look forward to dancing every Tuesday!",
    image: "/api/placeholder/400/300",
    likes: 38,
    datePosted: "2024-03-10"
  }
];

// Forum Post Component
const ForumPost = ({ post }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">{post.author.name}</span>
              <Badge variant="secondary">{post.author.role}</Badge>
              <span className="text-sm text-gray-500">{post.timeAgo}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ThumbsUp className="w-4 h-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                {post.replies}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
            <AvatarFallback>{testimonial.author.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{testimonial.author.name}</h3>
            <p className="text-sm text-gray-500">Dancing for {testimonial.author.dancingFor}</p>
          </div>
        </div>
        {testimonial.image && (
          <div className="mb-4">
            <img
              src={testimonial.image}
              alt="Dance moment"
              className="w-full rounded-lg"
            />
          </div>
        )}
        <p className="text-gray-600 mb-4">{testimonial.content}</p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Heart className="w-4 h-4 mr-2" />
            {testimonial.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Newsletter Component
const Newsletter = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stay Connected</CardTitle>
        <CardDescription>
          Get weekly updates about events, new tutorials, and community highlights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button>
            <Mail className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// Main Community Page Component
const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">SDE Community</h1>
          <p className="text-xl">Connect, share, and grow with fellow dancers</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="md:col-span-2">
            <Tabs defaultValue="forum" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-2">
                <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
                <TabsTrigger value="testimonials">Success Stories</TabsTrigger>
              </TabsList>

              <TabsContent value="forum">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Discussions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="mb-4">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Start New Discussion
                      </Button>
                      <div className="space-y-4">
                        {forumPosts.map(post => (
                          <ForumPost key={post.id} post={post} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="testimonials">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dance Journey Stories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="mb-4">
                        <Star className="w-4 h-4 mr-2" />
                        Share Your Story
                      </Button>
                      <div className="space-y-6">
                        {testimonials.map(testimonial => (
                          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Newsletter />

            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Community Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>2,500+ Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>150+ Active Discussions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Weekly Events</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
