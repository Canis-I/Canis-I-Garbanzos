from django.contrib import admin
from .models import *


# Register your models here.
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['title', 'brand', 'stock']
    list_editable = ['stock']


admin.site.register(Products, ProductsAdmin)
admin.site.register(ProductImages)

admin.site.register(Category)
admin.site.register(Color)
admin.site.register(Brand)


class CarouselManager(admin.ModelAdmin):
    list_display = ['title', 'active']
    list_editable = ['active']


admin.site.register(Carousel, CarouselManager)


class BillManager(admin.ModelAdmin):
    list_display = ['product', 'user', 'amount']


admin.site.register(Bill, BillManager)
