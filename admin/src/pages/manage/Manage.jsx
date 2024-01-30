import React from "react";
import "./manage.css"; 

export default function Manage() {
  return (
    <div className="manage">
      <h1>Manage Page</h1>

      <div className="tableContainer">
        <h2>Users Table</h2>
        <table className="userTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="formContainer">
        <h2>Add User Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
}
