import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../../components/Product/basketSlice";
import Product from "../../components/Product/Product";

const Basket: React.FC = () => {
  const data = useAppSelector(selectBasket);

  return (
    <>
      {data.length == 0 && <p>Basket is empty</p>}
      {data && (
        <>
          <div className="menu-container">
            {data.map((item, i) => (
              <Product item={item} key={i} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Basket;
