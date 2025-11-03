import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500 text-lg mb-4">No users found 🫤</p>
        <Link
          to="/add"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
        >
          ➕ Add New User
        </Link>
      </div>
    );

  const Row = ({ index, style }) => {
    const user = users[index];
    return (
      <div
        style={style}
        className="bg-white shadow-md hover:shadow-lg transition-all rounded-xl p-6 mx-auto my-3 w-3/4 max-w-3xl flex flex-col md:flex-row justify-between items-start md:items-center"
      >
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">{user.name}</h3>
          <p className="text-gray-700">
            <strong>Subject:</strong> {user.subject}
          </p>
          <p className="text-gray-700">
            <strong>Job:</strong> {user.job}
          </p>
          <p className="text-gray-700">
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>

        <div className="flex md:flex-col gap-2 mt-4 md:mt-0">
          <Link
            to={`/user/${index}`}
            className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
          >
            🔍 View
          </Link>
          <Link
            to={`/edit/${index}`}
            className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 transition"
          >
            ✏️ Edit
          </Link>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-600 text-white px-3 py-2 rounded-md text-sm hover:bg-red-700 transition"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
        👥 User List
      </h2>
      <List height={500} itemCount={users.length} itemSize={180} width={"100%"}>
        {Row}
      </List>
    </div>
  );
}
