from rest_framework import serializers
from .models import Point, MapRoute


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = '__all__'


class MapRouteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapRoute
        fields = '__all__'
