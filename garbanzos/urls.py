from django.urls import path, re_path
from . import views, controllers


urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login_view),
    path('logout', views.logout_view),
    path('register', views.register),
    re_path(r'^garbanzos_(.*)$', views.router, name='garbanzos'),
    path(r'products', controllers.get_products),
    path(r'product', controllers.get_product),
    path(r'carousel', controllers.carousel_config),
    path(r'categories', controllers.get_categories),
    path('buy/<int:product_id>/<int:amount>/', views.process_payment, name='payment'),
    path('buy/completed/<int:product_id>/<int:amount>/', views.payment_done, name='payment_done'),
    path('buy/canceled/', views.payment_cancelled, name='payment_cancelled'),
]


