from django.shortcuts import render
from .models import BlogEntry


# Create your views here.
def index(request):
    var = BlogEntry.objects.all()
    return render(request, "index.html", {'data': var})
