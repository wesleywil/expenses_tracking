import { createSlice } from "@reduxjs/toolkit";

export interface UtilState {
  hide_form: boolean;
  hide_delete_msg: boolean;
}

const initialState: UtilState = {
  hide_form: true,
  hide_delete_msg: true,
};

export const utilSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    handleHideForm: (state) => {
      state.hide_form = !state.hide_form;
    },
    handleHideDeleteMsg: (state) => {
      state.hide_delete_msg = !state.hide_delete_msg;
    },
  },
});

export const { handleHideForm, handleHideDeleteMsg } = utilSlice.actions;

export default utilSlice.reducer;
