import json

from django.shortcuts import render

from .serializers import UserSerializer
from .models import Users
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
def index(request):
    return render(request, "index.html", {'data': Users.objects})


@api_view(['POST', 'GET'])
def create_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status': 'ok'})

        return serializer.errors
    else:
        user = Users.objects.all()
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)
