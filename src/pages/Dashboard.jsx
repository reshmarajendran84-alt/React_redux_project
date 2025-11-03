import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    subject: "",
    job: "",
    gender: "",
  });

  // ✅ Load users from localStorage when component mounts
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

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // ✅ Redirect to UserList page after saving
    navigate("/users");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>➕ Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <br />
        <br/>
<label>Subject </label>
        <input
          type="text"
          name="subject"
          placeholder="Enter subject"
          value={newUser.subject}
          onChange={handleChange}
          required
        />
        <br />
                <br/>

<label>Job </label>
        <input
          type="text"
          name="job"
          placeholder="Enter job"
          value={newUser.job}
          onChange={handleChange}
          required
        />
        <br />
        <br/>
<label>Gender </label>
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
                <br/>

        <br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
