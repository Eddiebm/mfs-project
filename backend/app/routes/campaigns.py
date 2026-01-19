from fastapi import APIRouter
from app.deps import require_auth
from fastapi import Depends


router = APIRouter()


@router.post("/")
def create_campaign(objective: str, user=Depends(require_auth)):
    return {"status": "created", "objective": objective}
