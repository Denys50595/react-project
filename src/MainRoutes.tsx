import { Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./pages/Auth/AuthLayout";
import MainLayout from "./pages/Main/MainLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { lazy } from "react";

const MenuLazy = lazy(() => import("./pages/Main/Menu"));
const BasketLazy = lazy(() => import("./pages/Main/Basket"));
const OrderFormLazy = lazy(() => import("./pages/Main/OrderForm"));
const OrderDetailsLazy = lazy(() => import("./pages/Main/OrderDetails"));

export enum RoutesPath {
  Empty = "",
  Start = "/",
  Auth = "auth",
  Login = "login",
  SignUp = "sign-up",
  Main = "main",
  Menu = "menu",
  Basket = "basket",
  OrderForm = "order/new",
  OrderDetails = "order/:id",
  NotFound = "*",
}

export const MainRoutes: Array<{
  path: string;
  component: any;
  children?: Array<any>;
}> = [
  {
    path: RoutesPath.Start,
    component: <Navigate to="/auth" replace={true} />,
  },
  {
    path: RoutesPath.Auth,
    component: <AuthLayout />,
    children: [
      {
        path: RoutesPath.Empty,
        component: <Navigate to="login" replace={true} />,
      },
      {
        path: RoutesPath.Login,
        component: <Login />,
      },
      {
        path: RoutesPath.SignUp,
        component: <SignUp />,
      },
    ],
  },
  {
    path: RoutesPath.Main,
    component: <MainLayout />,
    children: [
      {
        path: RoutesPath.Empty,
        component: <Navigate to="menu" replace={true} />,
      },
      {
        path: RoutesPath.Menu,
        component: <MenuLazy />,
      },
      {
        path: RoutesPath.Basket,
        component: <BasketLazy />,
      },
      {
        path: RoutesPath.OrderForm,
        component: <OrderFormLazy />,
      },
      {
        path: RoutesPath.OrderDetails,
        component: <OrderDetailsLazy />,
      },
    ],
  },
  {
    path: RoutesPath.NotFound,
    component: <PageNotFound />,
  },
];
