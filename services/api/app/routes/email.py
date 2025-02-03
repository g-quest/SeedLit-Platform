from typing import Any

from fastapi import APIRouter, Body
from app.utils.klaviyo import klaviyo

router = APIRouter()


@router.post("/list/{id}")
def add_email_to_list(id: str, email: str = Body()) -> Any:
    return klaviyo.add_email_to_list(email, id)

