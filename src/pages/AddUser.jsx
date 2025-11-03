import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, subject, job, gender };
    dispatch(addUser(newUser));
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" required />
      <input value={job} onChange={(e) => setJob(e.target.value)} placeholder="Job" required />
      <select value={gender} onChange={(e) => setGender(e.target.value)} required>
        <option value="">Select Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}
