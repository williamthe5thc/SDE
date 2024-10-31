// src/tests/unit/pages/events.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import EventsPage from '@/pages/events/events-page';

describe('Events Page', () => {
  beforeEach(() => {
    render(<EventsPage />);
  });

  it('displays schedule information', async () => {
    await waitFor(() => {
      expect(screen.getByText(/7:30 PM - 8:30 PM/i)).toBeInTheDocument();
      expect(screen.getByText(/8:30 PM - 10:00 PM/i)).toBeInTheDocument();
    });
  });

  it('shows venue location details', async () => {
    const locationTab = await screen.findByText(/location/i);
    fireEvent.click(locationTab);
    
    await waitFor(() => {
      expect(screen.getByText(/7500 S 700 E/i)).toBeInTheDocument();
      expect(screen.getByText(/Midvale, UT 84047/i)).toBeInTheDocument();
    });
  });

  it('displays dance venue rules', async () => {
    const rulesTab = await screen.findByText(/rules/i);
    fireEvent.click(rulesTab);
    
    await waitFor(() => {
      expect(screen.getByText(/Be Courteous Towards Everyone/i)).toBeInTheDocument();
      expect(screen.getByText(/Line of Dance Goes Counter-Clockwise/i)).toBeInTheDocument();
    });
  });
});