from rest_framework import  viewsets
from .serializers import CustomerDetailSerializer,TemplateHistorySerializer,MasterTemplateSerializer
from .models import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
import requests
from django.conf import settings
from .factories.whatsapp_message_factory import WhatsAppMessageFactory
from .service.message_send import WAMessageSender
from celery import shared_task
from .tasks import send_whatsapp_message_task
class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class=CustomerDetailSerializer
    queryset=CustomerDetail.objects.all()

    
    
    @action(methods=["GET"], detail=False)
    def list_users(self, request):
        users_list=self.get_queryset()
        serializer=self.get_serializer(users_list,many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class WhatsappViewSet(viewsets.ModelViewSet):
#     serializer_class=CustomerDetailSerializer
#     queryset=CustomerDetail.objects.all()


#     @action(methods=['POST'],detail=False)
#     def send_whatsapp_message(self,request):
#         user_ids = request.data.get('users', [])
#         template_slug = request.data.get('template_slug')
#         company_id = request.data.get('company_id')
#         additional_data = request.data.get('additional_data', {})

#         template = TemplateHistory.objects.get(slug=template_slug,company=company_id)
#         company = Company.objects.get(id=company_id)

#         access_token = settings.WHATSAPP_ACCESS_TOKEN
#         api_endpoint = settings.WHATSAPP_API_ENDPOINT



#         headers = {
#             'Authorization': f'Bearer {access_token}',
#             'Content-Type': 'application/json'
#         }

#         for user_id in user_ids:
#             customer_detail = CustomerDetail.objects.get(id=user_id)
#             recipient_name = customer_detail.name
#             recipient_mobile_no = customer_detail.mobile_no
#             message_instance = WhatsAppMessageFactory.create_message(template_slug, recipient_name, recipient_mobile_no, **additional_data)
#             payload = message_instance.generate_payload(template.content)


#             response = requests.post(api_endpoint, headers=headers, json=payload)
              
#         return Response({'message': 'WhatsApp messages sent successfully'}, status=status.HTTP_200_OK)
            

class WhatsappViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerDetailSerializer
    queryset = CustomerDetail.objects.all()

    @action(methods=['POST'], detail=False)
    def send_whatsapp_message(self, request):
        user_details = request.data.get('users', [])
        template_slug = request.data.get('template_slug')
        template_name = request.data.get('template_name')
        company_id = request.data.get('company_id')
        header_vars = request.data.get('header_vars',[])
        body_vars = request.data.get('body_vars', [])

        company = Company.objects.get(id=company_id)

        for user in user_details:
            recipient_name = user.get('name')
            recipient_mobile_no = user.get('phone_number')
            
            


            # message_sender = WAMessageSender(
            #     company=company_id,
            #     send_to=recipient_mobile_no,
            #     template_name=template_name,
            #     header_vars=header_vars,
            #     body_vars=body_vars,
            #     recipient_name=recipient_name
            # )
            # message_sender.send_message()
           
            try:
                send_whatsapp_message_task.delay(
                    company_id=company_id,
                    recipient_mobile_no=recipient_mobile_no,
                    template_name=template_name,
                    header_vars=header_vars,
                    body_vars=body_vars,
                    recipient_name=recipient_name
                )
            except:
                print("failll----=")

        return Response({'message': 'WhatsApp messages sent successfully'}, status=status.HTTP_200_OK)
        

class TemplateViewSet(viewsets.ModelViewSet):
    serializer_class=TemplateHistorySerializer
    queryset=TemplateHistory.objects.all()

    @action(methods=["GET"], detail=False)
    def list_templates(self, request):
        template_list=MasterTemplate.objects.all()
        serializer=MasterTemplateSerializer(template_list,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    @action(methods=['post'],detail=False)
    def save_template(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






