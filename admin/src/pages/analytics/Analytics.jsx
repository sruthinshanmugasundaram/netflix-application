// Analytics.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./analytics.css"; // You can create this file for additional styling

export default function Analytics() {
  // Sample data for the bar chart
  const data = [
    { name: "January", revenue: 65 },
    { name: "February", revenue: 59 },
    { name: "March", revenue: 80 },
    { name: "April", revenue: 81 },
    { name: "May", revenue: 56 },
    { name: "June", revenue: 55 },
  ];

  return (
    <div className="analytics">
      <h1>Analytics Page</h1>

      {/* Sample Bar Chart Component */}
      <div className="chartContainer">
        <h2>Monthly Revenue</h2>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Add more analytics components as needed */}
    </div>
  );
}
