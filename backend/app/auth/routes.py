from fastapi import APIRouter
from app.auth.jwt import create_token


router = APIRouter()


@router.post("/login")
def login(email: str):
    token = create_token({"sub": email, "role": "owner"})
    return {"access_token": token}
