import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import Settings from "../components/Settings";
import Article from "../components/article";
import { gsap } from "gsap";
import DataMatch from "../components/DataMatch";
import quality from "../data/quality";
import Card from "../components/Card";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [userLocation, setUserLocation] = useState(() => {
    // Load the persisted location from localStorage or default to "Unknown Location"
    return localStorage.getItem("userLocation") || "Unknown Location";
  });
  const location = useLocation();
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isArticlesVisible, setArticlesVisible] = useState(false);
  const [activeCircle, setActiveCircle] = useState(2);
  const navigate = useNavigate();

  const [todayData, setTodayData] = useState();

  const handleBellClick = () => {
    setIsAlertVisible((prev) => !prev);
  };
  const handleSettingsClick = () => {
    setIsSettingsVisible((prev) => !prev);
  };
  const handleArticleClick = () => {
    setArticlesVisible((prev) => !prev);
  };

  const toggleCard = () => {
    setShowCard(!showCard);
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
  const navigate2 = useNavigate();

  useEffect(() => {
    // Simulate a loader timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Get the current date (without the day)
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" }; // No weekday option
    const formattedDate = date.toLocaleDateString("en-US", options); // Format as 'Month Date, Year'
    setCurrentDate(formattedDate);

    return () => clearTimeout(timer);
  }, []);

  console.log("todayData:", todayData);

  const determineClass = (todayData) => {
    if (!todayData) {
      console.log("Data is missing or null!");
      return "Unknown";
    }
    const { ph, do: dissolvedOxygen, bod, totalColiform } = todayData;
    console.log(
      "ph:",
      ph,
      "dissolvedOxygen:",
      dissolvedOxygen,
      "bod:",
      bod,
      "totalColiform:",
      totalColiform
    );

    if (
      (ph >= 6.5 && ph <= 8.5) ||
      dissolvedOxygen >= 6 ||
      bod <= 2 ||
      totalColiform <= 50
    ) {
      return "Class A";
    } else if (
      (ph >= 6.5 && ph <= 8.5) ||
      dissolvedOxygen >= 5 ||
      bod <= 3 ||
      totalColiform <= 500
    ) {
      return "Class B";
    } else if (
      (ph >= 6 && ph <= 9) ||
      dissolvedOxygen >= 4 ||
      bod <= 3 ||
      totalColiform <= 5000
    ) {
      return "Class C";
    } else if (
      (ph >= 6.5 && ph <= 8.5) ||
      dissolvedOxygen >= 4 ||
      bod <= 3 ||
      totalColiform <= 5000
    ) {
      return "Class D";
    } else if (
      (ph >= 6 && ph <= 8.5) ||
      dissolvedOxygen >= 4 ||
      bod <= 3 ||
      totalColiform <= 5000
    ) {
      return "Class E";
    } else {
      return "Unknown";
    }
  };

  //retunrs the quality.jsx array
  console.log("quality array:", quality);

  //class: class a, b, c, d, e
  const waterClass = determineClass(todayData);
  console.log("Determined waterClass:", waterClass);

  //Quality: Avg, Severe, wagerah wagerah
  const currentQuality = quality.find((q) => q.class === waterClass);
  console.log("currentQuality found:", currentQuality);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Top Section */}
          {isAlertVisible && <Alert />}
          {isSettingsVisible && <Settings />}
          {isArticlesVisible && <Article />}

          {/* <div className="absolute inset-0 z-0"></div> */}
          <div
            className="relative z-10 flex items-center justify-between p-6 animate-slideDown "
            style={{ width: "3" }}
          >
            {/* Location */}
            <div className="flex items-center gap-2 bg-white px-2 py-2 w-52 rounded-2xl shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[26px] h-[24.23px] text-black"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 
                  30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 
                  11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
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

          {/* Emoji Section */}
          <div className="flex justify-center  relative z-10 animate-bounceIn">
            <img
              src={currentQuality?.imageLink || "N/A"}
              alt="Water Quality"
              className="object-cover w-[150px] h-[175px]"
            />
          </div>

          {/* Combined White Box Section */}
          <div className="bg-white mx-6 p-4  rounded-3xl text-center mb-3 relative z-10 animate-slideDown h-[20rem]">
            <div>
              <div className="article flex items-center justify-between ">
                <button onClick={handleArticleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1m17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1m-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1m4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1"
                    />
                  </svg>
                </button>
                {/* Display current date without the day */}
              </div>
              <p className="text-black text-[18px]  pl-10 mt-[-1.75rem] ">
                Today, {currentDate}
              </p>
              <h1
                className="text-4xl font-bold"
                style={{ color: currentQuality?.color || "black" }}
              >
                {currentQuality?.title || "N/A"}
              </h1>
              <p className="text-black mt-1  text-[16px]">
                {currentQuality?.class || "N/A"}
              </p>
              <p className="text-black px-2 mt-1 text-[14px]">
                {currentQuality?.subtitle || "N/A"}
              </p>
            </div>
            <DataMatch setTodayData={setTodayData} />

            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 w-1/2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M19 6.048h-2v2h5v2h-5v2.083c2.838.476 5 2.944 5 5.917v2H10v-2a6 6 0 0 1 5-5.917v-2.083h-2.17a3.001 3.001 0 0 1-5.83-1a3 3 0 0 1 5.83-1H15v-2h-2v-2h6zm-9 16v21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-21zm0-14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m16 13a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-2-2m5 7h3a1 1 0 1 1 0 2a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h5v-2h-4v-1a1 1 0 0 1 1-1a3 3 0 0 0 0-6h-3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-black text-[14px] font-semibold ">
                    D.O.
                  </span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[14px] font-semibold ">
                    {todayData?.do || "NA"} mg/L
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 w-1/2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21 16c0-.5-.05-.92-.12-1.32l1.57-.78l-.9-1.8l-1.37.69c-.55-.83-1.27-1.29-1.89-1.51l.66-1.96l-1.9-.64l-.76 2.28c-1.33-.13-2.12-.64-2.59-1.19l1.75-.87l-.9-1.8l-1.55.79a4.4 4.4 0 0 0-.72-2.02l1.55-2.32l-1.66-1.11l-1.41 2.12c-.48-.23-1.06-.41-1.76-.5V2H7v2.1c-.71.15-1.27.44-1.68.81L2.7 2.29L1.29 3.71l2.95 2.94C4 7.39 4 8 4 8H2v2h2.04c.06.63.17 1.36.36 2.15l-2.72.9l.63 1.9l2.69-.9c.24.51.5 1.03.82 1.53l-2.38 1.59l1.11 1.66l2.52-1.68c.56.56 1.22 1.06 1.99 1.49l-.96 1.91l1.79.9l1-2l-.16-.09c.95.32 2.03.54 3.27.61V22h2v-2.07c.76-.09 1.81-.29 2.77-.74l1.52 1.52l1.41-1.42l-1.33-1.34c.38-.51.63-1.15.63-1.95M8.5 11A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11m2.5 3a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m4.5 3a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-black text-[14px] font-semibold ">
                    B.O.D
                  </span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[14px] font-semibold ">
                    {todayData?.bod || "NA"} mg/L
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2 ">
                <div className="flex items-center gap-2 w-1/2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11 22v-6h3.5q.6 0 1.05.45T16 17.5v1q0 .6-.45 1.05T14.5 20h-2v2zm6 0v-6h1.5v2h2v-2H22v6h-1.5v-2.5h-2V22zm-4.5-3.5h2v-1h-2zM9 21.95q-3.05-.35-5.025-2.625T2 13.8q0-2.5 1.988-5.437T10 2q4.025 3.425 6.013 6.363T18 13.8v.2h-7q-.825 0-1.412.588T9 16z"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-black text-[14px] font-semibold ">
                    pH
                  </span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[14px] font-semibold ">
                    {todayData?.ph || "NA"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between  mb-2">
                <div className="flex items-center gap-2 w-1/2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M9 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6M5.201 9.807a.75.75 0 0 1 .406.98l-.414 1a.75.75 0 0 1-1.386-.574l.414-1a.75.75 0 0 1 .98-.406m8.52-2.533a.75.75 0 0 0 .84.641c.663-.036 1.988.31 1.988 1.988a.75.75 0 0 0 .642.84c.41.056.793-.264.85-.674l.005-.062q.008-.076.01-.202a4 4 0 0 0-.046-.654c-.083-.52-.308-1.217-.894-1.803c-.585-.586-1.282-.81-1.802-.893a3.8 3.8 0 0 0-.856-.037l-.09.01a.755.755 0 0 0-.646.846M9.744 9.19a.75.75 0 0 1-.64.846h-.006l-.007.002l-.02.002l-.063.006q-.076.006-.201.01a4 4 0 0 1-.655-.047c-.52-.082-1.217-.307-1.803-.893s-.81-1.282-.893-1.802a3.8 3.8 0 0 1-.03-.919l.002-.02l.001-.007a.75.75 0 0 1 1.487.194c-.036.662.31 1.987 1.988 1.987a.75.75 0 0 1 .84.641m9.993 3.803a.75.75 0 0 1-.577.876h-.002l-.059.021a1 1 0 0 0-.25.14c-.192.141-.458.418-.607.973c-.149.556-.057.928.04 1.146a1.1 1.1 0 0 0 .186.294l.002.002a.75.75 0 0 1-.997 1.12l.493-.565l-.492.566l-.002-.002h-.001l-.003-.004l-.008-.006l-.018-.017l-.05-.049a2.6 2.6 0 0 1-.484-.734c-.225-.511-.357-1.234-.115-2.139s.718-1.465 1.17-1.795a2.6 2.6 0 0 1 .786-.393l.067-.018l.024-.005l.01-.002l.004-.001h.002s.002-.001.145.735l-.143-.736a.75.75 0 0 1 .88.593M12.83 17.31a.75.75 0 0 1 1.052-.131l1.579 1.228a.75.75 0 1 1-.921 1.184l-1.579-1.228a.75.75 0 0 1-.131-1.053M15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5m2.03 3.72a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 1 0 1.06-1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-black text-[14px] font-semibold ">
                    Total Coliform
                  </span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[14px] font-semibold ">
                    {todayData?.totalColiform || "NA"} MPN/100ml
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 justify-center fixed bottom-0 left-0 right-0 p-4">
            <button
              className={`text-white text-xl animate-fadeIn ${
                activeCircle === 1 ? "bg-blue-500 rounded-full p-2" : ""
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
        </>
      )}
    </div>
  );
};

export default Home;
