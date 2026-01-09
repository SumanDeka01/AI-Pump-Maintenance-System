from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.auth import router as auth_router
from routes.pump import router as pump_router
from routes.predict import router as predict_router
from routes.prediction import router as prediction_router


from .database import Base, engine

app = FastAPI(title="IOCL Pump Maintenance Backend (Team Xenix)")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create DB tables
Base.metadata.create_all(bind=engine)

# Routers
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(pump_router, prefix="/pumps", tags=["Pumps"])
app.include_router(predict_router, tags=["Prediction"])
app.include_router(prediction_router)



@app.get("/")
def root():
    return {"status": "Backend running successfully"}
