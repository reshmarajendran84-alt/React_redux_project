import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users[id];

  if (!user) return <p>User not found!</p>;

  return (
    <div>
      <h2>User Details — ID: {id}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Subject:</strong> {user.subject}</p>
      <p><strong>Job:</strong> {user.job}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <button onClick={() => navigate("/users")}>⬅️ Back to User List</button>
    </div>
  );
}
