from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
# Create your models here.
class CustomerDetail(models.Model):
    lead_type_choices = (
        ('walk_in', 'Walk in'),
        ('reference', 'Reference'),
        ('social_media', 'Social Media'),
        ('google', 'Google'),
    )
    customer_type_choices = (
        ('diamond', 'Diamond'),
        ('gold', 'Gold'),
        ('silver', 'Silver'),
    )

    lead_type=models.CharField(max_length=20, choices=lead_type_choices)
    customer_type=models.CharField(max_length=20, choices=customer_type_choices)
    birthday_date=models.DateField()
    anniversary_date=models.DateField()
    state=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=15)
    name=models.CharField(max_length=20)
    email=models.EmailField(max_length=254)
    lead_assigned_to=models.CharField(max_length=20)
    
    def __str__(self):
        return self.name
    

# class CustomerDetail(models.Model):
#     name = models.CharField(max_length=100)
#     mobile_no = models.CharField(max_length=15)

class Company(models.Model):
    name = models.CharField(max_length=100)


class MasterTemplate(models.Model):
    slug=models.CharField(max_length=50)
    header_content=models.TextField()
    content=models.TextField()
    template_name=models.CharField(max_length=50)

    def __str__(self):
        return self.template_name

class TemplateHistory(models.Model):
    slug = models.CharField(max_length=50)
    content = models.TextField()
    template_name=models.CharField(max_length=50)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='templates')


    def clean(self):
        if self.company_id and not Company.objects.filter(id=self.company_id).exists():
            raise ValidationError(_('Invalid company ID.'))


class MessageHistory(models.Model):
    customer = models.ForeignKey(CustomerDetail, on_delete=models.CASCADE)
    template = models.ForeignKey(TemplateHistory, on_delete=models.CASCADE)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    sent_at = models.DateTimeField(auto_now_add=True)


class WAMessage(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    payload = models.JSONField()  # Assuming payload is a JSON object
    recipient_name = models.CharField(max_length=255)
    message_to = models.CharField(max_length=255)
    template_name = models.CharField(max_length=255)
    response = models.JSONField()  # Assuming response is a JSON object
    created_at = models.DateTimeField(auto_now_add=True)     

