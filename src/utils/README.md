# Utils Directory
updated oct 31st 2024

`/src/utils`

## Overview

This directory contains utility functions, helpers, and constants used throughout the application.

## Directory Structure

```
utils/
├── api/            # API-related utilities
│   ├── client.ts   # API client configuration
│   └── endpoints.ts # API endpoint definitions
├── helpers/        # Helper functions
│   ├── date.ts     # Date formatting utilities
│   ├── string.ts   # String manipulation utilities
│   └── validation.ts # Validation helpers
└── constants/      # Application constants
    ├── routes.ts   # Route definitions
    └── config.ts   # App configuration
```

## Categories

### API Utilities
- API client configuration
- Request/response interceptors
- Error handling
- Authentication helpers

### Helpers
- Date formatting
- String manipulation
- Form validation
- Data transformation

### Constants
- Route definitions
- Configuration values
- Feature flags
- Type definitions

## Usage Examples

```typescript
// API Client
import { api } from '@/utils/api/client';
const response = await api.get('/endpoint');

// Date Helper
import { formatDate } from '@/utils/helpers/date';
const formattedDate = formatDate(new Date());

// Constants
import { ROUTES } from '@/utils/constants';
navigate(ROUTES.HOME);
```

## Best Practices

1. Keep utilities pure and testable
2. Document complex functions
3. Use TypeScript for type safety
4. Write unit tests for utilities