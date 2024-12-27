import './App.css';

import Welcome from './pages/Welcome';
import SearchInitial from './pages/SearchInitial';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';
import { AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import DataMatch from './components/DataMatch';  // Import the DataMatch component

function App() {


  const [data, setData] = useState([]);  // Shared state for data from DataMatch

  // Function to update data state (to be passed to DataMatch)
  const handleSetData = (tempData) => {
    // Only update state if the new data is different from the existing data
    if (JSON.stringify(tempData) !== JSON.stringify(data)) {
      setData(tempData);
    }
  };

  // Conditional rendering for DataMatch based on if it's required on this page
  // Example: Display DataMatch only on specific routes (if needed)
  useEffect(() => {
    // This useEffect is just an example, adjust based on your need.
    // You can decide when to display the DataMatch component.
  }, [data]);

  const AnimatedRoutes = () => {
    const location = useLocation(); // Get current location for animations

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/Home" element={<Home data={data}/>} />
                <Route path="/Dashboard" element={<Dashboard data={data} />} />
                <Route path="/Map" element={<Map />} />
            </Routes>
        </AnimatePresence>
    );
};

  return (
    <div className='bg-temple-pattern min-h-screen bg-no-repeat bg-cover bg-center relative'>
      {/* Background animation */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-b from-[#00ADFF] to-[#006FFF] opacity-80'
        initial={{ y: '-100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 1 }}
      />

      {/* Routing */}
      <Router>
        <Routes>
          {/* Welcome Page */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-100%' }}
                transition={{ duration: 1 }}
              >
                <Welcome />
              </motion.div>
            }
          />

          {/* Search Initial Page */}
          <Route
            path="/Search"
            element={<SearchInitial />}
          />

          {/* Home Page */}
         
        </Routes>
        <AnimatedRoutes />
      </Router>

      {/* DataMatch component will send data to parent (App.jsx) */}
      {/* You can conditionally render this based on your app's needs */}
      <DataMatch setFullData={handleSetData} />
    </div>
  );
}

export default App;
