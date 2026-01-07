import { api } from "./api";

export const predictFailure = async (pump: any) => {
  const res = await api.post("/predict", {
    temperature: pump.temperature,
    pressure: pump.pressure,
  });
  return res.data;
};
