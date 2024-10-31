# Types Directory

`/src/types`

## Overview

This directory contains TypeScript type definitions, interfaces, and enums used throughout the application.

## Directory Structure

```
types/
├── api/              # API-related types
│   ├── requests.ts
│   └── responses.ts
├── models/           # Data model types
│   ├── user.ts
│   └── dance.ts
├── ui/              # UI component types
│   ├── props.ts
│   └── events.ts
└── utils/           # Utility types
    └── helpers.ts
```

## Type Categories

### API Types
```typescript
// Request types
interface LoginRequest {
  email: string;
  password: string;
}

// Response types
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
```

### Model Types
```typescript
// User model
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Dance model
interface DanceStyle {
  id: string;
  name: string;
  level: DifficultyLevel;
}
```

### Component Props
```typescript
// Component prop types
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
```

## Best Practices

1. Type Organization:
- Group related types together
- Use meaningful names
- Keep types focused and specific

2. Type Definition:
```typescript
// Use interfaces for objects
interface User {
  id: string;
  name: string;
}

// Use type for unions/intersections
type ButtonVariant = 'primary' | 'secondary';

// Use enums for fixed values
enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}
```

3. Generic Types:
```typescript
// Generic response type
interface ApiResponse<T> {
  data: T;
  status: number;
}

// Usage
type UserResponse = ApiResponse<User>;
```

4. Utility Types:
```typescript
// Partial types
type PartialUser = Partial<User>;

// Pick specific properties
type UserCredentials = Pick<User, 'email' | 'password'>;

// Omit specific properties
type PublicUser = Omit<User, 'password'>;
```

## Usage Guidelines

1. Import types:
```typescript
import { User } from '@/types/models/user';
import { ApiResponse } from '@/types/api/responses';
```

2. Use in components:
```typescript
const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  // Component logic
};
```

3. Extend existing types:
```typescript
interface ExtendedUser extends User {
  preferences: UserPreferences;
}
```

## Type Safety Guidelines

1. Avoid using `any`
2. Use strict null checks
3. Implement proper error types
4. Use discriminated unions when appropriate
5. Document complex types