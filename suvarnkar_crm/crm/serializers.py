from rest_framework import serializers
from .models import CustomerDetail,TemplateHistory,MasterTemplate


class CustomerDetailSerializer(serializers.ModelSerializer):
    


    class Meta:
        model=CustomerDetail
        fields = '__all__'


class MasterTemplateSerializer(serializers.ModelSerializer):

    class Meta:
        model=MasterTemplate
        fields='__all__'
        
class TemplateHistorySerializer(serializers.ModelSerializer):

    class Meta:
        model=TemplateHistory
        fields='__all__'