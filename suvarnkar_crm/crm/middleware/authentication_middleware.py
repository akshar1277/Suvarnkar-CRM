import requests
from django.conf import settings
from django.shortcuts import redirect, render

class AuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
       
        token = request.session.get('token')

     
        if not token:
            token = request.GET.get('token')

        
        if token:
            verification_url = f"{settings.SUVARNAKAR_URL}/verify-token"
            response = requests.post(verification_url, json={'token': token})

            if response.status_code == 200:
                # Token is valid, store it in the session
                request.session['token'] = token

                # Retrieve user details and customer data from the response
                data = response.json()
                user_details = data.get('user_details')
                customer_data = data.get('customer_data')

                # Store user details and customer data in the request object for use in views
                request.user_details = user_details
                request.customer_data = customer_data

            else:
                # Token is not valid, redirect to 404 page
                return render(request, '404.html')

        response = self.get_response(request)
        return response
