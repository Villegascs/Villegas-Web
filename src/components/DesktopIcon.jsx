import React from 'react';
import { motion } from 'framer-motion';

const DesktopIcon = ({ title, link, initialX, initialY, image }) => {
  return (
    <motion.div
      className="desktop-icon-wrapper"
      initial={{ x: initialX, y: initialY }}
      drag
      dragMomentum={false} // Gives it a more desktop-like feel where it stops when you let go
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onTap={(event, info) => {
        // Open link in a new tab
        window.open(link, '_blank');
      }}
    >
      <div className="desktop-icon-image-container">
        {image ? (
          <img src={image} alt={title} className="desktop-icon-image" draggable="false" />
        ) : (
          // Fallback if no image is provided, to show a generic folder or icon
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#333' }}>
            <span style={{ fontSize: '24px' }}>📄</span>
          </div>
        )}
      </div>
      <div className="desktop-icon-label">{title}</div>
    </motion.div>
  );
};

export default DesktopIcon;
