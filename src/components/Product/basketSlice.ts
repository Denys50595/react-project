import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductI } from "./productInterface";

const initialState: ProductI[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductI>) => {
      state.push({ ...action.payload, showDeleteBtn: true });
    },
    removeItem: (state, { payload }) => {
      const index = state.indexOf(payload);
      state.splice(index, 1);
    },
  },
  selectors: {
    selectBasket: (state) => state,
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export const { selectBasket } = basketSlice.selectors;
export default basketSlice.reducer;
