from django.db import models


class House(models.Model):
    img = models.CharField(max_length=300, default="no image")
    price = models.IntegerField()
    address = models.CharField(max_length=200)
    description = models.TextField(max_length=500)
    bedrooms = models.IntegerField(default=0)
    bathrooms = models.IntegerField(default=0)
    property_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100, default='Toronto')
    neighborhood = models.CharField(max_length=100, default='Toronto')
    property_type = models.CharField(max_length=100, default='Toronto')
    sqft = models.IntegerField(default=0)
    year_built = models.IntegerField(default=0)
    number_of_stories = models.IntegerField(default=0)
    basement = models.BooleanField()

    