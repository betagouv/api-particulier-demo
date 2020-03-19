import { createSlice } from "@reduxjs/toolkit";
import { IncompleteProfile } from "../../server/profile/profile";

type UserState = IncompleteProfile;

type Actions = {};

export const userSlice = createSlice<UserState, Actions>({
  name: "user",
  initialState: null,
  reducers: {}
});

export default userSlice.actions;
