import json

from datetime import datetime
from urllib.parse import urlparse, parse_qs

from klaviyo_api import KlaviyoAPI
from openapi_client.exceptions import ApiException

from app.core.config import settings

class KlaviyoException(Exception):
    def __init__(self, message, api_exception):
        super().__init__(message)
        body = json.loads(api_exception.body)
        self.errors = body.get("errors", [])

    @property
    def detail(self):
        details = [error.get("detail") for error in self.errors if error.get("detail")]
        return ",".join(details)

    def has_error_code(self, code):
        return any(error.get("code") == code for error in self.errors)


class Klaviyo:
    def __init__(self, api_key: str = None):
        self.api = KlaviyoAPI(
            api_key=api_key, max_delay=60, max_retries=3, test_host=None
        )

    def get_profile(self, email: str):
        filter = f'equals(email,"{email}")'

        try:
            res = self.api.Profiles.get_profiles(filter=filter, page_size=1)
        except ApiException as e:
            raise KlaviyoException("Failed to get profile.", e)

        return res.data[0] if res.data else None

    def create_profile(self, email: str):
        try:
            res = self.api.Profiles.create_profile(
                {
                    "data": {
                        "type": "profile",
                        "attributes": {
                            "email": email,
                        },
                    }
                }
            )
            return res.data
        except:
            return None

    # https://developers.klaviyo.com/en/reference/create_or_update_profile
    def create_or_update_profile(self, attributes: dict, profile_id: str = None):
        data = {
            "data": {
                "type": "profile",
                "attributes": attributes,
            },
        }

        if profile_id:
            data["data"]["id"] = profile_id

        try:
            res = self.api.Profiles.create_or_update_profile(data)
        except ApiException as e:
            raise KlaviyoException("Failed to create or update profile.", e)

        return res.data

    def get_lists(self, page_cursor: str = None):
        try:
            res = self.api.Lists.get_lists(page_cursor=page_cursor)

            lists_json = [
                {
                    "id": list.id,
                    "name": list.attributes.name,
                }
                for list in res.data
            ]

            # parse cursor from next link
            parsed = urlparse(res.links.next)
            page_cursor = parse_qs(parsed.query)["page[cursor]"][0]

            return {
                "lists": lists_json,
                "page_cursor": page_cursor,
            }
        except Exception as e:
            return None

    def get_list_by_id(self, id: str):
        try:
            res = self.api.Lists.get_list(id)
            return res.data
        except:
            return None

    def get_list_by_name(self, list_name: str):
        filter = f'equals(name,"{list_name}")'
        try:
            res = self.api.Lists.get_lists(filter=filter)
            return res["data"][0]
        except:
            return None

    def get_profile_lists(self, email: str):
        profile = self.get_profile(email)
        if not profile:
            return None

        try:
            res = self.api.Profiles.get_profile_lists(id=profile.id)
        except ApiException as e:
            raise KlaviyoException(f"Failed to get lists for profile.", e)

        return res.data

    def create_list(self, name: str):
        res = self.api.Lists.create_list(
            {
                "data": {
                    "type": "list",
                    "attributes": {
                        "name": name,
                    },
                }
            }
        )
        return res.data

    # https://developers.klaviyo.com/en/reference/subscribe_profiles
    def subscribe_to_list(
        self,
        list_id: str,
        email: str,
        historical_import: bool = False,
        consented_at: datetime = None,
    ):
        marketing = {
            "consent": "SUBSCRIBED",
        }

        if historical_import and consented_at:
            marketing["consented_at"] = consented_at.isoformat()

        subscriptions = {
            "email": {
                "marketing": marketing,
            },
        }

        profile_attributes = {
            "email": email,
            "subscriptions": subscriptions,
        }

        profile_data = {
            "data": [
                {
                    "type": "profile",
                    "attributes": profile_attributes,
                }
            ],
        }

        list_data = {
            "data": {
                "type": "list",
                "id": list_id,
            },
        }

        data_attributes = {
            "profiles": profile_data,
        }

        if historical_import and consented_at:
            data_attributes["historical_import"] = True

        data = {
            "data": {
                "type": "profile-subscription-bulk-create-job",
                "attributes": data_attributes,
                "relationships": {
                    "list": list_data,
                },
            },
        }

        try:
            return self.api.Profiles.subscribe_profiles(data)
        except Exception as e:
            raise KlaviyoException(f"Failed to subscribe to list.", e)

    def add_profile_to_list(self, profile_id: str, list_id: str):
        try:
            self.api.Lists.create_list_relationships(
                list_id,
                {"data": [{"type": "profile", "id": profile_id}]},
            )
            return True
        except:
            return False

    def add_email_to_list(self, email: str, list_id: str):
        try:
            profile = self.get_profile(email)
            if not profile:
                profile = self.create_profile(email)

            self.add_profile_to_list(profile.id, list_id)
            return True
        except:
            return False

    def add_properties_to_profile(self, email: str, properties: dict):
        try:
            profile = self.get_profile(email)
            id = profile.get("id")

            res = self.api.Profiles.update_profile(
                id,
                {
                    "data": {
                        "type": "profile",
                        "id": id,
                        "attributes": {
                            "properties": properties,
                        },
                    }
                },
            )
            return res["data"]
        except Exception as e:
            return None

    def is_email_in_list(self, email: str, list_name: str):
        lists = self.get_profile_lists(email=email)
        if not lists:
            return False

        for list in lists:
            if list["attributes"]["name"].lower() == list_name.lower():
                return True

        return False

    def update_list(
        self,
        list_id: str,
        name: str = None,
    ):
        res = self.api.Lists.update_list(
            list_id,
            {
                "data": {
                    "type": "list",
                    "id": list_id,
                    "attributes": {
                        "name": name,
                    },
                }
            },
        )
        return res.data


klaviyo = Klaviyo(settings.KLAVIYO_API_KEY)
