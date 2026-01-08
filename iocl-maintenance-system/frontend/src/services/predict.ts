import api from "./api";

export type FailurePrediction = {
  failure: boolean;
  probability?: number;
};

export type PumpInput = {
  temperature: number;
  pressure: number;
};

export const predictFailure = async (
  pump: PumpInput
): Promise<FailurePrediction | null> => {
  try {
    const res = await api.post("/predict", {
      temperature: pump.temperature,
      pressure: pump.pressure,
    });

    return res.data;
  } catch (error) {
    console.error("Error predicting pump failure:", error);
    return null;
  }
};
