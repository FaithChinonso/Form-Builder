import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  inputs: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: builder => {
    builder.addCase((state, action) => {
      state.loading = false;
      state.trips = action.payload.data;
    });
  },
});
export const { clearMessage, clearError } = tripSlice.actions;

export default tripSlice.reducer;
