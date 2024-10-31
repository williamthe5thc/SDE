// src/tests/unit/components/Header.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '@/components/common/Header/Header';
import { GlobalContextProvider } from '@/context/GlobalContext';

// Mock the context to control theme and auth state
const mockDispatch = jest.fn();
const MockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalContextProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </GlobalContextProvider>
);

describe('Header Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders logo and navigation links', () => {
    render(
      <MockProvider>
        <Header />
      </MockProvider>
    );

    // Check if logo is present
    expect(screen.getByText('SDE')).toBeInTheDocument();

    // Check if main navigation links are present
    expect(screen.getByText('Dance Styles')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Learning')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(
      <MockProvider>
        <Header />
      </MockProvider>
    );

    // Get the mobile menu button (uses aria-label)
    const menuButton = screen.getByRole('button', { name: /menu/i });

    // Click the menu button
    fireEvent.click(menuButton);

    // Check if mobile menu items are visible
    expect(screen.getByText('Dance Styles')).toBeVisible();
    expect(screen.getByText('Events')).toBeVisible();

    // Click again to close
    fireEvent.click(menuButton);

    // Menu should be hidden (this might need adjustment based on your implementation)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('shows sign in button when user is not authenticated', () => {
    render(
      <MockProvider>
        <Header />
      </MockProvider>
    );

    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    render(
      <MockProvider>
        <Header />
      </MockProvider>
    );

    const themeButton = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(themeButton);

    // Verify that theme toggle was called
    // You might need to adjust this based on your actual implementation
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_THEME',
      payload: expect.any(String)
    });
  });
});


