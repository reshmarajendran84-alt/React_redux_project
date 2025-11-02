import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate(); // ✅ For navigation
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    subject: "",
    job: "",
    gender: "",
  });

  // ✅ Load existing users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new user
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    // Save to localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // ✅ Navigate to UserList page
    navigate("/"); // Assuming "/" is your UserList/Dashboard route
    navigate("/users")
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{/* If you want dynamic title */}➕ Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value={newUser.subject}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="text"
          name="job"
          placeholder="Enter job"
          value={newUser.job}
          onChange={handleChange}
          required
        />
        <br />

        <select
          name="gender"
          value={newUser.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
