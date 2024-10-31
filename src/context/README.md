# Context Directory

`/src/context`

## Overview

This directory contains React Context providers and their associated types, actions, and reducers. These contexts manage global state across the application.

## Directory Structure

```
context/
├── GlobalContext.tsx     # Global application context
├── AuthContext.tsx      # Authentication context
├── ThemeContext.tsx     # Theme management context
└── types/              # Context-specific types
    ├── auth.types.ts
    └── global.types.ts
```

## Available Contexts

### GlobalContext
- Manages application-wide state
- Handles user preferences
- Manages feature flags

```typescript
import { useGlobalContext } from '@/context/GlobalContext';

const { state, dispatch } = useGlobalContext();
```

### AuthContext
- Manages authentication state
- Handles user sessions
- Provides login/logout functionality

```typescript
import { useAuth } from '@/context/AuthContext';

const { user, login, logout } = useAuth();
```

### ThemeContext
- Manages theme preferences
- Handles light/dark mode
- Provides theme utilities

```typescript
import { useTheme } from '@/context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

## Best Practices

1. Context Creation:
```typescript
const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC = ({ children }) => {
  // Provider logic
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
```

2. State Management:
- Use reducers for complex state
- Keep state normalized
- Implement proper type safety

3. Performance:
- Avoid unnecessary rerenders
- Memoize values when needed
- Split contexts when appropriate