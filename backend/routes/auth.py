from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import jwt
import datetime

router = APIRouter()

SECRET_KEY = "secret123"

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginRequest):
    if data.username == "admin" and data.password == "admin":
        token = jwt.encode(
            {
                "sub": data.username,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
            },
            SECRET_KEY,
            algorithm="HS256"
        )
        return {"access_token": token, "token_type": "bearer"}

    raise HTTPException(status_code=401, detail="Invalid credentials")
