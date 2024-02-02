import { useParams } from "react-router-dom";
import { API_URL } from "../../env";
import useFetch from "../../hooks/useFetch";

const OrderDetails = () => {
  const { id } = useParams();
  const url = `${API_URL}/order/${id}`;
  const { data, loading, err } = useFetch(url);

  return (
    <div className="menu-container">
      Customer name: {data?.customer}
      Status: {data?.status}
      Price: {data?.orderPrice}
      Estimated delivery: {data?.estimatedDelivery}
    </div>
  );
};

export default OrderDetails;
