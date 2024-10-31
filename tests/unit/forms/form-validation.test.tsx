// src/tests/unit/forms/form-validation.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../setup/test-utils';
import RegisterPage from '@/pages/auth/RegisterPage';
import ProfilePage from '@/pages/profile/ProfilePage';

describe('Form Validation Tests', () => {
  describe('Registration Form', () => {
    beforeEach(() => {
      render(<RegisterPage />);
    });

    it('validates required fields', async () => {
      const submitButton = screen.getByRole('button', { name: /create account/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
        expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
      });
    });

    it('validates password match', async () => {
      const passwordInput = screen.getByLabelText(/^password$/i);
      const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
      
      fireEvent.change(passwordInput, { target: { value: 'StrongPass123!' } });
      fireEvent.change(confirmPasswordInput, { target: { value: 'DifferentPass123!' } });
      
      const submitButton = screen.getByRole('button', { name: /create account/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/passwords don't match/i)).toBeInTheDocument();
      });
    });
  });

  describe('Profile Form', () => {
    beforeEach(() => {
      render(<ProfilePage />);
    });

    it('validates form fields', async () => {
      const phoneInput = await screen.findByLabelText(/phone/i);
      const bioInput = await screen.findByLabelText(/bio/i);
      
      fireEvent.change(phoneInput, { target: { value: '123' } });
      fireEvent.change(bioInput, { target: { value: 'too short' } });
      
      const submitButton = screen.getByRole('button', { name: /save changes/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/invalid phone number/i)).toBeInTheDocument();
        expect(screen.getByText(/bio must be at least 20 characters/i)).toBeInTheDocument();
      });
    });
  });