import { api } from "./api";

export const getPumps = async () => {
  const res = await api.get("/pumps");
  return res.data;
};
