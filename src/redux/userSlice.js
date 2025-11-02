import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  list: Array.from({ length: 1000 }, (_, i) => ({
    name: `User ${i + 1}`,
    subject: i % 2 === 0 ? "React" : "Redux",
    job: "Developer",
    gender: i % 2 === 0 ? "Female" : "Male",
  })),
};


const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (state, action) => {
      state.list = action.payload;
    },
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    editUser: (state, action) => {
      const { index, updatedUser } = action.payload;
      state.list[index] = updatedUser;
    },
    deleteUser: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { loadUsers, addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
