import joblib
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "pump_failure_model.pkl")

model = joblib.load(MODEL_PATH)


def predict_health(temperature: float, vibration: float, pressure: float):
    X = [[temperature, vibration, pressure]]
    probability = model.predict_proba(X)[0][1]

    return {
        "failure_probability": round(probability, 3),
        "status": "FAILURE RISK" if probability > 0.6 else "NORMAL"
    }
