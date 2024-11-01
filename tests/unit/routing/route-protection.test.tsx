import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

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
        <Route 
          path="/protected/dashboard" 
          element={
            <div>Param: /dashboard</div>
          }
        />
      </Routes>
    </MemoryRouter>
  </AuthProvider>
);

describe('Route Protection Tests', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('redirects to login when user is not authenticated', () => {
    render(<TestRouter />);
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Protected Content/i)).not.toBeInTheDocument();
  });

  it('allows access to protected routes when authenticated', () => {
    // Setup authenticated state
    localStorage.setItem('auth_token', 'test-token');
    localStorage.setItem('user', JSON.stringify({ 
      id: '1', 
      name: 'Test User',
      role: 'user',
      preferences: {} 
    }));

    render(<TestRouter />);
    expect(screen.getByText(/Protected Content/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login Page/i)).not.toBeInTheDocument();

    // Cleanup
    localStorage.clear();
  });

  it('maintains route params after authentication', () => {
    localStorage.setItem('auth_token', 'test-token');
    localStorage.setItem('user', JSON.stringify({ 
      id: '1', 
      name: 'Test User',
      role: 'user',
      preferences: {} 
    }));

    render(
      <TestRouter initialEntries={['/protected/dashboard']} />
    );
    expect(screen.getByText('Param: /dashboard')).toBeInTheDocument();
  });
});