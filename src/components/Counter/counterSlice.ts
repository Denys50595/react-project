import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  selectors: {
    selectCount: (counter) => counter.value,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { selectCount } = counterSlice.selectors;
export default counterSlice.reducer;
