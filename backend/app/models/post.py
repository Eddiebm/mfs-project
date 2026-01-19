from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.models.base import Base


class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True)
    campaign_id = Column(Integer, ForeignKey("campaigns.id"))
    platform = Column(String)
    content = Column(String)
    scheduled_at = Column(DateTime)
    status = Column(String, default="pending")
