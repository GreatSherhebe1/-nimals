from django.urls import path
from .views import *

urlpatterns = [
    path(r'', manual),
    path(r'', to_map)
]
