// src/utils/constants/index.ts

export const DANCE_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
} as const;

export const DANCE_STYLES = {
  SALSA: 'salsa',
  BACHATA: 'bachata',
  MERENGUE: 'merengue',
  CHA_CHA: 'cha-cha',
  RUMBA: 'rumba',
  EAST_COAST_SWING: 'east-coast-swing',
  WEST_COAST_SWING: 'west-coast-swing',
  COUNTRY_SWING: 'country-swing',
  TWO_STEP: 'two-step',
  WALTZ: 'waltz',
  FOXTROT: 'foxtrot',
  LINE_DANCING: 'line-dancing',
} as const;

export const ROUTES = {
  HOME: '/',
  DANCE_STYLES: '/dance-styles',
  EVENTS: '/events',
  LEARNING: '/learning-pathways',
} as const;

export const EVENT_TYPES = {
  CLASS: 'class',
  SOCIAL: 'social',
  WORKSHOP: 'workshop',
  PERFORMANCE: 'performance',
} as const;


export const API_ENDPOINTS = {
  // Use type assertion to handle the env variable
  BASE_URL: ((import.meta as any).env?.VITE_API_BASE_URL as string) || 'https://api.socialdanceeffect.com',
  AUTH: '/auth',
  DANCE_STYLES: '/dance-styles',
  EVENTS: '/events',
  USER: '/user',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const DEFAULT_META = {
  title: 'The Social Dance Effect',
  description: 'Learn social dancing with The Social Dance Effect - Your gateway to mastering various dance styles in Utah\'s Salt Lake Valley.',
  keywords: ['social dance', 'dance lessons', 'Utah dance', 'dance styles'],
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;