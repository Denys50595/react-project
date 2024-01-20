import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter/counterSlice";
import basketReducer from "../components/Product/basketSlice";
import menuReducer from "../pages/Main/menuSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
