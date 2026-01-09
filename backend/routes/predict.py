from fastapi import APIRouter
import pickle
import numpy as np

router = APIRouter()

# Load trained model
with open("app/pump_failure_model.pkl", "rb") as f:
    model = pickle.load(f)

@router.post("/predict")
def predict_pump_failure(
    temperature: float,
    pressure: float,
    vibration: float,
    flow_rate: float,
    rpm: float
):
    input_data = np.array([[temperature, pressure, vibration, flow_rate, rpm]])
    prediction = model.predict(input_data)[0]

    return {
        "prediction": int(prediction),
        "status": "FAILURE" if prediction == 1 else "HEALTHY"
    }
