import React, { useEffect, useState } from 'react';
import './MouseCursor.css'; // Import the necessary CSS for cursor animation

const MouseCursor = () => {
  const [isHovering, setIsHovering] = useState(false);  // For detecting hover over interactive elements

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Track mouse position
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation logic for cursor movement
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    // Detect when mouse hovers over buttons or clickable elements
    const handleHover = (e) => {
      if (e.target && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Add event listeners for mouse movement and hover detection
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleHover);

    // Start animation loop
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHover);
      cursor.remove();
    };
  }, []);

  return null;
};

export default MouseCursor;
