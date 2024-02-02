import React, { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  calculateTotal,
  resetItem,
  selectBasket,
} from "../../components/Product/basketSlice";
import BasketItem from "../../components/Product/BasketItem";
import Button from "../../components/Buttons/Button";
import { Link, useNavigate } from "react-router-dom";

const Basket: React.FC = () => {
  const data = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleTotal = useCallback(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  const createNewOrder = () => {
    handleTotal();
    navigate("/main/order/new");
  };

  return (
    <>
      {data && (
        <>
          <div className="menu-container">
            <Link to="/main">
              <div className="arrow left"></div>
              Back to menu
            </Link>
            {data.items.length == 0 && <p>Basket is empty</p>}
            {data.items.map((item, i) => (
              <BasketItem item={item} key={i} />
            ))}
          </div>
          {data.items.length > 0 && (
            <Button
              btnClick={() => {
                dispatch(resetItem());
              }}
              title="Clear basket"
            />
          )}
          <Button btnClick={() => createNewOrder()} title="Create order" />
        </>
      )}
    </>
  );
};

export default Basket;
