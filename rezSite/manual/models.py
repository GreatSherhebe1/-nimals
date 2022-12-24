from django.db import models


class Manual(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    photo = models.ImageField(upload_to="static/pictures/")
