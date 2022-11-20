from django.urls import path
from .views import *

urlpatterns = [
    path(r'signIn/', sign_in),
    path(r'signUp/', sign_up),
]
