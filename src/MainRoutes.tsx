import { Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

export enum RoutesPath {
  Start = "/",
  Auth = "auth",
  Empty = "",
  Login = "login",
  SignUp = "sign-up",
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
    path: RoutesPath.NotFound,
    component: <PageNotFound />,
  },
];
