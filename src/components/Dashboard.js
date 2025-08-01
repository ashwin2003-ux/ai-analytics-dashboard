import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', visitors: 400 },
  { name: 'Feb', visitors: 700 },
  { name: 'Mar', visitors: 200 },
  { name: 'Apr', visitors: 1000 },
  { name: 'May', visitors: 500 },
  { name: 'Jun', visitors: 800 },
];

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>

      {/* Analytics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700">Users</h2>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-2xl font-bold">$25,000</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700">Sessions</h2>
          <p className="text-2xl font-bold">5,670</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-lg font-semibold text-gray-700">Conversions</h2>
          <p className="text-2xl font-bold">780</p>
        </div>
      </div>

      {/* Chart section */}
      <div className="bg-white p-6 shadow rounded-xl">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Traffic Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
