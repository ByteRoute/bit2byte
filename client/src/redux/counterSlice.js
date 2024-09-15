import { createSlice } from "@reduxjs/toolkit";

// Initial State
const initialState = {
  value: 0,
};

// create slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < 8) state.value += 1;
    },
    decrement: (state) => {
      if (state.value > -4) state.value -= 1;
    },
  },
});

// export both the actions the slice performs
export const { increment, decrement } = counterSlice.actions;

//Export reducer
export default counterSlice.reducer;
