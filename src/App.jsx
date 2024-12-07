import './App.css';
import Welcome from './pages/Welcome';
import SearchInitial from './pages/SearchInitial';
import Home from './pages/Home';
import Alert from './pages/Alert';
import Settings from './pages/Settings';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from 'framer-motion';

function App() {

  return (
    <div className='bg-temple-pattern min-h-screen bg-no-repeat bg-cover bg-center relative'>
      {/* Gradient Background with slide animation */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-b from-[#00ADFF] to-[#006FFF] opacity-80'
        initial={{ y: '-100%' }} // Start off-screen (above)
        animate={{ y: '0%' }} // Slide in to view
        exit={{ y: '-100%' }} // Slide out on exit
        transition={{ duration: 1 }}
      />
      
      <Router>
        {/* Main Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ y: '-100%' }} // Start off-screen (above)
                animate={{ y: '0%' }} // Slide in to view
                exit={{ y: '-100%' }} // Slide out on exit
                transition={{ duration: 1 }}
              >
                <Welcome />
              </motion.div>
            }
          />
          <Route
            path="/Search"
            element={
              // <motion.div
              //   initial={{ y: '-100%' }} // Start off-screen (above)
              //   animate={{ y: '0%' }} // Slide in to view
              //   exit={{ y: '-100%' }} // Slide out on exit
              //   transition={{ duration: 1 }}
              // >
                <SearchInitial />
              // </motion.div>
            }
          />
          <Route
            path="/Home"
            element={
              // <motion.div
              //   initial={{ y: '-100%' }} // Start off-screen (above)
              //   animate={{ y: '0%' }} // Slide in to view
              //   exit={{ y: '-100%' }} // Slide out on exit
              //   transition={{ duration: 1 }}
              // >
                <Home />
              // </motion.div>
            }
          />
            <Route
            path="/Settings"
            element={
              // <motion.div
              //   initial={{ y: '-100%' }} // Start off-screen (above)
              //   animate={{ y: '0%' }} // Slide in to view
              //   exit={{ y: '-100%' }} // Slide out on exit
              //   transition={{ duration: 1 }}
              // >
                <Settings/>
              // </motion.div>
            }
          />
<Route
            path="/Alert"
            element={
              // <motion.div
              //   initial={{ y: '-100%' }} // Start off-screen (above)
              //   animate={{ y: '0%' }} // Slide in to view
              //   exit={{ y: '-100%' }} // Slide out on exit
              //   transition={{ duration: 1 }}
              // >
                <Alert/>
              // </motion.div>
            }
          />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
