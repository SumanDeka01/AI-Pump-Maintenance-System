from sqlalchemy.orm import Session
from .models import Pump

def create_pump(db: Session, pump_data, health_status):
    pump = Pump(
        temperature=pump_data.temperature,
        vibration=pump_data.vibration,
        pressure=pump_data.pressure,
        health_status=health_status
    )
    db.add(pump)
    db.commit()
    db.refresh(pump)
    return pump

def get_pumps(db: Session):
    return db.query(Pump).all()
