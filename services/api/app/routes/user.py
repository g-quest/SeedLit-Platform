from fastapi import APIRouter, Depends, Body, Header, HTTPException
from sqlmodel import Session
from app.core import db
from pydantic import BaseModel
from app.utils.user import user

router = APIRouter()

class AuthBody(BaseModel):
    email: str
    password: str

@router.post("/signup")
async def signup(db: Session = Depends(db.get_db), creds: AuthBody = Body(...)):
    return user.signup(db, creds)

@router.post("/signin")
async def signin(db: Session = Depends(db.get_db), creds: AuthBody = Body(...)):
    return user.signin(db, creds)

# @router.get("/")
# async def get_user(db: Session = Depends(db.get_db), token: str = Header(...)):
#     return user.get_user(db, token)

@router.get("/")
async def get_user(
    db: Session = Depends(db.get_db), 
    authorization: str = Header(None)  # 🔹 Read "Authorization" header
):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=400, detail="Missing or invalid Authorization header")

    token = authorization.replace("Bearer ", "")  # 🔹 Remove "Bearer " prefix
    return user.get_user(db, token)