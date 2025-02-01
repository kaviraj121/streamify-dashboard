import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenuePieChart = ({ revenueData }) => {
  const data = {
    labels: revenueData.map((item) => item.source),
    datasets: [
      {
        data: revenueData.map((item) => item.amount),
        backgroundColor: ["#4DB6AC", "#FB923C", "#FBBF24", "#84CC16", "#60A5FA", "#67E8F9"],
        hoverBackgroundColor: ["#4DB6AC", "#FB923C", "#FBBF24", "#84CC16", "#60A5FA", "#67E8F9"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
        },
      },
      tooltip: {
        enabled: true,
        bodyColor: "white",
        titleColor: "white",
      },
    },
    cutout: "60%",
  };

  return (
    <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 "> {/* Adjust size here */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default RevenuePieChart;