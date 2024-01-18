import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./product.interface";

const initialState: IProduct[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const item = state.find((value) => value.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, { payload }) =>
      (state = state.filter((value) => value.id !== payload)),
    increaseQuantity: (state, { payload }) => {
      const item = state.find((value) => value.id === payload);
      if (item) {
        item.quantity = item.quantity + 1;
      }
    },
    decreaseQuantity: (state, { payload }) => {
      const item = state.find((value) => value.id === payload);

      if (item && item?.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        return (state = state.filter((value) => value.id !== payload));
      }
    },
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
