import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  show: boolean;
}

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: true,
  } as ModalState,
  reducers: {
    toggleVisible: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggleVisible } = modalSlice.actions;
export default modalSlice.reducer;
