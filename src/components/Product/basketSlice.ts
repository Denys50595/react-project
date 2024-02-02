import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./product.interface";

export type BasketSlice = {
  items: IProduct[];
  total: number;
};

const initialState: BasketSlice = {
  items: [],
  total: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const item = state.items.find((product) => product.id === payload.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((product) => product.id !== payload);
    },
    increaseQuantity: (state, { payload }) => {
      state.items = state.items.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decreaseQuantity: (state, { payload }) => {
      state.items = state.items.map((product) =>
        product.id === payload && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (acc, currentItem) =>
          acc + currentItem.quantity * currentItem.unitPrice,
        0
      );
    },
    addPriority: (state, { payload }) => {
      if (payload) {
        state.total = state.total + 8;
      } else {
        state.total = state.total - 8;
      }
    },
    resetItem: () => initialState,
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
  calculateTotal,
  addPriority,
} = basketSlice.actions;
export const { selectBasket } = basketSlice.selectors;
export default basketSlice.reducer;
