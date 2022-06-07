from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from bson import ObjectId
from .models import Products, Carousel
from django.http import JsonResponse


@api_view(['GET'])
def get_products(request):
    products = Products.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse({'products': serializer.data})


@api_view(['GET'])
def get_product(request):
    var = request.GET["id"]
    products = Products.objects.get(pk=var)
    serializer = ProductSerializer(products)
    return JsonResponse({'product': serializer.data})


@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return JsonResponse({'categories': serializer.data})


@api_view(['GET'])
def carousel_config(request):
    images = Carousel.objects.all()
    serializer = CarouselSerializer(images, many=True)
    return JsonResponse({'images': serializer.data})
