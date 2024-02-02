import * as yup from "yup";

export const newOrderSchema = yup
  .object({
    customer: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
    priority: yup.boolean().required(),
  })
  .required();
