from django.shortcuts import render

from .models import Products, Carousel


# Create your views here.
def index(request):
    return render(request, "webpack.html")


def router(request, position):
    print(position)
    return render(request, "webpack.html")
