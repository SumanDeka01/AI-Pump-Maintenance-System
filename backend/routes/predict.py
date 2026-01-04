from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas import PumpCreate
from app.database import SessionLocal
from app.ai import predict_health
from app.crud import create_pump

router = APIRouter(prefix="/predict")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def predict(pump: PumpCreate, db: Session = Depends(get_db)):
    health = predict_health(
        pump.temperature,
        pump.vibration,
        pump.pressure
    )
    saved = create_pump(db, pump, health)
    return saved
