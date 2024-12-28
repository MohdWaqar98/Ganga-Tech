import React, { useState, useEffect } from 'react';
import GangaLocations from '../data/GangaLocations'; // Import locations data
import { ImCross } from "react-icons/im";

const Card = ({ onClose, onSelectLocation }) => {
  const [locations, setLocations] = useState([]); // Store locations data
  const [selectedLocation, setSelectedLocation] = useState(''); // Store selected location

  // Load Ganga locations into state
  useEffect(() => {
    setLocations(GangaLocations);
  }, []);

  // Handle location selection
  const handleSelectLocation = (event) => {
    const location = event.target.value;
    setSelectedLocation(location); // Update selected location
    onSelectLocation(location); // Pass selected location to parent
    localStorage.setItem('selectedLocation', location); // Store in local storage
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Select Location</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <ImCross />
        </button>
      </div>

      {/* Dropdown Select Box */}
      <select
        value={selectedLocation} // Controlled value
        onChange={handleSelectLocation} // Handle selection
        className="block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
      >
        <option value="">Select a location</option>
        {locations.map((location) => (       
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Card;