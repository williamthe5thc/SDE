// src/tests/integration/navigation.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '@/context/GlobalContext';
import App from '@/App';

describe('Navigation Integration', () => {
  it('navigates between pages correctly', () => {
    const history = createMemoryHistory();
    
    render(
      <Router location={history.location} navigator={history}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </Router>
    );

    // Click on Events link
    fireEvent.click(screen.getByText('Events'));
    expect(history.location.pathname).toBe('/events');
    expect(screen.getByText(/Welcome to our weekly FREE social dance/i)).toBeInTheDocument();

    // Click on Learning link
    fireEvent.click(screen.getByText('Learning'));
    expect(history.location.pathname).toBe('/learning-pathways');

    // Navigate to a dance style page
    fireEvent.click(screen.getByText('Salsa'));
    expect(history.location.pathname).toBe('/dance-styles/salsa');
  });

  it('maintains header and footer across navigation', () => {
    const history = createMemoryHistory();
    
    render(
      <Router location={history.location} navigator={history}>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </Router>
    );

    // Navigate to different pages
    fireEvent.click(screen.getByText('Events'));
    expect(screen.getByText('SDE')).toBeInTheDocument(); // Header still present
    expect(screen.getByText(/Your gateway to mastering social dance/i)).toBeInTheDocument(); // Footer still present

    fireEvent.click(screen.getByText('Learning'));
    expect(screen.getByText('SDE')).toBeInTheDocument();
    expect(screen.getByText(/Your gateway to mastering social dance/i)).toBeInTheDocument();
  });
});