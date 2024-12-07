import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MouseCursor from '../components/MouseCursor'; // Import the custom cursor component
import logo from '../assets/images/gangamitralogo.png';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle page click to trigger slide-down animation and navigation
    const handlePageClick = () => {
      // Slide down (move the page down)
      document.getElementById("page1").style.transition = "transform 1s";
      document.getElementById("page1").style.transform = "translateY(100%)";

      // Navigate to search page after the animation completes
      setTimeout(() => {
        navigate('/search');
      }, 1000); // Delay navigation for animation to complete
    };

    // Add event listener to the document for clicks
    document.addEventListener('click', handlePageClick);

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, [navigate]);

  return (
    <>
      {/* Custom cursor */}
      <MouseCursor />

      {/* Page content */}
      <motion.div
        id="page1"
        className="relative z-10 flex flex-col items-center justify-center h-screen text-white font-poppins transition-all px-4"
        initial={{ y: '-100%' }} // Initial position (off-screen, above)
        animate={{ y: '0%' }} // End position (on-screen)
        exit={{ y: '100%' }} // Slide down on exit (when clicked)
        transition={{ duration: 1 }}
      >
        {/* Logo with easing before final position */}
        <motion.img
          id="logo"
          src={logo}
          alt="Ganga Mitra Logo"
          className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 drop-shadow-2xl"
          style={{ marginTop: "-5rem", overflow: "hidden" }}
          initial={{ y: '-100px', opacity: 0 }} // Start from above and transparent
          animate={{ y: '0px', opacity: 1 }} // Move to final position and become visible
          transition={{
            duration: 3,
            ease: 'easeOut', // Apply easing to the logo animation
          }}
        />

        {/* Heading with easing before final position */}
        <motion.h1
          id="heading"
          className="text-4xl sm:text-2.5xl lg:text-3xl font-semibold text-center"
          initial={{ y: '-100px', opacity: 0 }} // Start from above and transparent
          animate={{ y: '0px', opacity: 1 }} // Move to final position and become visible
          transition={{
            duration: 3,
            ease: 'easeOut', // Apply easing to the logo animation
          }}
        >
          GANGA MITRA
        </motion.h1>

        {/* Paragraph with easing before final position */}
        <motion.p
          id="subheading"
          className="text-base sm:text-lg lg:text-xl font-light text-center"
          initial={{ y: '-100px', opacity: 0 }} // Start from above and transparent
          animate={{ y: '0px', opacity: 1 }} // Move to final position and become visible
          transition={{
            duration: 3,
            ease: 'easeOut', // Apply easing to the logo animation
          }}
        >
          River Health at your fingertips
        </motion.p>
      </motion.div>
    </>
  );
};

export default Welcome;
