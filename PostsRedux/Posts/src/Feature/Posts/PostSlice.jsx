import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "gokul",
    age: 23,
  },
  {
    id: 1,
    name: "virat",
    age: 35,
  },
];
console.log(initialState);
const PostSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    AddPost(state, actions) {
      state.push(actions.payload);
    },
  },
});
export const { AddPost } = PostSlice.actions;
export default PostSlice.reducer;
