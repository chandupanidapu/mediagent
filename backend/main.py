import os
from dotenv import load_dotenv
from google import genai

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

from pydantic import BaseModel

class ChatRequest(BaseModel):
    message: str
app = FastAPI(
    title="MediAgent API",
    version="1.0.0",
    description="Open-source AI Clinical & Medical Research Assistant"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to MediAgent",
        "status": "Backend is running successfully!"
    }
@app.post("/chat")
def chat(request: ChatRequest):
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=request.message,
    )

    return {
        "reply": response.text
    }