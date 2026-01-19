from fastapi import FastAPI
from app.auth.routes import router as auth_router
from app.routes.ai import router as ai_router
from app.routes.campaigns import router as campaign_router
from app.routes.leads import router as leads_router
from app.models.base import Base
from app.database import engine


Base.metadata.create_all(bind=engine)


app = FastAPI(title="REWB Autopilot API")


app.include_router(auth_router, prefix="/auth")
app.include_router(ai_router, prefix="/ai")
app.include_router(campaign_router, prefix="/campaigns")
app.include_router(leads_router, prefix="/leads")
