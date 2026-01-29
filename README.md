⚡ Pravin Kanotara — Premium Developer Portfolio

A high-performance, interactive, and visually refined developer portfolio built using React 19, TypeScript, and Tailwind CSS.
Crafted to highlight projects, skills, and professional growth with a strong emphasis on premium UI/UX, smooth animations, and accessibility.

✨ Features

🎨 Modern & Minimal Design
Clean layouts with a premium aesthetic, glassmorphism touches, and carefully chosen typography.

🌓 Dynamic Theme Support
Seamless Dark / Light mode switching with persistent user preference.

✨ Interactive Particle System
Custom canvas-based particle background featuring Snow and Star modes with mouse-driven physics.

🖱️ Custom Physics Cursor
Lag-free, spring-physics cursor that intelligently reacts to interactive elements.

📱 Fully Responsive Layout
Optimized for desktops, tablets, and mobile devices.

🍱 Bento Grid Projects
Modern bento-style project grid with hover animations and adaptive sizing.

⏳ Interactive Journey Timeline
Vertical experience timeline with expandable content.

🔄 Skills Showcase
Dual-mode skills section with:

Infinite scrolling tech ticker

Structured grid view

🕰️ Live UI Elements
Real-time local clock and dynamic Open for Work status indicator.

🛠️ Tech Stack

Core: React 19, TypeScript

Build Tool: Vite

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React, Devicon

Fonts: Inter, JetBrains Mono (Google Fonts)

├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Navbar.tsx              # Glassmorphism navigation bar
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx        # Physics-based cursor
│   │   │   ├── ParticleBackground.tsx  # Canvas particles (Snow / Stars)
│   │   │   └── ThemeToggle.tsx         # Theme switcher
│   │   ├── About.tsx                   # About / Profile section
│   │   ├── Achievements.tsx            # Certifications & awards
│   │   ├── Contact.tsx                 # Footer, social links, live clock
│   │   ├── Hero.tsx                    # Hero section with typing effect
│   │   ├── Journey.tsx                 # Experience timeline
│   │   ├── Projects.tsx                # Bento grid projects
│   │   └── Skills.tsx                  # Skills ticker & grid
│   ├── constants.tsx                   # Centralized data source
│   ├── types.ts                        # TypeScript interfaces
│   ├── App.tsx                         # Root layout
│   └── index.tsx                       # Entry point
├── index.html                          # HTML entry + Tailwind config
├── metadata.json                       # App metadata
└── tsconfig.json                       # TypeScript configuration


🚀 Getting Started
Prerequisites

Node.js v18+

npm or yarn

Installation
git clone https://github.com/pkanotara/portfolio.git
cd portfolio


Install dependencies:

npm install
# or
yarn install


Start the development server:

npm run dev
# or
yarn dev


Open your browser and visit:

http://localhost:5173

⚙️ Customization Guide
1️⃣ Update Personal Data

Edit src/constants.tsx to modify:

EXPERIENCES – Work history

PROJECTS – Projects, images, GitHub links

SKILL_CATEGORIES – Tech stack

ACHIEVEMENTS – Certifications & awards

2️⃣ Resume & Links

Resume: Update the Resume button link in src/components/Hero.tsx

Social Links: Update GitHub / LinkedIn URLs in src/components/Contact.tsx

Email: Modify the mailto: link in Contact.tsx

3️⃣ Images

Replace the profile image in About.tsx

Update project thumbnails in constants.tsx

🎨 Theme Configuration

Tailwind CSS is configured inside index.html (or tailwind.config.js if externalized):

colors: {
  accent: {
    DEFAULT: '#06b6d4',
    dark: '#0891b2',
    light: '#67e8f9',
  },
  dark: {
    bg: '#0a0a0a',
    card: '#171717',
    border: '#262626',
  },
}

⚡ Performance Optimizations

Canvas-based Animations for smooth 60 FPS rendering

Lazy Loading for components and images

Reduced Motion Support respecting prefers-reduced-motion

📄 License

This project is licensed under the MIT License.

<p align="center"> Built with ❤️ by <strong>Pravin Kanotara</strong> </p>
