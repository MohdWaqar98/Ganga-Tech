import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import DataMatchDash from "./DataMatchDash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin // Register the annotation plugin
);

const DashboardComponent = () => {
  const [data, setData] = useState([]); // Array of data from DataMatch
  const [selectedParam, setSelectedParam] = useState("ph"); // Default selected parameter

  // Threshold values for each parameter
  const thresholdValues = {
    ph: 7.5,
    bod: 3,
    do: 5,
    totalColiform: 500,
  };

  const handleRadioChange = (param) => {
    setSelectedParam(param); // Update selected parameter
  };

  // Prepare data for the chart
  const chartData = {
    labels: data.map((item, index) => `Day ${index + 1}`), // Dates - x-axis
    datasets: [
      {
        label: `River Quality (${selectedParam.toUpperCase()})`,
        data: data.map((item) => parseFloat(item[selectedParam])), // Values - y-axis
        borderColor: "#006fff",
        backgroundColor: "rgba(0, 111, 255, 0.2)",
        fill: true,
        tension: 0.3, // Curve tension
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      annotation: {
        annotations: {
          thresholdLine: {
            type: "line",
            yMin: thresholdValues[selectedParam], // Dynamic threshold
            yMax: thresholdValues[selectedParam], // Fixed at the same value
            borderColor: "red", // Color of the threshold line
            borderWidth: 2,
            label: {
              content: `Threshold (${thresholdValues[selectedParam]})`,
              enabled: true,
              position: "end",
              color: "red",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              font: {
                size: 12,
              },
            },
          },

        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: selectedParam.toUpperCase(),
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col justify-between">
      <DataMatchDash setTodayData={(tempData) => setData(tempData)} />
      <div
        className="absolute inset-0 bg-gradient-to-b"
        style={{
          opacity: 0.8,
        }}
      ></div>
      <div className="relative max-w-md mx-auto p-4 flex flex-col justify-between h-full">
        {/* River Quality Forecast */}
        <div className="mt-1 text-center">
          <div className="bg-blue-100 rounded-3xl p-4 shadow-md">
            <h2 className="text-lg font-semibold">River Quality Forecast</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {["ph", "bod", "do", "totalColiform"].map((param) => {
              const label =
                param === "totalColiform"
                  ? "Total Coliform"
                  : param.toUpperCase(); // Add a custom label for "totalColiform"
              return (
                <div className="flex items-center ml-6" key={param}>
                  <input
                    id={param}
                    name="quality"
                    type="radio"
                    className="w-5 h-5"
                    checked={selectedParam === param}
                    onChange={() => handleRadioChange(param)} // Update the selected parameter
                  />
                  <label
                    htmlFor={param}
                    style={{
                      fontSize: "16px", // Small text size in pixels
                      fontWeight: "bold", // Bold text
                      marginLeft: "6px", // Reduced space between radio and label
                      color: "black", // Text color
                      whiteSpace: "nowrap", // Prevent wrapping
                    }}
                  >
                    {label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Forecast List */}
        <div className="mt-2 bg-white rounded-xl p-4 shadow-md overflow-y-auto max-h-52 flex-grow forecast-list">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <div
                className="flex justify-between items-center mb-4"
                key={index}
              >
                <span className="date-class text-red-500">
                  {(new Date(item.date) || new Date())
                    .toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "2-digit",
                      weekday: "short",


                    })
                    .replace(/\//g, ", ")}
                </span>
                <div className="flex items-center space-x-1">
                  <i className="fas fa-tint text-black"></i>
                  <span className="value-class text-black font-semibold">
                    {item[selectedParam]}{" "}
                    {/* Display the selected parameter's value */}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>

        {/* Line Chart for River Quality Trends */}
        <div className="mt-4 bg-blue-100 rounded-3xl p-4 shadow-md text-center flex-grow graph-container">
          <h2 className="text-lg font-semibold">River Quality Trends</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;