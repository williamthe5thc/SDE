// src/components/common/Footer/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';

const footerSections = [
  {
    title: 'Dance Styles',
    links: [
      { label: 'Salsa', path: '/dance-styles/salsa' },
      { label: 'Bachata', path: '/dance-styles/bachata' },
      { label: 'West Coast Swing', path: '/dance-styles/west-coast-swing' },
      { label: 'Country Swing', path: '/dance-styles/country-swing' },
      { label: 'Line Dancing', path: '/dance-styles/line-dancing' },
      { label: 'Waltz', path: '/dance-styles/waltz' },
      { label: 'Cha-Cha', path: '/dance-styles/cha-cha' },
      { label: 'Foxtrot', path: '/dance-styles/foxtrot' }
    ],
  },
  {
    title: 'Learning',
    links: [
      { label: 'Learning Pathways', path: '/learning-pathways' },
      { label: 'Practice Guides', path: '/practice-guides' },
      { label: 'Events', path: '/events' },
      { label: 'Rules & Guidelines', path: '/events#rules' }
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Schedule', path: '/events#schedule' },
      { label: 'Location', path: '/events#location' },
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' }
    ],
  }
];

const socialLinks = [
  { 
    icon: Facebook, 
    href: siteConfig.socialLinks.facebook,
    label: 'Facebook'
  },
  { 
    icon: Instagram, 
    href: siteConfig.socialLinks.instagram,
    label: 'Instagram'
  },
  { 
    icon: Mail, 
    href: `mailto:${siteConfig.contact.email}`,
    label: 'Email'
  }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-bold text-primary">SDE</span>
              </Link>
              
              <p className="text-sm text-muted-foreground max-w-xs">
                Your gateway to mastering social dance in Utah's Salt Lake Valley. 
                Join our community and discover the joy of dancing!
              </p>

              {/* Contact Information */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{siteConfig.mainLocation.address}, {siteConfig.mainLocation.city}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Every {siteConfig.schedule.dayOfWeek}, {siteConfig.schedule.lesson.startTime} - {siteConfig.schedule.socialDance.endTime}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for dance tips, event updates, and special announcements.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privacy" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/rules" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Rules & Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;