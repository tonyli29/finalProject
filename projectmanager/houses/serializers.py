from rest_framework import serializers
from .models import House, HouseImages

class HouseSerializer(serializers.ModelSerializer):
    images = serializers.StringRelatedField(many=True)
    class Meta:
        model = House
        fields = ('id' ,'img', 'price', 'address', 'description', 'bedrooms', 'bathrooms', 'property_type', 'neighborhood', 'sqft', 'year_built', 'number_of_stories', 'basement', 'images')


class HouseImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseImages
        fields = ('id', 'images', 'house')