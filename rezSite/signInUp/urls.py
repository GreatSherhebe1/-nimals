from django.conf import settings
from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import *


urlpatterns = [
    path(r'In/', sign_in, name='signIn'),
    path(r'Up/', sign_up),
    path('logout', LogoutView.as_view(next_page=settings.LOGOUT_REDIRECT_URL),name = 'logout'),
    path('check', authcheck),
]
