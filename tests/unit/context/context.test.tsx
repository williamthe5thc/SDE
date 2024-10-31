// src/tests/unit/context/context.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { GlobalContextProvider, useGlobalContext } from '@/context/GlobalContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';

// Test component to access context
const TestComponent = () => {
  const { state, dispatch } = useGlobalContext();
  const { user } = useAuth();

  return (
    <div>
      <div data-testid="theme">{state.theme}</div>
      <button onClick={() => dispatch({ type: 'SET_THEME', payload: state.theme === 'light' ? 'dark' : 'light' })}>
        Toggle Theme
      </button>
      <div data-testid="user">{user?.name || 'No user'}</div>
      <button onClick={() => dispatch({ type: 'SET_USER', payload: { name: 'Test User', email: 'test@example.com' } })}>
        Set User
      </button>
    </div>
  );
};

describe('Context Tests', () => {
  describe('GlobalContext', () => {
    it('provides default theme value', () => {
      render(
        <GlobalContextProvider>
          <TestComponent />
        </GlobalContextProvider>
      );

      expect(screen.getByTestId('theme')).toHaveTextContent('light');
    });

    it('toggles theme correctly', () => {
      render(
        <GlobalContextProvider>
          <TestComponent />
        </GlobalContextProvider>
      );

      const toggleButton = screen.getByText('Toggle Theme');
      fireEvent.click(toggleButton);
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });

    it('updates user state', () => {
      render(
        <GlobalContextProvider>
          <TestComponent />
        </GlobalContextProvider>
      );

      const setUserButton = screen.getByText('Set User');
      fireEvent.click(setUserButton);
      expect(screen.getByTestId('user')).toHaveTextContent('Test User');
    });
  });

  describe('AuthContext', () => {
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      role: 'user' as const
    };

    it('handles login flow', async () => {
      const TestAuthComponent = () => {
        const { login } = useAuth();
        return (
          <button onClick={() => login(mockUser, 'test-token')}>
            Login
          </button>
        );
      };

      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      const loginButton = screen.getByText('Login');
      await act(async () => {
        fireEvent.click(loginButton);
      });

      // Check if user is stored in localStorage
      expect(localStorage.getItem('auth_token')).toBe('test-token');
      expect(JSON.parse(localStorage.getItem('user') || '{}')).toEqual(mockUser);
    });

    it('handles logout flow', async () => {
      const TestAuthComponent = () => {
        const { logout } = useAuth();
        return (
          <button onClick={logout}>
            Logout
          </button>
        );
      };

      render(
        <AuthProvider>
          <TestAuthComponent />
        </AuthProvider>
      );

      const logoutButton = screen.getByText('Logout');
      await act(async () => {
        fireEvent.click(logoutButton);
      });

      // Check if user is removed from localStorage
      expect(localStorage.getItem('auth_token')).toBeNull();
      expect(localStorage.getItem('user')).toBeNull();
    });
  });
});