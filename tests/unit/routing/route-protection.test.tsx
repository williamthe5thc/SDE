// src/tests/unit/routing/route-protection.test.tsx
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

describe('Route Protection Tests', () => {
  const ProtectedComponent = () => <div>Protected Content</div>;
  const LoginComponent = () => <div>Login Page</div>;

  const TestRouter = ({ initialEntries = ['/protected'] }) => (
    <AuthProvider>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route
            path="/protected"
            element={
              <ProtectedRoute>
                <ProtectedComponent />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  it('redirects to login when user is not authenticated', () => {
    render(<TestRouter />);
    expect(screen.getByText('Login Page')).toBeInTheDocument();
    expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
  });

  it('allows access to protected routes when authenticated', () => {
    localStorage.setItem('auth_token', 'test-token');
    localStorage.setItem('user', JSON.stringify({ id: '1', name: 'Test User' }));

    render(<TestRouter />);
    expect(screen.getByText('Protected Content')).toBeInTheDocument();
    expect(screen.queryByText('Login Page')).not.toBeInTheDocument();

    // Cleanup
    localStorage.clear();
  });

  it('maintains route params after authentication', async () => {
    const ParamComponent = () => {
      const params = new URLSearchParams(window.location.search);
      return <div>Param: {params.get('returnTo')}</div>;
    };

    render(
      <MemoryRouter initialEntries={['/protected?returnTo=/dashboard']}>
        <Routes>
          <Route path="/protected" element={<ParamComponent />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Param: /dashboard')).toBeInTheDocument();
  });
});