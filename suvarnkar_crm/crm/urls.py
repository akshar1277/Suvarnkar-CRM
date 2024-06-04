from django.contrib import admin

from . import views,viewsets
from django.urls import path, include, re_path
from rest_framework import routers



app_name = 'crm'

urlpatterns = [
   
    path('',views.home,name='home'),
    path('lead/',views.create_customer,name='create_customer'),
    path('success/',views.success_url,name='success_url'),
    path('templates/',views.templates_url,name='templates_url'),
    path('customer_list/',views.customer_listing,name='customer_listing'),

]


