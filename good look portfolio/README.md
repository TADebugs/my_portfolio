# 🌴 Good Look Portfolio - 3D Island Adventure

An immersive, interactive 3D portfolio website featuring a stunning island environment with animated 3D models, smooth animations, and an engaging user experience.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.157.0-000000?logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)

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

Good Look Portfolio is a cutting-edge 3D portfolio website that takes visitors on an interactive journey through an island environment. Built with React and Three.js, this portfolio showcases projects, skills, and experience in an immersive 3D space.

### Key Highlights

- **Interactive 3D Island Scene**: Navigate through a beautifully rendered island environment
- **Animated 3D Models**: Featuring biplane, birds, and dynamic sky elements
- **Smooth Animations**: Powered by React Spring for fluid transitions
- **Background Music**: Optional ambient audio integration
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with Tailwind CSS

## ✨ Features

### 🎨 Interactive 3D Elements
- **Island Environment**: Fully interactive 3D island with rotation and zoom controls
- **Animated Biplane**: Responsive plane that moves based on user interaction
- **Flying Birds**: Dynamic bird animations throughout the scene
- **Dynamic Sky**: Realistic sky rendering with React Three Fiber

### 📱 User Experience
- **Intuitive Navigation**: Smooth routing between Home, About, Projects, and Contact pages
- **Interactive Controls**: Drag to rotate, scroll to zoom, click to interact
- **Stage-based Interaction**: Progress through different stages of the island experience
- **Audio Controls**: Toggle background music on/off

### 🎯 Portfolio Sections
- **Home**: Interactive 3D island scene with introduction
- **About**: Personal information and background
- **Projects**: Showcase of featured projects with links
- **Contact**: Contact form with EmailJS integration

## 🛠️ Tech Stack

### Core Technologies
- **React** 18.2.0 - UI library
- **Three.js** 0.157.0 - 3D graphics library
- **React Three Fiber** 8.14.5 - React renderer for Three.js
- **React Three Drei** 9.88.2 - Useful helpers for R3F
- **React Spring** 9.7.3 - Animation library
- **React Router DOM** 6.17.0 - Client-side routing

### Styling & Build Tools
- **Tailwind CSS** 3.3.3 - Utility-first CSS framework
- **Vite** 4.4.5 - Next-generation build tool
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Additional Libraries
- **EmailJS** 3.11.0 - Email service integration
- **React Vertical Timeline** 3.6.0 - Timeline component

## 📁 Project Structure

```
good look portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── 3d/              # 3D model files (.glb)
│   │   │   ├── bird.glb
│   │   │   ├── fox.glb
│   │   │   ├── island.glb
│   │   │   ├── plane.glb
│   │   │   └── sky.glb
│   │   ├── icons/           # SVG icons
│   │   ├── images/          # Image assets
│   │   └── sakura.mp3       # Background music
│   ├── components/           # Reusable components
│   │   ├── Alert.jsx
│   │   ├── CTA.jsx
│   │   ├── Footer.jsx
│   │   ├── HomeInfo.jsx
│   │   ├── Loader.jsx
│   │   └── Navbar.jsx
│   ├── constants/           # Configuration and data
│   │   └── index.js
│   ├── hooks/               # Custom React hooks
│   │   └── useAlert.js
│   ├── models/              # 3D model components
│   │   ├── Bird.jsx
│   │   ├── Fox.jsx
│   │   ├── Island.jsx
│   │   ├── Plane.jsx
│   │   └── Sky.jsx
│   ├── pages/               # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
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
   cd MyPortfolio/"good look portfolio"
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

- `src/constants/index.js` - Update projects, skills, and personal information
- `src/assets/` - Replace images and icons with your own
- `src/pages/About.jsx` - Modify the about section
- `src/pages/Projects.jsx` - Update project showcase

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

### Linting

Run ESLint to check code quality:

```bash
npm run lint
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

   The project includes a `vercel.json` configuration file for optimal deployment.

### Other Platforms

- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **AWS Amplify**: Connect your repository for continuous deployment

## 📸 Screenshots

> **Note**: Add screenshots or demo GIFs here to showcase your portfolio

## 🎨 Customization

### Changing 3D Models

1. Visit [glTF.pmnd.rs](https://gltf.pmnd.rs/) to convert your `.glb` or `.gltf` files to React components
2. Replace the model files in `src/assets/3d/`
3. Update the corresponding component files in `src/models/`

### Styling

The project uses Tailwind CSS. Customize colors and styles in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and custom classes

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
- [React Three Drei](https://github.com/pmndrs/drei) for helpful utilities
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

⭐ If you found this project helpful, please consider giving it a star!
