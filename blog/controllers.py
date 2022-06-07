from django.http import JsonResponse
from rest_framework.decorators import api_view

from .serializers import *


@api_view(['GET'])
def get_blog(request):
    products = BlogEntry.objects.all()
    serializer = BlogSerializer(products, many=True)
    return JsonResponse({'histories': serializer.data})
