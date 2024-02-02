import { Controller, useForm } from "react-hook-form";
import Input from "../../components/FormElement/Input";
import { useContext } from "react";
import { UserContext, UserContextType } from "../../contexts/UserContext";
import Checkbox from "../../components/FormElement/Checkbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { newOrderSchema } from "../../components/FormElement/validationScheme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addPriority,
  selectBasket,
} from "../../components/Product/basketSlice";

const OrderForm = () => {
  const orders = useAppSelector(selectBasket);
  const dispatch = useAppDispatch();
  const { userName } = useContext(UserContext) as UserContextType;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userName,
      phone: "",
      address: "",
      priority: false,
    },
    resolver: yupResolver(newOrderSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
  };

  const handlePriority = (ev: any) => {
    dispatch(addPriority(ev.target.checked));
  };

  return (
    <div className="menu-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue={userName}
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
              onChange={(ev: any) => handlePriority(ev)}
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
