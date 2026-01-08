from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# ---------- AUTH ----------
class UserCreate(BaseModel):
    username: str
    password: str


class UserOut(BaseModel):
    id: int
    username: str

    class Config:
        from_attributes = True


# ---------- PUMP ----------
class PumpBase(BaseModel):
    name: str
    location: str
    temperature: float
    vibration: float
    pressure: float


class PumpCreate(PumpBase):
    pass


# ✅ THIS WAS MISSING
class PumpOut(PumpBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True


# ---------- AI ----------
class PredictionRequest(BaseModel):
    temperature: float
    vibration: float
    pressure: float


class PredictionResponse(BaseModel):
    failure_probability: float
    status: str
    
# from pydantic import BaseModel

class PumpCreate(BaseModel):
    pump_name: str
    temperature: float
    pressure: float
    status: str

