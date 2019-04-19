from rest_framework import routers
from .api import HouseViewSet, HouseImagesViewSet

router = routers.DefaultRouter()
router.register("api/houses", HouseViewSet, "houses")
router.register("api/housesimages", HouseImagesViewSet, "images")
# router.register("api/create", HouseCreateView)

urlpatterns = router.urls
