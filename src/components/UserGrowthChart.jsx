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
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
      x: {
        ticks: {
          color: "white", 
        },
        grid: {
          color: "rgba(96, 165, 250, 1)",
        },
      },
      y: {
        ticks: {
          color: "white", 
        },
        grid: {
          color: "rgba(103,232,249,1)", 
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "white", 
        },
      },
    },
  };

  return (
    <div style={{ height: "300px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGrowthChart;