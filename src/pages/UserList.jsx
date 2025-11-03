import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleDelete = (indexToDelete) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  if (!users.length)
    return (
      <div className="empty-container">
        <p className="empty-text">No users found 🫤</p>
        <Link to="/add" className="add-button">
          ➕ Add New User
        </Link>
      </div>
    );

  const Row = ({ index, style }) => {
    const user = users[index];
    return (
      <div className="user-card" style={style}>
        <div className="user-details">
          <h3 className="user-name">{user.name}</h3>
          <p className="user-info"><strong>Subject:</strong> {user.subject}</p>
          <p className="user-info"><strong>Job:</strong> {user.job}</p>
          <p className="user-info"><strong>Gender:</strong> {user.gender}</p>
        </div>

        <div className="user-actions">
          <Link to={`/user/${index}`} className="user-btn view-btn">🔍 View</Link>
          <Link to={`/edit/${index}`} className="user-btn edit-btn">✏️ Edit</Link>
          <button onClick={() => handleDelete(index)} className="user-btn delete-btn">
            🗑️ Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="userlist-container">
      <h2 className="userlist-title">👥 User List</h2>
      <List height={400} itemCount={users.length} itemSize={160} width={"100%"}>
        {Row}
      </List>
    </div>
  );
}
