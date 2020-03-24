import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IncompleteProfile, FamilyComposition } from "../profile";

export const userSlice = createSlice({
  name: "user",
  initialState: null as IncompleteProfile,
  reducers: {
    setReferenceEarnings: {
      reducer: (state: IncompleteProfile, action: PayloadAction<number>) => ({
        ...state,
        earnings: action.payload,
        earningsConfirmed: false
      }),
      prepare: (earnings: number) => ({ payload: earnings })
    },
    confirmReferenceEarnings: (state: IncompleteProfile) => ({
      earningsConfirmed: true
    }),
    setEarningsProofUploaded: (state: IncompleteProfile) => ({
      ...state,
      earningsProofUploaded: true
    }),
    setFamilyComposition: {
      reducer: (
        state: IncompleteProfile,
        action: PayloadAction<FamilyComposition>
      ) => ({
        ...state,
        familyComposition: action.payload,
        familyCompositionConfirmed: false
      }),
      prepare: (familyComposition: FamilyComposition) => ({
        payload: familyComposition
      })
    },
    confirmFamilyComposition: (state: IncompleteProfile) => ({
      ...state,
      familyCompositionConfirmed: true
    }),
    setFamilyCompositionProofUploaded: (state: IncompleteProfile) => ({
      ...state,
      familyCompositionProofUploaded: true
    })
  }
});

export default userSlice.actions;
