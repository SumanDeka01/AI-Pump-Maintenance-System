import api from "./api";

export type Pump = {
  id: number;
  pump_name: string;
  temperature: number;
  pressure: number;
  status: string;
};

export const getPumps = async (): Promise<Pump[]> => {
  try {
    const res = await api.get("/pumps");
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching pumps:", error);
    return [];
  }
};
