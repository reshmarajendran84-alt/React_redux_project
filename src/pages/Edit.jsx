import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users[id];

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...users];
    updated[id] = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      job: e.target.job.value,
      gender: e.target.gender.value,
    };
    localStorage.setItem("users", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit User — ID: {id}</h2>
      {user ? (
        <form onSubmit={handleSubmit}>
          <input name="name" defaultValue={user.name} />
                  <br />

          <input name="subject" defaultValue={user.subject} />
                  <br />

          <input name="job" defaultValue={user.job} />
                  <br />

          <input name="gender" defaultValue={user.gender} />
                  <br />
        <br />

          <button type="submit">Update</button>
        </form>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}
