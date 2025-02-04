import React, { useState } from "react";

const StreamsTable = ({ streams }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filter, setFilter] = useState(""); // Single filter for both song name and artist

  // Sorting logic
  const sortedStreams = [...streams].sort((a, b) => {
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
  });

  // Filtering logic
  const filteredStreams = sortedStreams.filter(
    (stream) =>
      stream.songName.toLowerCase().includes(filter.toLowerCase()) || // Filter by song name
      stream.artist.toLowerCase().includes(filter.toLowerCase()) // Filter by artist
  );

  // Handle sorting
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      {/* Single Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by song name or artist"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/2"
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th onClick={() => requestSort("songName")}>Song Name</th>
            <th onClick={() => requestSort("artist")}>Artist</th>
            <th onClick={() => requestSort("dateStreamed")}>Date Streamed</th>
            <th onClick={() => requestSort("streamCount")}>Stream Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredStreams.map((stream) => (
            <tr key={stream.id} className="hover:bg-gray-100 hover:text-black">
              <td className="p-2 border">{stream.songName}</td>
              <td className="p-2 border">{stream.artist}</td>
              <td className="p-2 border">{stream.dateStreamed}</td>
              <td className="p-2 border">{stream.streamCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StreamsTable;