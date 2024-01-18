import { memo, useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";
import Button from "../Buttons/Button";
import { decreaseQuantity, increaseQuantity, removeItem } from "./basketSlice";
import { IProduct } from "./product.interface";

const BasketItem = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();

  const handleDecrease = useCallback(() => {
    dispatch(decreaseQuantity(item.id));
  }, [item.id]);

  const handleIncrease = useCallback(() => {
    dispatch(increaseQuantity(item.id));
  }, [item.id]);

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="product-container">
      {item.quantity}* {item.name}
      &euro;{item.unitPrice * item.quantity}
      <Button btnClick={handleDecrease} title="-" />
      <div>{item.quantity}</div>
      <Button btnClick={handleIncrease} title="+" />
      <Button btnClick={handleRemove} title="Delete" />
    </div>
  );
};

export default memo(BasketItem);
