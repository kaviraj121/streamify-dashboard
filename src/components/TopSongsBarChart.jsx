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
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis label color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // X-axis grid color
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis label color
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Y-axis grid color
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Legend text color
        },
      },
      title: {
        display: true,
        text: "Top 5 Streamed Songs (Last 30 Days)",
        color: "white", // Title text color
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TopSongsBarChart;
