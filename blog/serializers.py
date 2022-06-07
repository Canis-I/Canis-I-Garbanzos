from rest_framework.serializers import ModelSerializer
from .models import *


class BlogSerializer(ModelSerializer):
    class Meta:
        model = BlogEntry
        fields = '__all__'
