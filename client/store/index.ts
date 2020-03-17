import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

export const createStore = initialState =>
  configureStore({
    reducer: rootReducer
  });

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root-reducer", () => {
    const newRootReducer = require("./root-reducer").default;
  });
}
