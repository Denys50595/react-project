import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getOrder, getOrderDetails } from "./OrderSlice";

const OrderDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { response, isLoading } = useAppSelector(getOrder);

  useEffect(() => {
    dispatch(getOrderDetails(id));
  }, [dispatch]);

  return (
    <div className="menu-container">
      <>
        {isLoading && <p>Loading...</p>}
        {response && (
          <div>
            Customer name: {response?.customer}
            Status: {response?.status}
            Price: {response?.orderPrice}
            Estimated delivery: {response?.estimatedDelivery}
          </div>
        )}
      </>
    </div>
  );
};

export default OrderDetails;
