// src/tests/unit/pages/dance-styles.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SalsaPage from '@/pages/dance-styles/salsa/salsa-page';
import BachataPage from '@/pages/dance-styles/bachata/bachata-page';
import TutorialPlayer from '@/components/dance-styles/TutorialPlayer';

describe('Dance Style Pages', () => {
  describe('Salsa Page', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <SalsaPage />
        </BrowserRouter>
      );
    });

    it('displays correct dance style information', () => {
      expect(screen.getByText(/salsa/i)).toBeInTheDocument();
      expect(screen.getByText(/vibrant, energetic latin dance/i)).toBeInTheDocument();
    });

    it('shows different difficulty levels', () => {
      expect(screen.getByText(/beginner/i)).toBeInTheDocument();
      expect(screen.getByText(/intermediate/i)).toBeInTheDocument();
      expect(screen.getByText(/advanced/i)).toBeInTheDocument();
    });

    it('navigates between content tabs', () => {
      fireEvent.click(screen.getByText(/tutorials/i));
      expect(screen.getByText(/basic step & timing/i)).toBeInTheDocument();

      fireEvent.click(screen.getByText(/musicality/i));
      expect(screen.getByText(/rhythm patterns/i)).toBeInTheDocument();
    });
  });

  describe('Tutorial Player', () => {
    const mockTutorial = {
      videoUrl: 'test-url',
      title: 'Basic Steps',
      description: 'Learn the fundamentals',
      timestamps: [
        { time: 0, label: 'Introduction' },
        { time: 60, label: 'Basic Steps' }
      ]
    };

    it('displays tutorial information', () => {
      render(<TutorialPlayer {...mockTutorial} />);
      
      expect(screen.getByText('Basic Steps')).toBeInTheDocument();
      expect(screen.getByText('Learn the fundamentals')).toBeInTheDocument();
    });

    it('shows timestamp markers', () => {
      render(<TutorialPlayer {...mockTutorial} />);
      
      expect(screen.getByText('Introduction')).toBeInTheDocument();
      expect(screen.getByText('Basic Steps')).toBeInTheDocument();
    });
  });
});