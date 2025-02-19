from app.models.base import Base
from sqlmodel import Field
from typing import Optional
from uuid import UUID
from datetime import datetime
from enum import Enum

class UserStatus(str, Enum):
    ACTIVE = "active"
    DISABLED = "disabled"
    BANNED = "banned"

class User(Base, table=True):
    id: UUID = Field(default=None, primary_key=True)  # Matches Supabase Auth ID
    email: str = Field(unique=True, nullable=False)
    username: Optional[str] = Field(unique=True)

    first_name: Optional[str] = Field(default=None)
    last_name: Optional[str] = Field(default=None)
    avatar_url: Optional[str] = Field(default=None)
    bio: Optional[str] = Field(default=None)
    date_of_birth: Optional[datetime] = Field(default=None)

    is_parent: Optional[bool] = Field(default=None)
    relationship: Optional[str] = Field(default=None)

    is_verified: Optional[bool] = Field(default=None)
    account_status: UserStatus = Field(default=UserStatus.ACTIVE)
    last_login: Optional[datetime] = Field(default=None)