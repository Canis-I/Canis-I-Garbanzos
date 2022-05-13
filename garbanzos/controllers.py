from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from bson import ObjectId
from .models import Users, Products, Carousel
from django.http import JsonResponse


@api_view(['POST', 'GET'])
def create_user(request):
    if request.method == 'POST':
        user = Users()
        user.name = "Ruben"
        user.lastname = "Regalado"
        user.bills = [{"count": 5, "_id": ObjectId()}]
        user.shadow = "passwd"
        user.address = [{"path": "Lotificacion loma linda", "_id": ObjectId()}]
        user.save()

        return Response(user.__str__())
    else:
        user = Users.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)


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
def carousel_config(request):
    images = Carousel.objects.filter(active=True).values()
    print(images)
    serializer = CarouselSerializer(images, many=True)
    return JsonResponse({'images': serializer.data})
