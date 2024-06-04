from django import forms
from .models import CustomerDetail
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Row, Column

class CustomerDetailForm(forms.ModelForm):
    class Meta:
        model = CustomerDetail
        # fields = ['lead_type','customer_type','birthday_date','anniversary_date','mobile_no','name','lead_assigned_to'] 
        fields="__all__"
        def __init__(self, *args, **kwargs):
            super(CustomerDetailForm, self).__init__(*args, **kwargs)
            self.helper = FormHelper()
            self.helper.form_method = 'post'
            self.helper.add_input(Submit('submit', 'Submit'))
        widgets = {
        'birthday_date': forms.TextInput(attrs={'type': 'date'}),
        'anniversary_date': forms.TextInput(attrs={'type': 'date'}),
    }
