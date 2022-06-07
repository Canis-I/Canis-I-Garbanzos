from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from paypal.standard.forms import PayPalPaymentsForm

from .models import Products, Bill


# Create your views here.
def index(request):
    return render(request, "webpack.html")


def login_view(request):
    if request.user.is_authenticated:
        return redirect("/")

    if request.method == 'POST':
        username = request.POST["usr"]
        password = request.POST["passwd"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("/")

    return render(request, "registration/login.html")


def logout_view(request):
    logout(request)

    return redirect("/")


def register(request):
    if request.method == 'POST':
        usr = request.POST["usr"]
        passwd = request.POST["passwd"]
        email = request.POST["email"]

        user = User.objects.create_user(username=usr, email=email, password=passwd)

        if user is not None:
            login(request, user)
            return redirect("/")

    return render(request, "registration/register.html")


def router(request, position):
    print(position)
    return render(request, "webpack.html")


@csrf_exempt
def payment_done(request, product_id, amount):
    Bill.objects.create(user=request.user, amount=amount, product_id=product_id)

    return redirect("/")


def payment_cancelled(request):
    return redirect("/")


def process_payment(request, product_id, amount):
    if not request.user.is_authenticated:
        return redirect("/login")

    order = Products.objects.get(id=product_id)
    host = request.get_host()

    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '%.2f' % (order.price * amount),
        'item_name': 'Order {}'.format(order.id),
        'invoice': str(order.id),
        'currency_code': 'USD',
        'notify_url': 'http://{}{}'.format(host,
                                           reverse('paypal-ipn')),
        'return_url': 'http://{}{}'.format(host,
                                           reverse('payment_done',
                                                   kwargs={"product_id": product_id, "amount": amount})),
        'cancel_return': 'http://{}{}'.format(host,
                                              reverse('payment_cancelled')),
    }

    form = PayPalPaymentsForm(initial=paypal_dict)
    return render(request, 'payment/process_payment.html', {'order': order, 'form': form})
