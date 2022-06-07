from rest_framework.serializers import ModelSerializer, StringRelatedField
from .models import *


class ImageSerializer(ModelSerializer):
    class Meta:
        model = ProductImages
        fields = ('image',)


class ProductSerializer(ModelSerializer):
    category = StringRelatedField(
        many=False
    )

    other_images = ImageSerializer(many=True)

    class Meta:
        model = Products
        fields = '__all__'


class CarouselSerializer(ModelSerializer):
    class Meta:
        model = Carousel
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ('title', 'id',)
