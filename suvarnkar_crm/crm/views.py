from django.shortcuts import render,redirect
from .forms import CustomerDetailForm
from .models import CustomerDetail
from django.http import JsonResponse
# Create your views here.
def home(request):
    return render(request, 'index.html')

def create_customer(request):
    if request.method == 'POST':
        form = CustomerDetailForm(request.POST)
        if form.is_valid():  
            form.save()
            print(form.cleaned_data)
            return redirect('crm:success_url')  
    else:
        form = CustomerDetailForm()
    return render(request,'customer/create_customer.html',{'form':form})

def success_url(request):
    return render(request,'customer/success.html')

def templates_url(request):
    if request.method == 'POST':
        redirect_url = '/templates/'  # Replace this with your actual redirect URL
        return JsonResponse({'redirect_url': redirect_url})
    
    return render(request,'messaging/templates.html')

def customer_listing(request):
    if request.method == 'POST':
        redirect_url = '/templates/'  # Replace this with your actual redirect URL
        return JsonResponse({'redirect_url': redirect_url})
    customer_details=CustomerDetail.objects.all()
    print(customer_details)
    return render(request,'messaging/customer-listing.html',{'customer_details':customer_details})