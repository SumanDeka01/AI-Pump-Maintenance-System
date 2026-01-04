from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String)

class Pump(Base):
    __tablename__ = "pumps"
    id = Column(Integer, primary_key=True)
    temperature = Column(Float)
    vibration = Column(Float)
    pressure = Column(Float)
    health_status = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
