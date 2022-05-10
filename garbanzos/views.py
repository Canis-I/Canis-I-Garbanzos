from bson import ObjectId

from django.shortcuts import render

from .serializers import UserSerializer, ProductSerializer
from .models import Users, Products
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.http import JsonResponse


# Create your views here.
def index(request):
    var = Users.objects.all()
    return render(request, "index.html", {'data': var})


def router(request, position):
    print(position)
    var = Users.objects.all()
    return render(request, "index.html", {'data': var})


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
