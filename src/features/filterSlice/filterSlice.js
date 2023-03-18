import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterItem: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { filterItem } = filterSlice.actions;
