from django.db import models

class Manual(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=2000)
    photo = models.ImageField(upload_to="pictures/")