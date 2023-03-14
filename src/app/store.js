import { configureStore } from "@reduxjs/toolkit";
import JobsSlice from "../features/Jobs/JobsSlice";

export const store = configureStore({
  reducer: {
    jobs: JobsSlice,
  },
});
