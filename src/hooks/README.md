# Hooks Directory

`/src/hooks`

## Overview

This directory contains custom React hooks that encapsulate reusable logic across the application.

## Directory Structure

```
hooks/
├── api/              # API-related hooks
│   ├── useApi.ts
│   └── useQuery.ts
├── auth/             # Authentication hooks
│   ├── useLogin.ts
│   └── useUser.ts
├── form/             # Form-related hooks
│   ├── useForm.ts
│   └── useValidation.ts
└── ui/              # UI-related hooks
    ├── useModal.ts
    └── useToast.ts
```

## Available Hooks

### API Hooks
```typescript
// Data fetching
const { data, loading, error } = useQuery('/api/endpoint');

// API mutations
const { mutate, loading } = useApi('/api/endpoint');
```

### Auth Hooks
```typescript
// User authentication
const { login, logout, loading } = useLogin();

// User data
const { user, updateUser } = useUser();
```

### Form Hooks
```typescript
// Form handling
const { register, handleSubmit } = useForm();

// Validation
const { validate, errors } = useValidation(schema);
```

### UI Hooks
```typescript
// Modal management
const { showModal, hideModal } = useModal();

// Toast notifications
const { showToast } = useToast();
```

## Creating Custom Hooks

1. Basic Structure:
```typescript
import { useState, useEffect } from 'react';

export const useCustomHook = (params) => {
  // Hook logic
  return {
    // Return values
  };
};
```

2. With TypeScript:
```typescript
interface HookParams {
  // Parameters type
}

interface HookReturn {
  // Return type
}

export const useCustomHook = (params: HookParams): HookReturn => {
  // Hook logic
};
```

## Best Practices

1. Naming:
- Start with 'use' prefix
- Be descriptive about functionality
- Follow camelCase convention

2. Implementation:
- Keep hooks focused
- Handle cleanup with useEffect
- Implement proper error handling
- Use TypeScript for type safety

3. Documentation:
- Document parameters
- Provide usage examples
- Include return value descriptions

4. Testing:
- Write unit tests
- Test edge cases
- Mock external dependencies

## Usage Guidelines

1. Import hooks from their specific directories:
```typescript
import { useApi } from '@/hooks/api/useApi';
import { useLogin } from '@/hooks/auth/useLogin';
```

2. Use hooks at the top level of components:
```typescript
const MyComponent = () => {
  const { data } = useApi();
  // Component logic
};
```

3. Handle loading and error states:
```typescript
const MyComponent = () => {
  const { data, loading, error } = useQuery();

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return <div>{data}</div>;
};
```