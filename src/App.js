import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const lineData = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 30 },
  { name: 'Apr', value: 60 },
];

const barData = [
  { name: 'Product A', sales: 2400 },
  { name: 'Product B', sales: 1398 },
  { name: 'Product C', sales: 9800 },
];

const pieData = [
  { name: 'Chrome', value: 60 },
  { name: 'Firefox', value: 25 },
  { name: 'Safari', value: 15 },
];

const pieColors = ['#6366f1', '#10b981', '#f59e0b'];

const insights = [
  { title: "Total Users", value: "12,480", color: "bg-blue-100", text: "text-blue-600" },
  { title: "Avg. Session", value: "3m 45s", color: "bg-green-100", text: "text-green-600" },
  { title: "Bounce Rate", value: "24%", color: "bg-yellow-100", text: "text-yellow-600" },
  { title: "Revenue", value: "$8,730", color: "bg-purple-100", text: "text-purple-600" },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">AI Analytics Dashboard</h1>

      {/* Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {insights.map((card, idx) => (
          <div key={idx} className={`p-4 rounded-xl shadow-md ${card.color}`}>
            <h2 className={`text-md font-semibold ${card.text}`}>{card.title}</h2>
            <p className="text-2xl font-bold text-gray-800">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Monthly Trend</h2>
          <LineChart width={300} height={200} data={lineData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Sales by Product</h2>
          <BarChart width={300} height={200} data={barData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#10b981" />
          </BarChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Browser Share</h2>
          <PieChart width={300} height={200}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={60}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default App;
