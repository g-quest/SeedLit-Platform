from fastapi import APIRouter, Depends, Body, Header
from sqlmodel import Session
from app.core import db
from pydantic import BaseModel
from app.utils.user import user

router = APIRouter()

class SignupBody(BaseModel):
    email: str  
    password: str

@router.post("/signup")
async def signup(db: Session = Depends(db.get_db), creds: SignupBody = Body(...)):
    return user.signup(db, creds)

@router.get("/")
async def get_user(db: Session = Depends(db.get_db), token: str = Header(...)):
    return user.get_user(db, token)