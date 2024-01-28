// Report.js
import React from "react";
import "./report.css"; // You can create this file for additional styling

export default function Report() {
  // Sample data for the report table
  const reportData = [
    { id: 1, title: "Monthly Sales Report", date: "2022-08-01" },
    { id: 2, title: "Customer Feedback Summary", date: "2022-08-15" },
    { id: 3, title: "Expense Breakdown", date: "2022-08-28" },
    // Add more rows as needed
  ];

  return (
    <div className="report">
      <h1>Report Page</h1>

      {/* Sample Report Table Component */}
      <div className="tableContainer">
        <h2>Report Table</h2>
        <table className="reportTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more report components as needed */}
    </div>
  );
}
