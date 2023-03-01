import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  modal: false,
  modalContent: null,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModalAndSetContent(state, action) {
      return {
        ...state,
        modal: true,
        modalContent: action.payload.modalContent,
      };
    },
    closeModal(state) {
      return { ...state, modal: false };
    },
  },
});
export const { openModalAndSetContent, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
