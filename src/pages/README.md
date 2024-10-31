# Pages Directory
updated october 31st 2024
`/src/pages`

## Overview

This directory contains all the page components for the application. Each page represents a distinct route and combines various components to create complete views.

## Directory Structure

```
pages/
├── admin/           # Admin dashboard pages
│   ├── dashboard/
│   ├── users/
│   └── settings/
├── auth/            # Authentication pages
│   ├── login/
│   ├── register/
│   └── forgot-password/
├── dance-styles/    # Individual dance style pages
│   ├── salsa/
│   ├── bachata/
│   └── ...
├── events/          # Event-related pages
├── learning/        # Learning system pages
│   ├── dashboard/
│   └── pathways/
└── profile/         # User profile pages
```

## Page Types

1. **Public Pages**
   - Home page
   - Dance style pages
   - Events page
   - Public information pages

2. **Protected Pages**
   - Learning dashboard
   - Profile pages
   - Admin dashboard
   - Member-only content

3. **Auth Pages**
   - Login
   - Registration
   - Password reset
   - Email verification

## Implementation Guidelines

1. Page Structure:
   ```tsx
   const PageName = () => {
     return (
       <>
         <SEO title="Page Title" description="Page description" />
         <main>
           {/* Page content */}
         </main>
       </>
     );
   };
   ```

2. Data Fetching:
   - Use API hooks for data fetching
   - Implement loading states
   - Handle errors appropriately

3. Page Organization:
   - Group related components
   - Maintain clean component hierarchy
   - Use layout components when needed

## Testing

1. Test files should be co-located with pages
2. Test user interactions and routing
3. Include integration tests for complex pages

## Best Practices

1. Keep pages focused on layout and composition
2. Move complex logic to hooks or services
3. Implement proper error boundaries
4. Ensure responsive design
5. Follow accessibility guidelines