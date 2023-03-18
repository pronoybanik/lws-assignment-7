import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filterSlice/filterSlice";
import JobsSlice from "../features/Jobs/JobsSlice";

export const store = configureStore({
  reducer: {
    jobs: JobsSlice,
    filter: filterSlice,
  },
});
