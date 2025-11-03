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
  name: "user",
  initialState: {
    list: [], // ✅ must be an array, not undefined
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload); // ✅ add new user
    },
    deleteUser: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;