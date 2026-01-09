type PredictPayload = {
  temperature: number;
  pressure: number;
};

export const predictFailure = async (payload: PredictPayload) => {
  const response = await fetch(
    "http://127.0.0.1:8000/predict/failure",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error("Prediction failed");
  }

  // IMPORTANT: return backend response AS-IS
  const data = await response.json();
  return data;
};
