import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ColumnChartComponent = ({ labels, data, options = {} }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar", // Use 'bar' for horizontal bars
      data: {
        labels,
        datasets: [
          {
            label: "Readers This Week", // Assuming this is the label from Figma
            data,
            backgroundColor: "rgba(41, 142, 166, 1)", // Replace with colors from Figma
            borderColor: "rgba(41, 142, 166, 1)", // Replace with colors from Figma
          },
        ],
      },
       options: {
         scales: {
           yAxes: [
             { min: 0, 
               max: 160,
               beginAtZero: false,
               ticks: {
                 beginAtZero: true, 
                 callback: (value) => `${value}%`,
                 stepSize:40,
               },
             },
           ],
           xAxes: [
             {
               // Customize x-axis options based on Figma design (e.g., labels, grid lines)
             },
           ],
         },
         // Include additional options from Figma (grid lines, tooltips, etc.)
         ...options,
       },
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy chart instance on component unmount
      }
    };
  }, [labels, data, options]);

  return <canvas ref={chartRef} />;
};

export default ColumnChartComponent;
