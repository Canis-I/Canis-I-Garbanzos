from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path(r'user/create', views.create_user)
]
