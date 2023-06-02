import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hide_form: boolean;
}

const initialState: UtilState = {
  hide_form: true,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    handleHideForm: (state) => {
      state.hide_form = !state.hide_form;
    },
  },
});

export const { handleHideForm } = utilSlice.actions;

export default utilSlice.reducer;
