import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const UserGrowthChart = ({ userGrowthData }) => {
  const data = {
    labels: userGrowthData.labels,
    datasets: [
      {
        label: "Total Users",
        data: userGrowthData.totalUsers,
        borderColor: "blue",
        tension: 0.1,
      },
      {
        label: "Active Users",
        data: userGrowthData.activeUsers,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: "white", // X-axis text color
        },
        grid: {
          color: "rgba(96, 165, 250, 1)", // X-axis grid lines (faint white)
        },
      },
      y: {
        ticks: {
          color: "white", // Y-axis text color
        },
        grid: {
          color: "rgba(103,232,249,1)", // Y-axis grid lines (faint white)
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", // Legend text color
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default UserGrowthChart;
