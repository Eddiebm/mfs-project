import os


DATABASE_URL = os.getenv("DATABASE_URL")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
JWT_SECRET = os.getenv("JWT_SECRET", "change-me")
JWT_ALGORITHM = "HS256"
