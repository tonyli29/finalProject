from django.contrib import admin
from .models import House, HouseImages

# Register your models here.

# class HouseImageInline(admin.TabularInline):
#     model = HouseImages
#     extra = 5

# class HouseAdmin(admin.ModelAdmin):
#     inlines = [ HouseImageInline, ]

admin.site.register(House)
admin.site.register(HouseImages)