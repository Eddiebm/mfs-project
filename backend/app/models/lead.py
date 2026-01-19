from sqlalchemy import Column, Integer, String
from app.models.base import Base


class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True)
    email = Column(String)
    source = Column(String)
