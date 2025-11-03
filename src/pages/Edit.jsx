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
    navigate("/users");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg transition-transform transform hover:scale-[1.02]">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
          ✏️ Edit User — ID: {id}
        </h2>

        {user ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                name="name"
                defaultValue={user.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Subject</label>
              <input
                name="subject"
                defaultValue={user.subject}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter subject"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Job</label>
              <input
                name="job"
                defaultValue={user.job}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter job title"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Gender</label>
              <select
                name="gender"
                defaultValue={user.gender}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => navigate("/users")}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <p className="text-center text-gray-600 text-lg">User not found</p>
        )}
      </div>
    </div>
  );
}
