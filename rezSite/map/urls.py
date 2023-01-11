from django.urls import path
from .views import *
from rest_framework import routers
from .api import PointViewSet, MapRouteViewSet

router = routers.DefaultRouter()
router.register('api/point', PointViewSet, 'point')
router.register('api/maproute', MapRouteViewSet, 'maproute')
urlpatterns = [
    path(r'', show_map, name='map'),
]
urlpatterns += router.urls

