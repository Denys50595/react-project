import { useEffect } from "react";
import Product from "../../components/Product/Product";
import "./Main.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMenuItems, selectMenu } from "./menuSlice";

const Menu = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, isError } = useAppSelector(selectMenu);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {items && (
        <>
          <div className="menu-container">
            {items.map((item, i) => (
              <Product item={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
