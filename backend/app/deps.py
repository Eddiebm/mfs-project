from fastapi import Header, HTTPException
from app.auth.jwt import decode_token


def require_auth(authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        return decode_token(token)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
