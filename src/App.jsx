import './App.css';
import Welcome from './pages/Welcome';
import SearchInitial from './pages/SearchInitial';
import Home from './pages/Home';
import Article from './pages/article'; // Ensure correct case for file names
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from 'framer-motion';

function App() {
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
          <Route
            path="/Home"
            element={<Home />}
          />

          {/* (Article) Page */}
          <Route
            path="/Article"
            element={<Article />} // Correct usage of Article component
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
