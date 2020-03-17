import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: undefined,
    lastName: undefined
  },
  reducers: {
    signin(state, action) {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    }
  }
});

export default userSlice.actions;
