
from .models import Point,MapRoute
from rest_framework import viewsets, permissions
from .serializers import PointSerializer,MapRouteSerializer

class PointViewSet(viewsets.ModelViewSet):
    queryset = Point.objects.all()
    permission_classes = {
        permissions.AllowAny
    }
    serializer_class = PointSerializer

class MapRouteViewSet(viewsets.ModelViewSet):
    queryset = MapRoute.objects.all()
    permission_classes = {
        permissions.AllowAny
    }
    serializer_class = MapRouteSerializer
