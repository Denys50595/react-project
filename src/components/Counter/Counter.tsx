import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { decrement, increment, selectCount } from "./counterSlice";

const Counter: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div>
      <button onClick={() => dispatch(increment())} type="button">
        +
      </button>
      Counter: {count}
      <button onClick={() => dispatch(decrement())} type="button">
        -
      </button>
    </div>
  );
};

export default Counter;
