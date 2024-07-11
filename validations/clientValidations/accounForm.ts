import * as yup from "yup";

const updateScema = yup.object({
  location: yup.string().min(3).max(50),
  age: yup.number().min(3).max(130),
  bio: yup.string().min(3).max(850),
  name: yup.string().min(3).max(50),
  phone: yup.string().min(9).max(12),
});

export default updateScema;
