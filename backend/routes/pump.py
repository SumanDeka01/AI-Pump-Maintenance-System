from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import Pump
from pydantic import BaseModel

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic schema (simple for now)
class PumpCreate(BaseModel):
    pump_name: str
    temperature: float
    pressure: float
    status: str

@router.post("/")
def add_pump(pump: PumpCreate, db: Session = Depends(get_db)):
    db_pump = Pump(
        pump_name=pump.pump_name,
        temperature=pump.temperature,
        pressure=pump.pressure,
        status=pump.status
    )
    db.add(db_pump)
    db.commit()
    db.refresh(db_pump)
    return db_pump

@router.get("/")
def get_pumps(db: Session = Depends(get_db)):
    return db.query(Pump).all()
