import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/Edit";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}
