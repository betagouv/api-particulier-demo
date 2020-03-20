import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { userSlice } from "./user";

const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState: false,
  reducers: {}
});

const rootReducer = combineReducers({
  user: userSlice.reducer,
  authenticated: authenticatedSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
