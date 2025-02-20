import os
from supabase import create_client, Client
from fastapi import Depends, HTTPException, Body, Header
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from sqlmodel import Session, select
from app.core import db
from app.models.user import User
import logging
import json

# 🔹 Supabase Setup
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
        # print(f"Supabase Response: {response}")

        if hasattr(response, "error") and response.error:
            raise HTTPException(status_code=400, detail=f"Signup failed: {response.error.message}")

        # ✅ Ensure we actually got a user ID back
        if not response.user or not response.user.id:
            raise HTTPException(status_code=400, detail="Signup failed: No user ID returned")

        return response.user.id

    def get_user(self, token: str):
        response = self.client.auth.get_user(token)
        
        if response.user:
            return response.user.id
        else:
            raise HTTPException(status_code=401, detail="Unauthorized")


class UserService:
    def __init__(self, supabase_service: SupabaseService):
        self.supabase_service = supabase_service

    def signup(self, db: Session = Depends(db.get_db), creds: SignupBody = Body(...)):
        try:
            # ✅ Ensure Supabase signup succeeds
            user_id = self.supabase_service.sign_up(creds.email, creds.password)
            

            if not user_id:
                return JSONResponse(status_code=400, content={"detail": "User ID was not returned from Supabase"})

            # ✅ Prevent duplicate user creation
            existing_user = db.exec(select(User).where(User.id == user_id)).first()
            if existing_user:
                return JSONResponse(status_code=400, content={"detail": "User already exists in database"})

            # ✅ Store Metadata in PostgreSQL
            user = User(id=user_id, email=creds.email)
            db.add(user)
            db.commit()
            db.refresh(user)  

            # 🔹 Debug: Print response before returning
            response_data = {"success": True, "id": str(user.id)}
            logging.debug(f"✅ Final Response Data: {json.dumps(response_data, indent=2)}")

            return JSONResponse(status_code=200, content=response_data)

        except HTTPException as e:
            db.rollback()  # ✅ Ensure no partial commits
            raise e  # Re-raise HTTPException properly

        except Exception as e:
            db.rollback()  
            raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

    def get_user(self, db: Session = Depends(db.get_db), token: str = Header(...)):
        try:
            user_id = self.supabase_service.get_user(token)

            # Fetch user from PostgreSQL
            statement = select(User).where(User.id == user_id)
            user = db.exec(statement).first()

            if not user:
                raise HTTPException(status_code=404, detail="User not found")

            return {"id": user.id, "email": user.email}

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Error retrieving user: {str(e)}")


# ✅ Initialize Supabase & User Services
supabase_service = SupabaseService(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
user = UserService(supabase_service)