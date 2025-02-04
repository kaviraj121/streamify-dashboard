import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TopSongsBarChart = ({ topSongsData }) => {
  const data = {
    labels: topSongsData.map((song) => song.songName),
    datasets: [
      {
        label: "Stream Count",
        data: topSongsData.map((song) => song.streamCount),
        backgroundColor: "#FB923C",
        borderColor: "#FB923C",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      x: {
        ticks: {
          color: "white",
          font: {
            size: window.innerWidth <= 600 ? 10 : 12, 
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: window.innerWidth <= 600 ? 10 : 12, 
          },
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: window.innerWidth <= 600 ? 12 : 14, 
          },
        },
      },
      title: {
        display: true,
        text: "Top 5 Streamed Songs (Last 30 Days)",
        color: "white",
        font: {
          size: window.innerWidth <= 600 ? 14 : 16, 
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px", maxWidth: "800px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopSongsBarChart;