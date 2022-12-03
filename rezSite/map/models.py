from django.db import models


class MapRoute(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)


class Point(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    routeId = models.ForeignKey(MapRoute, on_delete=models.CASCADE)
