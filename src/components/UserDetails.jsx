import React from 'react'

export default function UserDetails({user}) {
    const handleSave = () => {
  const updated = [...users];
  updated[editIndex] = editUser;
  setUsers(updated);
  localStorage.setItem("users", JSON.stringify(updated));
  setEditIndex(null);
};

  return (
    <div>
      <h3>User Detail</h3>
      
      {editIndex === index ? (
  <>
    <td><input value={editUser.name} onChange={(e) => setEditUser({ ...editUser, name: e.target.value })} /></td>
    <td><input value={editUser.subject} onChange={(e) => setEditUser({ ...editUser, subject: e.target.value })} /></td>
    <td><input value={editUser.job} onChange={(e) => setEditUser({ ...editUser, job: e.target.value })} /></td>
    <td><input value={editUser.gender} onChange={(e) => setEditUser({ ...editUser, gender: e.target.value })} /></td>
    <td>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => setEditIndex(null)}>Cancel</button>
    </td>
  </>
) : (
  <>
    <td>{user.name}</td>
    <td>{user.subject}</td>
    <td>{user.job}</td>
    <td>{user.gender}</td>
    <td>
      <button onClick={() => handleEdit(index)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </td>
  </>
)}


    </div>
  )
}
