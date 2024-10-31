# Components Directory
updated Oct 31st 2024

`/src/components`

## Overview

This directory contains all reusable components used throughout the application. Components are organized into logical subdirectories based on their purpose and usage.

## Directory Structure

```
components/
├── common/          # Shared components used across multiple pages
│   ├── Header/     # Main navigation header
│   ├── Footer/     # Site footer
│   ├── Navigation/ # Navigation components
│   └── SEO/        # SEO-related components
├── dance-styles/   # Components specific to dance style pages
│   ├── StyleOverview/
│   ├── TutorialPlayer/
│   └── PracticeGuide/
├── events/         # Event-related components
│   ├── Schedule/
│   ├── LocationMap/
│   └── RulesGuide/
├── learning/       # Learning system components
│   ├── SkillPathway/
│   └── ProgressTracker/
└── ui/            # Base UI components from shadcn/ui
    ├── button/
    ├── card/
    └── dialog/
```

## Component Guidelines

1. Each component should:
   - Be in its own directory with an index.tsx file
   - Include any component-specific styles
   - Have TypeScript interfaces/types
   - Be properly documented

2. Common Components:
   - Should be highly reusable
   - Should accept necessary props for customization
   - Should follow accessibility guidelines

3. Feature Components:
   - Should be focused on specific functionality
   - Can be more specialized
   - Should still maintain clean interfaces

## Usage Examples

### Common Component
```tsx
import { Header } from '@/components/common/Header';

<Header showLogo={true} transparent={false} />
```

### Dance Style Component
```tsx
import { StyleOverview } from '@/components/dance-styles/StyleOverview';

<StyleOverview 
  style="salsa"
  difficulty="beginner"
/>
```

## Best Practices

1. Follow naming conventions:
   - PascalCase for component names
   - camelCase for files
   - kebab-case for directories

2. Keep components focused:
   - Single responsibility principle
   - Extract reusable logic to hooks
   - Use composition over inheritance

3. Implement proper error handling:
   - Use error boundaries
   - Provide fallback UI
   - Handle loading states

4. Maintain accessibility:
   - Use semantic HTML
   - Include ARIA labels
   - Ensure keyboard navigation