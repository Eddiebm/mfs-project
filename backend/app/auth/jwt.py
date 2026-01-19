import jwt
from datetime import datetime, timedelta
from app.config import JWT_SECRET, JWT_ALGORITHM


def create_token(data: dict, minutes: int = 1440):
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=minutes)
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def decode_token(token: str):
    return jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
