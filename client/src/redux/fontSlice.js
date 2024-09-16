// fontSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { increment, decrement } from "./counterSlice";

const fontSlice = createSlice({
  name: "font",
  initialState: {
    fontSizeClass: "text-xl",
  },
  reducers: {
    setFontClass: (state, action) => {
      state.fontSizeClass = action.payload;
    },
  },
});

export const { setFontClass } = fontSlice.actions;
export default fontSlice.reducer;
