## Omar Alawneh – Portfolio (React + Vite)

This is my personal portfolio site built with **React** and **Vite**.  
It showcases my services, selected projects, and contact information with a modern, responsive UI and a light/dark mode toggle.

### Tech stack
- **Frontend**: React, Vite, JSX
- **UI**: Custom CSS, Material UI components, `react-icons`
- **Linting**: ESLint (Vite React config)

### Getting started
1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the production build**
   ```bash
   npm run preview
   ```

### Project structure (high level)
- `src/main.jsx` – React entry point, mounts `<App />` into `#root`
- `src/App.jsx` – main layout that wires together navbar, sections, footer
- `src/pages/Home.jsx` – hero section with intro and social links
- `src/pages/Services.jsx` – services/cards
- `src/pages/Projects.jsx` – project cards with GitHub / demo links
- `src/components/ContactCard.jsx` – Material UI contact card
- `src/components/Contact.jsx` – contact section with email and phone
- `src/components/Navbar.jsx` – navigation + dark mode toggle
- `src/components/DigitalClock.jsx` – live digital clock component
- `src/App.css` – global styles and theming (including dark mode)

### Deploying on Vercel
This project is designed to work smoothly on **Vercel**:

- **Framework preset**: React / Vite
- **Build command**: `npm run build`
- **Output directory**: `dist`

Steps:
1. Push this repo to GitHub.
2. Create a new project on Vercel and import this GitHub repo.
3. Vercel will detect Vite automatically and use the config above.

After that, each push to your main branch will trigger a new deployment.
