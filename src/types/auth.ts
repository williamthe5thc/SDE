// src/types/auth.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  danceStyles?: string;
  bio?: string;
  role: 'user' | 'admin' | 'instructor';
  createdAt: string;
  preferences?: {
    favoriteStyles?: string[];
    notifications?: boolean;
    theme?: 'light' | 'dark';
  };
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

export type AuthAction =
  | { type: 'LOGIN'; payload: { user: User; token: string } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'SET_TOKEN'; payload: string };