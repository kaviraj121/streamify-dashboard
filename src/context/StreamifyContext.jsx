import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const StreamifyContext = createContext();

export const StreamifyProvider = ({ children }) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [totalStreams, setTotalStreams] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [topArtist, setTopArtist] = useState("");
  const [userGrowthData, setUserGrowthData] = useState({ labels: [], totalUsers: [], activeUsers: [] });
  const [revenueData, setRevenueData] = useState([]);
  const [topSongsData, setTopSongsData] = useState([]);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data: users } = await axios.get("https://dbdata-d6ao.onrender.com/users");
    const { data: streams } = await axios.get("https://dbdata-d6ao.onrender.com/streams");
    const { data: revenue } = await axios.get("https://dbdata-d6ao.onrender.com/revenue");
    const { data: artists } = await axios.get("https://dbdata-d6ao.onrender.com/artists");

    setTotalUsers(users.length);
    setActiveUsers(users.filter((user) => user.isActive).length);
    setTotalStreams(streams.reduce((acc, stream) => acc + stream.streamCount, 0));
    setRevenue(revenue.reduce((acc, item) => acc + item.amount, 0));
    setTopArtist(artists.sort((a, b) => b.streams - a.streams)[0].name);

    // Mock user growth data
    setUserGrowthData({
      labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
      totalUsers: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
      activeUsers: Array.from({ length: 12 }, () => Math.floor(Math.random() * 800)),
    });

    setRevenueData(revenue);
    setTopSongsData(streams.sort((a, b) => b.streamCount - a.streamCount).slice(0, 5));
    setStreams(streams);
  };

  return (
    <StreamifyContext.Provider
      value={{
        totalUsers,
        activeUsers,
        totalStreams,
        revenue,
        topArtist,
        userGrowthData,
        revenueData,
        topSongsData,
        streams,
      }}
    >
      {children}
    </StreamifyContext.Provider>
  );
};

export default StreamifyContext;