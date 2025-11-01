import React, { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  const debouncedSearch = useDebounce(search, 300);

  const handleChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const filteredUsers = users
    .filter((u) =>
      selectedSubject === "all" ? true : u.subject === selectedSubject
    )
    .filter((u) =>
      u.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

  return (
    <div>
      <h3>All User Details</h3>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {["all", "React", "MongoDB", "JavaScript", "Python"].map((subject) => (
          <label key={subject} style={{ marginRight: "10px" }}>
            <input
              type="radio"
              name="subject"
              value={subject}
              checked={selectedSubject === subject}
              onChange={handleChange}
            />
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </label>
        ))}
      </div>

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Job</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.subject}</td>
                <td>{user.job}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
