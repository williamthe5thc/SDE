// src/tests/unit/components/components.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { StyleOverview } from '@/components/dance-styles/StyleOverview';
import { TutorialPlayer } from '@/components/dance-styles/TutorialPlayer';

describe('UI Components', () => {
  describe('Card Component', () => {
    it('renders card with all its parts', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
          </CardHeader>
          <CardContent>Test Content</CardContent>
        </Card>
      );

      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });
  });

  describe('Button Component', () => {
    it('renders different button variants', () => {
      render(
        <>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
        </>
      );

      expect(screen.getByText('Default')).toHaveClass('bg-primary');
      expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');
      expect(screen.getByText('Outline')).toHaveClass('border');
    });

    it('handles click events', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      fireEvent.click(screen.getByText('Click Me'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Progress Component', () => {
    it('renders with different values', () => {
      render(<Progress value={75} />);
      
      const indicator = screen.getByRole('progressbar');
      expect(indicator).toHaveStyle({ transform: 'translateX(-25%)' });
    });
  });

  describe('Dance Style Components', () => {
    const mockStyleData = {
      history: {
        origin: 'Test origin',
        evolution: 'Test evolution',
        significance: 'Test significance'
      },
      basicSteps: [{
        name: 'Basic Step',
        description: 'Test description',
        keyPoints: ['Point 1', 'Point 2']
      }],
      commonMistakes: ['Mistake 1', 'Mistake 2']
    };

    it('renders style overview correctly', () => {
      render(<StyleOverview {...mockStyleData} />);
      
      expect(screen.getByText('Test origin')).toBeInTheDocument();
      expect(screen.getByText('Basic Step')).toBeInTheDocument();
      expect(screen.getByText('Mistake 1')).toBeInTheDocument();
    });

    const mockTutorialData = {
      videoUrl: 'test-url',
      title: 'Test Tutorial',
      description: 'Test description',
      timestamps: [{ time: 0, label: 'Start' }]
    };

    it('renders tutorial player with controls', () => {
      render(<TutorialPlayer {...mockTutorialData} />);
      
      expect(screen.getByText('Test Tutorial')).toBeInTheDocument();
      expect(screen.getByText('Test description')).toBeInTheDocument();
      expect(screen.getByText('Start')).toBeInTheDocument();
    });
  });
});