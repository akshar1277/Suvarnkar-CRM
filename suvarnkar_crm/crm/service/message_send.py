import requests
from typing import List, Dict, Union
from django.conf import settings
from requests.models import Response
from crm.models import MasterTemplate,WAMessage,Company
# from your_app.models import WAMessage, WACredit

from celery import shared_task


class WAMessageSender:
    WHATSAPP_TOKEN = settings.WHATSAPP_ACCESS_TOKEN
    GRAPH_API_URL = settings.WHATSAPP_API_ENDPOINT

    def __init__(self, company: int, send_to: str, template_name: str, header_vars: List[str], body_vars: List[str], recipient_name: str, language: str = 'en') -> None:
        self.company = company
        self.send_to = send_to
        self.template_name = template_name
        self.language = language
        self.header_vars = header_vars
        self.body_vars = body_vars
        self.recipient_name = recipient_name
        # self.credit = None

    def _make_text_parameters(self, parameters: List[str], param_type: str) -> Dict:
        param_json = {'type': param_type, 'parameters': []}
       
        template = MasterTemplate.objects.get(template_name=self.template_name)
        
        # if(param_type=="body"):
            
        #     template_content = template.content
            
        #     if '{{customer_name}}' in template_content:
        #        param_json['parameters'].insert(0, { "type": "text",
        #         "text": self.recipient_name})
        # if(param_type=="header"):
           
        #     template_content = template.header_content
            
        #     if '{{customer_name}}' in template_content:
        #        param_json['parameters'].insert(0, { "type": "text",
        #         "text": self.recipient_name})   

        for  value in parameters:
            if(value=="customer_name"):
                param_json['parameters'].append({
                "type": "text",
                "text": self.recipient_name
            })
            else:
                param_json['parameters'].append({
                    "type": "text",
                    "text": value
                })

        return param_json

    def _make_request_payload(self) -> Dict:
        payload = {
            'messaging_product': 'whatsapp',
            'to': f'91{self.send_to}',
            'type': 'template',
            'template': {
                'name': self.template_name,
                'language': {
                    'code': self.language,
                    'policy': 'deterministic'
                }
            }
        }

        components = []

        if self.header_vars:
            print("helooooooo==============")
            components.append(self._make_text_parameters(self.header_vars, 'header'))
        if self.body_vars:
            # Add recipient name to body params if it is in the template
            # if '{{customer_name}}' in self.body_vars:
            #     self.body_vars['customer_name'] = self.recipient_name
         
            components.append(self._make_text_parameters(self.body_vars, 'body'))

        payload['template']['components'] = components
        print("payload======",payload)
        return payload

    def _make_header(self) -> Dict:
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {self.WHATSAPP_TOKEN}'
        }
        return headers

    def _make_request(self) -> Response:
        payload=self._make_request_payload()
        response = requests.post(
            self.GRAPH_API_URL, 
            headers=self._make_header(), 
            json=payload
        )
        self._save_message(payload,response)
        return response

    def _save_message(self,payload, response: Response) -> None:
        print("heloo=======")
        company_obj=Company.objects.get(id=self.company)
        WAMessage.objects.create(
            company=company_obj,
            payload=payload,
            recipient_name=self.recipient_name,
            message_to=self.send_to,
            template_name=self.template_name,
            response=response.json()
        )

    # def _check_credit(self) -> None:
    #     try:
    #         credit = WACredit.objects.get(company=self.company, is_active=True)
    #         self.credit = credit
    #         if credit.message_credit <= 0:
    #             raise Exception("Insufficient message credits")
    #     except WACredit.DoesNotExist:
    #         raise Exception("No active message credit found for the company")

    # def _deduct_credit(self, response: Response) -> None:
    #     if response.status_code == 200:
    #         self.credit.message_credit -= 1
            # self.credit.save()
  
    def send_message(self) -> None:
        # self._check_credit()
        response = self._make_request()
        print("response statusss=======",response.status_code)
        print("response=======",response.content)
      
        # self._save_message(response)
        # self._deduct_credit(response)
