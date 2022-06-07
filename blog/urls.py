from django.urls import path, re_path
from . import views, controllers


urlpatterns = [
    path('blog', views.index),
    path(r'blog/entries', controllers.get_blog, name='index'),
    path('blog/entry', views.index, name='index'),
]
