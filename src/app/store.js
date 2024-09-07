import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    apiData: rootReducer,
  },
  devTools: true,
});

export default store;
