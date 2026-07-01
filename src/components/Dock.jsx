import React from 'react';
import { Camera, Image as ImageIcon, Video, Folder } from 'lucide-react';

const dockItems = [
  {
    name: 'Photoshop',
    icon: <span style={{ color: '#31a8ff', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Ps</span>,
    bg: '#001e36'
  },
  {
    name: 'Premiere Pro',
    icon: <span style={{ color: '#ea77ff', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Pr</span>,
    bg: '#00005c'
  },
  {
    name: 'Villegas',
    icon: <img src="/Branding/1Recurso.png" alt="Villegas Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '14px' }} />,
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
