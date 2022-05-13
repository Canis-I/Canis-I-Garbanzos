from django.urls import path, re_path
from . import views, controllers


urlpatterns = [
    path('', views.index, name='index'),
    # re_path(r'^garbanzos_(.*)$', views.router, name='garbanzos'),
]
