import React from 'react';


const App = () => {
  // Add event listener to each alert
  const handleClick = (e) => {
    // Remove 'bg-blue-100' from all alerts
    document.querySelectorAll('.flex').forEach(alert => alert.classList.remove('bg-blue-100'));
    // Add 'bg-blue-100' to the clicked alert
    e.target.closest('.flex').classList.add('bg-blue-100');
  };

  return (
    <div className="max-w-10xl mx-auto p-9">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Your Alerts</h1>

      {/* New Alerts Section */}
      <div className="uppercase text-sm font-semibold text-gray-800 mb-2">New</div>
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        <div
          className="flex justify-between items-center p-4 mb-2 bg-blue-50 rounded-lg shadow-xs cursor-pointer hover:bg-blue-100"
          onClick={handleClick}
        >
          <span className="text-2xl text-blue-500">O₂</span>
          <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
            Dissolved Oxygen levels are falling at your nearest River Ganga Station
          </div>
          <span className="text-xs text-gray-500">10 minutes ago</span>
        </div>

        {/* Earlier Alerts Section */}
        <div className="uppercase text-sm font-semibold text-gray-800 mt-6 mb-2">Earlier</div>
        <div className="space-y-2">
          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-blue-500">💧</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Total Coliform Levels have decreased significantly. Water is safe to bathe
            </div>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-gray-500">☁️</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Potential for rain today is 84%, river water quality might improve
            </div>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-blue-500">💧</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Total Coliform Levels have decreased significantly. Water is safe to bathe
            </div>
            <span className="text-xs text-gray-500">3 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-gray-500">☁️</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Potential for rain today is 84%, river water quality might improve
            </div>
            <span className="text-xs text-gray-500">5 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-blue-500">💧</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Total Coliform Levels have decreased significantly. Water is safe to bathe
            </div>
            <span className="text-xs text-gray-500">7 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-gray-500">☁️</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Potential for rain today is 84%, river water quality might improve
            </div>
            <span className="text-xs text-gray-500">2 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-blue-500">💧</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Total Coliform Levels have decreased significantly. Water is safe to bathe
            </div>
            <span className="text-xs text-gray-500">3 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-gray-500">☁️</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Potential for rain today is 84%, river water quality might improve
            </div>
            <span className="text-xs text-gray-500">5 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-blue-500">💧</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Total Coliform Levels have decreased significantly. Water is safe to bathe
            </div>
            <span className="text-xs text-gray-500">7 days ago</span>
          </div>

          <div
            className="flex justify-between items-center p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:bg-gray-100"
            onClick={handleClick}
          >
            <span className="text-2xl text-gray-500">☁️</span>
            <div className="flex-1 text-gray-700 text-sm ml-2 p-2">
              Potential for rain today is 84%, river water quality might improve
            </div>
            <span className="text-xs text-gray-500">10 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
