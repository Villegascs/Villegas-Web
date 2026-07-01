import React from 'react';
import './index.css';
import Dock from './components/Dock';
import DesktopIcon from './components/DesktopIcon';

const desktopProjects = [
  {
    title: 'Cortez Eyewear',
    link: 'https://cortezeyewear.vercel.app/',
    image: '/Branding/cortez blanco sin fondo.png',
    initialX: 100,
    initialY: 100,
  },
  {
    title: 'Parliamo CIA',
    link: 'https://parliamo-cia.web.app/',
    image: '/Branding/Bhome.png',
    initialX: 300,
    initialY: 150,
  },
  {
    title: 'Fevetiro',
    link: 'https://fevetiro.web.app/index.html',
    image: '/Branding/logo_Federación venezolana de tiro-01.png',
    initialX: 150,
    initialY: 300,
  },
  {
    title: 'Docs Events',
    link: 'https://docsevents.web.app/',
    image: '/Branding/photo_2026-05-21_16-38-27.jpg',
    initialX: 400,
    initialY: 350,
  },
];

function App() {
  return (
    <div className="desktop-container">
      {/* Background Wallpaper */}
      <img src="/Branding/POSTER.jpg.jpeg" alt="Desktop Wallpaper" className="desktop-background" />

      {/* Desktop Icons Area */}
      <div className="desktop-icons-area">
        {desktopProjects.map((project, idx) => (
          <DesktopIcon
            key={idx}
            title={project.title}
            link={project.link}
            image={project.image}
            initialX={project.initialX}
            initialY={project.initialY}
          />
        ))}
      </div>

      {/* Dock */}
      <Dock />
    </div>
  );
}

export default App;
