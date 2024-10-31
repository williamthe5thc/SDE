# Social Dance Effect

## Overview

Social Dance Effect (SDE) is a comprehensive platform for social dance learning and community engagement in Utah's Salt Lake Valley. The platform offers dance instruction, event management, and community features for dance enthusiasts.

## Quick Links

- [Component Documentation](./src/components/README.md)
- [Pages Documentation](./src/pages/README.md)
- [Utils Documentation](./src/utils/README.md)
- [API Documentation](./src/utils/api/README.md)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/williamthe5thc/SDE.git
cd SDE
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

## Architecture

### Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: React Context + Hooks
- **Routing**: React Router
- **Forms**: React Hook Form + Zod
- **Build Tool**: Vite
- **Testing**: Jest + React Testing Library

### Key Features

- 🎨 Modern, responsive UI
- 🌙 Light/dark mode
- 🔒 Authentication system
- 📊 Learning dashboard
- 📅 Event management
- 👤 User profiles
- ⚡ Fast performance
- ♿ Accessibility support

## Development

### Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Linting
npm run lint         # Run ESLint
npm run format       # Run Prettier

# Deployment
npm run deploy       # Deploy to production
```

### Project Structure

```
SDE/
├── src/
│   ├── assets/        # Static assets
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── context/       # React Context providers
│   ├── hooks/         # Custom hooks
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript types
│   └── utils/         # Utilities and helpers
├── public/            # Public assets
├── tests/             # Test files
└── docs/             # Documentation
```

### Code Style

- Follow React best practices
- Use TypeScript for type safety
- Follow component-based architecture
- Write tests for components
- Document complex features

## Testing

- Unit tests for components
- Integration tests for features
- E2E tests for critical paths
- Accessibility testing
- Performance testing

## Deployment

1. Build the application:
```bash
npm run build
```

2. Deploy to hosting:
```bash
npm run deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Keep PRs focused and manageable

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- GitHub Issues: [Report a bug](https://github.com/williamthe5thc/SDE/issues)
- Email: [support@socialdanceeffect.com](mailto:support@socialdanceeffect.com)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## Roadmap

See our [project board](https://github.com/williamthe5thc/SDE/projects) for planned features and enhancements.