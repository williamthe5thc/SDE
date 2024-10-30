// src/components/common/Footer/index.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Dance Styles',
      links: [
        { label: 'Salsa', path: '/dance-styles/salsa'},
        { label: 'Bachata', path: '/dance-styles/bachata' },
        { label: 'West Coast Swing', path: '/dance-styles/west-coast-swing' },
        { label: 'Country Swing', path: '/dance-styles/country-swing' },
      ],
    },
    {
      title: 'Learn',
      links: [
        { label: 'Learning Pathways', path: '/learning-pathways' },
        { label: 'Practice Guides', path: '/practice-guides' },
        { label: 'Tutorials', path: '/tutorials' },
        { label: 'Events', path: '/events' },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-primary">
              SDE
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your journey to becoming a confident social dancer starts here.
            </p>
          </div>

          {/* Navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Social Dance Effect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;