import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import { FixedSizeList as List } from "react-window";
import { Link } from "react-router-dom";

export default function UserList() {
  const users = useSelector((state) => state.users.list);
  const dispatch = useDispatch();

  // Each row in the virtualized list
  const Row = ({ index, style }) => {
    const user = users[index];
    return (
      <div
        style={{
          ...style,
          padding: "10px",
          borderBottom: "1px solid #ddd",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <b>{user.name}</b> — {user.subject} ({user.job}) [{user.gender}]
        <div style={{ marginTop: "4px" }}>
          <Link to={`/user/${index}`}>🔍 View</Link> |{" "}
          <Link to={`/edit/${index}`}>✏️ Edit</Link> |{" "}
          <button onClick={() => dispatch(deleteUser(index))}>🗑️ Delete</button>
        </div>
      </div>
    );
  };

  if (!users.length) return <p>No users found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>👥 User List (Virtualized)</h2>

      <List
        height={500}          // visible height (px)
        itemCount={users.length} // total items
        itemSize={80}         // each row’s height (px)
        width={"100%"}        // can be fixed or responsive
      >
        {Row}
      </List>
    </div>
  );
}
