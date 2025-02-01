import React, { useContext } from "react";
import KeyMetrics from "../components/KeyMetrics";
import UserGrowthChart from "../components/UserGrowthChart";
import RevenuePieChart from "../components/RevenuePieChart";
import TopSongsBarChart from "../components/TopSongsBarChart";
import StreamsTable from "../components/StreamsTable";
import StreamifyContext from "../context/StreamifyContext";

const Dashboard = () => {
  const {
    totalUsers,
    activeUsers,
    totalStreams,
    revenue,
    topArtist,
    userGrowthData,
    revenueData,
    topSongsData,
    streams,
  } = useContext(StreamifyContext);

  return (
    <div className="p-6  bg-gray-900  min-h-screen  ">
      <h1 className="text-6xl text-white font-medium mb-6">Streamify Analytics Dashboard</h1>

      {/* Key Metrics Section */}
      <KeyMetrics 
        totalUsers={totalUsers}
        activeUsers={activeUsers}
        totalStreams={totalStreams}
        revenue={revenue}
        topArtist={topArtist}
      />

      {/* Data Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl  font-semibold mb-4">User Growth</h2>
          <UserGrowthChart    userGrowthData={userGrowthData} />
        </div>
        <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold mb-4">Revenue Distribution</h2>
          <div className="flex justify-center items-center">
          <RevenuePieChart className="flex justify-center items-center" revenueData={revenueData} />
          </div>
         
        </div>
      </div>

      <div className="mt-6 bg-gray-600 text-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Top 5 Streamed Songs</h2>
        <TopSongsBarChart  topSongsData={topSongsData} />
      </div>

      {/* Data Table Section */}
      <div className="mt-6 bg-gray-600 text-white p-6 rounded-lg shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Recent Streams</h2>
        <StreamsTable streams={streams} />
      </div>
    </div>
  );
};

export default Dashboard;