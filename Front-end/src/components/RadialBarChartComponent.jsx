import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';

const RadialBarChartComponent = ({ labels, data, options = {} }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut', // Use 'doughnut' for a base
      data: {
        labels,
        datasets: [
          {
            label: 'Your Data Label', // Customize based on Figma design
            data,
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', ...], // Replace with colors from Figma
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', ...], // Replace with colors from Figma
            borderWidth: 1,
            // Set cutout percentage to create a gap and simulate a radial bar effect
            cutoutPercentage: 60, // Adjust based on Figma design (higher for more bar-like appearance)
          },
        ],
      },
      options: {
        // Remove unnecessary elements for a radial bar look
        legend: { display: false }, // Hide legend if not needed in Figma
        tooltips: { enabled: false }, // Hide tooltips if not needed in Figma

        // Customize rotation and animation (optional)
        rotation: -Math.PI / 2, // Start angle at 270 degrees for counter-clockwise appearance
        animate: {
          // Adjust animation duration based on Figma design
          duration: 1000,
          easing: 'easeInOutQuad',
        },

        // Inherit or provide additional options from Figma
        ...options,
      },
    });
  }, [labels, data, options]);

  return <canvas ref={chartRef} />;
};

export default RadialBarChartComponent;
