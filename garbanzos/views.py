from bson import ObjectId

from django.shortcuts import render

from .serializers import UserSerializer
from .models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
def index(request):
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
