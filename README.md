# REWB Autopilot

AI-powered social media automation platform.

## Quick Start

1. Copy `.env.example` to `.env` and fill in your keys
2. Run: `docker-compose up --build`
3. API available at: http://localhost:8000
4. Docs at: http://localhost:8000/docs

## API Endpoints

- `POST /auth/login` - Get JWT token
- `POST /ai/generate` - Generate AI content
- `POST /campaigns/` - Create campaign (auth required)
- `POST /leads/capture` - Capture lead
