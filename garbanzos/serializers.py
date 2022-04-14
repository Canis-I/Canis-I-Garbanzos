from .models import Users
from rest_framework_mongoengine import serializers


class UserSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Users
        fields = '__all__'
