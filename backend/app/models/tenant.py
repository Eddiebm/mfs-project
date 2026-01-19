from sqlalchemy import Column, Integer, String
from app.models.base import Base


class Tenant(Base):
    __tablename__ = "tenants"
    id = Column(Integer, primary_key=True)
    brand_name = Column(String)
    domain = Column(String)
