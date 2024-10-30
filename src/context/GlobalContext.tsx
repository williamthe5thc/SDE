import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    favoriteStyles: string[];
    skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    notifications: boolean;
  };
}

interface Event {
  id: string;
  title: string;
  date: Date;
  type: 'class' | 'social' | 'workshop';
  danceStyle: string;
  location: string;
}

interface GlobalState {
  user: User | null;
  isAuthenticated: boolean;
  theme: 'light' | 'dark';
  upcomingEvents: Event[];
  learningProgress: {
    [key: string]: {
      completed: string[];
      inProgress: string[];
      nextSteps: string[];
    };
  };
}

// Action types
type ActionType =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'ADD_EVENT'; payload: Event }
  | { type: 'UPDATE_PROGRESS'; payload: { danceStyle: string; progress: any } }
  | { type: 'LOGOUT' };

// Initial state
const initialState: GlobalState = {
  user: null,
  isAuthenticated: false,
  theme: 'light',
  upcomingEvents: [],
  learningProgress: {},
};

// Reducer
const globalReducer = (state: GlobalState, action: ActionType): GlobalState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'ADD_EVENT':
      return {
        ...state,
        upcomingEvents: [...state.upcomingEvents, action.payload],
      };
    case 'UPDATE_PROGRESS':
      return {
        ...state,
        learningProgress: {
          ...state.learningProgress,
          [action.payload.danceStyle]: action.payload.progress,
        },
      };
    case 'LOGOUT':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// Context
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Provider component - renamed to match the import in App.tsx
export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};

export default GlobalContext;