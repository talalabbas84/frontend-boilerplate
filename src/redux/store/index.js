import { configureStore } from "@reduxjs/toolkit";
import user from "../user";

const store = configureStore({
  reducer: {
    user: user,
  },
});

export default store;
