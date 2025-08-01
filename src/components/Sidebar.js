import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">AI Dashboard</h2>
      <ul>
        <li className="mb-2 cursor-pointer hover:text-gray-300">Dashboard</li>
        <li className="mb-2 cursor-pointer hover:text-gray-300">Reports</li>
        <li className="mb-2 cursor-pointer hover:text-gray-300">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
