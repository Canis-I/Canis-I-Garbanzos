from django.urls import path, re_path
from . import views, controllers


urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^garbanzos_(.*)$', views.router, name='garbanzos'),
    path(r'products', controllers.get_products),
    path(r'product', controllers.get_product),
    path(r'carousel', controllers.carousel_config),
    path(r'categories', controllers.get_categories),
]
