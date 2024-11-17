from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "SeedLit API"
    DOCS_URL: str = ""
    DATABASE_URL: str = ""

    OPENAI_API_KEY: str = ""
    EXA_API_KEY: str = ""

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()
