import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  inputs: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addDataReducer: {},
  },
});
export const { clearMessage, clearError } = tripSlice.actions;

export default tripSlice.reducer;
