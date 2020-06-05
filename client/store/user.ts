import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullProfile } from "../profile";

export const userSlice = createSlice({
  name: "user",
  initialState: null as FullProfile,
  reducers: {
    setTelepoints: {
      reducer: (state: FullProfile, action: PayloadAction<number>) => ({
        ...state,
        telepoints: action.payload,
      }),
      prepare: (telepoints: number) => ({ payload: telepoints }),
    },
    setMonCompteFormation: {
      reducer: (state: FullProfile, action: PayloadAction<number>) => ({
        ...state,
        monCompteFormation: action.payload,
      }),
      prepare: (monCompteFormation: number) => ({
        payload: monCompteFormation,
      }),
    },
  },
});

export default userSlice.actions;
