from app.database import SessionLocal
from app.models import Pump

db = SessionLocal()

pump_data = [
    {"temperature": 68, "pressure": 32, "status": "Running"},
    {"temperature": 70, "pressure": 34, "status": "Running"},
    {"temperature": 72, "pressure": 35, "status": "Running"},
    {"temperature": 75, "pressure": 38, "status": "Running"},
    {"temperature": 78, "pressure": 40, "status": "Running"},

    {"temperature": 80, "pressure": 42, "status": "Maintenance"},
    {"temperature": 82, "pressure": 45, "status": "Maintenance"},
    {"temperature": 83, "pressure": 47, "status": "Maintenance"},
    {"temperature": 84, "pressure": 48, "status": "Maintenance"},
    {"temperature": 85, "pressure": 49, "status": "Maintenance"},

    {"temperature": 86, "pressure": 50, "status": "Failure"},
    {"temperature": 88, "pressure": 55, "status": "Failure"},
    {"temperature": 90, "pressure": 60, "status": "Failure"},
    {"temperature": 92, "pressure": 62, "status": "Running"},
    {"temperature": 94, "pressure": 65, "status": "Running"},

    {"temperature": 74, "pressure": 36, "status": "Running"},
    {"temperature": 76, "pressure": 39, "status": "Running"},
    {"temperature": 79, "pressure": 41, "status": "Running"},
    {"temperature": 81, "pressure": 43, "status": "Maintenance"},
    {"temperature": 87, "pressure": 52, "status": "Running"},
]



for pump in pump_data:
    db.add(Pump(**pump))

db.commit()
db.close()

print("✅ 20 pumps inserted into database")
