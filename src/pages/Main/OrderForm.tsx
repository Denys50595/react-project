import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/FormElement/Input";
import { ChangeEvent, useContext } from "react";
import { UserContext, UserContextType } from "../../contexts/UserContext";
import Checkbox from "../../components/FormElement/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { newOrderSchema } from "../../components/FormElement/validationScheme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addPriority,
  selectBasket,
} from "../../components/Product/basketSlice";
import { useNavigate } from "react-router-dom";
import { sendOrderItems } from "./OrderSlice";

interface IOrderForm {
  address: string;
  customer: string;
  phone: string;
  priority: boolean;
}

const OrderForm: React.FC = () => {
  const orders = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userName } = useContext(UserContext) as UserContextType;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customer: userName,
      phone: "",
      address: "",
      priority: false,
    },
    resolver: yupResolver(newOrderSchema),
  });

  const onSubmit: SubmitHandler<IOrderForm> = (data) => {
    const body = Object.assign(data, { cart: orders.items, position: "" });
    dispatch(sendOrderItems(body)).then((res) => {
      const serverRes = res.payload as {
        status: string;
        message: string;
        data: { id: string };
      };
      if (serverRes.status === "success") {
        const id = serverRes.data.id;
        navigate(`/main/order/${id}`);
      }
    });
  };

  const handlePriority = (
    ev:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | undefined
  ) => {
    dispatch(addPriority((ev?.target as HTMLInputElement).checked));
  };

  return (
    <div className="menu-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="customer"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Name"
              placeholder="Enter your name"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="phone"
              label="Phone"
              placeholder="Enter your phone"
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Address"
              placeholder="Enter your address"
            />
          )}
        />
        <Controller
          name="priority"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              onChange={(
                ev:
                  | ChangeEvent<HTMLInputElement>
                  | ChangeEvent<HTMLTextAreaElement>
                  | undefined
              ) => handlePriority(ev)}
              type="checkbox"
              label="Priority"
            />
          )}
        />
        <button type="submit">Order now for &euro; {orders.total}</button>
      </form>
    </div>
  );
};

export default OrderForm;
