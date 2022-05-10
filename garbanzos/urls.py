from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    re_path(r'^garbanzos_(.*)$', views.router, name='garbanzos'),
    path(r'user/create', views.create_user),
    path(r'product', views.get_products),
]
