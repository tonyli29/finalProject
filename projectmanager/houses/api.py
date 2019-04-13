from .models import House
from rest_framework import viewsets, permissions
from .serializers import HouseSerializer
from django_filters import rest_framework


class HouseViewSet(viewsets.ModelViewSet):
    queryset = House.objects.all()
    filterset_fields = ('city', 'bedrooms', 'bathrooms', 'property_type')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = HouseSerializer
