// src/tests/performance/performance.test.tsx
import React from 'react';
import { render } from '../setup/test-utils';
import HomePage from '@/pages/home/home-page';
import DashboardPage from '@/pages/learning/dashboard/DashboardPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';

describe('Performance Tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const measureRenderTime = async (Component: React.ComponentType) => {
    const start = performance.now();
    const { container } = render(<Component />);
    const end = performance.now();
    return end - start;
  };

  it('home page renders within performance threshold', async () => {
    const renderTime = await measureRenderTime(HomePage);
    expect(renderTime).toBeLessThan(100);
  });

  it('dashboard renders within performance threshold', async () => {
    const renderTime = await measureRenderTime(DashboardPage);
    expect(renderTime).toBeLessThan(100);
  });

  it('admin dashboard renders within performance threshold', async () => {
    const renderTime = await measureRenderTime(AdminDashboard);
    expect(renderTime).toBeLessThan(100);
  });
});