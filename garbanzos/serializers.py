from rest_framework.serializers import ModelSerializer

from .models import Users, Products


class UserSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'
