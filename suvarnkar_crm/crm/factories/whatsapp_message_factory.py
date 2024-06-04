# your_app/factories/whatsapp_message_factory.py

import requests
from django.conf import settings

class WhatsAppMessageFactory:
    @staticmethod
    def create_message(template_slug, recipient_name, recipient_mobile_no, **kwargs):
        if template_slug == 'marketing':
            return MarketingMessage(recipient_name, recipient_mobile_no, **kwargs)
        elif template_slug == 'birthday_wish':
            return BirthdayWishMessage(recipient_name, recipient_mobile_no, **kwargs)
        elif template_slug == 'anniversary':
            return AnniversaryMessage(recipient_name, recipient_mobile_no, **kwargs)
        else:
            raise ValueError("Unknown template slug")

class WhatsAppMessage:
    def __init__(self, recipient_name, recipient_mobile_no, **kwargs):
        self.recipient_name = recipient_name
        self.recipient_mobile_no = recipient_mobile_no
        self.variables = kwargs

    def generate_payload(self, template_content):
        # Replace placeholders in the template with actual values
        message_content = template_content.replace("{{name}}", self.recipient_name)
        for key, value in self.variables.items():
            message_content = message_content.replace(f"{{{{{key}}}}}", value)

        payload = {
            "messaging_product": "whatsapp",
            "to": f"91{self.recipient_mobile_no}",
            "type": "template",
            "template": {
                "name": message_content,
                "language": {
                    "code": "en_US"
                }
            }
        }
        return payload

class MarketingMessage(WhatsAppMessage):
    pass

class BirthdayWishMessage(WhatsAppMessage):
    pass

class AnniversaryMessage(WhatsAppMessage):
    pass
