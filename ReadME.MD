# Social Dance Effect

A comprehensive web application for learning social dancing in Utah's Salt Lake Valley. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Dance Style Library**: Detailed guides for multiple dance styles including:
  - Country Swing
  - Latin Dances (Salsa, Bachata, Merengue)
  - Ballroom Dances (Waltz, Foxtrot, Rumba)
  - Line Dancing
  - And more...

- **Learning Pathways**: Structured learning paths with:
  - Progressive skill development
  - Video tutorials
  - Practice guides
  - Achievement tracking

- **Events Management**: 
  - Weekly dance events
  - Class schedules
  - Location information
  - Rules and guidelines

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router
- Lucide Icons

## Prerequisites

- Node.js (v16 or later)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/social-dance-effect.git
cd social-dance-effect
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000/SDE/`

## Project Structure

```
sde-website/
├── src/
│   ├── assets/          # Images, videos, and static files
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles and Tailwind config
│   ├── utils/          # Helper functions and constants
│   └── context/        # React context providers
├── public/             # Public assets
└── config/             # Configuration files
```

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
yarn deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- shadcn/ui for the component library
- Lucide for the icons
- Tailwind Labs for the CSS framework