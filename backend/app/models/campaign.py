from sqlalchemy import Column, Integer, String, ForeignKey
from app.models.base import Base


class Campaign(Base):
    __tablename__ = "campaigns"
    id = Column(Integer, primary_key=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"))
    objective = Column(String)
    status = Column(String, default="active")
