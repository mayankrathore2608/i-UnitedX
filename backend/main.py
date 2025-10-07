import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, RedirectResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.config import settings
from routers import symptoms
from database.database import create_tables

app = FastAPI(docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"]
)

frontend_path = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")

app.include_router(symptoms.router, prefix=settings.API_PREFIX)

app.mount("/", StaticFiles(directory=frontend_path, html=True), name="frontend")


@app.get("/")
async def serve_frontend():
    return FileResponse(os.path.join(frontend_path, "index.html"))
    # return RedirectResponse(url="https://mayankrathore2608.app.n8n.cloud/form/8aaf5599-3164-411c-b29a-42cdb3039282")


create_tables()
