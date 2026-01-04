from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.crud import get_pumps   # ✅ THIS WAS MISSING
from app.schemas import PumpOut

router = APIRouter()

@router.get("/", response_model=list[PumpOut])
def read_pumps(db: Session = Depends(get_db)):
    return get_pumps(db)
