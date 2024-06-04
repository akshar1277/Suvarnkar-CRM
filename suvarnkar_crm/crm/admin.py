from django.contrib import admin
from .models import CustomerDetail,TemplateHistory,MessageHistory,MasterTemplate,Company,WAMessage

# Register your models here.
admin.site.register(CustomerDetail)
admin.site.register(TemplateHistory)
admin.site.register(MessageHistory)
admin.site.register(WAMessage)
admin.site.register(MasterTemplate)
admin.site.register(Company)

