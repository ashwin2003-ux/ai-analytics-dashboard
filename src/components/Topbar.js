import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Analytics Overview</h1>
      <div className="flex items-center gap-4 text-xl text-gray-600">
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Topbar;
