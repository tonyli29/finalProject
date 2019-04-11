from django.db import models


class House(models.Model):
    img = models.CharField(max_length=300, default="no image")
    price = models.IntegerField()
    address = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    created_ad = models.DateTimeField(auto_now_add=True)
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    parking = models.BooleanField()