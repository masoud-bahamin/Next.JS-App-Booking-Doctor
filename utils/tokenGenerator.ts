import { sign, verify } from "jsonwebtoken";

const KEY = process.env.JWT_KEY !;
export const tokenGenarator = (data: string | {}) => {
  const token = sign(data, KEY, { expiresIn: "72h" });
  return token;
};

export const exportToken = (data: string) => {
  const info = verify(data, KEY);
  return info;
};
