// src/tests/unit/pages/events.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EventsPage from '@/pages/events/events-page';

describe('Events Page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <EventsPage />
      </BrowserRouter>
    );
  });

  it('displays schedule information', () => {
    expect(screen.getByText(/7:30 PM - 8:30 PM/i)).toBeInTheDocument();
    expect(screen.getByText(/8:30 PM - 10:00 PM/i)).toBeInTheDocument();
  });

  it('shows venue location details', () => {
    fireEvent.click(screen.getByText(/location/i));
    
    expect(screen.getByText(/7500 S 700 E/i)).toBeInTheDocument();
    expect(screen.getByText(/Midvale, UT 84047/i)).toBeInTheDocument();
  });

  it('displays dance venue rules', () => {
    fireEvent.click(screen.getByText(/rules/i));
    
    // Check for specific rules
    expect(screen.getByText(/Be Courteous Towards Everyone/i)).toBeInTheDocument();
    expect(screen.getByText(/Line of Dance Goes Counter-Clockwise/i)).toBeInTheDocument();
  });

  it('shows different content sections', () => {
    // Test tab navigation
    fireEvent.click(screen.getByText(/about sde/i));
    expect(screen.getByText(/Mix of Swing, Latin, & Ballroom Dancing/i)).toBeInTheDocument();
    
    fireEvent.click(screen.getByText(/schedule/i));
    expect(screen.getByText(/Dance Lesson/i)).toBeInTheDocument();
  });

  it('displays important alerts and notices', () => {
    expect(screen.getByText(/Free Entry/i)).toBeInTheDocument();
    expect(screen.getByText(/No partner needed/i)).toBeInTheDocument();
  });

  it('shows location verification alert', () => {
    fireEvent.click(screen.getByText(/location/i));
    expect(screen.getByText(/check each week's Facebook Event to confirm the location/i)).toBeInTheDocument();
  });

  it('displays dance styles information', () => {
    expect(screen.getByText(/Mix of Swing, Latin, & Ballroom Dancing/i)).toBeInTheDocument();
  });

  it('handles mobile responsive layout', () => {
    // Simulate mobile viewport
    window.innerWidth = 375;
    window.dispatchEvent(new Event('resize'));
    
    // Check if mobile menu is present
    expect(screen.getByRole('tab', { name: /info/i })).toBeInTheDocument();
  });

  it('displays venue respect guidelines', () => {
    fireEvent.click(screen.getByText(/rules/i));
    expect(screen.getByText(/Be Respectful Towards the Location/i)).toBeInTheDocument();
  });
});