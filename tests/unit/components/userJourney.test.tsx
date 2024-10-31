// src/tests/e2e/userJourney.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '@/context/GlobalContext';
import App from '@/App';

describe('User Journey', () => {
  it('completes a typical user flow', async () => {
    const history = createMemoryHistory();
    
    render(
      <Router location={history.location} navigator={history}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </Router>
    );

    // Start at home page
    expect(screen.getByText(/Welcome to Social Dance Effect/i)).toBeInTheDocument();

    // Navigate to Events
    fireEvent.click(screen.getByText('Events'));
    expect(screen.getByText(/Welcome to our weekly FREE social dance/i)).toBeInTheDocument();

    // Check schedule information
    expect(screen.getByText(/7:30 PM - 8:30 PM/i)).toBeInTheDocument();

    // Navigate to a dance style
    fireEvent.click(screen.getByText('Dance Styles'));
    fireEvent.click(screen.getByText('Salsa'));
    
    // Check dance style content
    expect(screen.getByText(/A vibrant, energetic Latin dance/i)).toBeInTheDocument();

    // Test theme toggle
    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(themeButton);
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBeTruthy();
    });
  });
});