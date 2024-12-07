import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Settings = () => {
  const [alertOn, setAlertOn] = useState(false);
  const [expandedDiv, setExpandedDiv] = useState(null);
  const navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1);  // Navigate to the previous page
  };

  const handleToggle = () => {
    setAlertOn(!alertOn);
    console.log(`Set Alert is ${!alertOn ? "On" : "Off"}`);
  };

  const handleDivClick = (id) => {
    setExpandedDiv(expandedDiv === id ? null : id); // Toggle expand/collapse
  };

  return (
    <div className="font-poppins m-0 p-0 relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF] overflow-x-hidden overflow-y-scroll box-border">
      {/* Vector Images */}
      <div className="absolute inset-0 pointer-events-none flex justify-between items-start">
        <img
          src="src/assets/images/Vector 12.png"
          alt="Dotted Vector 1"
          className="w-[5rem] sm:w-[6.25rem] md:w-[9.375rem] lg:w-[12.5rem] ml-[-1rem] mt-[2rem]"
        />
        <img
          src="src/assets/images/Vector 11.png"
          alt="Dotted Vector 2"
          className="w-[7.5rem] sm:w-[9.375rem] md:w-[12.5rem] lg:w-[15.625rem] mr-[-1rem] mt-[1rem]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-8 flex flex-col items-center justify-start space-y-6 min-h-screen">
        {/* Header */}
        <div className="flex items-center w-full max-w-xl">
          <button className="text-white text-lg font-bold" onClick={goBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.13px"
              height="24.13px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1"
              />
            </svg>
          </button>
          <h1 className="mx-auto text-white text-[24px] font-bold">Settings</h1>
        </div>

        {/* Content Boxes */}
        <div className="w-full max-w-xl space-y-4">
          {/* Set Alert On/Off */}
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
            <span className="text-black font-medium text-[19px]">Set Alert On/Off</span>
            <div className="relative w-14 h-8">
              <input
                type="checkbox"
                id="alert-toggle"
                className="peer hidden"
                checked={alertOn}
                onChange={handleToggle}
              />
              <label
                htmlFor="alert-toggle"
                className="block w-full h-full bg-gray-400 rounded-full cursor-pointer transition-all peer-checked:bg-sky-500"
              >
                <span
                  className={`absolute top-1 left-1 h-6 w-6 bg-white rounded-full transition-all duration-300 ease-in-out transform ${alertOn ? "translate-x-6" : ""
                    }`}
                ></span>
              </label>
            </div>
          </div>

          {/* Help and Support Section */}
          <div className="p-4 bg-white rounded-xl shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleDivClick("help")}
            >
              <span className="text-black font-medium text-[19px]">Help and Support</span>
              <span
                className={`transition-transform duration-300 ${expandedDiv === "help" ? "rotate-90" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
                  />
                </svg>
              </span>
            </div>
            {expandedDiv === "help" && (
              <div className="mt-4">
                <p>Welcome to Ganga Mitra! Our mission is to provide you with the best experience while using our app. If you face any issues or need assistance, we are here to help. You can reach out to us through the contact option in the app or email us directly. We strive to resolve all queries promptly and make your experience seamless.

                  Thank you for being a part of Ganga Mitra!</p>

              </div>
            )}
          </div>

          {/* Privacy Policy Section */}
          <div className="p-4 bg-white rounded-xl shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleDivClick("privacy")}
            >
              <span className="text-black font-medium text-[19px]">Privacy Policy</span>
              <span
                className={`transition-transform duration-300 ${expandedDiv === "privacy" ? "rotate-90" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
                  />
                </svg>
              </span>
            </div>
            {expandedDiv === "privacy" && (
              <div className="mt-4">
                <p>At Ganga Mitra, your privacy is important to us. We collect personal data such as your name and email to improve your experience. We do not share your information with third parties, except when required by law. We use cookies to enhance functionality, and you can disable them in your settings. We ensure your data is securely stored but cannot guarantee complete security. By using the app, you agree to this policy. For any questions, contact us through the app or email.</p>
              </div>
            )}
          </div>

          {/* About Ganga Mitra Section */}
          <div className="p-4 bg-white rounded-xl shadow-md">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleDivClick("about")}
            >
              <span className="text-black font-medium text-[19px]">About Ganga Mitra</span>
              <span
                className={`transition-transform duration-300 ${expandedDiv === "about" ? "rotate-90" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
                  />
                </svg>
              </span>
            </div>
            {expandedDiv === "about" && (
              <div className="mt-4">
                <p>Ganga Mitra is an app designed to promote environmental awareness and support the conservation of the Ganga River. The app provides users with resources to track the river’s health, report pollution, and access real-time information about the Ganga’s status. It aims to engage communities and individuals in preserving one of India’s most important natural resources. With Ganga Mitra, you can take active steps toward protecting the Ganga and ensuring its sustainability for future generations.</p>
              </div>
            )}
          </div>

          {/* Language Selection */}
          <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md">
            <span className="text-black font-medium text-[19px]">Change Language</span>
            <select className="bg-transparent text-black border-none outline-none">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="bn">Bengali</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
