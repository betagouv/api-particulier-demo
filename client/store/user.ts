import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IncompleteProfile } from "../profile";

export const userSlice = createSlice({
  name: "user",
  initialState: null as IncompleteProfile,
  reducers: {
    setReferenceEarnings: {
      reducer: (state: IncompleteProfile, action: PayloadAction<number>) => ({
        ...state,
        earnings: action.payload
      }),
      prepare: (earnings: number) => ({ payload: earnings })
    }
  }
});

export default userSlice.actions;
