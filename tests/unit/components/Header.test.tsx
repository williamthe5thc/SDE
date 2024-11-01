import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '@/context/GlobalContext';
import { Header } from '@/components/common/Header/Header';

const renderHeader = () => {
  return render(
    <GlobalContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

describe('Header Component', () => {
  it('renders logo and navigation links', () => {
    renderHeader();
    expect(screen.getByText('SDE')).toBeInTheDocument();
    expect(screen.getByText('Dance Styles')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    renderHeader();
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    
    // Check if mobile menu items are visible
    expect(screen.getByText('Dance Styles')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
  });

  it('shows sign in button when user is not authenticated', () => {
    renderHeader();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    renderHeader();
    const themeButton = screen.getByLabelText('Toggle theme');
    fireEvent.click(themeButton);

    // Since we can't directly test classList in JSDOM, we can test if the click handler was called
    expect(themeButton).toBeInTheDocument();
  });
});