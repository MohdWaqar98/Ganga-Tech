import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete, TextField, Stack } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../data/data";
import GangaFacts from "../data/GangaFacts";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import gsap from "gsap";
import Loader from "../components/Loader"; 

const SearchInitial = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const navigate = useNavigate();

  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const searchInputRef = useRef(null);
  const factRef = useRef(null);
  const didYouKnowRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.2 }
      );
      gsap.fromTo(
        subHeadingRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.4 }
      );
      gsap.fromTo(
        searchInputRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.6 }
      );
      gsap.fromTo(
        factRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.8 }
      );
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1 }
      );
      gsap.fromTo(
        didYouKnowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.7 }
      );
    }
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(factRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentFactIndex(
            (prevIndex) => (prevIndex + 1) % GangaFacts.length
          );
          gsap.to(factRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (event, value) => {
    setSearchTerm(value);
    if (value) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  const handleOptionSelect = (event, value) => {
    if (value) {
      setSearchTerm(value);
      setFilteredData([]);
      // Blur the input to hide the keyboard
      searchInputRef.current.querySelector("input").blur();
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredData([]);
  };

  const handleGetForecastClick = () => {
    if (searchTerm.trim()) {
      navigate("/Home", { state: { location: searchTerm } });
    } else {
      toast.error("Please enter a valid location!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {isLoading ? (
        <Loader /> 
      ) : (
        <div className="relative z-20 flex flex-col items-center justify-start pt-20 h-screen text-white font-poppins">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-normal"
          >
            Welcome to
          </h1>
          <h1
            ref={subHeadingRef}
            className="text-4xl sm:text-4xl md:text-5xl font-semibold drop-shadow-xl"
          >
            GANGA MITRA
          </h1>
          <p
            ref={subHeadingRef}
            className="text-base sm:text-lg md:text-xl font-light mb-24"
          >
            River Health at your fingertips
          </p>

          <Stack
            spacing={2}
            sx={{
              position: "relative",
              width: { xs: "80%", sm: 300, md: 700 },
              color: "white",
            }}
          >
            <Autocomplete
              ref={searchInputRef}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={data.map((option) => option.name)}
              value={searchTerm}
              onInputChange={handleSearchChange}
              onChange={handleOptionSelect}
              getOptionLabel={(option) => option.toString()}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  sx={{
                    input: {
                      color: "white",
                    },
                    label: {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
              )}
            />

            {searchTerm && (
              <lord-icon
                src="https://cdn.lordicon.com/nqtddedc.json"
                trigger="hover"
                colors="primary:#ffffff"
                style={{
                  position: "absolute",
                  top: "25%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  zIndex: 10,
                  pointerEvents: "auto",
                }}
                onClick={clearSearch}
              ></lord-icon>
            )}
          </Stack>

          <div
            className="text-center text-sm sm:text-base md:text-lg text-white"
            style={{ height: "120px", overflow: "hidden", marginTop: "3rem" }}
          >
            <p ref={didYouKnowRef} className="font-bold mb-2 text-2xl">
              Did You Know?
            </p>
            <div
              ref={factRef}
              className="text-sm sm:text-base md:text-lg px-4"
            >
              <p>{GangaFacts[currentFactIndex].fact}</p>
            </div>
          </div>

          <button
            ref={buttonRef}
            onClick={handleGetForecastClick}
            className="bg-[#0D009C] text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 px-8 py-4 rounded-full shadow-lg hover:bg-blue-700"
          >
            Get Your Forecast
          </button>
        </div>
      )}
    </>
  );
};

export default SearchInitial;
