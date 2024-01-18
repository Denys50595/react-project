import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeItem,
  resetItem,
  selectBasket,
} from "../../components/Product/basketSlice";
import BasketItem from "../../components/Product/BasketItem";
import Button from "../../components/Buttons/Button";
import { Link } from "react-router-dom";

const Basket: React.FC = () => {
  const data = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();

  return (
    <>
      {data && (
        <>
          <div className="menu-container">
            <Link to="/main">
              <div className="arrow left"></div>
              Back to menu
            </Link>
            {data.length == 0 && <p>Basket is empty</p>}
            {data.map((item, i) => (
              <BasketItem item={item} key={i} />
            ))}
          </div>
          {data.length > 0 && (
            <Button
              btnClick={() => {
                dispatch(resetItem());
              }}
              title="Clear basket"
            />
          )}
        </>
      )}
    </>
  );
};

export default Basket;
