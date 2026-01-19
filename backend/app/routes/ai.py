from fastapi import APIRouter
from app.services.ai_engine import generate_post


router = APIRouter()


@router.post("/generate")
def generate(brand: str, platform: str, goal: str):
    return {"content": generate_post(brand, platform, goal)}
