import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Suspense } from "react";

const MainLayout = () => {
  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export default MainLayout;
