from django.db import models


class MapRoute(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Point(models.Model):
    x = models.FloatField()
    y = models.FloatField()
    routeId = models.ForeignKey(MapRoute, on_delete=models.CASCADE)
    is_street_cross = models.BooleanField()
    name = models.CharField(max_length=50, null=True, default=None, blank=True)
    description = models.CharField(max_length=250, null=True, default=None, blank=True)
    picture = models.ImageField(upload_to="static/pictures/", null=True, default=None, blank=True)

    def __str__(self):
        return self.name
