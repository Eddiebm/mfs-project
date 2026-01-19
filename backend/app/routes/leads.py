from fastapi import APIRouter


router = APIRouter()


@router.post("/capture")
def capture(email: str, source: str):
    return {"captured": email}
