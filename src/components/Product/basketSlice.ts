import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./product.interface";

const initialState: IProduct[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.find((product) => product.id === payload.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.push({ ...payload, quantity: 1 });
      }
    },
    removeItem: (state, { payload }) =>
      (state = state.filter((product) => product.id !== payload)),
    increaseQuantity: (state, { payload }) =>
      (state = state.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )),
    decreaseQuantity: (state, { payload }) =>
      (state = state.map((product) =>
        product.id === payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )),
    resetItem: (state) => (state = []),
  },
  selectors: {
    selectBasket: (state) => state,
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  resetItem,
} = basketSlice.actions;
export const { selectBasket } = basketSlice.selectors;
export default basketSlice.reducer;
