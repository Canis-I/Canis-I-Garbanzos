from django.shortcuts import render

from .models import Users, Products, Carousel


# Create your views here.
def index(request):
    var = Users.objects.all()
    return render(request, "index.html", {'data': var})


def router(request, position):
    print(position)
    var = Users.objects.all()
    return render(request, "index.html", {'data': var})
