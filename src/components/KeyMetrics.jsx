import React, { useContext } from "react";
import StreamifyContext from "../context/StreamifyContext";

const KeyMetrics = () => {
  const { totalUsers, activeUsers, totalStreams, revenue, topArtist } = useContext(StreamifyContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-2xl">{totalUsers}</p>
      </div>
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Active Users</h3>
        <p className="text-2xl">{activeUsers}</p>
      </div>
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Total Streams</h3>
        <p className="text-2xl">{totalStreams}</p>
      </div>
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Revenue</h3>
        <p className="text-2xl">${revenue}</p>
      </div>
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-md col-span-full">
        <h3 className="text-lg font-semibold">Top Artist</h3>
        <p className="text-2xl">{topArtist}</p>
      </div>
    </div>
  );
};

export default KeyMetrics;