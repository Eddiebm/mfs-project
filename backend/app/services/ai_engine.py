import openai
from app.config import OPENAI_API_KEY


openai.api_key = OPENAI_API_KEY


def generate_post(brand: str, platform: str, goal: str):
    prompt = f"""
    Write a {platform} post for {brand}.
    Goal: {goal}
    Tone: skeptical, direct, no hype.
    End with a soft CTA.
    """

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        max_tokens=200,
        temperature=0.7,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
