from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Pump(Base):
    __tablename__ = "pumps"

    id = Column(Integer, primary_key=True)
    pump_name = Column(String)
    temperature = Column(Float)
    pressure = Column(Float)
    status = Column(String)
