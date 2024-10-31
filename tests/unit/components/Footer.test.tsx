// src/tests/unit/components/Footer.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '@/components/common/Footer';

describe('Footer Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it('renders company information', () => {
    expect(screen.getByText('SDE')).toBeInTheDocument();
    expect(screen.getByText(/Your gateway to mastering social dance/i)).toBeInTheDocument();
  });

  it('displays correct navigation sections', () => {
    expect(screen.getByText('Dance Styles')).toBeInTheDocument();
    expect(screen.getByText('Learning')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('shows social media links', () => {
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('displays newsletter signup form', () => {
    expect(screen.getByText('Stay Updated')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  it('shows copyright information', () => {
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('renders all footer links', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);

    // Check for specific important links
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Rules & Guidelines')).toBeInTheDocument();
  });
});

