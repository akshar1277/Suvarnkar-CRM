from django.contrib import admin

from crm import views,viewsets
from django.urls import path, include, re_path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'^api/v1/customerviewset', viewsets.CustomerViewSet, basename='customers')
router.register(r'^api/v1/whatsappviewset', viewsets.WhatsappViewSet, basename='whatapp-view')
router.register(r'^api/v1/templateviewset', viewsets.TemplateViewSet, basename='template-view')



def trigger_error(request):
    division_by_zero = 1 / 0


urlpatterns = [
    
    path('crm/',include('crm.urls')),
    path('sentry-debug/', trigger_error),
    path('admin/', admin.site.urls),
]

urlpatterns += router.urls