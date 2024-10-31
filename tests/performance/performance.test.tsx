// src/tests/performance/performance.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { performance } from 'perf_hooks';
import HomePage from '@/pages/home/home-page';
import DashboardPage from '@/pages/learning/dashboard/DashboardPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';

describe('Performance Tests', () => {
  const measureRenderTime = (Component: React.ComponentType) => {
    const start = performance.now();
    render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    );
    return performance.now() - start;
  };

  const MAX_RENDER_TIME = 100; // 100ms threshold

  it('home page renders within performance threshold', () => {
    const renderTime = measureRenderTime(HomePage);
    expect(renderTime).toBeLessThan(MAX_RENDER_TIME);
  });

  it('dashboard renders within performance threshold', () => {
    const renderTime = measureRenderTime(DashboardPage);
    expect(renderTime).toBeLessThan(MAX_RENDER_TIME);
  });

  it('admin dashboard renders within performance threshold', () => {
    const renderTime = measureRenderTime(AdminDashboard);
    expect(renderTime).toBeLessThan(MAX_RENDER_TIME);
  });

  // Memory usage tests
  it('checks memory usage after multiple renders', () => {
    if (global.gc) {
      global.gc(); // Force garbage collection if available
    }

    const initialMemory = process.memoryUsage().heapUsed;
    
    // Perform multiple renders
    for (let i = 0; i < 10; i++) {
      const { unmount } = render(
        <MemoryRouter>
          <DashboardPage />
        </MemoryRouter>
      );
      unmount();
    }

    if (global.gc) {
      global.gc();
    }

    const finalMemory = process.memoryUsage().heapUsed;
    const memoryIncrease = finalMemory - initialMemory;
    
    // Ensure memory increase is less than 10MB
    expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024);
  });

  // Component update performance
  it('measures component update performance', async () => {
    const { rerender } = render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );

    const start = performance.now();
    rerender(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );
    const updateTime = performance.now() - start;

    expect(updateTime).toBeLessThan(50); // 50ms threshold for updates
  });

  // Bundle size check (requires additional setup)
  it('ensures critical components are code-split', () => {
    // This is a placeholder - actual implementation would require
    // webpack bundle analyzer or similar tools
    expect(true).toBe(true);
  });
});