// src/tests/unit/auth/auth.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from '@/context/GlobalContext';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import ForgotPasswordPage from '@/pages/auth/ForgotPasswordPage';

const MockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GlobalContextProvider>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </GlobalContextProvider>
);

describe('Authentication Flow', () => {
  describe('Login Page', () => {
    beforeEach(() => {
      render(
        <MockProvider>
          <LoginPage />
        </MockProvider>
      );
    });

    it('renders login form elements', () => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('handles form validation', async () => {
      const submitButton = screen.getByRole('button', { name: /sign in/i });
      fireEvent.click(submitButton);
      
      await waitFor(() => {
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
      });
    });

    it('navigates to forgot password page', () => {
      const forgotPasswordLink = screen.getByText(/forgot your password/i);
      expect(forgotPasswordLink).toHaveAttribute('href', '/auth/forgot-password');
    });
  });

  describe('Register Page', () => {
    beforeEach(() => {
      render(
        <MockProvider>
          <RegisterPage />
        </MockProvider>
      );
    });

    it('renders registration form elements', () => {
      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    });

    it('validates matching passwords', async () => {
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
      
      fireEvent.change(passwordInput, { target: { value: 'Password123' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'Password124' } });
      
      const submitButton = screen.getByRole('button', { name: /create account/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/passwords don't match/i)).toBeInTheDocument();
      });
    });
  });

  describe('Forgot Password Page', () => {
    beforeEach(() => {
      render(
        <MockProvider>
          <ForgotPasswordPage />
        </MockProvider>
      );
    });

    it('renders reset password form', () => {
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
    });

    it('validates email format', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      
      const submitButton = screen.getByRole('button', { name: /send reset link/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      });
    });
  });
});
interface AuthContextType {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  user: User | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

export const AuthContext = React.createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
  login: async () => {},
  logout: () => {},
  user: null,
});