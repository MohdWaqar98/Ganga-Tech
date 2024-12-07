import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { location: userLocation } = location.state || {};

  useEffect(() => {
    // Simulate a loader timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#00ADFF] to-[#006FFF]">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen bg-black">
          <DotLottieReact
            src="https://lottie.host/b4a28780-8ba8-4f3d-9f5d-09c22324c8c5/DiFjCoVy9M.lottie"
            loop
            autoplay
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      ) : (
        <>
          {/* Top Section */}
          <div className="absolute inset-0 z-0"></div>
          <div className="relative z-10 flex items-center justify-between mx-4 mt-10 p-6 animate-slideDown ">
            {/* Location */}
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[24.23px] text-black" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"/>
                <circle cx="16" cy="13" r="4" fill="none"/>
              </svg>
              <span className="text-black font-semibold text-lg">{userLocation || 'Unknown Location'}</span>
            </div>
            {/* Icons */}
            <div className="flex gap-4">
              <button className="text-white text-xl animate-fadeIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="30.5" height="30.5" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M6 9.5A2 2 0 0 1 7.937 11H13.5a.5.5 0 0 1 .09.992L13.5 12l-5.563.001a2 2 0 0 1-3.874 0L2.5 12a.5.5 0 0 1-.09-.992L2.5 11h1.563A2 2 0 0 1 6 9.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4-8A2 2 0 0 1 11.937 4H13.5a.5.5 0 0 1 .09.992L13.5 5l-1.563.001a2 2 0 0 1-3.874 0L2.5 5a.5.5 0 0 1-.09-.992L2.5 4h5.563A2 2 0 0 1 10 2.5m0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/>
                </svg>
              </button>
              <button className="text-white text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="35" height="35">
                  <path d="M12 24a2.49 2.49 0 002.5-2.5h-5A2.49 2.49 0 0012 24zm6.3-7V10a6.3 6.3 0 00-12.6 0v7l-2 2v1h16v-1z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Emoji Section */}
          <div className="flex justify-center mt-6 relative z-10 animate-bounceIn">
            <img src="src\assets\images\severe.png" alt="Water Quality" className="object-cover w-[217px] h-[258px]" />
          </div>

          {/* Combined White Box Section */}
          <div className="bg-white mx-6 p-6 pb-10 rounded-3xl text-center mb-6 relative z-10 animate-slideDown">
            <div>
              <div className="flex items-center justify-between">
                <a href="article.html">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M4.727 2.712c.306-.299.734-.494 1.544-.6C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.112c.81.106 1.238.301 1.544.6c.305.3.504.72.613 1.513c.112.817.114 1.899.114 3.45v7.839H7.346c-.903 0-1.519-.001-2.047.138c-.472.124-.91.326-1.299.592V7.676c0-1.552.002-2.634.114-3.451c.109-.793.308-1.213.613-1.513m2.86 3.072a.82.82 0 0 0-.828.81c0 .448.37.811.827.811h8.828a.82.82 0 0 0 .827-.81a.82.82 0 0 0-.827-.811zm-.828 4.594c0-.447.37-.81.827-.81h5.517a.82.82 0 0 1 .828.81a.82.82 0 0 1-.828.811H7.586a.82.82 0 0 1-.827-.81" clipRule="evenodd"/>
                  </svg>
                </a>
                <p className="text-black text-[18px] mx-auto">Today, 12 September</p>
              </div>
              <h1 className="text-5xl font-bold mt-2 text-red-500">Severe</h1>
              <p className="text-black mt-2 text-[18px]">(Class E)</p>
              <p className="text-black mt-2 text-[16px]">Very poor quality, unsuitable for any direct use, requires extensive treatment.</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 w-1/2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="M19 6.048h-2v2h5v2h-5v2.083c2.838.476 5 2.944 5 5.917v2H10v-2a6 6 0 0 1 5-5.917v-2.083h-2.17a3.001 3.001 0 0 1-5.83-1a3 3 0 0 1 5.83-1H15v-2h-2v-2h6zm-9 16v21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-21zm0-14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m16 13a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0zm4-2a2 2 0 0 0-2 2v6a2 2 0 0 0 4 0v-6a2 2 0 0 0-2-2m5 7h3a1 1 0 1 1 0 2a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h5v-2h-4v-1a1 1 0 0 1 1-1a3 3 0 0 0 0-6h-3z" clipRule="evenodd"></path></svg></span>
                  <span className="text-black text-[18px] font-semibold mt-2">D.O.</span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[18px] font-semibold mt-2">7.6 mg/L</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 w-1/2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M21 16c0-.5-.05-.92-.12-1.32l1.57-.78l-.9-1.8l-1.37.69c-.55-.83-1.27-1.29-1.89-1.51l.66-1.96l-1.9-.64l-.76 2.28c-1.33-.13-2.12-.64-2.59-1.19l1.75-.87l-.9-1.8l-1.55.79a4.4 4.4 0 0 0-.72-2.02l1.55-2.32l-1.66-1.11l-1.41 2.12c-.48-.23-1.06-.41-1.76-.5V2H7v2.1c-.71.15-1.27.44-1.68.81L2.7 2.29L1.29 3.71l2.95 2.94C4 7.39 4 8 4 8H2v2h2.04c.06.63.17 1.36.36 2.15l-2.72.9l.63 1.9l2.69-.9c.24.51.5 1.03.82 1.53l-2.38 1.59l1.11 1.66l2.52-1.68c.56.56 1.22 1.06 1.99 1.49l-.96 1.91l1.79.9l1-2l-.16-.09c.95.32 2.03.54 3.27.61V22h2v-2.07c.76-.09 1.81-.29 2.77-.74l1.52 1.52l1.41-1.42l-1.33-1.34c.38-.51.63-1.15.63-1.95M8.5 11A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11m2.5 3a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m4.5 3a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></path></svg></span>
                  <span className="text-black text-[18px] font-semibold mt-2">B.O.D</span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[18px] font-semibold mt-2">1.8 mg/L</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 w-1/2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11 22v-6h3.5q.6 0 1.05.45T16 17.5v1q0 .6-.45 1.05T14.5 20h-2v2zm6 0v-6h1.5v2h2v-2H22v6h-1.5v-2.5h-2V22zm-4.5-3.5h2v-1h-2zM9 21.95q-3.05-.35-5.025-2.625T2 13.8q0-2.5 1.988-5.437T10 2q4.025 3.425 6.013 6.363T18 13.8v.2h-7q-.825 0-1.412.588T9 16z"></path></svg></span>
                  <span className="text-black text-[18px] font-semibold mt-2">pH</span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[18px] font-semibold mt-2">7</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 w-1/2">
                  <span><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M9 12a3 3 0 1 0 0 6a3 3 0 0 0 0-6M5.201 9.807a.75.75 0 0 1 .406.98l-.414 1a.75.75 0 0 1-1.386-.574l.414-1a.75.75 0 0 1 .98-.406m8.52-2.533a.75.75 0 0 0 .84.641c.663-.036 1.988.31 1.988 1.988a.75.75 0 0 0 .642.84c.41.056.793-.264.85-.674l.005-.062q.008-.076.01-.202a4 4 0 0 0-.046-.654c-.083-.52-.308-1.217-.894-1.803c-.585-.586-1.282-.81-1.802-.893a3.8 3.8 0 0 0-.856-.037l-.09.01a.755.755 0 0 0-.646.846M9.744 9.19a.75.75 0 0 1-.64.846h-.006l-.007.002l-.02.002l-.063.006q-.076.006-.201.01a4 4 0 0 1-.655-.047c-.52-.082-1.217-.307-1.803-.893s-.81-1.282-.893-1.802a3.8 3.8 0 0 1-.03-.919l.002-.02l.001-.007a.75.75 0 0 1 1.487.194c-.036.662.31 1.987 1.988 1.987a.75.75 0 0 1 .84.641m9.993 3.803a.75.75 0 0 1-.577.876h-.002l-.059.021a1 1 0 0 0-.25.14c-.192.141-.458.418-.607.973c-.149.556-.057.928.04 1.146a1.1 1.1 0 0 0 .186.294l.002.002a.75.75 0 0 1-.997 1.12l.493-.565l-.492.566l-.002-.002h-.001l-.003-.004l-.008-.006l-.018-.017l-.05-.049a2.6 2.6 0 0 1-.484-.734c-.225-.511-.357-1.234-.115-2.139s.718-1.465 1.17-1.795a2.6 2.6 0 0 1 .786-.393l.067-.018l.024-.005l.01-.002l.004-.001h.002s.002-.001.145.735l-.143-.736a.75.75 0 0 1 .88.593M12.83 17.31a.75.75 0 0 1 1.052-.131l1.579 1.228a.75.75 0 1 1-.921 1.184l-1.579-1.228a.75.75 0 0 1-.131-1.053M15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5m2.03 3.72a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 1 0 1.06-1.06z" clipRule="evenodd"></path></svg></span>
                  <span className="text-black text-[18px] font-semibold mt-2">Total Coliform</span>
                </div>
                <div className="text-black">|</div>
                <div className="flex items-center justify-end w-1/2">
                  <span className="text-black text-[18px] font-semibold mt-2">2194 MPN/100ml</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
