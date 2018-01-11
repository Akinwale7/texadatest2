from django.db import models

# Create your models here.
class Product(models.Model):
    description = models.CharField(max_length=50)
    datetime = models.DateTimeField()
    longitude = models.CharField(max_length=20)
    latitude = models.CharField(max_length=20)
    elevation = models.CharField(max_length=10)


    def __str__(self):
        return self.description
