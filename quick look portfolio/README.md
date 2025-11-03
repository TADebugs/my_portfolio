# ⭐ Quick Look Portfolio - 3D Space Theme

A modern, interactive 3D portfolio website with a space-themed design featuring stunning 3D models, smooth animations, and a comprehensive showcase of projects and skills.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.149.0-000000?logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-9.0.7-0055FF?logo=framer&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.6-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.1.0-646CFF?logo=vite&logoColor=white)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

## 🎯 Overview

Quick Look Portfolio is a sophisticated 3D portfolio website that combines modern web technologies with immersive 3D graphics. This space-themed portfolio features interactive 3D models, smooth animations powered by Framer Motion, and a comprehensive showcase of your work, experience, and technical skills.

### Key Highlights

- **3D Star Field Background**: Dynamic starry space environment
- **Interactive 3D Models**: Computer models and planet renderings
- **Smooth Animations**: Framer Motion for fluid, engaging animations
- **Project Showcase**: Beautiful project cards with hover effects
- **Experience Timeline**: Vertical timeline for work experience
- **Tech Stack Visualization**: Interactive 3D skill representation
- **Contact Integration**: EmailJS-powered contact form

## ✨ Features

### 🎨 3D Visual Elements
- **Starry Background**: Procedurally generated 3D stars using Three.js
- **3D Computer Models**: Interactive desktop/computer models in the hero section
- **3D Earth Model**: Rotating earth in the contact section
- **Animated Spheres**: 3D ball components with physics-based animations

### 📱 User Experience
- **Hero Section**: Eye-catching introduction with 3D elements
- **About Section**: Personal information and background
- **Tech Stack**: Interactive 3D visualization of technologies
- **Works/Projects**: Showcase of featured projects with descriptions and links
- **Experience**: Vertical timeline of work experience
- **Feedbacks/Testimonials**: Client testimonials section
- **Contact**: Integrated contact form with EmailJS

### 🎯 Interactive Features
- **Parallax Effects**: Smooth scrolling with parallax tilt
- **Hover Animations**: Interactive hover states on cards and buttons
- **Smooth Scrolling**: Seamless navigation between sections
- **Responsive Design**: Fully optimized for all screen sizes

## 🛠️ Tech Stack

### Core Technologies
- **React** 18.2.0 - UI library
- **Three.js** 0.149.0 - 3D graphics library
- **React Three Fiber** 8.11.1 - React renderer for Three.js
- **React Three Drei** 9.56.24 - Useful helpers for R3F
- **Framer Motion** 9.0.7 - Animation library
- **React Router DOM** 6.8.1 - Client-side routing

### Styling & Build Tools
- **Tailwind CSS** 3.2.6 - Utility-first CSS framework
- **Vite** 4.1.0 - Next-generation build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Additional Libraries
- **EmailJS** 3.10.0 - Email service integration
- **React Parallax Tilt** 1.7.311 - Parallax tilt effects
- **React Vertical Timeline** 3.6.0 - Timeline component
- **Maath** 0.5.2 - Math utilities for 3D graphics

## 📁 Project Structure

```
quick look portfolio/
├── public/
│   ├── desktop_pc/          # 3D computer model
│   │   ├── scene.gltf
│   │   ├── scene.bin
│   │   └── textures/
│   └── planet/               # 3D planet model
│       ├── scene.gltf
│       ├── scene.bin
│       └── textures/
├── src/
│   ├── assets/
│   │   ├── company/         # Company logos
│   │   ├── tech/            # Technology icons
│   │   └── *.png            # Project images
│   ├── components/
│   │   ├── canvas/          # 3D canvas components
│   │   │   ├── Ball.jsx
│   │   │   ├── Computers.jsx
│   │   │   ├── Earth.jsx
│   │   │   └── Stars.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Feedbacks.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/           # Configuration and data
│   │   └── index.js
│   ├── hoc/                 # Higher-order components
│   │   └── SectionWrapper.jsx
│   ├── utils/               # Utility functions
│   │   └── motion.js        # Animation variants
│   ├── styles.js            # Style constants
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.cjs
└── postcss.config.cjs
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TADebugs/MyPortfolio.git
   cd MyPortfolio/"quick look portfolio"
   ```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## ⚙️ Configuration

### EmailJS Setup (Optional)

If you want to enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Create a `.env` file in the root directory:
```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Update the Contact component with your credentials

### Customizing Content

Edit the following files to customize your portfolio:

- `src/constants/index.js` - Update projects, experiences, skills, and testimonials
- `src/assets/` - Replace images, icons, and company logos
- `src/components/About.jsx` - Modify the about section
- `src/components/Works.jsx` - Update project showcase
- `src/components/Experience.jsx` - Update work experience
- `src/components/Hero.jsx` - Customize hero section

### Styling

Customize colors and styles in:
- `tailwind.config.cjs` - Theme configuration
- `src/index.css` - Global styles and custom classes
- `src/styles.js` - Reusable style constants

## 💻 Usage

### Development

Run the development server with hot-reload:

```bash
npm run dev
```

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS Amplify**: Connect your repository for continuous deployment

## 📸 Screenshots

> **Note**: Add screenshots or demo GIFs here to showcase your portfolio

### Featured Projects

- **AlgoLend AI**: AI-powered decentralized lending platform on Algorand blockchain
- **Sweet Bites**: Fully responsive restaurant website with interactive menus

## 🎨 Customization

### Changing 3D Models

1. Replace the 3D model files in `public/desktop_pc/` and `public/planet/`
2. Update the corresponding component files in `src/components/canvas/`
3. Ensure GLTF files are properly formatted and include textures

### Animation Customization

Edit `src/utils/motion.js` to customize animation variants:
- `textVariant` - Text animations
- `fadeIn` - Fade in animations
- `zoomIn` - Zoom animations
- `slideIn` - Slide animations
- `staggerContainer` - Staggered animations

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](../../LICENSE).

## 👤 Author

**Tanmay Desai**

- GitHub: [@TADebugs](https://github.com/TADebugs)
- LinkedIn: [tanmaydesai2126](https://www.linkedin.com/in/tanmaydesai2126/)

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for the amazing 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for the React integration
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) for email service integration

---

⭐ If you found this project helpful, please consider giving it a star!
