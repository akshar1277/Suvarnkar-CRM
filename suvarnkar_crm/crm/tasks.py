from celery import shared_task
from .models import Company
from .service.message_send import WAMessageSender


@shared_task
def send_whatsapp_message_task(company_id, recipient_mobile_no, template_name, header_vars, body_vars, recipient_name):
   

    message_sender = WAMessageSender(
        company=company_id,
        send_to=recipient_mobile_no,
        template_name=template_name,
        header_vars=header_vars,
        body_vars=body_vars,
        recipient_name=recipient_name
    )
   
    message_sender.send_message()
 

@shared_task
def add(x, y):
    return x + y