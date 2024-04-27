import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto"; // Assuming you're using Chart.js v3 with auto registration

const AreaChart = ({ labels, data, options = {} }) => {
  const chartRef = useRef(null);
  

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "Bar",
      data: {
        labels: labels,
        datasets: [
          {
            // Change label as needed
            data,
            backgroundColor: "rgba(227, 241, 244, 1)",
            borderColor: "rgba(41, 142, 166, 1)",
            borderWidth: 1,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            
            min: 0, // Adjust these values as needed
            max: 100,
            beginAtZero: false,
            ticks: {
              // Configure y-axis ticks for percentages
              callback: (value) => `${value}%`, // Add '%' symbol
              stepSize: 20, // Set step size to 20
            },
            gridLines: {
              display: true, // Set to true temporarily
              drawBorder: false, // Hide the grid lines
            },
            xAxes: [
              {
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
              },
            ],
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 10,
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => myChart.destroy();
  }, [data, labels]);

  return (
    <div className="flex justify-center items-center">
      <canvas ref={chartRef} width="700" height="300"></canvas>
    </div>
  );
};

export default AreaChart;
