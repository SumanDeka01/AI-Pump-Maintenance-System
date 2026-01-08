from fastapi.middleware.cors import CORSMiddleware
# app tut kiba issue ase!
from fastapi import FastAPI
from routes.auth import router as auth_router
from routes.pump import router as pump_router
from routes.predict import router as predict_router
from .database import Base, engine
from .models import Pump
from routes.pump import router







app = FastAPI(title="IOCL Pump Maintenance Backend (Team Xenix)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)

app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(pump_router, prefix="/pumps", tags=["Pumps"])
app.include_router(predict_router, prefix="/predict", tags=["Prediction"])
app.include_router(pump_router, prefix="/pumps", tags=["Pumps"])

@app.get("/")
def root():
    return {"status": "Backend running successfully"}
