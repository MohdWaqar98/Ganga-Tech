import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DashboardComp from "../components/DashboardComponent";

import Alert from "../components/Alert";
import Settings from "../components/Settings";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [activeCircle, setActiveCircle] = useState(2);
  const [userLocation, setUserLocation] = useState(() => {
    // Load the persisted location from localStorage or default to "Unknown Location"
    return localStorage.getItem("userLocation") || "Unknown Location";
  });
  const navigate = useNavigate();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const handleBellClick = () => {
    setIsAlertVisible((prev) => !prev);
  };
  const handleSettingsClick = () => {
    setIsSettingsVisible((prev) => !prev);
  };
  const handleCircleClick = (circleNum) => {
    setActiveCircle(circleNum);
    switch (circleNum) {
      case 1:
        navigate("/search");
        break;
      case 2:
        navigate("/Home");
        break;
      case 3:
        navigate("/Dashboard");
        break;
        case 4:
          navigate("/Map");
          break;
      default:
        break;
    }
  };
  useEffect(() => {
    // Save location in localStorage if available
    const { location: stateLocation } = location.state || {};
    if (stateLocation) {
      setUserLocation(stateLocation);
      localStorage.setItem("userLocation", stateLocation);
    }
  }, [location.state]);
  return (
    <>
    <div className="relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF]">
      {/* <div className="relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF]"> */}
      {isAlertVisible && <Alert />}
      {isSettingsVisible && <Settings />}
      <div
        className="relative z-10 flex items-center justify-between p-3 animate-slideDown "
        style={{ width: "3" }}
      >
        {/* Location */}
        <div className="flex items-center gap-2 bg-white px-2 py-2 w-64 rounded-2xl shadow-md ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[26px] h-[24.23px] text-black"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
            />
            <circle cx="16" cy="13" r="4" fill="none" />
          </svg>
          <span className="text-black font-semibold">{userLocation}</span>
        </div>
        <div className="flex gap-3">
          <button
            className="text-white text-xl animate-fadeIn"
            onClick={handleSettingsClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.5"
              height="30.5"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M6 9.5A2 2 0 0 1 7.937 11H13.5a.5.5 0 0 1 .09.992L13.5 12l-5.563.001a2 2 0 0 1-3.874 0L2.5 12a.5.5 0 0 1-.09-.992L2.5 11h1.563A2 2 0 0 1 6 9.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4-8A2 2 0 0 1 11.937 4H13.5a.5.5 0 0 1 .09.992L13.5 5l-1.563.001a2 2 0 0 1-3.874 0L2.5 5a.5.5 0 0 1-.09-.992L2.5 4h5.563A2 2 0 0 1 10 2.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
              />
            </svg>
          </button>

          <button
            className="text-white text-xl"
            onClick={handleBellClick} // Show Alert on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="35"
              height="35"
            >
              <path d="M12 24a2.49 2.49 0 002.5-2.5h-5A2.49 2.49 0 0012 24zm6.3-7V10a6.3 6.3 0 00-12.6 0v7l-2 2v1h16v-1z" />
            </svg>
          </button>
        </div>
      </div>

      <DashboardComp />

      <div className="flex gap-2 justify-center fixed bottom-0 left-0 right-0 p-4">
            <button
              className={`text-white text-xl animate-fadeIn ${
                activeCircle === 11 ? "bg-blue-500 rounded-full p-2" : ""
              }`}
              onClick={() => handleCircleClick(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                ></path>
              </svg>
            </button>

            <button
              className={`text-white text-xl animate-fadeIn ${
                activeCircle === 2 ? "bg-blue-500 rounded-full p-2" : ""
              }`}
              onClick={() => handleCircleClick(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                </g>
              </svg>
            </button>

            <button
              className={`text-white text-xl ${
                activeCircle === 3 ? "bg-blue-500 rounded-full p-2" : ""
              }`}
              onClick={() => handleCircleClick(3)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill="currentColor"
                    fill-opacity="0.16"
                    d="M8.4 15H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15m10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Zm0 12H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z"
                  />
                </g>
              </svg>
            </button>

            <button
              className={`text-white text-xl ${
                activeCircle === 4 ? "bg-blue-500 rounded-full p-2" : ""
              }`}
              onClick={() => handleCircleClick(4)}
            >
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
                />
                <path
                  fill="currentColor"
                  d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
                />
              </svg>
            </button>
          </div>
  </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
