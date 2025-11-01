import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("male");
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Load from localStorage when page loads
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  // ✅ Add or Update User
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !job) {
      alert("Please fill all fields");
      return;
    }

    const newUser = { name, subject, job, gender };
    let updatedUsers;

    if (editIndex !== null) {
      // Edit existing user
      updatedUsers = [...users];
      updatedUsers[editIndex] = newUser;
      setEditIndex(null);
    } else {
      // Add new user
      updatedUsers = [...users, newUser];
    }

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Reset fields
    setName("");
    setSubject("");
    setJob("");
    setGender("male");
  };

  // ✅ Delete user
  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  // ✅ Edit user
  const handleEdit = (index) => {
    const user = users[index];
    setName(user.name);
    setSubject(user.subject);
    setJob(user.job);
    setGender(user.gender);
    setEditIndex(index);
  };

  return (
    <div className="form-container">
      <h3>{editIndex !== null ? "Edit User" : "Add User"}</h3>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Subject</label>
        <input
          type="text"
          value={subject}
          placeholder="Enter Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <br />

        <label>Job</label>
        <input
          type="text"
          value={job}
          placeholder="Enter Job"
          onChange={(e) => setJob(e.target.value)}
        />
        <br />

        <label>Select Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>

        <button type="submit">
          {editIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>

      <hr />

      {/* ✅ Show user list below form */}
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} — {user.subject} — {user.job} — {user.gender}{" "}
              <button onClick={() => handleEdit(index)}>Edit</button>{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
