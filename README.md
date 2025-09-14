# Personal Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, featuring a clean design with dark/light theme support.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between color modes
- **Multiple Sections**:
  - Hero section with introduction
  - About section with personal information
  - Projects showcase with cards
  - Skills display
  - Achievements timeline
  - Resume/experience timeline
  - Contact form

## Technologies Used

- React
- TypeScript
- Vite (Build tool)
- CSS (with potential styling libraries)
- React Router for navigation

## Project Structure


src/
├── components/
│   ├── AboutSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectsSection.tsx
│   ├── ResumeTimeline.tsx
│   ├── SkillsSection.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── pages/
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── NotFound.tsx
│   ├── Projects.tsx
│   └── Resume.tsx
├── lib/
│   └── utils.ts
├── App.tsx
└── main.tsx



## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later recommended)
- npm or yarn

### Installation

1. Clone the repository

git clone https://github.com/yourusername/portfolio-website.git



2. Navigate to the project directory

cd portfolio-website



3. Install dependencies

npm install


or

yarn install



4. Start the development server

npm run dev


or

yarn dev



5. Open your browser and visit `http://localhost:5173`

## Deployment

This site can be easily deployed to platforms like:
- Vercel
- Netlify
- GitHub Pages

## Customization

To customize this portfolio for your own use:
1. Update personal information in relevant components
2. Replace project details in the ProjectsSection component
3. Modify the resume timeline with your own experience
4. Update contact information in the ContactSection

## License

[MIT License](LICENSE)
