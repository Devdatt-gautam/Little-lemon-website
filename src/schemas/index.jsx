import * as Yup from "yup";

export const bookingSchema = Yup.object({
  name: Yup.string().min(3).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  guests: Yup.number()
    .positive()
    .integer()
    .required("Please enter number of diners"),
});
