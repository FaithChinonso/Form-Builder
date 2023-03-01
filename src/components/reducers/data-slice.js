import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  forms: [],
  form: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addDataReducer: (state, action) => {
      state.forms = [
        ...state.forms,
        { name: action.payload.name, form: action.payload.form },
      ];
    },
    addFormReducer: (state, action) => {
      state.form = action.payload;
    },
  },
});
export const { addDataReducer, addFormReducer } = dataSlice.actions;

export default dataSlice.reducer;
