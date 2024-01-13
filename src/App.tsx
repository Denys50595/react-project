import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainRoutes } from "./MainRoutes";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        {MainRoutes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path}>
            {route?.children?.map((child) => (
              <Route
                path={child.path}
                element={child.component}
                key={route.path}
              ></Route>
            ))}
          </Route>
        ))}
      </Routes>
    </UserProvider>
  );
};

export default App;
