from django.db import models
from django.contrib.auth.models import User


class House(models.Model):
    img = models.CharField(max_length=100000, default="no image")
    price = models.IntegerField()
    address = models.CharField(max_length=200)
    description = models.TextField(max_length=1500)
    bedrooms = models.IntegerField(default=0)
    bathrooms = models.IntegerField(default=0)
    property_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100, default='Calgary')
    neighborhood = models.CharField(max_length=100, default='Parkdale')
    property_type = models.CharField(max_length=100, default='Detached')
    sqft = models.IntegerField(default=0)
    year_built = models.IntegerField(default=0)
    number_of_stories = models.IntegerField(default=0)
    basement = models.BooleanField()
    user = models.CharField(max_length=100, default="TonyLi")
    owner = models.ForeignKey(User, related_name="houses", on_delete=models.CASCADE, null=True)

class HouseImages(models.Model):
    house = models.ForeignKey(House, related_name='images', on_delete=models.CASCADE)
    images = models.TextField(max_length=100000, default="no image")

    def __str__(self):
        return self.images
    

      
