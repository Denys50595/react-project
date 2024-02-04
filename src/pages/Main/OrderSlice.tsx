import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../env";
import { IProduct } from "../../components/Product/product.interface";

interface IOrder {
  address: string;
  cart: IProduct[];
  customer: string;
  phone: string;
  position: string;
  priority: boolean;
}

export const sendOrderItems = createAsyncThunk(
  "menu/sendOrderItems",
  async (body: IOrder) => {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    const response = await fetch(`${API_URL}/order`, options);
    const result: { status: string; data: [] } = await response.json();
    return result;
  }
);

export const getOrderDetails = createAsyncThunk(
  "menu/getOrderDetails",
  async (id: string | undefined) => {
    const response = await fetch(`${API_URL}/order/${id}`);
    const result: { status: string; data: [] } = await response.json();
    return result;
  }
);

export type orderSlice = {
  response: any;
  isLoading: boolean;
  status?: string;
};

const initialState: orderSlice = {
  response: null,
  isLoading: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendOrderItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendOrderItems.fulfilled, (state, { payload }) => {
      state.response = payload;
      state.status = payload.status;
      state.isLoading = false;
    });
    builder.addCase(sendOrderItems.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getOrderDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOrderDetails.fulfilled, (state, { payload }) => {
      state.response = payload.data;
      state.status = payload.status;
      state.isLoading = false;
    });
    builder.addCase(getOrderDetails.rejected, (state) => {
      state.isLoading = false;
    });
  },
  selectors: {
    sendOrder: (state) => state,
    getOrder: (state) => state,
  },
});

export const { sendOrder, getOrder } = orderSlice.selectors;
export default orderSlice.reducer;
