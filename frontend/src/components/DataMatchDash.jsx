import React, { useEffect } from 'react'


const DataMatchDash = ({ setTodayData }) => {
    useEffect(() => {
        const formatDate = (date) => {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        };
    
        const today = new Date();
        const tempData = [];
    
        for (let i = -10; i <= 4; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);
    
          tempData.push({
            date: formatDate(date),
            ph: `${(Math.random() * 2 + 7).toFixed(2)}`, // No unit for pH
        do: `${(Math.random() * 2 + 6).toFixed(2)} mg/L`, // DO with unit
        bod: `${(Math.random() * 3 + 2).toFixed(2)} mg/L`, // BOD with unit
        totalColiform: `${Math.floor(Math.random() * 1000)} MPN/100ml`,
          });
        }
    
        // console.log("Generated tempData:", tempData); // Debugging
    
        if (typeof setTodayData === "function") {
          setTodayData(tempData); // Pass the array to the parent
        }
      }, []);
    
      return null; // No UI rendering
    };

export default DataMatchDash