import React from 'react';
import { Camera, Image as ImageIcon, Video, Folder, TerminalSquare } from 'lucide-react';

const dockItems = [
  {
    name: 'Antigravity',
    icon: <TerminalSquare size={32} color="#00ffcc" />,
    bg: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)'
  },
  {
    name: 'Photoshop',
    icon: <span style={{ color: '#31a8ff', fontSize: '28px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Ps</span>,
    bg: '#001e36'
  },
  {
    name: 'Premiere Pro',
    icon: <span style={{ color: '#ea77ff', fontSize: '28px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Pr</span>,
    bg: '#00005c'
  },
  {
    name: 'Fotos',
    icon: <img src="/Branding/1Recurso.png" alt="Fotos Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '14px' }} />,
    bg: 'transparent',
    link: 'https://villegascreate.web.app/'
  }
];

const Dock = () => {
  return (
    <div className="dock-container">
      {dockItems.map((item, index) => (
        <div
          key={index}
          className="dock-item"
          style={{ background: item.bg }}
          onClick={() => {
            if (item.link) {
              window.open(item.link, '_blank');
            } else {
              console.log(`Opened ${item.name}`);
            }
          }}
        >
          {item.icon}
          <div className="dock-tooltip">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Dock;
