from .models import House, HouseImages
from rest_framework import viewsets, permissions
from .serializers import HouseSerializer, HouseImagesSerializer
from django_filters import rest_framework as filters


class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    filterset_fields = ('neighborhood', 'bedrooms', 'bathrooms', 'property_type', 'user')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HouseSerializer

class HouseEditViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = HouseSerializer

class HouseImagesViewSet(viewsets.ModelViewSet):
    queryset = HouseImages.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HouseImagesSerializer
