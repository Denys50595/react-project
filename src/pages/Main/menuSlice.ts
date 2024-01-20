import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../env";

export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async () => {
    const response = await fetch(`${API_URL}/menu`);
    const result: { status: string; data: [] } = await response.json();
    return result.data;
  }
);

export type menuSlice = {
  items: [];
  isLoading: boolean;
  isError: boolean;
};

const initialState: menuSlice = {
  items: [],
  isLoading: false,
  isError: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuItems.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchMenuItems.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMenuItems.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
  selectors: {
    selectMenu: (state) => state,
  },
});

export const { selectMenu } = menuSlice.selectors;
export default menuSlice.reducer;
