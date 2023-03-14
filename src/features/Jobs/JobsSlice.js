import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteJobs, editJobs, getJobs, postJobs } from "./JobsApi";

const initialState = {
  jobData: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const jobs = await getJobs();
  return jobs;
});
export const createJobs = createAsyncThunk("jobs/createJobs", async (data) => {
  const jobs = await postJobs(data);
  return jobs;
});
export const changeJobs = createAsyncThunk(
  "jobs/changeJobs",
  async ({ id, data }) => {
    const jobs = await editJobs(id, data);
    return jobs;
  }
);
export const removeJobs = createAsyncThunk("jobs/removeJobs", async (id) => {
  const jobs = await deleteJobs(id);
  return jobs;
});

// create slice
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobData = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobData = [];
      })
      .addCase(createJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobData.push(action.payload);
      })
      .addCase(createJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(changeJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(changeJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.jobData.indexOf(
          (index) => index.id === action.payload.id
        );
        state.jobData[indexToUpdate] = action.payload;
      })
      .addCase(changeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(removeJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobData = state.jobData.filter(data => data.id !== action.meta.arg)
      })
      .addCase(removeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
