import os

from supabase import create_client, Client
from fastapi import Depends, HTTPException, Body, Header
from pydantic import BaseModel
from sqlmodel import Session, select
from app.core import db
from app.models.user import User


# Supabase Setup
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
    raise RuntimeError("Supabase URL and Service Role Key must be set")

class SignupBody(BaseModel):
    email: str  
    password: str

class SupabaseService:
    def __init__(self, url: str, key: str):
        self.client: Client = create_client(url, key)

    def sign_up(self, email: str, password: str):
        response = self.client.auth.sign_up({"email": email, "password": password})
        if "error" in response:
            raise HTTPException(status_code=400, detail=response["error"]["message"])
        return response.user.id
    
    def get_user(self, token: str):
        response = self.client.auth.get_user(token)
        if "error" in response:
            raise HTTPException(status_code=401, detail="Unauthorized")
        return response.user.id

class UserService:
    def __init__(self, supabase_service: SupabaseService):
        self.supabase_service = supabase_service

    def signup(self, db: Session = Depends(db.get_db), creds: SignupBody = Body(...)):
        user_id = self.supabase_service.sign_up(creds.email, creds.password)

        # Store Metadata in PostgreSQL
        user = User(id=user_id, email=creds.email)
        db.add(user)
        db.commit()

        return {"success": True, "id": user_id}
    
    def get_user(self, db: Session = Depends(db.get_db), token: str = Header(...)):
        # Verify Supabase Auth Token
        response = self.supabase_service.get_user(token)
        if "error" in response:
            raise HTTPException(status_code=401, detail="Unauthorized")

        user_id = response.user.id

        # Fetch user from PostgreSQL
        statement = select(User).where(User.id == user_id)
        user = db.exec(statement).first()

        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        return {"id": user.id, "email": user.email}


supabase_service = SupabaseService(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
user = UserService(supabase_service)
