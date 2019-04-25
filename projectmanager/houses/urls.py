from rest_framework import routers
from .api import HouseViewSet, HouseImagesViewSet, HouseEditViewSet

router = routers.DefaultRouter()
router.register("api/houses", HouseViewSet, "houses")
router.register("api/edit", HouseEditViewSet, "houses")
router.register("api/housesimages", HouseImagesViewSet, "images")
# router.register("api/create", HouseCreateView)

urlpatterns = router.urls
