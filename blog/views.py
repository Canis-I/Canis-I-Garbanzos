from django.shortcuts import render
from .models import BlogEntry


# Create your views here.
def index(request):
    return render(request, "webpack.html", {'blog': True})
