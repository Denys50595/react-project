import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import basketReducer from "../components/Product/basketSlice";
import menuReducer from "../pages/Main/menuSlice";
import orderReducer from "../pages/Main/OrderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    menu: menuReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
