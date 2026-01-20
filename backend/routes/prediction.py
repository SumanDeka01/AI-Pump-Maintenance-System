from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)

# -------------------- INPUT SCHEMA --------------------
class PumpData(BaseModel):
    temperature: float
    pressure: float


# -------------------- PREDICTION ENDPOINT --------------------
@router.post("/failure")
def predict_failure(data: PumpData):
    temp = data.temperature
    pressure = data.pressure


# This are the hardcoded data for prediction logic
# Another logic can be implemented to load the trained model and use it for prediction



    # 🔹 Base failure probability
    probability = 0.10

    # 🔹 Gradual risk increase (more realistic than fixed rules)
    if temp > 50:
        probability += (temp - 50) * 0.01

    if pressure > 25:
        probability += (pressure - 25) * 0.015

    # 🔹 Cap probability to avoid 100%
    probability = min(probability, 0.95)

    # 🔹 Risk classification
    if probability >= 0.75:
        risk_level = "HIGH"
        message = "Pump likely to fail within 6–8 hours"
        action = "Schedule immediate maintenance"

    elif probability >= 0.40:
        risk_level = "MEDIUM"
        message = "Pump showing early signs of degradation"
        action = "Monitor closely"

    else:
        risk_level = "LOW"
        message = "Pump operating normally"
        action = "No action required"

    return {
        "risk_level": risk_level,
        "failure_probability": round(probability, 2),
        "message": message,
        "recommended_action": action,
    }
